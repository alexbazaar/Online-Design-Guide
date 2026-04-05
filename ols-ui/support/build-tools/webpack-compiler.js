/* eslint-disable no-console */
const webpack = require("webpack");

module.exports = (webpackConfig, callback) => {
  let compiler;
  // Determine whether we're compiling for client or server.
  let context;
  switch (webpackConfig.target) {
    case "web":
      context = "Client";
      break;
    case "node":
      context = "Server";
      break;
    default:
      context = "Webpack";
  }

  // Try to compile, catching any errors.
  try {
    compiler = webpack(webpackConfig);
    console.info(`${context} configuration compiled successfully.`);
  }
  catch (e) {
    console.error(`${context} configuration is invalid:\n`, e);
    process.exit(1);
  }

  // Handle errors in webpack build
  compiler.hooks.done.tap('MyPlugin', (stats) => {
    if (stats.hasErrors()) {
      console.error(`${context} build failed:\n`, stats.toString());
      console.info('See webpack error above');
    }
    else if (stats.hasWarnings()) {
      console.warn(`${context} build warnings`, stats.toJson().warnings.join('\n'));
    }
    else {
      console.info(`${context} build successful`);
    }

    // Call the callback on successful build
    if (callback) {
      callback(stats);
    }
  });

  // Return the compiler
  return compiler;
};
