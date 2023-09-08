/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'small': '640px',
			// => @media (min-width: 640px) { ... }

			'normal': '768px',
			// => @media (min-width: 768px) { ... }

			'large': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'2xlm': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xlm': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'largem': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'normalm': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'smallm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }
		},
		extend: {},
	},
	plugins: [],
}