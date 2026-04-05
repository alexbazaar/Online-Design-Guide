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
      <Helmet title="Version 3.7.0" />
      <DocsPage
        title="Version 3.7.0"
      >
        <DocsSection title="January 31, 2022">
          <p>
            This is a minor release that introduces an updated <Link to="/components/modal">Modal</Link> UI Element. Also
            included, are a number of ODG application-wide updates, accessibility fixes,
            styling bugs, and content updates. All enhancements and updates are described
            below.
          </p>

          <List>
            <ListItem>
              Added an updated <Link to="/components/modal">Modal</Link> UI Element. The Modal page includes the latest design,
              prototyping, accessibility, and content edits.
            </ListItem>

            <ListItem>
              Updated the HTML and CSS tabs on the following pages: <Link to="/components/accordion">Accordion</Link>,  <Link
                to="/components/button">Buttons</Link>, <Link to="/components/date-field">Date Field</Link>, <Link
                  to="/components/dropdown">Dropdown</Link>, <Link to="/components/help-tip">Help Tip</Link>, <Link
                    to="/components/link">Links</Link>, <Link to="/components/modal">Modal</Link>, <Link to="/components/radio">Radio
                      Button</Link>, <Link to="/components/search-field">Search</Link>, <Link to="/components/spinner">Spinner</Link>, and <Link
                        to="/components/step-indicator">Step Indicator</Link>.
            </ListItem>

            <ListItem>
              Updated the <Link to="/components/search-field">Search</Link> accessibility and applicable standards content.
            </ListItem>

            <ListItem>
              Fixed the border-radius to match the UI Kit and updated the spec tables to reflect the change for the following
              UI Elements: <Link to="/components/button">Buttons</Link>, <Link to="/components/search-field">Search</Link>, and <Link
                to="/components/spinner">Spinner</Link>.
            </ListItem>

            <ListItem>
              On the <Link to="/components/link">Links</Link> page:
              <List>
                <ListItem>
                  Fixed a bug in the preview tab examples to correct the visited link color of the
                  external link icon.
                </ListItem>

                <ListItem>
                  Updated the external link icon specs to reflect the correct icon width of 14px.
                </ListItem>
              </List>
            </ListItem>

            <ListItem>
              On the <Link to="/components/date-field">Date Field</Link> page:
              <List>
                <ListItem>
                  Updated the Calendar Picker close icon to 35px to match the UI Kit and Modal close
                  icon. </ListItem>

                <ListItem>
                  Fixed a focus state styling bug on the Calendar Picker close icon.</ListItem>

                <ListItem> Corrected
                  the names of the Calendar Picker SVG files referenced in the spec table.</ListItem>
              </List>
            </ListItem>

            <ListItem> Updated the <Link to="/components/alert/system-alerts">System Alert</Link> icon from 20px to 24px to be in
              alignment with the Section Alert icons and the UI Kit.</ListItem>

            <ListItem>
              Added the following bullet to the <Link to="/styles/grid-system">Grid System</Link> page:
              <List>
                <ListItem>
                  "The ODG grid is a modified version of U.S. Web Design System (USWDS) grid system that harmonizes with our
                  standard spacing increments."</ListItem></List>
            </ListItem>

            <ListItem>
              Fixed a bug within the <Link to="/components/accordion">Accordion</Link> preview tab to correct the alignment of the
              expand/collapse icons.</ListItem>

            <ListItem>
              Fixed a bug within the <Link to="/components/footer/big-footer">Big Footer</Link> demo page that was causing the
              social media icons to not appear correctly.</ListItem>

            <ListItem>
              Added an external link icon to the Font Awesome link on the <Link to="/styles/iconography">Icons</Link> page.
            </ListItem>

            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>
                  Fixed the styling of the external link icons so that they match the default, hover, and active state color of
                  their corresponding links.</ListItem>

                <ListItem>
                  Fixed the styling of links so that they do not change color when in focus.</ListItem>

                <ListItem>
                  Added the following text within all UI Element spacing tabs to address a contrast compliance issue with the
                  spacing images:
                  <List>
                    <ListItem> "Note: Please refer to the specifications section for more detail." </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>

          </List>

          <p style={{ fontWeight: 'bold' }}>Updates in UI Kit 3.7.0</p>

          <List>
            <ListItem>
              Added new Tags and Badges UI Elements based on research and 508 best practices.&nbsp;The Tags &amp; Badges UI
              Elements have not been prototyped, added to the ODG, or gone through the IRAP approval process yet.</ListItem>

            <ListItem> Added a new Slider UI Element based on research and 508 best practices.&nbsp;The Slider UI Element has
              not been prototyped, added to the ODG, or gone through the IRAP approval process yet. </ListItem>

            <ListItem> Updated Side Navigation row height from 45px to 44px to align with other UI Elements.</ListItem>
            <ListItem> Added border-radius specs to the following UI Elements: Buttons, Search, Pagination, Input Stepper,
              and Spinner.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
