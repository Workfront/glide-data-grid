const { build } = require("esbuild");
const linaria = require("@linaria/esbuild/lib/index").default;
const { dependencies, peerDependencies } = require("./package.json");
const fs = require("fs");
const glob = require("glob");

const allCells = glob.sync("src/data-grid/cells/*-cell.tsx");

const shared = {
    entryPoints: ["src/index.ts", "src/data-editor-base.ts", "src/data-grid/sprites.ts", ...allCells],
    bundle: true,
    minify: false,
    sourcemap: true,
    target: "es2018",
    plugins: [
        linaria({
            sourceMap: true,
        }),
    ],
    external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
};

async function f() {
    await build({
        ...shared,
        outdir: "dist/cjs",
        format: "cjs",
    });

    await build({
        ...shared,
        splitting: true,
        outdir: "dist/js",
        format: "esm",
    });

    fs.copyFileSync("dist/js/index.css", "dist/index.css");
    fs.copyFileSync("dist/js/index.css.map", "dist/index.css.map");
    fs.rmSync("dist/js/index.css");
    fs.rmSync("dist/cjs/index.css");
    fs.rmSync("dist/js/index.css.map");
    fs.rmSync("dist/cjs/index.css.map");
}

f();
