module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: '#F5DF4D',
				secondary: '#48473f',
				emphasis: '#4353A8',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
