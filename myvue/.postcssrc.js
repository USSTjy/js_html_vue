module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-px2rem")({
      remUnit: 75,
      rePrecision: 2,
    }),
  ],
};
