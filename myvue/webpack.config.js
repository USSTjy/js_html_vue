/*
1. 需要注意webpack-cli 和 webpack-dev-server的版本兼容(webpack编译遇到的问题：Error: Cannot find module 'webpack-cli/bin/config-yargs'): webpack@3 匹配webpack-cli@3   
2. 需要注意html-webpack-plugin的版本，需要兼容webpack 的版本，要不然会报错‘tap' of undefined
*/
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 打包前清楚打包文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 处理JS文件
const copyWebpackPlugin = require("copy-webpack-plugin"); // 复制静态文件 copy-webpack-plugin@5版本适用于webpack4
const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin"); //CSS文件单独提取出来  适用于webpack1/2/3
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 将css代码提取为独立文件的插件  适用于webpack4
const devMode = process.env.NODE_ENV !== "production";

console.log(
  "data====",
  path.resolve(__dirname, "../vue-mock/public/webpackDist")
);
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.js",
  output: {
    filename: "js/[name].index.js",
    path: path.resolve(__dirname, "./webpackDist"),
  },
  // 3. 项目中的js和Vue的引入
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  devServer: {
    hot: true,
    inline: true,
    open: false,
    compress: true,
    port: 3001,
    host: "localhost",
    publicPath: "",
    // openPage: '/different/page' //指定打开浏览器时要导航的页面
    overlay: true, //当有编译器错误或警告时，在浏览器中显示全屏覆盖。默认禁用。如果您只想显示编译器错误：
  },

  module: {
    rules: [
      // {
      //   test: /\.css |.scss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|jpeg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "",
              outputPath: "img/", // 将图片打包到webpackDist文件夹下img中
              esModule: false, // 这里设置为false :webpack打包html里面img后src为“[object Module]”问题
            },
          },
        ],
      },
      // {
      //   test: /\.vue$/,
      //   use: "vue-loader",
      // },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              postcss: function() {
                return [px2rem({ remUnit: 75 })];
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      title: "test webpack",
      url: "./",
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./public"), //__dirname + "/public/",
        to: path.resolve(__dirname, "./webpackDist"), //__dirname + "/webpackDist/",
        ignore: ["index.html"],
      },
    ]),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 打包后删除‘console.log’语句
      new UglifyJsPlugin({
        uglifyOptions: {
          // 删除注释，
          output: {
            comments: false,
          },
          // 删除console debugger
          compress: {
            drop_console: true, // console,
            drop_debugger: false,
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
    // 分割代码块
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.(sa|sc|c)ss$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
};
if (process.env.NODE_ENV === "production") {
  webpackConfig.plugins.push(new CleanWebpackPlugin()); // 每次打包前删除之前的文件)
}
module.exports = webpackConfig;
