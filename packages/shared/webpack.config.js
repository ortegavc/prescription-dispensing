const { merge } = require("webpack-merge");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "msp",
    projectName: "shared",
    webpackConfigEnv,
    argv,
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  });

  return merge(defaultConfig, {
    resolve: {
      extensions: [".ts", ".d.ts", ".tsx", ".js",".jsx"],
      preferRelative: true,
      plugins: [new TsconfigPathsPlugin()],
    },
    devServer: {
      port: 9001,
      https: Boolean(process.env.HTTPS),
    },
    externals: [/^@msp\//],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js"
    },
    module: {

    },
  });
};
