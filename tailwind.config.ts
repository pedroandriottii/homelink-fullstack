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
        "home-link-background-blue": "#132845",
        "home-link-light-blue": "#65CCFF",
        "home-link-seccond-blue": "#153764",
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
export default config;
