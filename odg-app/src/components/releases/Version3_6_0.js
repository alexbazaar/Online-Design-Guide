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
      <Helmet title="Version 3.6.0" />
      <DocsPage
        title="Version 3.6.0"
      >
        <DocsSection title="December 8, 2021">
          <p>
          This is a minor release that introduces a new <Link to="/components/footer">Footer</Link> section that includes the <Link to="/components/footer/big-footer">Big Footer</Link> and the new <Link to="/components/footer/slim-footer">Slim Footer</Link> UI Elements. This release updated a number of research and accessibility best practices throughout the ODG. Also included, are a number of ODG application-wide updates, accessibility fixes, styling bugs, and content updates. All enhancements and updates are described below.
          </p>
          <List>
              <ListItem>Added a new <Link to="/components/footer">Footer</Link> section that includes the <Link to="/components/footer/big-footer">Big Footer</Link> and new <Link to="/components/footer/slim-footer">Slim Footer</Link> UI Elements. These UI Elements include the latest design, prototyping, accessibility, and content edits. </ListItem>
              <ListItem>Updated the spacing images on <Link to="/components/back-to-top">Back to Top</Link> and <Link to="/components/button">Buttons</Link> pages.</ListItem>
              <ListItem>Updated best practice and accessibility content on <Link to="/components/help-tip">Help Tip</Link>, <Link to="/components/card">Card</Link>, <Link to="/styles/typography"> Typography</Link>, and <Link to="/components/form-overview">Form Overview</Link> pages.</ListItem>
              <ListItem>Updated the applicable standards on the <Link to="/components/sidebar">Sidebar</Link> and <Link to="/components/back-to-top">Back to Top</Link> pages.</ListItem>
              <ListItem>Renamed the "Content Box" UI Element to <Link to="/components/card">Card</Link> to be in alignment with industry standards.</ListItem>
              <ListItem>Added "Component Update in Progress" section alerts to the <Link to="/components/modal">Modal</Link>, <Link to="/components/tab-view">Tab View</Link>, and <Link to="/components/table">Table</Link> pages.</ListItem>
              <ListItem>Fixed a bug within the <Link to="/components/alert/system-alerts">System Alert</Link> preview tab example to correct the link color.</ListItem>
              <ListItem>Fixed a bug with the Calendar Picker on the <Link to="/components/date-field">Date Field</Link> page to correct a styling issue that appeared when the page first loads.</ListItem>
              <ListItem>Updated the HTML and CSS tabs on the <Link to="/components/alert/section-alerts">Section Alert</Link>, <Link to="/components/alert/system-alerts">System Alerts</Link>, and <Link to="/components/breadcrumb">Breadcrumb</Link> pages.</ListItem>
              <ListItem>Updated the <Link to="/components/alert/section-alerts">Section Alerts</Link> preview tab to be in alignment with the layout presented within the UI Kit.</ListItem>
              <ListItem>Updated the <Link to="/components/card">Card</Link> preview tab examples to include two and three line links to be in alignment with the layouts presented within the UI Kit.</ListItem>
              <ListItem>Corrected a typo on the <Link to="/styles/iconography">Icon</Link> page</ListItem>
              <ListItem>ODG application-wide updates include:
                <List>
                  <ListItem>Fixed all table captions to address an accessibility bug.</ListItem>
                  <ListItem>Inserted "N/A" into all blank and dashed spec table cells to address an accessibility bug.</ListItem>
                  <ListItem>On the <Link to="/getting-started">Getting Started</Link> page, replaced the graphical bullets with standard bullets to address an accessibility bug. </ListItem>
                </List>
              
              </ListItem>
          </List>
          <p style= {{ fontWeight: 'bold' }}>Updates in UI Kit 3.6.0</p>
          <List>
              <ListItem>Renamed the Footer UI Element to Big Footer.</ListItem>
              <ListItem>Added a new Slim Footer UI Element</ListItem>
              <ListItem>Updated the required field examples and instructions on the spec pages of all form elements. The required fields were also updated in the Multistep Form Templates based on this change.</ListItem>
              <ListItem>Updated Back to Top spacing specs to be in alignment with the bounding box method.</ListItem>
              <ListItem>Updated Button spacing specs to be in alignment with the bounding box method.</ListItem>
              <ListItem>Updated the UI Kit symbols to be aligned with the approved specs based on the recent audit conducted by the design workstream.</ListItem>
              <ListItem>Updated the Typography page to use our current heading naming convention to be in alignment with the ODG. For example, changed "Heading 1" to "Heading 28".</ListItem>
              <ListItem>Added the UI Kit release version to all pages of the UI Kit.</ListItem>
              <ListItem>Added the following bullet to Grid page:
                <List>
                  <ListItem>The ODG grid is a modified version of U.S. Web Design System (USWDS) grid system that harmonizes with our standard spacing increments.</ListItem>
                </List>
              </ListItem>

          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
