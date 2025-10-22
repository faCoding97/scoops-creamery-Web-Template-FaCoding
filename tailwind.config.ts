import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        'elev-1': '0 1px 2px rgba(0,0,0,0.06)',
        'elev-8': '0 12px 20px rgba(0,0,0,0.14)',
      }
    },
  },
  plugins: [],
};
export default config;
