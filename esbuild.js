const { build } = require("esbuild");

build({
	entryPoints: ["./src/index.ts"],
	minify: true,
	keepNames: true,
	bundle: true,
	sourcemap: true,
	platform: "node",
	outfile: "./lib/index.js",
}).catch(() => {
	process.exit(1);
});
