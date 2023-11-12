const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('optional', '&:optional');
			addVariant('group-optional', ':merge(.group):optional &');
		})
	]
};

module.exports = config;
