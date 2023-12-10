/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx,ts,tsx}']
export const theme = {
	extend: {
		backgroundImage: {
			dribbble: "url('./assets/gif/dribbble.gif')",
			logo: "url('./assets/png/logo.png')",
			relax: "url('./assets/png/relax.png')",
			space: "url('./assets/jpg/space.jpg')",
		},
	},
}
export const plugins = []
