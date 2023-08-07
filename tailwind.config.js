/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "salesforce-btn-pattern":
        "linear-gradient(360deg, #DD1A77 -322.62%, #3F59BF 100%);",
    },
  },
  plugins: [],
};
