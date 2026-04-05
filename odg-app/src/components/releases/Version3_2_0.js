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
      <Helmet title="Version 3.2.0" />
      <DocsPage
        title="Version 3.2.0"
      >
        <DocsSection title="November 09, 2020">
          <p>
            This is a minor release that introduces a new About section that shows a Roadmap of the Online Design Guide and Frequently Asked Questions.
            This release also introduces a new Email Link component. There are a few bug fixes and documentation enhancements included that are described below.
          </p>
          <List>
            <ListItem>Created a new <Link to="/about">About</Link> section that includes an <Link to="/about/roadmap">ODG Roadmap</Link> and <Link to="/about/faq">FAQ</Link>.</ListItem>
            <ListItem>Added IRAP accessibility links to the <Link to="/components/alert/section-alerts">Section</Link> and <Link to="/components/alert/system-alerts">System Alerts</Link> pages.</ListItem>
            <ListItem>Updated the Specifications table for the mobile <Link to="/components/step-indicator">Step Indicator</Link> so that the heading correctly shows a Heading 20 font size.</ListItem>
            <ListItem>Updated the <Link to="/components/link">Links</Link> page and the links section of the <Link to="/styles/typography">Typography</Link> page to show an email link design.</ListItem>
            <ListItem>Added a PDF version of the UI Kit to the <Link to="/styles/resources">Resources</Link> page.</ListItem>
            <ListItem>Updated inline form field errors to follow IRAP guidance.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
