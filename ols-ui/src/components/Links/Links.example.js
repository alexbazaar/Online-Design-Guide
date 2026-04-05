import React from "react";
import { StaticRouter as Router } from "react-router-dom";
import Link, { ExternalLink } from "./index";

/*
 *
 * The `<Link />` component must be wrapped in `<Router />`
 * We are importing `<StaticRouter>` for this example
 * as it is a `<Router>` that never changes location.
 * The end result of the rendered `<Link />` is the same.
 * For more documentation and examples on `<Router />`,
 * See: https://reacttraining.com/react-router/web/example/basic
 */

module.exports = (
  <div>
    <Router>
      <Link to="/">
        Example link
      </Link>
    </Router>

    <ExternalLink href="http://www.irs.gov">
      Example External link
    </ExternalLink>
  </div>

);
