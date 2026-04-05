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
      <Helmet title="Version 2.5.5" />
      <DocsPage
        title="Version 2.5.5"
      >
        <DocsSection title="May 22, 2020">
          <p>
            This is a minor release that continues to sync various UI Elements with the latest <Link to="/styles/resources">UI Kit v4.8</Link>, removes <Link to="/components/alert">Alert</Link> functionality, and renames the Colors throughout the ODG.
          </p>
          <List>
            <ListItem>
              Added a <Link to="/faq">Frequently Asked Questions (FAQ)</Link> page into the ODG.
            </ListItem>
            <ListItem>
              Fixed the <Link to="/components/date-field">Date Field</Link> Calendar Picker modal when resizing in developer mode.
            </ListItem>
            <ListItem>
              Updated the styling of the <Link to="/components/spinner">Spinner</Link> and <Link to="/components/tab-view">Tab View</Link> components. The Spinner had a wavy gray pattern that is now blue. The Tab View has an updated spacing iamge and updated inactive tab font styling.
            </ListItem>
            <ListItem>
              Edited the documentation on the <Link to="/styles/element-spacing">Spacing</Link> page to reflect different breakpoints.
            </ListItem>
            <ListItem>
              Omitted the red (error), blue (info), and green (success) types of <Link to="/components/alert/system-alerts">System Alerts</Link> and updated all corresponding HTML, CSS and other documentation.
            </ListItem>
            <ListItem>
              Added a yellow (warning) "Component Update In Progress" <Link to="/components/alert/section-alerts">Section Alert</Link> to the <Link to="/components/header">Header</Link>, <Link to="/components/footer">Footer</Link> and <Link to="/components/sidebar">Sidebar</Link> pages.
            </ListItem>
            <ListItem>
              Created automatic download functionality for the "Download Sketch File" button on the <Link to="/styles/resources">Resources</Link> page. Instead of taking the user to the IRSLabs Documents folder, it now downloads from the ODG.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
