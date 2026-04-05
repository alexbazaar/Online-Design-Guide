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
      <Helmet title="Version 4.3.1" />
      <DocsPage title="Version 4.3.1">
        <DocsSection title="September 12, 2023">
          <p>
          This is a patch release that contains application-wide corrections, content updates, and minor styling bug fixes:
          </p>
          <List>
            <ListItem>
              Added IRAP approved emphasis tags to <Link to="/components/back-to-top">back to top</Link>, <Link to="/components/badge-and-tag/badge">badge</Link>, <Link to="/components/footer/big-footer">big footer</Link>, <Link to="/components/pagination">pagination</Link>, <Link to="/components/side-navigation">side navigation</Link>, and <Link to="/components/footer/slim-footer">slim footer</Link> pages.
            </ListItem>
            <ListItem>
              Fixed spacing image sizing in mobile on <Link to="/components/badge-and-tag/badge">badge</Link>, <Link to="/components/breadcrumb">breadcrumb</Link>, <Link to="/components/button">button</Link>, <Link to="/components/checkbox">checkbox</Link>, <Link to="/components/help-tip">help tip</Link>, <Link to="/components/input-stepper">input stepper</Link>, <Link to="/components/link">link</Link>, <Link to="/components/radio-button">radio button</Link>, <Link to="/components/footer/slim-footer">slim footer</Link>, <Link to="/components/spinner">spinner</Link>, <Link to="/components/tab-view">tab view</Link>, <Link to="/components/text-input/text-area">text area</Link>, and <Link to="/components/text-input/text-field">text field</Link> pages.
            </ListItem>
            <ListItem>
              Fixed preview image sizing in mobile on <Link to="/components/footer/big-footer">big footer</Link> and <Link to="/components/footer/slim-footer">slim footer</Link> pages.
            </ListItem>
            <ListItem>
              Fixed button padding from 24px to 16px and button label vertical alignment on <Link to="/components/search-field">search</Link> to match the UI Kit.
            </ListItem>
            <ListItem>
              Fixed the icon alignment in mobile on the <Link to="/components/alert/system-alerts">system alert</Link>.
            </ListItem>
            <ListItem>
              Fixed collapsed preview container in mobile on <Link to="/components/card/primary-card">primary card</Link> and <Link to="/components/card/secondary-card">secondary card</Link> pages.
            </ListItem>
            <ListItem>
              Updated primary link weight from Source Sans Pro 600 to 700 on <Link to="/components/card/primary-card">primary card</Link> and <Link to="/components/card/secondary-card">secondary card</Link>.
            </ListItem>
            <ListItem>
              Updated text weight from Source Sans Pro 600 to 700 on <Link to="/components/alert/system-alerts">system alert</Link>.
            </ListItem>
            <ListItem>
              Updated use of Source Sans Pro 600 to 700 on <Link to="/getting-started">getting started</Link> and <Link to="/styles/iconography">iconography</Link> pages.  
            </ListItem>
            <ListItem>
              Updated use of Source Sans Pro 200 to 400 on <Link to="/getting-started">getting started</Link> page. 
            </ListItem>
            <ListItem>
              Updated border specifications from "Border..." to "Bottom border..." in the tab elements table on <Link to="/components/tab-view">tab view</Link>.
            </ListItem>
            <ListItem>
              Removed IRAP approved emphasis tag from <Link to="/components/tab-view">tab view</Link>.
            </ListItem>
            <ListItem>
              Removed the "Icon gutter (left)" specification in the icon elements table on <Link to="/components/form-error-alert">form error alert</Link> and <Link to="/components/alert/section-alerts">section alert</Link> pages.
            </ListItem>
            <ListItem>
              Removed broken Source Sans Pro link from <Link to="/styles/typography">typography</Link> and <Link to="/styles/resources">resources</Link> pages.
            </ListItem>
            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>Fixed top and bottom bullet margins.</ListItem>
                <ListItem>Updated side navigation headings from "General elements" to "General components" and "Form elements" to "Form components".</ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <h3 className={styles.versionHeading3}>Updates in UI Kit</h3>
          </p>
          <List>
            <ListItem>There are no UI Kit updates with ODG patch releases. Please continue to use UI Kit v4.3.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
