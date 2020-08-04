const path = require("path");
const isDev = process.env.NODE_ENV === "development";
module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : "none",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: ['.ts', '.js','.json'],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  stats:"none",
  target: "node",
  module:{
    rules:[
     {
         test:/\.tsx?$/,
         use:'ts-loader',
         exclude:/node_modules/
     }
    ]
 }
};
