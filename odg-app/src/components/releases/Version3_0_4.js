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
      <Helmet title="Version 3.0.4" />
      <DocsPage
        title="Version 3.0.4"
      >
        <DocsSection title="September 29, 2020">
          <p>
            This is a patch release that contains documentation enhancements and bug fixes.
          </p>
          <List>
            <ListItem>
              Replaced styling and structure of the Accordion component in order to fix the inconsistent border styling issue when an <Link to="/components/accordion">Accordion</Link> is in focus.
            </ListItem>
            <ListItem>
              Changed the title Headings on the <Link to="/styles/typography">Typography</Link> page (i.e., "Title" becomes "Heading 40", "Heading 1" becomes "Heading 28", etc.) and edits all corresponding specifications tables throughout the application.
            </ListItem>
            <ListItem>
              Fixed styling that caused the text inside of Buttons to wrap when inside of the Preview tab on the <Link to="/components/button">Buttons</Link> page.
            </ListItem>
            <ListItem>
              Adds additional Accessibility content to the <Link to="/components/help-tip">Help Tip</Link> page.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
