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
      <Helmet title="Version 2.5.3" />
      <DocsPage
        title="Version 2.5.3"
      >
        <DocsSection title="April 28, 2020">
          <p>
            This is a minor release that continues to sync various UI Elements with the latest <Link to="/styles/resources">UI Kit v4.2</Link>
          </p>
          <List>
            <ListItem>
              Fixed the documentation as well as the styling of the stacked <Link to="/components/buttons">Buttons</Link> in the ODG Buttons page Preview pane on IE and mobile breakpoints.
            </ListItem>
            <ListItem>
              Added new spacing image, <code>hintText</code> functionality and corresponding styling to the <Link to="/components/dropdown">Dropdown</Link> component.
            </ListItem>
            <ListItem>
              Updated the title size of the <Link to="/components/step-indicator">Step Indicator</Link> on smaller breakpoints (i.e., mobile).
            </ListItem>
            <ListItem>
              Edited documentation for <Link to="/components/radio">Radio buttons</Link>, <Link to="/components/date-field">Date Field</Link>.
            </ListItem>
            <ListItem>
              Removes all documentation that cites the verb "to click" and replaces with the verb "to select", per IRAP's guidance.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
