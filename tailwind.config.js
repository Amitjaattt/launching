/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      xs:"300px",
      sm:	"640px",
      md:	"768px",
      lg:	"1024px",
      xl:	"1280px",

    },
    extend: {

      keyframes:{
        'trans-right':{
          '0%, 100%':{  transform: 'translateX(10px)'},
          '50%':{ transform: 'translateX(0)'}
        }
      },
      animation:{
        'trans-right': 'trans-right 1.5s ease-in-out '
      },
      colors: {
        white: "#fff",
        black: "#000",
        darkslateblue: {
          "100": "#001a49",
          "200": "rgba(0, 76, 145, 0.7)",
        },
        dodgerblue: {
          "100": "#0473da",
          "200": "rgba(4, 115, 218, 0.7)",
        },
        lightcyan: "#d6f4ff",
        gray: {
          "100": "rgba(1, 1, 1, 0.5)",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        green: "#028a0f",
        darkslategray: "#333",
        cornflowerblue: "rgba(61, 162, 255, 0.87)",
        gainsboro: "#e3e3e3",
        deepskyblue: "#58b8ff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "181xl": "200px",
        xl: "20px",
        "7xs-2": "5.2px",
        "8xs": "5px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      "31xl": "50px",
      "6xl": "25px",
      "3xl": "22px",
      "11xl": "30px",
      "lg-7": "18.7px",
      "6xl-9": "25.9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
