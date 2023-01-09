import { sveltekit } from "@sveltejs/kit/vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
/** @type {import('vite').UserConfig} */

const config = {
	plugins: [nodePolyfills(), sveltekit()],
	optimizeDeps: {
		disabled: false,
	},
	build: {
		commonjsOptions: {
			include: [],
		},
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
};

export default config;
