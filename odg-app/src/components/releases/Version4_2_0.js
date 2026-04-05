import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link from "../../../../ols-ui/src/components/Links";

import colorStyles from "../../styles/Colors.scss";
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
      <Helmet title="Version 4.2.0" />
      <DocsPage title="Version 4.2.0">
        <DocsSection title="October 27, 2022">
          <p>
            This is a minor release that updates button labels across ODG UI elements from all caps to sentence case, and adds a hover state to the <Link href="/components/help-tip">Help Tip</Link> and <Link href="/components/input-stepper">Input Stepper</Link>. This release also contains application-wide corrections, accessibility improvements, content updates, and minor styling bug fixes. All enhancements, additions, and updates are listed below:
          </p>
          <List>
            <ListItem>
              Added a hover state and specs to the <Link href="/components/help-tip">Help Tip</Link> UI element.
            </ListItem>
            <ListItem>
              Added a hover state and specs to the <Link href="/components/input-stepper">Input Stepper</Link> UI element.
            </ListItem>
            <ListItem>
              Added IRS Logo specifications to the <Link href="/components/footer/big-footer">Big Footer</Link> and <Link href="/components/footer/slim-footer">Slim Footer</Link> pages.
            </ListItem>
            <ListItem>
              Added a note to the <Link href="/components/badge-and-tag/classification-tag">Classification Tag</Link> preview tab.
            </ListItem>
            <ListItem>
              Added a back button to the <Link href="/pagination-demo">Pagination</Link>, <Link href="/big-footer-demo">Big Footer</Link>, and <Link href="/slim-footer-demo">Slim Footer</Link> demo pages.
            </ListItem>
            <ListItem>
              Added known accessibility issues on <Link href="/components/form-overview">Form Overview</Link>, <Link href="/components/date-field">Date Field</Link>, <Link href="/components/text-input/text-area">Text Area</Link>, <Link href="/components/text-input/text-field">Text Field</Link>, <Link href="/components/input-stepper">Input Stepper</Link>, and <Link href="/components/dropdown">Dropdown</Link> pages.
            </ListItem>
            <ListItem>
              Updated button labels from all caps to sentence case on <Link href="/components/back-to-top">Back to Top</Link>, <Link href="/components/button">Buttons</Link>, <Link href="/components/card">Card</Link>, <Link href="/components/modal">Modal</Link>, <Link href="/components/pagination">Pagination</Link>, and <Link href="/components/search-field">Search Field</Link> pages including spacing images.
            </ListItem>
            <ListItem>
              Updated the IRS logo size on the <Link href="/components/footer/big-footer">Big Footer</Link> and <Link href="/components/footer/slim-footer">Slim Footer</Link> UI elements to match the UI Kit.
            </ListItem>
            <ListItem>
              Updated the icon sizes to match the UI Kit specs on the <Link href="/components/accordion">Accordion</Link>, <Link href="/components/alert/system-alerts">System Alerts</Link>, <Link href="/components/back-to-top">Back to Top</Link>, <Link href="/components/date-field">Date Field</Link>, and <Link href="/components/footer/big-footer">Big Footer</Link>.
            </ListItem>
            <ListItem>
              Updated content on the <Link href="/styles/typography">Typography</Link> page.
            </ListItem>
            <ListItem>
              Updated content on <Link href="/components/badge-and-tag">Badge and Tag</Link>, <Link href="/components/badge-and-tag/badge">Badge</Link>, <Link href="/components/badge-and-tag/classification-tag">Classification Tag</Link>, and <Link href="/components/badge-and-tag/emphasis-tag">Emphasis Tag</Link> pages.
            </ListItem>
            <ListItem>
              Updated subtitle text on the <Link href="/components/badge-and-tag/classification-tag">Classification Tag</Link> page.
            </ListItem>
            <ListItem>
              Updated the checkmark icon size on the <Link href="/about/roadmap">Roadmap</Link> page.
            </ListItem>
            <ListItem>
              Updated page content on the <Link href="/components/button">Buttons</Link> page.
            </ListItem>
            <ListItem>
              Updated the <Link href="/components/radio-button">Radio Button</Link> URL from /radio to /radio-button.
            </ListItem>
            <ListItem>
              Updated file names in the icon library zip file to match the individual download file names on the <Link href="/styles/iconography">Icons</Link> page.
            </ListItem>
            <ListItem>
              Fixed 2 broken links on the <Link href="/big-footer-demo">Big Footer demo</Link> page (About IRS &amp; Civil Rights).
            </ListItem>
            <ListItem>
              Fixed broken URLs and adjusted content on them <Link href="/about/faq">FAQ</Link> page.
            </ListItem>
            <ListItem>
              Fixed a spacing inconsistency between the label and asterisks on <Link href="/components/form-overview">Form Overview</Link>, <Link href="/components/date-field">Date Field</Link>, <Link href="/components/dropdown">Dropdown</Link>, <Link href="/components/text-input/text-area">Text Area</Link>, and <Link href="/components/text-input/text-field">Text Field</Link> pages.
            </ListItem>
            <ListItem>
              Fixed the calendar picker arrow icon sizes on <Link href="/components/date-field">Date Field</Link> page.
            </ListItem>
            <ListItem>
              Removed a bullet from the best practices section on the <Link href="/components/side-navigation">Side Navigation</Link> page.
            </ListItem>
            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>Added the ODG Slim Footer.</ListItem>
                <ListItem>Updated IRS logo size in footer.</ListItem>
                <ListItem>Fixed the external icon size.</ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <h3 className={styles.versionHeading3}>Updates in UI Kit 4.2.0</h3>
          </p>
          <List>
            <ListItem>
              Added Input Stepper hover state, label, and help text.
            </ListItem>
            <ListItem>
              Added the authenticated header UI Element based on research and
              508 best practices. The authenticated header UI Element has not
              been prototyped, added to the ODG, or gone through the IRAP
              approval process yet.
            </ListItem>
            <ListItem>Updated all buttons to sentence case. </ListItem>
            <ListItem>
              Updated Dropdown images to reflect browser defaults.
            </ListItem>
            <ListItem>
              Removed references to the low fidelity symbols and styles.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
