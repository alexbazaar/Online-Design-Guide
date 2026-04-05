import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link from "../../../../ols-ui/src/components/Links";

import colorStyles from "../../styles/Colors.scss";

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
      <Helmet title="Version 4.1.0" />
      <DocsPage title="Version 4.1.0">
        <DocsSection title="July 26, 2022">
          <p>
            This is a minor release that introduces four (4) new UI elements – <Link href="/components/input-stepper">Input Stepper</Link>, <Link href="/components/badges-and-tags/badges">Badges</Link>, <Link href="/components/badges-and-tags/classification-tag">Classification Tag</Link>, and <Link href="/components/badges-and-tags/emphasis-tag">Emphasis Tag</Link>. This release also contains application-wide corrections, accessibility improvements, content updates, and minor styling bug fixes. All enhancements, additions, and updates are listed below:
          </p>

          <List>
            <ListItem>
              Added a new <Link href="/components/input-stepper">Input Stepper</Link> UI element.</ListItem>
            <ListItem>
              Added a new <Link href="/components/badges-and-tags/badges">Badges</Link> UI element.</ListItem>
            <ListItem>
              Added a new <Link href="/components/badges-and-tags/classification-tag">Classification Tag</Link> UI element.</ListItem>
            <ListItem>
              Added a new <Link href="/components/badges-and-tags/emphasis-tag">Emphasis Tag</Link> UI element.
            </ListItem>
            <ListItem>
              Added a hover state to the <Link href="/components/accordion">Accordion</Link> UI element including spec updates.
            </ListItem>
            <ListItem>
              Updated accessibility content to the <Link href="/components/checkbox">Checkbox</Link> page.
            </ListItem>
            <ListItem>
              Updated applicable standards links on the <Link href="/components/radio">Radio Button</Link> page.
            </ListItem>
            <ListItem>
              Fixed broken applicable standards links on <Link href="/components/accordion">Accordion</Link>, <Link href="/components/alert/section-alerts">Section Alerts</Link>, <Link href="/components/table">Table</Link>, <Link href="/components/side-navigation">Side Navigation</Link>, <Link href="/components/step-indicator">Step Indicator</Link>, <Link href="/components/tab-view">Tab View, </Link> and <Link href="/components/modal">Modal</Link> pages.
            </ListItem>

            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>
                  Updated styling of HTML tags and Aria labels within page content to code font.
                </ListItem>
                <ListItem>
                  Removed custom styling from unordered lists to use browser default bullets.
                </ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <b>Updates in UI Kit 4.1.0</b>
          </p>
          <List>
            <ListItem>Updated Footer IRS logo specs.</ListItem>
            <ListItem>Updated Header IRS logo specs.</ListItem>
            <ListItem>
              Updated "Tags &amp; Badges" section to "Badges &amp; Tags".
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
