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
          50:  "#B2F5F1",
          100: "#85E0DA",
          200: "#5CCEC7",
          300: "#3ABEB6",
          400: "#29A79F",
          500: "#008B82", // modo claro: main
          600: "#108078",
          700: "#007D76",
          800: "#225754",
          900: "#234644",
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
