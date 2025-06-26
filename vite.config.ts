import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig, loadEnv, type UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'node:fs';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
	const isProd = mode === "production";

	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

	const packageJSON = JSON.parse(readFileSync(`${__dirname}/package.json`).toString('utf8'));

	const define = {
		__VERSION__: JSON.stringify(packageJSON.version)
	};

	const config: UserConfig = {
		clearScreen: false,
		server: {
			host: '0.0.0.0',
			port: 5173,
			strictPort: true
		},
		envPrefix: ['VITE_'],
		plugins: [
			tailwindcss(),
			sveltekit(),
			paraglideVitePlugin({
				project: './project.inlang',
				outdir: './src/lib/paraglide',
				strategy: ['preferredLanguage', 'baseLocale'],
			}),
		],
		build: {
			minify: isProd ? 'esbuild' : false,
			sourcemap: !isProd,
		},
		define
	};

	return config;
});
