module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("tailwindcss")("./tailwind.config.js"),
  ],
}
