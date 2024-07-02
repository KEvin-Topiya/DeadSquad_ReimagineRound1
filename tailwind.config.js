/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        f1:["f1"],
        f2:["f2"],
        ubantu:["ubantu"],
        inika:["inika"],
      },
      colors:{
        r:"#EF233C",
        r1:"#FF595E",
        y:"#FFD60A",
        y1:"#FFCA3A",
        y2:"#FBD775",
        y3:"#FEE397",
        g:"#70E000",
        g1:"#8AC926",
        g2:"#B3DD6F",
        g3:"#D8FBA2",
        b:"#3A86FF",
        b1:"#4CC9F0",
        b2:"#65A0FF",
        b3:"#BAD5FF",
        p:"#8338EC",
      },
      boxShadow:{
        sh1:'20px 20px 20px 20px black'
      },
      backgroundImage:{
        'bg1':"url(../public/assets/icon/logoback.png)",
      }
    },
  },
  plugins: [],
}

