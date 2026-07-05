/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nature: {
          light: {
            bg: '#F3F7F0',       // Soothing morning-mist pale sage/cream
            card: '#E5EDE2',     // Softer mossy green-beige card
            text: '#142211',     // Deepest charcoal organic forest green
            green: '#2D5A27',    // Lush Pine/Forest Green
            brown: '#704F2F',    // Warm cedar bark brown
            accent: '#D4A373',   // Natural sand/wood accent
          },
          dark: {
            bg: '#081007',       // Midnight deep forest pine black
            card: '#121C11',     // Dark dense foliage green-black card
            text: '#E1ECE0',     // Soft light sage-cream leaf text
            green: '#76A071',    // Moss leaf sage green
            brown: '#CCA785',    // Soft warm sand/beechwood accent
            accent: '#E6CCB2',   // Golden wheat fields
          }
        }
      },
      fontFamily: {
        klee: ['"Klee One"', 'cursive', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}