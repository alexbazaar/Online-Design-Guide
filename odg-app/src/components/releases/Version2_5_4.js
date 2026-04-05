import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../../ols-ui/src/components/Links";

import styles from "../../styles/App.scss";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Version() {
  return (
    <div>
      <Helmet title="Version 2.5.4" />
      <DocsPage
        title="Version 2.5.4"
      >
        <DocsSection title="May 11, 2020">
          <p>
            This is a minor release that continues to sync various UI Elements with the latest <Link to="/styles/resources">UI Kit v4.8</Link>, removes <Link to="/components/alert">Alert</Link> functionality, and renames the Colors throughout the ODG.
          </p>
          <List>
            <ListItem>
              Fixed the documentation and added a new spacing image to the <Link to="/components/search-field">Search Field</Link>, <Link to="/components/text-field">Text Field</Link>, <Link to="/components/text-area">Text Area</Link>, and <Link to="/components/table">Table</Link> components.
            </ListItem>
            <ListItem>
              Resized all Spacing tab images for various breakpoints in order to size properly on mobile devices and when using IE11.
            </ListItem>
            <ListItem>
              Renames colors on the <Link to="/styles/colors">Colors</Link> page and replaces all color names in the Specifications tables on each UI Element page to contain only the name of the color (e.g., <code>Gray Darkest</code>) rather than the variable name (e.g., <code>$color-black</code>).
            </ListItem>
            <ListItem>
              Removed the dismiss "X" functionality, the Preview tab stacking on mobile devices, and the documentation for <Link to="/components/alert/system-alerts">System Alerts</Link> and <Link to="/components/alert/section-alerts">Section Alerts</Link>.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
