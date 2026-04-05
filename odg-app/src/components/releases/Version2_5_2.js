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
      <Helmet title="Version 2.5.2" />
      <DocsPage
        title="Version 2.5.2"
      >
        <DocsSection title="April 10, 2020">
          <p>
            This is a minor release that adjusted the grid breakpoints as well as styling and documentation updates to several different UI elements.
          </p>
          <List>
            <ListItem>
              Based on revised Best Practices by our research team, the application's <Link to="/styles/grid-system">grid system breakpoints</Link> were updated.
            </ListItem>
            <ListItem>
              Enhanced the functionality of <Link to="/components/button">Buttons</Link> by allowing a normal button to become 100% wide on mobile devices when a <code>prop</code> is added to the HTML element.
            </ListItem>
            <ListItem>
              We updated the style of links within our <Link to="/components/breadcrumbs">Breadcrumbs</Link> UI element by changing the colors of <code>visited</code>, <code>hover</code>, and <code>active</code> states.
            </ListItem>
            <ListItem>
              Updated the styling and documentation of the <Link to="/components/modal">Modal</Link> component to match the latest <Link to="/styles/resources">UI Kit v4.2</Link>.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
