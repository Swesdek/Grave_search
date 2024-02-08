/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-light-yellow" : "#FFCD83",
        "main-dark-brown" : "#332626",
        "main-logo-brown" : "#645339",
        "main-light-pink" : "#EFEDE7"
      },
      spacing: {
        "29/60" : "48.333333%",
        "1/10" : "10%",
        "9/10" : "90%",
        "2full" : "200%",
        "3/5" : "60%",
        "4/5" : "85%"
      },
      gridTemplateColumns: {
        'abf' : "10% 90%",
        'abp' : "20% 80%",
        'abt' : "10% 90%",
        '3/4' : "75% 25%"
      },
      gap: {
        '1/20' : '5%'
      }
    },
  },
  plugins: [],
}

