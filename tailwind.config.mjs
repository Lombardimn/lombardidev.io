/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'c-0': '#090b11',
				'c-50': '#141925',
				'c-100': '#283044',
				'c-200': '#3d4663',
				'c-300': '#505d84',
				'c-400': '#6474a2',
				'c-500': '#8490b5',
				'c-600': '#a3acc8',
				'c-700': '#c3cadb',
				'c-800': '#e3e6ee',
				'c-900': '#f3f4f7',
				'c-999-basis': '0, 0%, 100%',
				'c-999-40': 'hsla(var(0, 0%, 100%), 0.4)',
				'c-999': '#E6EEF5',
				'accent-light': '#05F283',
				'accent-regular': '#00ec98',
				'accent-dark': '#078C5B',
				'accent-overlay': '#bcbcbc',
				'accent-subtle-overlay': 'var(d-accent-overlay)',
				'accent-text-over': '#02080D',
				'cd-0': '#ffffff',
				'cd-50': '#f3f4f7',
				'cd-100': '#e3e6ee',
				'cd-200': '#c3cadb',
				'cd-300': '#a3acc8',
				'cd-400': '#8490b5',
				'cd-500': '#6474a2',
				'cd-600': '#505d84',
				'cd-700': '#3d4663',
				'cd-800': '#283044',
				'cd-900': '#141925',
				'cd-999-basis': '225, 31%, 5%',
				'cd-999': '#090b11',
				'd-accent-light': '#1c0056',
				'd-accent-regular': '#7611a6',
				'd-accent-dark': '#c561f6',
				'd-accent-overlay': 'hsla(280, 89%, 67%, 0.33)',
				'd-accent-subtle-overlay': 'hsla(281, 81%, 36%, 0.33)',
				'd-accent-text-over': 'var(--gray-0)',
			},
			fontSize: {
				'small': '0.875rem',
				'base': '1rem',
				'medium': '1.125rem',
				'large': '1.25rem',
				'xlarge':'1.625rem',
				'2xlarge': '2.125rem',
				'3xlarge': '2.625rem',
				'4xlarge': '3.5rem',
				'5xlarge': '4.5rem'
			},
			fontFamily: {
				'body': ['Public Sans', 'sans-serif'],
				'brand': ['Rubik', 'sans-serif'],
				'alternative': ['Open Sans', 'sans-serif']
			},
			dropShadow: {
				'dropmd': 'drop-shadow(0px 28px 11px rgba(9, 11, 17, 0.01)) drop-shadow(0px 16px 10px rgba(9, 11, 17, 0.03)) drop-shadow(0px 7px 7px rgba(9, 11, 17, 0.05)) drop-shadow(0px 2px 4px rgba(9, 11, 17, 0.06))'
			},
			boxShadow: {
				'bs-md': '0px 28px 11px rgba(9, 11, 17, 0.01), 0px 16px 10px rgba(9, 11, 17, 0.03), 0px 7px 7px rgba(9, 11, 17, 0.05), 0px 2px 4px rgba(9, 11, 17, 0.06)',
				'bs-lg': '0px 62px 25px rgba(9, 11, 17, 0.01), 0px 35px 21px rgba(9, 11, 17, 0.05),	0px 16px 16px rgba(9, 11, 17, 0.1), 0px 4px 9px rgba(9, 11, 17, 0.12)',
				'bs-inset': 'inset 0 0 0 1px var(--accent-overlay)'
			},
			backgroundImage: {
				'btn-r-gradient': 'radial-gradient(var(--c-900), var(--c-800) 150%)',
				'btn-gradient': 'linear-gradient(180deg, var(--c-600), transparent), radial-gradient(var(--c-900), var(--c-800) 150%)',
				'stroke': 'linear-gradient(180deg, var(--c-900), var(--c-700))'
			}
		},
	},
	plugins: [],
}
