import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				darkTheme: {
					"color-scheme": "dark",
					primary: "#93E7FB",
					"primary-content": "#384575",
					secondary: "#65E0B8",
					accent: "#ffe999",
					neutral: "#3b8ac4",
					"base-100": "#345da7",
					info: "#2563eb",
					success: "#81CFD1",
					warning: "#EFD7BB",
					error: "oklch(73.95% 0.19 27.33)",
				},
			},
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};

export default config;
