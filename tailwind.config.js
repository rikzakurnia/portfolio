/** @type {import('tailwindcss').Config} */
const withVar = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: withVar("bg"),
        surface: withVar("surface"),
        ink: withVar("ink"),
        muted: withVar("muted"),
        line: withVar("line"),
        accent: withVar("accent"),
        "accent-soft": withVar("accent-soft"),
        side: withVar("side"),
        "side-ink": withVar("side-ink"),
        "side-muted": withVar("side-muted"),
        "side-line": withVar("side-line"),
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)",
        lift: "0 2px 4px rgb(0 0 0 / 0.04), 0 18px 40px -16px rgb(0 0 0 / 0.22)",
      },
      keyframes: {
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        ping2: "ping2 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
