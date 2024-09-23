import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import del from "rollup-plugin-delete";
import visualizer from "rollup-plugin-visualizer";

export default {
  input: "src/index.ts", // Entry point for your library
  output: [
    {
      file: pkg.main,
      format: "cjs", // CommonJS format
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es", // ES module format
      sourcemap: true,
      exports: "named",
    },
    {
      file: pkg.unpkg,
      format: "umd", // UMD format for use in browsers
      name: "SecptrumUI", // The global variable name for UMD builds
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(), // Automatically mark peer dependencies as external
    resolve(), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true,
    }), // Transpile TypeScript files
    babel({
      exclude: "node_modules/**", // Only transpile our source code
      babelHelpers: "bundled",
    }),
    terser(), // Minify the output for production builds
    visualizer({
      filename: "./bundle-analysis.html",
      open: true, // Automatically open the analysis in the browser
    }),
  ],
  external: ["react", "react-dom"],
  // Prevent bundling of peer dependencies
};
// "next-setup": "file:./scripts/next-setup.js"
