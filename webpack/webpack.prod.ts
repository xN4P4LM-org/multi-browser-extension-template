import { merge } from "webpack-merge";
import baseConfig from "./webpack.base.ts";

const prodConfig = merge(baseConfig, {
  mode: "production",
});

export default prodConfig;
