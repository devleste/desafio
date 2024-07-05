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

      colors: {
        "skeleton-primary": "#d1d5db",
        "skeleton-secondary": "#e5e7eb",
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(250px, 270px))',
      }
    },
  },
  plugins: [],
};
export default config;
