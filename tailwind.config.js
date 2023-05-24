/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        title: "hsl(var(--hue), var(--sat), 20%)",
        "title-dark": "hsl(var(--hue), var(--sat), 0%)",
        "text-color": "hsl(var(--hue), var(--sat), 46%)",
        "body-color": "hsl(var(--hue), var(--sat), 98%)",
        "container-color": "#fff",
      },
      fontSize: {
        big: "3.5rem",
        h1: "2.25rem",
        h2: "1.5rem",
        h3: "1.25rem",
        normal: "1rem",
        small: "0.875rem",
        smaller: "0.813rem",
        tiny: "0.625rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        "semi-bold": 600,
      },
      margin: {
        "0-25": "0.25rem",
        "0-5": "0.5rem",
        "0-75": "0.75rem",
        1: "1rem",
        "1-5": "1.5rem",
        2: "2rem",
        "2-5": "2.5rem",
        3: "3rem",
      },
      zIndex: {
        tooltip: 10,
        fixed: 100,
        modal: 1000,
      },
    },
  },
  plugins: [],
};
