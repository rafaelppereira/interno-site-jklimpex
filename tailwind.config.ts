/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/backgrounds/banner.png)",
        maintenance: "url(/backgrounds/bg-auth.png)",
        nutricaoBanner: "url(/backgrounds/nutricao_banner.png)",
        banner2: "url()",
      },

      colors: {
        primary: {
          400: "#4B5D78",
          500: "#324158",
        },

        secondary: {
          500: "#4B5D78",
        },

        rose: {
          400: "#DFACA4",
          500: "#CD9F97",
        },
      },
    },
  },
  plugins: [],
};
