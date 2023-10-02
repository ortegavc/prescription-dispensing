const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// Comentario descriptivo del propósito de esta configuración
const defaultConfig = singleSpaDefaults({
  orgName: "msp",
  projectName: "shared",
});

module.exports = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: "replace",
    },
  },
})(defaultConfig, {
  // entry: {
  //   'common-dependencies': [
  //     'react',
  //     'react-dom',
  //   ],
  // },
  resolve: {
    extensions: [".ts", ".d.ts", ".tsx", ".js", ".jsx"],
    preferRelative: true,
    plugins: [new TsconfigPathsPlugin()],
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  devServer: {
    port: 9001,
    https: Boolean(process.env.HTTPS),
    historyApiFallback: true,  // Esta línea maneja las rutas de historial de navegación en una SPA de React
  },
  externals: [/^@msp\//],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
  },
  optimization: {
    splitChunks: {
      name: 'common-dependencies.js',
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpia la carpeta 'dist' antes de compilar
  ],
  devtool: 'source-map',
 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          require.resolve("style-loader", {
            paths: [require.resolve("webpack-config-single-spa")],
          }),
          require.resolve("css-loader", {
            paths: [require.resolve("webpack-config-single-spa")],
          }),
          "postcss-loader",
        ],
      },
      // {
      //   test: /\.js?$/,
      //   exclude: [path.resolve(__dirname, 'node_modules')],
      //   loader: 'babel-loader',
      // },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'ts-loader',
      // },
    ],
  },
});
