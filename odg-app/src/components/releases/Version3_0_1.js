import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../../ols-ui/src/components/Links";

import colorStyles from '../../styles/Colors.scss';
import Table, { TableCell, TableHeaderCell, TableRow } from "../../../../ols-ui/src/components/Tables";

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
      <Helmet title="Version 3.0.1" />
      <DocsPage
        title="Version 3.0.1"
      >
        <DocsSection title="July 20, 2020">
          <p>
            This is a patch release that contains minor styling bugs, consistency fixes, and text changes.
          </p>
          <List>
            <ListItem>
              Removed the <Link to="/styles/iconography">ExternalLinkIcon</Link> used in the <Link to="/components/footer">Footer</Link> of the Online Design Guide framework.
            </ListItem>
            <ListItem>
              Updated the button styling and the top banner (on IE) on the <Link to="/getting-started">Getting Started</Link> page for consistency with other buttons and browsers.
            </ListItem>
            <ListItem>
              Changed the text and links of <Link to="/styles/iconography">Icon</Link> references in the specifications tables of several UI Element pages.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
