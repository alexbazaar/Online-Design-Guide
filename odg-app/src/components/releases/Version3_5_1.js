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
      <Helmet title="Version 3.5.1" />
      <DocsPage
        title="Version 3.5.1"
      >
        <DocsSection title="September 29, 2021">
          <p>
          This is a patch release that contains accessibility fixes, styling bug fixes, and content updates.    
          </p>
          <List>
              <ListItem>Updated the Accessibility Applicable Standards formatting and links on the following pages: Buttons, Step Indicator, Header, and Focus State.</ListItem>
              <ListItem>Fixed the divider line on the Getting Started page so that it is hidden from Assistive Technology.</ListItem>
              <ListItem>Fixed the focus state styling examples within the Preview tab on the following pages: Date Field, Dropdown, Text Area, and Text Field.</ListItem>
              <ListItem>Fixed a spelling error on the Breadcrumbs page.</ListItem>  
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
