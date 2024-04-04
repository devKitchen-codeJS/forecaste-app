import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D2982D",
          secondary: "#F5B747",
          accent: "#DEA02E",
          neutral: "#2B261D",
          "base-100": "#FFFFFF",
          "base-200": "#DEAB4D",
          "base-300:": "#403B45",
          
        },
      },
      "dark",
    ],
    logs: true,
  },

  plugins: [require("daisyui")],
};
export default config;
