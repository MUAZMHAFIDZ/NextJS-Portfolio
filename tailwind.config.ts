import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        myHeroImage: {
          '0%, 100%': {
            'border-radius': '5%',
            'border': '5px solid blue',
          },
          '50%': {
            'border-radius': '50%',
            'border': '5px solid green',
          },
        },
        myHeroImage2: {
          '0%, 100%': {
            'border': '5px solid',
            'border-image': 'linear-gradient(to right, green, blue) 1;',
          },
          '50%': {
            'border': '5px solid',
            'border-image': 'linear-gradient(to right, blue, green) 1;',
          },
        },
      },
      animation: {
        myHeroImage: 'myHeroImage 5s ease-in-out infinite',
        myHeroImage2: 'myHeroImage2 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
