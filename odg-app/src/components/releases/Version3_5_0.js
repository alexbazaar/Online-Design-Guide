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
      <Helmet title="Version 3.5.0" />
      <DocsPage
        title="Version 3.5.0"
      >
        <DocsSection title="August 12, 2021">
          <p>
            This is a minor release that introduces a new <Link to="/components/back-to-top">Back to Top</Link> UI Element and a new <Link to="/styles/focus-state">Focus State</Link> Design Style. This release updated all UI Elements to follow the Bounding Box method of spacing. Updates were made to many Accessibility Applicable Standards throughout the ODG. All enhancements and updates are described below.
          </p>
          <List>
            <ListItem>Added a new <Link to="/components/back-to-top">Back to Top</Link> UI Element.</ListItem>
            <ListItem>Added a new <Link to="/styles/focus-state">Focus State</Link>  Design Style.</ListItem>
            <ListItem>All UI Elements have been updated to follow the Bounding Box method of spacing. This includes edits to the prototyped elements within the Preview tab, updates to the images within the Spacing tab, and updates to the Specification tables.</ListItem>
            <ListItem> Updated the Accessibility Applicable Standards formatting and links for the following UI Elements and Design Styles:
            <List>
              <ListItem>UI Elements: Accordion, Section Alerts, System Alerts, Breadcrumbs, Content Box, Help Tip, Links, Modal, Spinner, Tab View, Table, Form Overview, Checkbox, Date Field, Dropdown, Form Error Alert, Radio Button, Text Area, Text Field</ListItem>
              <ListItem>Design Styles: Focus State, Typography</ListItem>
            </List>
            </ListItem>  
            <ListItem>All ODG HTML and CSS tabs have been updated with the latest generated code.</ListItem>
            <ListItem>Updated the spacing to the left and right of the mobile Calendar Picker used within the <Link to="/components/date-field">Date Field</Link> component to be consistent with our mobile Modal spacing.</ListItem>
            <ListItem>Updated the <Link to="/components/card">Content Box</Link> spacing specifications to be in alignment with the spacing system used on other UI Elements.</ListItem>
            <ListItem>Updated <Link to="/components/button">Buttons</Link> and <Link to="/components/link">Links</Link> so that they do not change color when in focus.</ListItem>
            <ListItem>Updated the placement of the required input red asterisk to include a space between the label and the asterisk on the following UI Elements:
            <List>
              <ListItem><Link to="/components/form-overview">Form Overview</Link></ListItem>
              <ListItem><Link to="/components/date-field">Date Field</Link></ListItem>
              <ListItem><Link to="/components/dropdown">Dropdown</Link></ListItem>
              <ListItem><Link to="/components/text-area">Text Area</Link></ListItem>
              <ListItem><Link to="/components/text-field">Text Field</Link></ListItem>
            </List>
            </ListItem>
            <ListItem>Enhancements made to the ODG site include:
            <List>
              <ListItem>Updated IRS logo within ODG Header and Footer</ListItem>
              <ListItem>Updated the focus state styling applied throughout the ODG</ListItem>
            </List>
            </ListItem>
          </List>
          <p style= {{ fontWeight: 'bold' }}>Updates in UI Kit 3.5.0</p>
          <List>
            <ListItem>Updated the Tab View UI Element based on research and 508 best practices. The updated Tab View now includes a mobile design. The Tab View UI Element has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Updated the Modal UI Element based on research and 508 best practices. The updated Modal now includes a mobile design. The Modal UI Element has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Added a new Input Stepper UI Element based on research and 508 best practices. The Input Stepper UI Element has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Added a new Back Next Cancel UI Pattern based on research and 508 best practices. The Back Next Cancel UI Pattern has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>Added a new Exit Modal UI Pattern based on research and 508 best practices. The Exit Modal UI Pattern has not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>   
            <ListItem>Added new Multistep Form Templates based on ODG UI Elements and UI Patterns. The Multistep Form Templates have not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>
            <ListItem>All spacing measurements have been updated to the Bounding Box spacing method.</ListItem>
            <ListItem>Updated the spacing to the left and right of the mobile Calendar Picker to be consistent with our mobile Modal spacing.</ListItem>
            <ListItem>Removed the box shadow on the Close icon of the mobile Calendar Picker to be consistent with our mobile Modal icon.</ListItem>
            <ListItem>Updated the Calendar Picker specs to include the size of the Active and Hover circles.</ListItem>
            <ListItem>Renamed Secondary Navigation to Side Navigation to be in alignment with USWDS.</ListItem>
            <ListItem>Removed the mobile accordion version of the Side Navigation. The desktop secondary navigation should move into the mobile menu on mobile to be in alignment with USWDS.</ListItem>
            <ListItem>Corrected icon color, icon hover color, error text color, and error border color hex codes on the Date Field spec page.</ListItem>
            <ListItem>Removed the Panel UI Element. The Content Box UI Element has replaced the Panel UI Element.</ListItem>
            <ListItem>Focus State updates:
            <List>
              <ListItem>Accordion: Updated the Focus State on the expanded Accordion to only appear around the header area (similar to the collapsed accordion)</ListItem>
              <ListItem>Header: Removed the 4px buffer from "Here's how you know" link</ListItem>
              <ListItem>Breadcrumb: Removed 4px buffer from links</ListItem>
              <ListItem>Modal: Added focus state to close icon with 4px buffer</ListItem>
              <ListItem>Calendar Picker: Added focus state to arrow icons with 4px buffer</ListItem>
            </List>
            </ListItem>
            <ListItem>Updated the desktop Header UI Element to properly align with the extra large grid.</ListItem>
            <ListItem>Updated the Content Box spacing specifications to be in alignment with the spacing system used on other UI Elements.</ListItem>
            <ListItem>Updated Footer content to reflect latest IRS.gov Footer content.</ListItem>
            <ListItem> Added a new Required Input section to demonstrate the red asterisk placement and styling on required fields. This has been added to the spec pages of the following UI Elements:
            <List>
              <ListItem>Date Field</ListItem>
              <ListItem>Date Range</ListItem>
              <ListItem>Dropdown</ListItem>
              <ListItem>Text Area</ListItem>
              <ListItem>Text Field</ListItem>
            </List>
            </ListItem>
            <ListItem>Added the "ODG Status: In Progress" disclaimer box to the table pages.</ListItem>
            <ListItem>Removed the "ODG Status: In Progress" disclaimer box from the Form Error Alert pages.</ListItem>
            <ListItem>Enhancements made to the UI Kit include:
            <List>
              <ListItem>Updated specification text and line colors to follow ODG color palette</ListItem>
              <ListItem>Added a new Asterisk symbol for use with Required Input</ListItem>
              <ListItem>Updated the spacing examples on the Spacing page</ListItem>
            </List>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
