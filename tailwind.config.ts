/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/backgrounds/bg-banner.jpg)",
        maintenance: "url(/backgrounds/bg-auth.png)",
      },

      colors: {
        primary: {
          400: "#006A9E",
          500: "#014C71",
        },

        secondary: {
          500: "#76A801",
        },
      },
    },
  },
  plugins: [],
};
