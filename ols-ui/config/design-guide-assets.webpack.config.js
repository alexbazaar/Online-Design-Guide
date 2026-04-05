/**
 * This Webpack configuration is used to build the CSS files and the intermediate
 * JavaScript necessary to output static HTML representations of each component.
 *
 * The entry points for this config file are all files that conform to the
 * `*.example.js` file name pattern in the `src` folder of `ols-ui`.
 *
 * The outputs will be a JS and a CSS file for each of the entry points.
 *
 * Unlike the production build of ols-ui, the CSS class names will not have
 * random hashes assigned. Instead, all CSS class names are prefixed with
 * `ols-ui--` followed by the name of the CSS file and then the CSS selector
 * as defined in the file. The final pattern will look like this:
 *
 *     ols-ui--[Filename]-[selector]
 *
 * The JS file that is output will be built version of the `*.example.js` file.
 * This file can then be used to statically render the example into an HTML file.
 * That task is automatically performed by the `support/build-design-guide-assets`
 * script after running webpack with this configuration file. After the static
 * HTML has been generated, the JS file can be safely deleted as it is only
 * an intermediate asset.
 */

/* eslint-disable no-console */

const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require("webpack-node-externals");

const glob = require("glob");

const ROOT_DIR = path.resolve(__dirname, "..");

// eslint-disable-next-line no-unused-vars
module.exports = (config, environment = "production") => {

  const entryPoints = {};
  const files = glob.sync(path.join(ROOT_DIR, "src/**/*.example.js"), null);
  files.forEach((file) => {
    const name = path.basename(file, ".example.js");
    entryPoints[name] = "./" + path.relative(ROOT_DIR, file);
  });

  return {
    entry: entryPoints,
    output: {
      path: config.BUILD_PATH,
      filename: "[name].js",
      libraryTarget: "umd"
    },
    externals: [
      nodeExternals({
        modulesDir: "node_modules"
      })
    ],
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif|svg|eot|ttf)$/,
          loader: "url-loader",
          options: {
            limit: 20000
          }
        },
        {
          test: /\.ejs$/,
          loader: "ejs-compiled-loader"
        },
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            cacheDirectory: false
          }
        },
        {
          test: /\.woff2?$/,
          loader:
            "url-loader?limit=70000&mimetype=application/font-woff&name=[name].[ext]"
        },
        {
          test: /\.(scss|sass|css)$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 2,
                  modules: true,
                  sourceMap: false,
                  localIdentName: "ols-ui--[name]-[local]",
                  minimize: false
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: "config/postcss.config.js"
                  }
                }
              },
              "sass-loader"
            ]
          })
        }
      ]
    }
  };
};
