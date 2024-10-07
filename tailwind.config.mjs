/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gris1: "#CCCCCC",
				gris2: "#666666",
				gris3: "#333333",
				verdeAbitacolo: "#919e32",
				verdeLimaAbitacolo: "#d6ff85"
			  },
		},
	},
	plugins: [animations],
}
