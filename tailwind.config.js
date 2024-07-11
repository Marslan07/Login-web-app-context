module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm":"500px",
      'md': '900px',
      "lg": '910px'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading-bold": [
        "66px",
        {
          lineHeight: "60px",
          fontWeight: "600",
          letterSpacing: "-0.96px",
        },
      ],
      "small-regular": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "300",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        "dark-1": "#222B33",
        "dark-2": "#3B4752",
        "dark-green": "#005237",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".image-style": {
          width: "90%",
          height: "832px",
          background: " url(assets/Right-image.svg)",
        },
        ".login-button-style": {
          "border-radius": " 2px",
          "border": "1px solid var(--border-button-primary, #00E687)",
          "background": " var(--background-button-primary, #50F89A)",
        },
        ".loading-box": {
          "width": "100%",
          "padding": "60px 70px 0 70px",
        },
        ".loading-container": {
          "height": "90vh",
          "display": "flex",
          "justify-content": "center",
          "align-items": "center",
        }
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
