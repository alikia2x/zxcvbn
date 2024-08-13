import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "@alikia/zxcvbn",
			fileName: "index"
		},
		rollupOptions: {
			input: {
				main: resolve(__dirname, "src/index.ts")
			},
			output: {
				exports: "named"
			}
		}
	},
	plugins: [dts()]
});
