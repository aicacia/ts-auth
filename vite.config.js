import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { networkInterfaces } from 'node:os';

const packageJSON = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
	const isProd = mode === 'production';

	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

	const host = await getInternalIpV4();

	const define = {
		__VERSION__: JSON.stringify(packageJSON.version)
	};
	if (!isProd) {
		const url = new URL(process.env.PUBLIC_AUTH_API_URL);
		url.host = host;
		let urlString = url.toString();
		if (urlString.endsWith('/')) {
			urlString = urlString.slice(0, -1);
		}
		define.__DEV_AUTH_API_URL__ = JSON.stringify(urlString);
	}

	/** @type {import('vite').UserConfig} */
	const config = {
		clearScreen: false,
		server: {
			host: '0.0.0.0',
			port: 5173,
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host,
				port: 5183
			}
		},
		plugins: [sveltekit()],
		envPrefix: ['VITE_', 'TAURI_'],
		build: {
			target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
			minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
			sourcemap: !!process.env.TAURI_DEBUG
		},
		define
	};

	return config;
});

function getInternalIpV4() {
	const nets = networkInterfaces();
	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
			if (net.family === familyV4Value && !net.internal) {
				return net.address;
			}
		}
	}
	return '0.0.0.0';
}
