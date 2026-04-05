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
      <Helmet title="Version 2.5.7" />
      <DocsPage
        title="Version 2.5.7"
      >
        <DocsSection title="June 22, 2020">
          <p>
            This is a minor release that contains a bug fix and updates to several components.
          </p>
          <List>
            <ListItem>
              Updated the size and SVG specifications for the <Link to="/styles/iconography">AngleLeftIcon</Link> and <Link to="/styles/iconography">AngleRightIcon</Link> used in the <Link to="/components/button">Button</Link>, <Link to="/components/dropdown">Dropdown</Link>, and <Link to="/components/datefield">DateField (Calendar Picker)</Link> components.
            </ListItem>
            <ListItem>
              Increased the size of the <Link to="/styles/iconography">ExternalLinkIcon</Link> within the <Link to="/components/link">Links</Link> component to match the <Link to="/styles/resources">Sketch UI Kit v5.1</Link>.
            </ListItem>
            <ListItem>
              Fixed a bug that had showed a blank white screen when clicking on certain components (i.e., Date Field) due to resizing functionality.
            </ListItem>
            <ListItem>
              Updated the <Link to="/faq">FAQ</Link> page with new links.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
