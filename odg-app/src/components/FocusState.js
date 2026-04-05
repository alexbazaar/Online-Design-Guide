import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Link, { ExternalLink, EmailLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import styles from "../styles/App.scss";


/**
 * *****************************************************************************
 * Design Focus State section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function FocusState() {
  return (
    <div>
      <Helmet title="Focus state" />
      <DocsPage
          className="docs-styles"
          title="Focus state"
          subtitle="Focus states are visual indicators that appear when a user has highlighted an element using a keyboard or voice command."
        >
        <DocsSection title="When to use">
          <p>
          Focus states should be applied to all interactive components of the website. This includes (but is not limited to) buttons, toggles, selection controls, menu items, links, text fields, and form/input fields (checkboxes, radio buttons, etc.).
          </p>
        </DocsSection>
        <DocsSection title="Specifications">
          <p>Please refer to each component for focus state specifications.</p>

          <h3>Focus state</h3>
          <Table
            caption="Focus State Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>3px</TableCell>
                <TableCell><Link to="/styles/colors">Blue vivid</Link></TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (where applicable)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
      </DocsSection>
      <DocsSection title="Usability guidance">
        <List>
          <ListItem>
            Only one element of a page should be focused at any time.
          </ListItem>
          <ListItem>
            Although most major browsers (including Chrome, Internet Explorer, Safari, and Firefox) have default focus indicators, none of them look consistent. For a consistent look and feel across IRS.gov and IRS.gov applications, please follow the ODG focus state styling.
          </ListItem>
          <ListItem>
            Focus indicators should have sharp contrast from the elements they are highlighting. For example, a box placed around a link should not be the same blue as the link text itself. If a menu item is in focus, the focus color used should not be a similar color to the background of the menu itself.
          </ListItem>
          <ListItem>
            Focus indicators should be of complimentary shape and size to the elements they are highlighting.
          </ListItem>
        </List>
        </DocsSection>
        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Visible focus requirement helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.
            </ListItem>
            <ListItem>
              Persons with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.
            </ListItem>
            <ListItem>
              When an item has keyboard "focus", it can be activated or manipulated with the keyboard. A sighted keyboard user must be provided with a visual indicator of the element that currently has keyboard focus. A basic focus indicator is provided automatically by the web browser and is typically shown as a border (called an outline) around the focused element.
            </ListItem>
            <ListItem>
              Don't turn off focus indicator with CSS on links and other interactive elements that can receive keyboard focus. Example code: <code>:focus &#65371;outline: none&#65373;</code>.
            </ListItem>
            <ListItem>
              Don't create an outline around links that looks the same as the focus indicator. This makes it impossible for users to determine which one in fact has the focus, even though the user agent does draw the focus indicator. Example code: <code>&#65371;outline: thin dotted black&#65373;</code>.
            </ListItem>
            <ListItem>
              Don't create a border around links that does not have enough contrast for the focus indicator to be seen when drawn on top of it. Example code: <code>&#65371; border: medium solid black&#65373;</code>. In this example the focus indicator is drawn just outside the border, but as both are black and the border is thicker that the focus indicator, it no longer meets the definition of "visible".
            </ListItem>
            <ListItem>
              Make sure the focus state, displaying when hovering or tabbing with a keyboard, meets contrast minimum requirement of 3:1, except when "determined by user agent". If you use the default styles provided by the browser, then these contrast requirements do not apply.
            </ListItem>
            <ListItem>
              When CSS is used to make the focus indicator more visually apparent and keyboard-friendly, make sure the focus indicator meets 3:1 contrast ratio with the adjacent colors (including the component), or to be separated from the component, or to be at least 2px thick.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={styles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum">1.4.3 Contrast Minimum</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-contrast">1.4.11 Non-text Contrast </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">2.4.7 Focus Visible</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#on-focus">3.2.1 On Focus</ExternalLink></ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(FocusState));
