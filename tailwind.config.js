module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				champion: "url('/gwen.jpg')",
			},

			boxShadow: {
				good: "4px 4px 0 0px rgba(0, 0, 0, 0.3)",
				border: "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
			},
		},
		screens: {
			"3xl": { max: "1601px" },
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
	},
	plugins: [],
}
