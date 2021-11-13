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
	plugins: [
		({ addComponents }) => {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1024px',
					},
					'@screen xl': {
						maxWidth: '1200px',
					},
					'@screen 2xl': {
						maxWidth: '1200px',
					},
				},
			});
		},
	],
};
