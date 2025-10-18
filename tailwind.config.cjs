module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "20%": { transform: "translateX(-2px) scale(1.02)" },
          "50%": { transform: "translateX(4px) scale(0.98)" },
          "80%": { transform: "translateX(-2px) scale(1.01)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
