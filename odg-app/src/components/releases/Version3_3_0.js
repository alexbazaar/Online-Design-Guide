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
      <Helmet title="Version 3.3.0" />
      <DocsPage
        title="Version 3.3.0"
      >
        <DocsSection title="December 08, 2020">
          <p>
          This is a minor release that introduces the <Link to="/components/card">Card</Link> UI Element, which is an upgrade of the Panel component. The release also provides more details on creating forms by adding a <Link to="/components/form-overview">Form Overview</Link> page and a <Link to="/components/form-error-alert">Form Error Alert</Link> page. There are a few bug fixes and documentation enhancements included that are described below.
          </p>
          <List>
            <ListItem>Created a <Link to="/components/card">Card</Link> UI Element</ListItem>
            <ListItem>Created a <Link to="/components/form-overview">Form Overview</Link> page and a <Link to="/components/form-error-alert">Form Error Alert</Link> page</ListItem>
            <ListItem>Updated Specification Tables on the <Link to="/components/date-field">Date Field</Link>, <Link to="/components/dropdown">Dropdown</Link>, <Link to="/components/text-area">Text Area</Link>, and <Link to="/components/text-field">Text Field</Link> components to use correct labels</ListItem>
            <ListItem>Updated the Spacing image on the <Link to="/components/date-field">Date Field</Link> component to no longer show the bottom spacing if there is no content associated with the element</ListItem>
            <ListItem>Moved the <Link to="/components/search-field">Search</Link> page from the Fields and Forms Elements section to the General Elements section</ListItem>
            <ListItem>Changed name of the Fields and Forms Elements section to the Form Elements section</ListItem>
          </List>

          <p style= {{ fontWeight: 'bold' }}>Updates in UI Kit 3.3</p>

          <List>
            <ListItem>Added an updated focus state style that reflects 508 best practices. The focus state style has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Added the Government Banner to our small and extra small display types. Now all display types will show the Government Banner.</ListItem>
            <ListItem>Updated the Spacing image on the Date Field, Dropdown, Text Area, and Text Field components to no longer show the bottom spacing if there is no content associated with the element.</ListItem>
            <ListItem>Updated the Form Error Alert text to show the approved error alert content received from IRAP.</ListItem>
            <ListItem>Fixed a bug in the Calendar Picker to show the previous month and next month carets as blue, rather than black.</ListItem>
            <ListItem>Removed "Status: In Progress" label from the Card pages</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
