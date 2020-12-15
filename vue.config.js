const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));
    config.module.rules.delete("svg");
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "[name]" });
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .exclude.add(resolve("src/assets/icon"));
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/_variables.scss")]
    }
  }
};
