module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: false,
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2.5rem',
				// sm: '3rem',
				// lg: '4rem',
				// xl: '5rem',
				// '2xl': '6rem',
			},
		},
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
