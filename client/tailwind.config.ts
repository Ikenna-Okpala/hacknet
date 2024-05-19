import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backgroundColor: {
        "till-green": "#64956F",
      },

      placeholderColor: {
        "nice-yellow": "#EBBA4F",
      },

      caretColor: {
        "nice-yellow": "#EBBA4F",
      },

      textColor: {
        "nice-yellow": "#EBBA4F",
      },
    },
  },
  plugins: [],
};
export default config;
