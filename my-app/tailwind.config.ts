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
      backgroundImage: {
        'big-flower': "url('/src/media/big_flower.svg')",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: '0', transform: "translateY(20px)" },
          "100%": { opacity: '1', transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

