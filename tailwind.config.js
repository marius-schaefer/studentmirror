module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newspaper: '#fffefc' /*'#EDECE4'*/,  /*#ece6e0 #AD8660 #fffafa fffefc*/
        secondary: /*'#e0e6ec'*/ '#ece6e0',
      },
      fontFamily: {
        pt: ['PT Serif']
      }
    },
  },
  plugins: [],
}
