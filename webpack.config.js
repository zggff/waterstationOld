var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var clientConfig = {
  watchOptions: {
    ignored: ["./node_modules/", "./public/"],
  },
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["isomorphic-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.svg$/, /\.jpe?g$/, /\.png$/],

        loader: "url-loader",
        options: {
          limit: 20000,
          name: "/images/[hash:8].[ext]",
        },
      },
    ],
  },
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
};

var serverConfig = {
  watchOptions: {
    ignored: ["./node_modules/", "./public/"],
  },
  entry: "./src/server/server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "server.js",
    publicPath: "",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["isomorphic-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.svg$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
        options: {
          limit: 20000,
          name: "/images/[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};

module.exports = [clientConfig, serverConfig,];
