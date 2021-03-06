const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

function optimize() {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCSSAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
}

function cssLoaders(preProc) {
  const loaders = [MiniCSSExtractPlugin.loader, "css-loader"];
  if (preProc) {
    loaders.push(preProc);
  }
  return loaders;
}

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: { main: ["@babel/polyfill", "/index.js"] },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  mode: "development",
  devtool: isDev ? "source-map" : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      minify: isProd,
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: filename("css"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".jpg"],
    alias: {
      Src: path.resolve(__dirname, "src"),
    },
  },
  optimization: optimize(),
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.(sass|scss)$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[contenthash].[ext]" },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "fonts/[name].[contenthash].[ext]" },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 4200,
    hot: isDev,
    historyApiFallback: true,
  },
};
