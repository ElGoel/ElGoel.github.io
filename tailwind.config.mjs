/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // permite alternar entre light y dark agregando la clase "dark" al <html> o <body>
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal (cyan)
        primary: {
          50:  "#E0F7FA",
          100: "#B2EBF2",
          200: "#80DEEA",
          300: "#4DD0E1",
          400: "#26C6DA",
          500: "#00BCD4", // modo claro: main
          600: "#00ACC1",
          700: "#0097A7",
          800: "#00838F",
          900: "#006064",
        },
        grey: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        amber: {
          500: "#FFC107",
        },
        // Fondos personalizados
        background: {
          light: "#f2fbfd", // modo claro
          dark: "#121212",  // modo oscuro
        },
        // Texto personalizado
        font: {
          light: "#0f0f0f",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
