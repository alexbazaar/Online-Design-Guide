import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link from "../../../../ols-ui/src/components/Links";

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
      <Helmet title="Version 2.0.0" />
      <DocsPage
        title="Version 2.0.0"
      >
        <DocsSection title="August 2, 2019">
          <p>
            This release aligned the Online Design Guide with the Sketch Kit template. Extensive style updates were made to conform to the latest iteration of the Sketch Kit which can be accessed by visiting the new <Link to="/styles/resources">Resources</Link> page.
          </p>
          <p>The following pages were updated:
          </p>
          <List>
            <ListItem>Colors</ListItem>
            <ListItem>Typography</ListItem>
            <ListItem>Grid System</ListItem>
          </List>
          <p>The following components were updated:
          </p>
          <List>
            <ListItem>Accordion</ListItem>
            <ListItem>Alerts</ListItem>
            <ListItem>Breadcrumb</ListItem>
            <ListItem>Button</ListItem>
            <ListItem>Form Elements</ListItem>
            <ListItem>Help Tip</ListItem>
            <ListItem>Modal</ListItem>
            <ListItem>Panel</ListItem>
            <ListItem>Search Bar</ListItem>
            <ListItem>Tab</ListItem>
            <ListItem>Table</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
