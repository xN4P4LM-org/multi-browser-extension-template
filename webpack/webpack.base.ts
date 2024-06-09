import path from "path";
import webpack from "webpack";
import dotenv from "dotenv";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

dotenv.config();

const sourceDir = path.join(__dirname, "..", "src");
const distDir = path.join(__dirname, "..", "dist");

const config: webpack.Configuration = {
  entry: {
    popup: path.resolve(sourceDir, "popup/main.tsx"),
    config: path.resolve(sourceDir, "config/main.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // Only type-checking, no transpiling
            },
          },
          {
            loader: "swc-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { minimize: true },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, `${distDir}/js`),
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL || ""),
    }),
    new CopyPlugin({
      patterns: [
        { from: "public", to: distDir },
        { from: "assets", to: `${distDir}/assets` },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "../css/[name].css", // Output to dist/css directory
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

export default config;
