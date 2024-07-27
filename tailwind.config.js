/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-3%)', animationTimingFunction: 'cubic-bezier(0, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 1 , 1)' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            
          },
        },
        
        
      },
      animation: {
        'bounce': 'bounce 3s infinite',
        'slidein' : "slidein 2s ease 100ms",
        'color' : "color 1s ease infinite"
      },
      // colors: {
      //   'blue-500': '#3B82F6', // Example hex code
      // },
    },
  },
}
