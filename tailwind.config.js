/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				redhat: ['Red Hat Display', 'sans serif'],
				playFair: ['Playfair Display', 'san serif'],
			},
			colors: {
				'ofg-lightest-green': '#3DC4AB',
				'ofg-light-green': '#17A386',
				'ofg-dark-green': '#058B6D',
				'ofg-darkest-green': '#047359',
				'ofg-light-tan': '#FFE7DB',
				'ofg-dark-tan': '#FDD3BE',
				'ofg-light-clay': '#E0AB93',
				'ofg-dark-clay': '#C4846A',
			},
			fontSize: {
				headerCopyHeader: [
					'90px',
					{
						lineHeight: '99px',
					},
				],
				homeHero: [
					'250px',
					{
						lineHeight: '225px',
						letterSpacing: '-0.25rem',
					},
				],
			},
			spacing: {
				'1/10': '10%',
				'1/5': '20%',
				'1/2': '50%',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
