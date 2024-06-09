import { merge } from "webpack-merge";
import baseConfig from "./webpack.base.ts";

const devConfig = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
});

export default devConfig;
