const { merge } = require("webpack-merge");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
//const debug = require("debug")("terminal");
module.exports = (webpackConfigEnv, argv) => {

  
  const defaultConfig = singleSpaDefaults({
    orgName: "msp",
    projectName: "terminal",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      extensions: [".ts", ".d.ts", ".tsx", ".js",".jsx"],
      preferRelative: true,
      plugins: [new TsconfigPathsPlugin()],
    },
    devServer: {
      port: 9002,
      https: Boolean(process.env.HTTPS),
    },
    externals: [/^@msp\/.+/],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js"
    },
  });
};

