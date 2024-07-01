/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        f1:["f1"],
        f2:["f2"],
        ubantu:["ubantu"]
      },
      boxShadow:{
        sh1:'20px 20px 20px 20px black'
      },
      backgroundImage:{
        'bg1':"url(../public/assets/icon/logoback.png)"
      }
    },
  },
  plugins: [],
}

