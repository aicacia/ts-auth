import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'node:fs';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
	const isProd = mode === 'production';

	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

	const packageJSON = JSON.parse(readFileSync(`${__dirname}/package.json`).toString('utf8'));

	const define = {
		__VERSION__: JSON.stringify(packageJSON.version)
	};
	/** @type {import('vite').UserConfig} */
	const config = {
		clearScreen: false,
		server: {
			host: '0.0.0.0',
			port: 5173,
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host: '0.0.0.0',
				port: 5183
			},
			watch: {
				ignored: ['**/src-tauri/**']
			}
		},
		preview: {
			port: 5173,
			strictPort: true
		},
		plugins: [
			paraglide({
				project: './project.inlang',
				outdir: './src/lib/paraglide'
			}),
			sveltekit()
		],
		define
	};

	return config;
});