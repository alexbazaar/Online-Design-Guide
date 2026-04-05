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
      <Helmet title="Version 2.5.1" />
      <DocsPage
        title="Version 2.5.1"
      >
        <DocsSection title="March 27, 2020">
          <p>
            This is a minor release with numerous styling, accessibility and functionality changes made across the application.
          </p>
          <List>
            <ListItem>
              The Sketch UI Kit was updated to v4.2. The new version of the kit can be downloaded on the <Link to="/getting-started">Getting Started</Link> page.
            </ListItem>
            <ListItem>
              Most custom icons that we were using throughout the application were replaced with reusable icons, utilizing our <Link to="/styles/iconography">Icon</Link> components.
            </ListItem>
            <ListItem>
              There were many style updates to components that stemmed from updates made to our Sketch UI Kit. Some of these components include: <Link to="/components/step-indicator">Step Indicator</Link>, <Link to="/components/search-field">Search</Link>, <Link to="/components/accordion">Accordion</Link>, <Link to="/components/button">Buttons</Link>, <Link to="/components/alert/section-alerts">Section Alerts</Link>, and <Link to="/components/alert/system-alerts">System Alerts</Link>.
            </ListItem>
            <ListItem>
              Various 508 accessibility issues were discovered while setting up separate testing pages. These 508 issues have been resolved for components such as <Link to="/components/tab-view">Tab View</Link>, <Link to="/components/search-field">Search</Link>, <Link to="/components/button">Buttons</Link>, <Link to="/components/help-tip">Help Tip</Link>, and <Link to="/components/link">Links</Link>, to name a few.
            </ListItem>
            <ListItem>
              Documentation improvements were made to the UI Element pages to enhance the Specification Tables and Accessibility Notes based on the above styling and 508 fixes.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
