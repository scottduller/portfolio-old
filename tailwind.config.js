module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: false,
	theme: {
		textColor: (theme) => theme('colors'),
		textColor: {
			illuminating: '#F5DF4D',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
