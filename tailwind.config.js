/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar": {
        display: "none",
      },
      ".no-scrollbar": {
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    };

    addUtilities(newUtilities);
  },
];
