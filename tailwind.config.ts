import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,html,scss}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  output: "./dist",
};

export default config;
