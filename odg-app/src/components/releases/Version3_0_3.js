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
      <Helmet title="Version 3.0.3" />
      <DocsPage
        title="Version 3.0.3"
      >
        <DocsSection title="August 18, 2020">
          <p>
            This is a patch release that contains some accessibility fixes and a styling edit.
          </p>
          <List>
            <ListItem>
              Fixed announcement of incorrect number of steps completed while using Voiceover for the <Link to="/components/step-indicator">Step Indicator</Link>.</ListItem>
            <ListItem>
              Updated the icon alignment for the <Link to="/components/accordion">Accordion</Link> when the title flows onto two lines.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
