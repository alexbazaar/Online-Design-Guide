import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link from "../../../../ols-ui/src/components/Links";

import colorStyles from '../../styles/Colors.scss';

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
      <Helmet title="Version 3.4.2" />
      <DocsPage
        title="Version 3.4.2"
      >
        <DocsSection title="June 21, 2021">
          <p>
            This is a patch release that contains application-wide bug fixes, accessibility fixes, content updates, and a minor styling bug.
          </p>
          <List>
              <ListItem>All ODG HTML and CSS tabs have been updated with the latest generated code.</ListItem>
              <ListItem>Corrected a 508 bug with the ODG header.</ListItem>
              <ListItem>Added a new bullet to the Best Practices section on the <Link to="/components/alert/section-alerts">Section Alerts</Link> page.</ListItem>
              <ListItem>Corrected a typo on the <Link to="/components/button">Buttons</Link> page.</ListItem>  
              <ListItem>Removed all "API Reference" sections.</ListItem>
              <ListItem>Corrected the box shadow on the mobile calendar picker used within the <Link to="/components/date-field">Date Field</Link> component.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
