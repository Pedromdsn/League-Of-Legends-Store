module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				champion: "url('/gwen.webp')",
			},

			boxShadow: {
				good: "4px 4px 0 0px rgba(0, 0, 0, 0.3)",
				border: "text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
			},
		},
	},
	plugins: [],
}
