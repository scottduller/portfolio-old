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
				DEFAULT: '2rem',
				sm: '2rem',
				md: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				primary: '#F5DF4D',
				secondary: '#292b2c',
				tertiary: '#3e4142',
				emphasis: '#343738',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
