import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // aos palette from context.md
        field: "#d4d4d4",        // gray desktop background
        "field-alt": "#e4e9ef",  // alternate blue-gray for section backgrounds
        surface: "#ffffff",      // white panels
        cobalt: "#3d69f4",       // primary electric blue (from logo)
        cyan: "#7dd3fc",         // secondary cyan for frames/outlines
        "cyan-dim": "#bae6fd",   // lighter cyan for subtle elements
        muted: "#737373",        // muted gray text
        dark: "#171717",         // near-black for text when needed
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      spacing: {
        // 8px baseline rhythm
        "18": "4.5rem",
        "22": "5.5rem",
      },
      letterSpacing: {
        "mega": "0.25em",  // wide tracking for micro labels
      },
    },
  },
  plugins: [],
};
export default config;
