import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: colors.teal[600],
    }
  },
  plugins: [],
}

