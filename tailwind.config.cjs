/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   rules: [
     {
       test: /\.(png|jpe?g|gif)$/i,
       use: [
         {
           loader: "file-loader",
         },
       ],
     },
   ],
   theme: {
     screens: {
       phone: "320px",
       pc: "1080px",
     },
     extend: {
       fontFamily: {
         aeonikbold: ["AeonikTRIAL-Bold"],
         aeonikreguler: ["AeonikTRIAL-Regular"],
         aeoniklight: ["AeonikTRIAL-Light"],
       },
     },
   },
   plugins: [],
 };

 const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
 