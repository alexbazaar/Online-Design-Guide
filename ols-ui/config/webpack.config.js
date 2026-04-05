/**
 * This Webpack configuration is used solely to build the library files.
 */

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const productionMode = process.env.NODE_ENV === "production";

const config = {
  entry: {
    accordion: "./src/components/Accordion",
    "address-form": "./src/components/AddressForm",
    alert: "./src/components/Alerts/deprecated.js",
    alerts: "./src/components/Alerts",
    "app-foundations": "./src/components/AppFoundations",
    backToTop: "./src/components/BackToTop/BackToTop.js",
    badges: "./src/components/Badges",
    breadcrumbs: "./src/components/Breadcrumbs",
    buttons: "./src/components/Buttons",
    tag: "./src/components/Tag",
    checkbox: "./src/components/Checkbox",
    checklist: "./src/components/Checklist",
    "card": "./src/components/Card",
    "date-field": "./src/components/DateField",
    "date-field-range": "./src/components/DateFieldRange",
    "docs-foundations": "./src/components/DocsFoundations",
    dropdown: "./src/components/Dropdown",
    "field-set": "./src/components/FieldSet",
    "flex-grid": "./src/components/FlexGrid",
    "focus-manager": "./src/components/FocusManager",
    footer: "./src/components/Footer",
    form: "./src/components/Form",
    "help-tip": "./src/components/HelpTip",
    "heading": "./src/components/Heading",
    icons: "./src/components/Icons",
    image: "./src/components/Image",
    "input-label": "./src/components/InputLabel",
    "input-stepper": "./src/components/InputStepper",
    "irs-header": "./src/components/IRSHeader",
    "big-footer": "./src/components/BigFooter",
    "slim-footer": "./src/components/SlimFooter",
    "irs-logo": "./src/components/IRSLogo",
    badge: "./src/components/Badge",
    links: "./src/components/Links",
    list: "./src/components/List",
    modal: "./src/components/Modal",
    "name-form": "./src/components/NameForm",
    "nav-bar": "./src/components/NavBar",
    pagination: "./src/components/Pagination",
    panel: "./src/components/Panel",
    "password-field": "./src/components/PasswordField",
    "create-password-field": "./src/components/CreatePasswordField",
    "password-reset-form": "./src/components/PasswordResetForm",
    "phone-number-field": "./src/components/PhoneNumberField",
    "portal": "./src/components/Portal",
    "step-indicator": "./src/components/StepIndicator",
    radio: "./src/components/Radio",
    "search-field": "./src/components/SearchField",
    sidebar: "./src/components/Sidebar",
    "sign-in-form": "./src/components/SignInForm",
    spinner: "./src/components/Spinner",
    "split-view": "./src/components/SplitView",
    "state-picker": "./src/components/StatePicker",
    "country-picker": "./src/components/CountryPicker",
    "ssn-field": "./src/components/SSNField",
    "spacer": "./src/components/Spacer",
    "tab-view": "./src/components/TabView",
    tabs: "./src/components/Tabs",
    tables: "./src/components/Tables",
    "timeline": "./src/components/Timeline",
    "timeline-panel": "./src/components/TimelinePanel",
    "text-area": "./src/components/TextArea",
    "text-field": "./src/components/TextField",
    "tooltip": "./src/components/Tooltip",
    "zip-code-field": "./src/components/ZipCodeField",
    utilities: "./src/helpers/utilities",
    validators: "./src/helpers/validators",
    constants: "./src/helpers/constants",
    "server/index": "./src/server/index",
    // Deprecated
    "keyword-index": "./src/helpers/KeywordIndex-deprecated",
    "helpers/embed-styles": "./src/helpers/embed-styles-deprecated"
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
    library: [ "ols-ui", "[name]" ],
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: ""
  },
  devtool: productionMode ? "source-map" : "inline-source-map",
  externals: [
    nodeExternals({
      modulesDir: "node_modules"
    })
  ],
  plugins: [
    new CopyWebpackPlugin([
      { from: "./package.json", to: "package.json" },
      {
        from: "./src/styles/_variables.scss",
        to: "styles/_variables.scss"
      },
      { from: "./src/styles/_mixins.scss", to: "styles/_mixins.scss" },
      { from: "./src/styles/mixins", to: "styles/mixins" },
      { from: "./src/styles/core", to: "styles/core" },
      { from: "./src/styles/irs.scss", to: "styles/irs-global.scss" },
      { from: "./src/assets", to: "assets" },
      { from: "./support/build-tools", to: "build-tools" }
      // { from: "./src/data", to: "data" }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|eot|ttf)$/,
        loader: "url-loader",
        options: {
          fallback: "file-loader"
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
        loader: "url-loader",
        options: {
          limit: 70000,
          mimetype: "application/font-woff",
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[name]-[local]--[hash:base64:5]"
              },
              sourceMap: !productionMode
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: "inline",
              config: {
                path: "config/postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sourceMap: productionMode
            }
          }
        ]
      }
    ]
  }
};

if (productionMode) {
  /* config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // eslint-disable-line camelcase
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]); */
  config.optimization = {
    minimizer: [ new UglifyJsPlugin() ]
  };
}

module.exports = config;
