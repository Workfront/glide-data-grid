import type { DataGridSearchProps } from "../internal/data-grid-search/data-grid-search.js";
import { type GridCell, type GridSelection, type Rectangle } from "../internal/data-grid/data-grid-types.js";
import { getCopyBufferContents, type CopyBuffer } from "./copy-paste.js";

export function expandSelection(
    newVal: GridSelection,
    getCellsForSelection: DataGridSearchProps["getCellsForSelection"],
    rowMarkerOffset: number,
    spanRangeBehavior: "allowPartial" | "default",
    abortController: AbortController
): GridSelection {
    const origVal = newVal;
    if (spanRangeBehavior === "allowPartial" || newVal.current === undefined || getCellsForSelection === undefined)
        return newVal;
    let isFilled = false;
    do {
        if (newVal?.current === undefined) break;
        const r: Rectangle = newVal.current?.range;
        const cells: (readonly GridCell[])[] = [];
        if (r.width > 2) {
            const leftCells = getCellsForSelection(
                {
                    x: r.x,
                    y: r.y,
                    width: 1,
                    height: r.height,
                },
                abortController.signal
            );

            if (typeof leftCells === "function") {
                return origVal;
            }

            cells.push(...leftCells);

            const rightCells = getCellsForSelection(
                {
                    x: r.x + r.width - 1,
                    y: r.y,
                    width: 1,
                    height: r.height,
                },
                abortController.signal
            );

            if (typeof rightCells === "function") {
                return origVal;
            }

            cells.push(...rightCells);
        } else {
            const rCells = getCellsForSelection(
                {
                    x: r.x,
                    y: r.y,
                    width: r.width,
                    height: r.height,
                },
                abortController.signal
            );
            if (typeof rCells === "function") {
                return origVal;
            }
            cells.push(...rCells);
        }

        let left = r.x - rowMarkerOffset;
        let right = r.x + r.width - 1 - rowMarkerOffset;
        for (const row of cells) {
            for (const cell of row) {
                if (cell.span === undefined) continue;
                left = Math.min(cell.span[0], left);
                right = Math.max(cell.span[1], right);
            }
        }

        if (left === r.x - rowMarkerOffset && right === r.x + r.width - 1 - rowMarkerOffset) {
            isFilled = true;
        } else {
            newVal = {
                current: {
                    cell: newVal.current.cell ?? [0, 0],
                    range: {
                        x: left + rowMarkerOffset,
                        y: r.y,
                        width: right - left + 1,
                        height: r.height,
                    },
                    rangeStack: newVal.current.rangeStack,
                },
                columns: newVal.columns,
                rows: newVal.rows,
            };
        }
    } while (!isFilled);
    return newVal;
}

function descape(s: string): string {
    if (s.startsWith('"') && s.endsWith('"')) {
        s = s.slice(1, -1).replace(/""/g, '"');
    }
    return s;
}

export function unquote(str: string): CopyBuffer {
    const enum State {
        None,
        inString,
        inStringPostQuote,
    }

    const result: string[][] = [];
    let current: string[] = [];

    let start = 0;
    let state = State.None;
    str = str.replace(/\r\n/g, "\n");
    let index = 0;
    for (const char of str) {
        switch (state) {
            case State.None:
                if (char === "\t" || char === "\n") {
                    current.push(str.slice(start, index));
                    start = index + 1;

                    if (char === "\n") {
                        result.push(current);
                        current = [];
                    }
                } else if (char === `"`) {
                    state = State.inString;
                }
                break;
            case State.inString:
                if (char === `"`) {
                    state = State.inStringPostQuote;
                }
                break;
            case State.inStringPostQuote:
                if (char === '"') {
                    state = State.inString;
                } else if (char === "\t" || char === "\n") {
                    current.push(descape(str.slice(start, index)));
                    start = index + 1;

                    if (char === "\n") {
                        result.push(current);
                        current = [];
                    }
                    state = State.None;
                } else {
                    state = State.None;
                }
                break;
        }

        index++;
    }
    if (start < str.length) {
        current.push(descape(str.slice(start, str.length)));
    }
    result.push(current);
    return result.map(r => r.map(c => ({ rawValue: c, formatted: c, format: "string" })));
}

export function copyToClipboard(
    cells: readonly (readonly GridCell[])[],
    columnIndexes: readonly number[],
    e?: ClipboardEvent
) {
    const copyBuffer = getCopyBufferContents(cells, columnIndexes);

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const copyWithWriteText = (s: string) => {
        void window.navigator.clipboard?.writeText(s);
    };

    const copyWithWrite = (s: string, html: string): boolean => {
        if (window.navigator.clipboard?.write === undefined) return false;
        void window.navigator.clipboard.write([
            new ClipboardItem({
                // eslint-disable-next-line sonarjs/no-duplicate-string
                "text/plain": new Blob([s], { type: "text/plain" }),
                "text/html": new Blob([html], {
                    type: "text/html",
                }),
            }),
        ]);
        return true;
    };

    const copyWithClipboardData = (s: string, html: string) => {
        try {
            if (e === undefined || e.clipboardData === null) throw new Error("No clipboard data");

            // This might fail if we had to await the thunk
            e?.clipboardData?.setData("text/plain", s);
            e?.clipboardData?.setData("text/html", html);
        } catch {
            if (!copyWithWrite(s, html)) {
                copyWithWriteText(s);
            }
        }
    };

    if (window.navigator.clipboard?.write !== undefined || e?.clipboardData !== undefined) {
        void copyWithClipboardData(copyBuffer.textPlain, copyBuffer.textHtml);
    } else {
        void copyWithWriteText(copyBuffer.textPlain);
    }

    e?.preventDefault();
}

/**
 * Checkbox behavior:
 *
 * true + click -> unchecked
 * false + click -> checked
 * indeterminate + click -> checked
 * empty + click -> checked
 */
export function toggleBoolean(data: boolean | null | undefined): boolean | null | undefined {
    return data !== true;
}

/**
 * Computes the intrinsic `[width, height]` (as CSS px strings) for the grid's scrollable content,
 * used to size the container when the consumer doesn't pass an explicit `width`/`height`.
 */
export function computeIdealSize(
    rowHeight: number | ((row: number) => number),
    rows: number,
    showTrailingBlankRow: boolean,
    totalHeaderHeight: number,
    contentWidth: number,
    clientAreaWidth: number,
    clientAreaHeight: number,
    scrollbarWidth: number
): readonly [string, string] {
    let h: number;
    const rowsCountWithTrailingRow = rows + (showTrailingBlankRow ? 1 : 0);
    if (typeof rowHeight === "number") {
        h = totalHeaderHeight + rowsCountWithTrailingRow * rowHeight;
    } else {
        h = totalHeaderHeight;
        if (clientAreaHeight > 0) {
            // Sum exactly until the viewport is full (an undershoot here spuriously shows a
            // scrollbar); extrapolate the rest from the average to avoid an O(n) scan on huge datasets.
            const availableRowSpace = clientAreaHeight - totalHeaderHeight;
            // Keep summing past a viewport-filling overflow until we've sampled at least this many
            // rows, so the average used to extrapolate the rest isn't based on a single tall row.
            const minSamples = Math.min(rowsCountWithTrailingRow, 10);
            let summedHeight = 0;
            let rowsSummed = 0;
            while (rowsSummed < rowsCountWithTrailingRow) {
                const rh = rowHeight(rowsSummed);
                h += rh;
                summedHeight += rh;
                rowsSummed++;
                if (summedHeight > availableRowSpace && rowsSummed >= minSamples) {
                    break;
                }
            }
            const remainingRows = rowsCountWithTrailingRow - rowsSummed;
            if (remainingRows > 0) {
                h += (summedHeight / rowsSummed) * remainingRows;
            }
        } else {
            // Not yet measured (e.g. first render) — fall back to a bounded sample average
            // rather than summing every row.
            let avg = 0;
            const toAverage = Math.min(rowsCountWithTrailingRow, 10);
            for (let i = 0; i < toAverage; i++) {
                avg += rowHeight(i);
            }
            avg = toAverage > 0 ? Math.floor(avg / toAverage) : 0;
            h += rowsCountWithTrailingRow * avg;
        }
    }

    // Only reserve vertical room for a horizontal scrollbar when the content actually overflows
    // horizontally; reserving it unconditionally left dead space below the grid when it didn't.
    if (clientAreaWidth > 0 && contentWidth > clientAreaWidth) {
        h += scrollbarWidth;
    }

    const w = contentWidth + scrollbarWidth;

    // We need to set a reasonable cap here as some browsers will just ignore huge values
    // rather than treat them as huge values.
    return [`${Math.min(100_000, w)}px`, `${Math.min(100_000, h)}px`];
}
