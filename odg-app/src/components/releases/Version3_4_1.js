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
      <Helmet title="Version 3.4.1" />
      <DocsPage
        title="Version 3.4.1"
      >
        <DocsSection title="March 29, 2021">
          <p>
          This is a patch release that contains application-wide bug fixes, accessibility fixes, and content updates.
          </p>
          <List>
              <ListItem>Added a "Known Accessibility Issues" section and content to the <Link to="/components/tab-view">Tab View</Link> page.</ListItem>
              <ListItem>Corrected the ODG side navigation positioning so that it displays in the same location on all pages.</ListItem>
              <ListItem>Updated the <Link to="/components/step-indicator">Interactive Step Indicator</Link> so that the focus state appears on all interactive steps including the active step. Adjusted the focus state box to include the circle and the label.</ListItem>
              <ListItem>Updated the <Link to="/components/step-indicator">Step Indicator</Link> accessibility content.</ListItem>  
              <ListItem>Changed the ODG side navigation label "Alert" to "Alerts".</ListItem>
              <ListItem>Updated existing <Link to="/styles/typography">Typography</Link> page content and added an "Accessibility" section and content.</ListItem>
              <ListItem>Added a new bullet to the Best Practices section on the <Link to="/components/form-error-alert">Form Error Alert</Link> page.</ListItem>
              <ListItem>Updated the colors used within all ODG HTML and CSS tabs to be color contrast compliant.</ListItem>
              <ListItem>Corrected the spacing used in the button examples displayed within the "Inline vs. Block" section of the <Link to="/components/button">Buttons</Link> page.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
