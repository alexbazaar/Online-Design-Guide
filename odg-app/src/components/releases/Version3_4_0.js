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
      <Helmet title="Version 3.4.0" />
      <DocsPage
        title="Version 3.4.0"
      >
        <DocsSection title="February 1, 2021">
          <p>
          This is a minor release that updated the <Link to="/components/help-tip">Help Tip</Link> UI Element and includes documentation enhancements for the <Link to="/components/alert">Alerts</Link> and <Link to="/components/modal">Modal</Link> pages:
          </p>
          <List>
              <ListItem>Updated the Help Tip spacing between the <Link to="/components/help-tip">Help Tip</Link> label and the Help Tip icon from 4px to 8px to accommodate the new Focus State style.</ListItem>
              <ListItem>Updated the <Link to="/components/alert">Alerts</Link>, <Link to="/components/alert/section-alerts">Section Alerts</Link>, and <Link to="/components/alert/system-alerts">System Alerts</Link> content to include the latest UI Element Description, When to Use, and Best Practices.</ListItem>
              <ListItem>Updated the <Link to="/components/modal">Modal</Link> content to include the latest UI Element Description, When to Use, Best Practices, and Accessibility information.</ListItem>
          </List>

          <p style= {{ fontWeight: 'bold' }}>Updates in UI Kit 3.4.0</p>

          <List>
            <ListItem>Added a Pagination UI Element based on research and 508 best practices. The Pagination UI Element has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Updated the UI Kit document color names to the match the current color palette names.</ListItem>
            <ListItem>Fixed a bug in the Header main navigation hover state example to correct the color styling.</ListItem>
            <ListItem>Changed the term "Check Box" to "Checkbox" to be consistent with the ODG.</ListItem>
            <ListItem>Fixed a bug on the mobile Button to correct the placement of the mobile Button arrows and corresponding specs.</ListItem>
            <ListItem>Updated the IRS logo throughout all Header and Footer examples with the latest logo received from the IRS Design Office.</ListItem>
            <ListItem>Updated the UI Kit template headers to be contrast compliant.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
