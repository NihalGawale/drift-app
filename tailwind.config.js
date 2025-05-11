module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto-mono)"],
        sans: ["var(--font-inter)", "sans-serif"],
        pop: ["var(--font-poppins)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },
};
