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
      <Helmet title="Version 4.0.0" />
      <DocsPage
        title="Version 4.0.0"
      >
        <DocsSection title="May 06, 2022">
          <p>
            This is a major release that introduces 1 new (Pagination) and 2 updated (Side Navigation &amp; Tab View) UI elements. All icons across the design guide have been updated to Font Awesome 6 and have been compiled with the ODG custom icon set into a downloadable icon library. For more icon information visit the redesigned and improved <Link href="/styles/iconography">icon</Link> page.
          </p>
          <p>
            This release also contains application-wide additions and fixes, accessibility improvements, and minor styling bug fixes. All enhancements, additions and updates are listed below:
          </p>
          <List>
            <ListItem>
              Added a new <Link href="/components/pagination">Pagination</Link> UI element.
            </ListItem>
            <ListItem>
              Updated <Link href="/styles/iconography">Icons</Link> to Font Awesome 6.
            </ListItem>
            <ListItem>
              Redesigned <Link href="/styles/iconography">Icons</Link> page to include a downloadable icon library including custom icons.
            </ListItem>
            <ListItem>
              Updated <Link href="/components/side-navigation">Side Navigation</Link> UI element.
            </ListItem>
            <ListItem>
              Updated <Link href="/components/tab-view">Tab View</Link> UI element.
            </ListItem>
            <ListItem>
              Added bounding box spacing method information and examples to the <Link href="/styles/element-spacing">Spacing</Link> page.
            </ListItem>
            <ListItem>
              Added a new <Link href="/components/text-input">Text Input</Link> landing page that includes <Link href="/components/text-input/text-area">Text Area</Link> and <Link href="/components/text-input/text-field">Text Field</Link> UI elements.
            </ListItem>
            <ListItem>
              Updated best practice and accessibility content on <Link href="/components/text-input/text-area">Text Area</Link> and <Link href="/components/text-input/text-field">Text Field</Link> pages.
            </ListItem>
            <ListItem>
              Updated <Link href="/styles/typography#lists">ordered and unordered</Link> list specifications to use browser default margins and padding for bullets.
            </ListItem>
            <ListItem>
              Added a low-fidelity UI Kit to <Link href="/styles/resources">Resources</Link> page.
            </ListItem>
            <ListItem>
              Updated HTML and CSS tabs on <Link href="/components/form-error-alert">Form Error Alert</Link>, <Link href="/components/header">Header</Link>, <Link href="/components/table">Table</Link> and <Link href="/components/spinner">Spinner</Link> pages.
            </ListItem>
            <ListItem>
              Updated best practice and accessibility content on <Link href="/components/form-error-alert">Form Error Alert</Link>, <Link href="/components/date-field">Date Field</Link>, and <Link href="/components/radio">Radio Button</Link> pages.
            </ListItem>
            <ListItem>
              Fixed calendar icon spacing on <Link href="/components/date-field">Date Field</Link> to match UI Kit specifications.
            </ListItem>
            <ListItem>
              Fixed active <Link href="/components/radio">Radio Button</Link> border radius to match UI Kit specifications.
            </ListItem>
            <ListItem>
              Fixed responsive breakpoints on <Link href="/about/roadmap">About</Link> page to correct page cutoff.
            </ListItem>
            <ListItem>
              Fixed CSS tab container overflow on <Link href="/components/step-indicator">Step Indicator</Link> page.
            </ListItem>
            <ListItem>
              Fixed "You owe" column on <Link href="/components/table">Table</Link> page to right align numbers in accordance with best practices.
            </ListItem>
            <ListItem>
              Fixed double focus state box around IRS logo on the <Link href="/big-footer-demo">Big Footer</Link> and <Link href="/slim-footer-demo">Slim Footer</Link> demo pages.
            </ListItem>
            <ListItem>
              On the <Link href="/styles/colors">Colors</Link> page:
              <List>
                <ListItem>
                  Added Focus State usage for color #2491FF.
                </ListItem>
                <ListItem>
                  Fixed Breadcrumbs usage from #F3F3F3 to #1B1B1B.
                </ListItem>
                <ListItem>
                  Changed "Content Box" label to "Card".
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>
                  Added ODG page titles to browser tabs.
                </ListItem>
                <ListItem>
                  Fixed H2 heading color on all pages from #002D62 to #1B1B1B.
                </ListItem>
                <ListItem>
                  Added new icons to all UI element spacing images.
                </ListItem>
                <ListItem>
                  Fixed inconstant styling of apostrophe and quotation punctuation by replacing smart quotes with straight quotes.
                </ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <b>Updates in UI Kit 4.0.0</b>
          </p>
          <List>
            <ListItem>
              Removed low-fidelity stencils from UI Kit.
            </ListItem>
            <ListItem>
              Added Font Awesome 6 and custom icon specifications.
            </ListItem>
            <ListItem>
              Added min/max positions to slider examples.
            </ListItem>
            <ListItem>
              Added spacing specifications for red asterisk.
            </ListItem>
            <ListItem>
              Updated side navigation high-fidelity specifications.
            </ListItem>
            <ListItem>
              Updated footer social media icons sizing to remain consistent across desktop and mobile.
            </ListItem>
            <ListItem>
              Updated ordered and unordered list specifications to use browser default margins and padding for bullet.
            </ListItem>
            <ListItem>
              Updated section spacing to 24px on typography page.
            </ListItem>
            <ListItem>
              Updated spacing specification styling to use red text instead of red boxes with white numbers.
            </ListItem>
            <ListItem>
              Added missing spacing specifications for the big and slim footer between the Privacy Policy, vertical pipe, and Accessibility links.
            </ListItem>
            <ListItem>
              Added white fill color specifications for outlined buttons.
            </ListItem>
            <ListItem>
              Updated system alerts specification page examples.
            </ListItem>
            <ListItem>
              Updated the calendar picker to align left on the end date field to match ODG implementation.
            </ListItem>
            <ListItem>
              Fixed the mobile header menu label from "Menu" to "Close" when the menu is open.
            </ListItem>

          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
