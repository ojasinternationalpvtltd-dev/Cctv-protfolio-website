import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#010414",
        midnight: "#050B1F",
        electric: "#0A1F5F",
        cyan: "#FACC15",
        glow: "#FDE047"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(250, 204, 21, 0.26)",
        cyan: "0 0 35px rgba(250, 204, 21, 0.32)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(250,204,21,.22), transparent 34%), radial-gradient(circle at bottom right, rgba(10,31,95,.8), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
