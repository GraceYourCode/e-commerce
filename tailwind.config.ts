import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#f5f5f5",
        "red": "#DB4444",
        "yellow": "#ffad33",
        "green": "#00ff66",
      },
      screens: {
        "xs": "480px",
      },
      fontSize: {
        "2xs": "10px",
      }
    },
  },
  plugins: [],
};
export default config;
