const ReactDOMServer = require("react-dom/server");
const prettier = require("prettier");

module.exports = (example) => prettier.format(ReactDOMServer.renderToStaticMarkup(example));
