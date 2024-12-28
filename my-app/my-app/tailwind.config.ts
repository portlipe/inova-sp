import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],  // Corrigido aqui
        rajdhani: ["Rajdhani", "sans-serif"],      // Corrigido aqui
      },
      colors: {
        background: "var(--background)",           // Certifique-se de que a variável esteja definida
        foreground: "var(--foreground)",           // Certifique-se de que a variável esteja definida
      },
    },
  },
  plugins: [],
} satisfies Config;

