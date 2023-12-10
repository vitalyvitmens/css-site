/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx,ts,tsx}']
export const theme = {
	extend: {
		backgroundImage: {
			dribbble: "url('/public/gif/dribbble.gif')",
			logo: "url('/public/png/logo.png')",
			relax: "url('/public/png/relax.png')",
			space: "url('/public/jpg/space.jpg')",
		},
	},
}
export const plugins = []
