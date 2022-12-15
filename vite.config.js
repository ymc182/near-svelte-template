import { sveltekit } from "@sveltejs/kit/vite";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
/** @type {import('vite').UserConfig} */
const gpf = NodeGlobalsPolyfillPlugin({
	buffer: true,
	process: true,
});
const config = {
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	optimizeDeps: {
		esbuildOptions: {
			define: {
				global: "globalThis",
			},
			plugins: [gpf],
		},
	},
};

export default config;
