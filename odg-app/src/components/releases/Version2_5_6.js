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
      <Helmet title="Version 2.5.6" />
      <DocsPage
        title="Version 2.5.6"
      >
        <DocsSection title="June 8, 2020">
          <p>
            This is a minor release that continues to sync various UI Elements with the latest <Link to="/styles/resources">UI Kit v5.1</Link>.
          </p>
          <List>
            <ListItem>
              Removed the heading from the <Link to="/components/step-indicator">Step Indicator</Link> component (i.e., "Step 1 of 5: Getting Started") on large breakpoints (desktop).
            </ListItem>
            <ListItem>
              Revised the design of the <Link to="/components/alert/section-alerts">Section Alerts</Link> to use a thinner vertical stripe, updated the Spacing image, improved how we link to icons on the <Link to="/styles/iconography">Icons</Link> page, and adjusted the specifications tables to reflect the latest design.
            </ListItem>
            <ListItem>
              Added a "Read More" link into the Preview tab of <Link to="/components/alert/system-alerts">System Alerts</Link>, updated the Spacing images per breakpoint, improved links to <Link to="/styles/iconography">Icons</Link>, and adjusted the specifications tables to reflect the latest design.
            </ListItem>
            <ListItem>
              Removed the "Medium/Large" tab and updated the specifications tables on the <Link to="/styles/colors">Typography</Link> page.
            </ListItem>
            <ListItem>
              Updated the <Link to="/styles/colors">Colors</Link> page hex code for Yellow from <code>#FA9E0D</code> to <code>#FDB81E</code>.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
