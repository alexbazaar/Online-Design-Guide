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
      <Helmet title="Version 3.0.2" />
      <DocsPage
        title="Version 3.0.2"
      >
        <DocsSection title="August 3, 2020">
          <p>
            This is a patch release that contains application-wide bug fixes and a styling edit.
          </p>
          <List>
            <ListItem>
              Fixed a couple of minor, application-wide bugs that appeared in Internet Explorer: the first incorrectly displayed a white screen at 400% magnification on certain pages and the second pushed the text of a <Link to="/components/alert/system-alerts">System Alert</Link> behind the header.
            </ListItem>
            <ListItem>
              Updated the accessible "Skip to Main" link anchor points throughout the Online Design Guide. The link now takes the user to the correct heading within the main content of a given page.
            </ListItem>
            <ListItem>
              Extended the focus box around an <Link to="/components/accordion">Accordion</Link> button to include the space on the left side of the icon.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
