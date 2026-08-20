/* eslint-disable sonarjs/no-duplicate-string */
import { CompactSelection, type GridSelection } from "../src/index.js";
import { expandSelection, unquote, computeIdealSize } from "../src/data-editor/data-editor-fns.js"; // Adjust the import path to your setup
import { vi, expect, describe, it, afterEach } from "vitest";

describe("unquote", () => {
    it("should correctly unquote single line string without quotes", () => {
        const input = "hello\tworld";
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "hello", formatted: "hello", format: "string" },
                { rawValue: "world", formatted: "world", format: "string" },
            ],
        ]);
    });

    it("should correctly unquote single line string with quotes", () => {
        const input = `"hello"\t"world"`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "hello", formatted: "hello", format: "string" },
                { rawValue: "world", formatted: "world", format: "string" },
            ],
        ]);
    });

    it("should handle double quotes correctly", () => {
        const input = `"he""llo"\t"wo""rld"`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: `he"llo`, formatted: `he"llo`, format: "string" },
                { rawValue: `wo"rld`, formatted: `wo"rld`, format: "string" },
            ],
        ]);
    });

    it("should correctly unquote multi line strings", () => {
        const input = `"hello"\t"world"\n"foo"\t"bar"`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "hello", formatted: "hello", format: "string" },
                { rawValue: "world", formatted: "world", format: "string" },
            ],
            [
                { rawValue: "foo", formatted: "foo", format: "string" },
                { rawValue: "bar", formatted: "bar", format: "string" },
            ],
        ]);
    });

    it("should handle empty strings correctly", () => {
        const input = "";
        const output = unquote(input);
        expect(output).toEqual([[]]);
    });

    it("should correctly unquote strings containing tabs within quotes", () => {
        const input = `"hello\tworld"\tfoo`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "hello\tworld", formatted: "hello\tworld", format: "string" },
                { rawValue: "foo", formatted: "foo", format: "string" },
            ],
        ]);
    });

    it("should correctly unquote strings containing newlines within quotes", () => {
        const input = `"hello\nworld"\tfoo`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "hello\nworld", formatted: "hello\nworld", format: "string" },
                { rawValue: "foo", formatted: "foo", format: "string" },
            ],
        ]);
    });

    it("should correctly unquote multi-line strings where newlines are within quotes", () => {
        const input = `"start"\t"middle\npart"\t"end"`;
        const output = unquote(input);
        expect(output).toEqual([
            [
                { rawValue: "start", formatted: "start", format: "string" },
                { rawValue: "middle\npart", formatted: "middle\npart", format: "string" },
                { rawValue: "end", formatted: "end", format: "string" },
            ],
        ]);
    });
});

describe("expandSelection", () => {
    const getCellsForSelection = vi.fn();
    const abortController = new AbortController();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should return the original selection if spanRangeBehavior is allowPartial", () => {
        const selection: GridSelection = {
            current: {
                cell: [0, 0],
                range: {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1,
                },
                rangeStack: [],
            },
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
        };
        const result = expandSelection(selection, getCellsForSelection, 0, "allowPartial", abortController);
        expect(result).toEqual(selection);
    });

    it("should return the original selection if current selection is undefined", () => {
        const selection = {
            current: undefined,
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
        };
        const result = expandSelection(selection, getCellsForSelection, 0, "default", abortController);
        expect(result).toEqual(selection);
    });

    it("should return the original selection if getCellsForSelection returns a function", () => {
        const selection: GridSelection = {
            current: {
                cell: [0, 0],
                range: {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1,
                },
                rangeStack: [],
            },
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
        };
        getCellsForSelection.mockReturnValue(() => ({}));
        const result = expandSelection(selection, getCellsForSelection, 0, "default", abortController);
        expect(result).toEqual(selection);
        expect(getCellsForSelection).toHaveBeenCalledTimes(1);
    });
});

describe("computeIdealSize", () => {
    it("sums a numeric row height across all rows, plus the trailing row when shown", () => {
        expect(computeIdealSize(20, 10, false, 50, 0, 0, 0, 0)).toEqual(["0px", "250px"]);
        expect(computeIdealSize(20, 10, true, 50, 0, 0, 0, 0)).toEqual(["0px", "270px"]);
    });

    it("falls back to a bounded sample average when the viewport hasn't been measured, without scanning every row", () => {
        const rowHeight = vi.fn(() => 25);
        const [, height] = computeIdealSize(rowHeight, 100_000, false, 50, 0, 0, 0, 0);

        expect(rowHeight).toHaveBeenCalledTimes(10);
        expect(height).toBe("100000px"); // 50 + 100_000 * 25, capped at 100_000
    });

    it("computes the unmeasured-average estimate correctly for fewer than 10 rows", () => {
        const rowHeight = vi.fn((i: number) => 10 + i); // 10, 11, 12, 13, 14 -> avg 12
        const [, height] = computeIdealSize(rowHeight, 5, false, 0, 0, 0, 0, 0);

        expect(rowHeight).toHaveBeenCalledTimes(5);
        expect(height).toBe("60px"); // 5 rows * avg(12)
    });

    it("sums exact row heights until the measured viewport overflows, then extrapolates the rest", () => {
        const rowHeight = vi.fn(() => 20);
        const [, height] = computeIdealSize(rowHeight, 1000, false, 0, 0, 0, 100, 0);

        // availableRowSpace is 100; 5 rows exactly fill it, but the loop keeps sampling up to the
        // 10-row floor before extrapolating the remaining 990 rows from that average.
        expect(rowHeight).toHaveBeenCalledTimes(10);
        expect(height).toBe("20000px"); // 200 summed + (200 / 10) * 990
    });

    it("keeps sampling at least 10 rows even if the very first row alone overflows the viewport", () => {
        const rowHeight = vi.fn((i: number) => (i === 0 ? 5000 : 20));
        const [, height] = computeIdealSize(rowHeight, 50, false, 0, 0, 0, 100, 0);

        expect(rowHeight).toHaveBeenCalledTimes(10);
        expect(height).toBe("25900px"); // 5180 summed + (5180 / 10) * 40 remaining rows
    });

    it("doesn't crash and does no work when there are no rows", () => {
        const rowHeight = vi.fn(() => 20);

        expect(computeIdealSize(rowHeight, 0, false, 40, 0, 0, 100, 0)).toEqual(["0px", "40px"]);
        expect(computeIdealSize(rowHeight, 0, false, 40, 0, 0, 0, 0)).toEqual(["0px", "40px"]);
        expect(rowHeight).not.toHaveBeenCalled();
    });

    it("reserves horizontal-scrollbar height only when content overflows the measured client width", () => {
        expect(computeIdealSize(20, 5, false, 0, 500, 1000, 0, 15)).toEqual(["515px", "100px"]);
        expect(computeIdealSize(20, 5, false, 0, 1500, 1000, 0, 15)).toEqual(["1515px", "115px"]);
        // clientAreaWidth <= 0 means the width hasn't been measured yet, so it never reserves.
        expect(computeIdealSize(20, 5, false, 0, 1500, 0, 0, 15)).toEqual(["1515px", "100px"]);
    });

    it("caps both dimensions at 100_000px", () => {
        expect(computeIdealSize(20, 1, false, 0, 200_000, 0, 0, 15)).toEqual(["100000px", "20px"]);
        expect(computeIdealSize(500_000, 1, false, 0, 0, 0, 0, 0)).toEqual(["0px", "100000px"]);
    });
});
