import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: '#2c2c2c',
        hotPink: '#FF69B4',
        cyan: '#00FFFF',
        dark1: '#3a3a3a ',
        dark2: '#404040',
        dark3: '#4a4a4a',
        dark4: '#525252',
        dark5: '#5c5c5c',
        dark6: '#3d3b3b',
        dark7: '#546E7A ',
      },
    },
  },
  plugins: [],
};
export default config;
