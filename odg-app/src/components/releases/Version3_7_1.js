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
      <Helmet title="Version 3.7.1" />
      <DocsPage
        title="Version 3.7.1"
      >
        <DocsSection title="February 17, 2022">
          <p>
            This is a patch release that contains application-wide bug corrections, accessibility improvements, and minor styling bug fixes:
          </p>
          <List>
            <ListItem>
              Updated HTML/CSS tabs for <Link href="/components/text-field">Text Field</Link> and <Link href="/components/text-area">Text Area</Link>.
            </ListItem>
            <ListItem>
              Fixed header level inconsistencies throughout the ODG site to address accessibility issues.
            </ListItem>
            <ListItem>
              Fixed a bug to correct the display of the font awesome external link icon on load.
            </ListItem>
            <ListItem>
              Removed the corner radius values of the input fields on the following pages: <Link href="/components/search-field">Search</Link>, <Link href="/components/form-overview">Form Overview</Link>, <Link href="/components/date-field">Date Field</Link>, <Link href="/components/dropdown">Dropdown</Link>, <Link href="/components/text-field">Text Field</Link>, <Link href="/components/text-area">Text Area</Link>.
            </ListItem>
            <ListItem>
              Corrected font weight and color on the <Link href="/getting-started">Getting Started</Link> page.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
