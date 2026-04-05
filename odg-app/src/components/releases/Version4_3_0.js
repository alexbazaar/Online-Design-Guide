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
      <Helmet title="Version 4.3.0" />
      <DocsPage title="Version 4.3.0">
        <DocsSection title="March 29, 2023">
          <p>
            This is a minor release that includes a redesigned <Link to="/styles/colors">colors</Link> and <Link to="/about/roadmap">roadmap</Link> page, as well as applying sentence case across the website and UI Kit. This release also
            contains application-wide corrections, accessibility fixes and
            improvements, content updates, and minor styling bug fixes. All
            enhancements, additions, and updates are listed below:
          </p>
          <List>
            <ListItem>
              Updated the <Link to="/styles/colors">colors</Link> page layout and functionality adding a new feature to copy color hex codes.
            </ListItem>
            <ListItem>
              Updated the <Link to="/about/roadmap">roadmap</Link> page to provide an improved snapshot of ODG initiatives.
            </ListItem>
            <ListItem>
              Updated the following page titles: icons to <Link to="/styles/iconography">iconography</Link>, principles to <Link to="/styles/design-principles">design principles</Link>, spacing to <Link to="/styles/element-spacing">element spacing</Link>, alerts to <Link to="/components/alert">alert</Link>, breadcrumbs to <Link to="/components/breadcrumb">breadcrumb</Link>, buttons to <Link to="/components/button">button</Link>, and links to <Link to="/components/link">link</Link>.
            </ListItem>
            <ListItem>
              Updated content on <Link to="/components/button">button</Link>, <Link to="/components/pagination">pagination</Link>, <Link to="/components/accordion">accordion</Link>, <Link to="/components/alert">alert</Link>, <Link to="/components/alert/section-alerts">section alert</Link>, <Link to="/components/alert/system-alerts">system alert</Link>, <Link to="/components/back-to-top">back to top</Link>, <Link to="/components/badge-and-tag">badge and tag</Link>, <Link to="/components/badge-and-tag/badge">badge</Link>, <Link to="/components/badge-and-tag/classification-tag">classification tag</Link>, <Link to="/components/badge-and-tag/emphasis-tag">emphasis tag</Link>, <Link to="/components/breadcrumb">breadcrumb</Link>, <Link to="/components/card">card</Link>, <Link to="/components/help-tip">help tip</Link>, <Link to="/components/link">link</Link>, <Link to="/components/modal">modal</Link>, <Link to="/components/search-field">search</Link>, <Link to="/components/spinner">spinner</Link>, <Link to="/components/step-indicator">step indicator</Link>, <Link to="/components/tab-view">tab view</Link>, <Link to="/components/table">table</Link>, <Link to="/components/form-overview">form overview</Link>, <Link to="/components/checkbox">checkbox</Link>, <Link to="/components/date-field">date field</Link>, <Link to="/components/dropdown">dropdown</Link>, <Link to="/components/form-error-alert">form error alert</Link>, <Link to="/components/input-stepper">input stepper</Link>, <Link to="/components/radio-button">radio button</Link>, <Link to="/components/text-input">text input</Link>, <Link to="/components/text-input/text-area">text area</Link>, <Link to="/components/text-input/text-field">text field</Link>, <Link to="/components/footer">footer</Link>, <Link to="/components/footer/big-footer">big footer</Link>, <Link to="/components/footer/slim-footer">slim footer</Link>, <Link to="/components/header">header</Link>, <Link to="/components/side-navigation">side navigation</Link>, <Link to="/styles/colors">colors</Link>, <Link to="/styles/typography">typography</Link>, <Link to="/styles/element-spacing">element spacing</Link>, <Link to="/styles/grid-system">grid system</Link>, <Link to="/styles/iconography">iconography</Link>, <Link to="/styles/focus-state">focus state</Link>, <Link to="/styles/design-principles">design principles</Link>, and <Link to="/styles/resources">resources</Link> pages.
            </ListItem>
            <ListItem>
              Updated the spacing images on <Link to="/components/input-stepper">input stepper</Link>, <Link to="/components/accordion">accordion</Link>, <Link to="/components/breadcrumb">breadcrumb</Link>, <Link to="/components/card/primary-card">primary card</Link>, <Link to="/components/card/secondary-card">secondary card</Link>, <Link to="/components/link">link</Link>, <Link to="/components/modal">modal</Link>, <Link to="/components/pagination">pagination</Link>, <Link to="/components/step-indicator/interactive-step-indicator">interactive step indicator</Link>, <Link to="/components/tab-view">tab view</Link>, <Link to="/components/footer/big-footer">big footer</Link>, <Link to="/components/dropdown">dropdown</Link>, and <Link to="/components/side-navigation">side navigation</Link> pages.
            </ListItem>
            <ListItem>
              Updated the notes listed under each component within the <Link to="/components">components</Link> section.
            </ListItem>
            <ListItem>
              Updated the <Link to="/components/footer/big-footer">big footer</Link> links to match IRS.gov.
            </ListItem>
            <ListItem>
              Added IRAP approved and user tested emphasis tags to components:
              <List>
                <ListItem>
                  IRAP approved - <Link to="/components/breadcrumb">breadcrumb</Link>, <Link to="/components/link">link</Link>, <Link to="/components/accordion">accordion</Link>, <Link to="/components/button">button</Link>, <Link to="/components/checkbox">checkbox</Link>, <Link to="/components/radio-button">radio button</Link>, <Link to="/components/dropdown">dropdown</Link>, <Link to="/components/text-input/text-field">text field</Link>, <Link to="/components/form-error-alert">form error alert</Link>, <Link to="/components/text-input/text-area">text area</Link>, <Link to="/components/date-field">date field</Link>, <Link to="/components/help-tip">help tip</Link>, <Link to="/components/step-indicator/interactive-step-indicator">interactive step indicator</Link>, <Link to="/components/step-indicator/noninteractive-step-indicator">non-interactive step indicator</Link>, <Link to="/components/alert/section-alerts">section alert</Link>, <Link to="/components/alert/system-alerts">system alert</Link>, <Link to="/components/card/primary-card">primary card</Link>, <Link to="/components/card/secondary-card">secondary card</Link>, <Link to="/components/modal">modal</Link>, <Link to="/components/badge-and-tag/classification-tag">classification tag</Link>, <Link to="/components/badge-and-tag/emphasis-tag">emphasis tag</Link>, <Link to="/components/tab-view">tab view</Link>, <Link to="/components/input-stepper">input stepper</Link>
                </ListItem>
                <ListItem>
                  User tested - <Link to="/components/link">link</Link>, <Link to="/components/accordion">accordion</Link>, <Link to="/components/button">button</Link>, <Link to="/components/checkbox">checkbox</Link>, <Link to="/components/radio-button">radio button</Link>, <Link to="/components/dropdown">dropdown</Link>, <Link to="/components/text-input/text-field">text field</Link>, <Link to="/components/help-tip">help tip</Link>, <Link to="/components/step-indicator/interactive-step-indicator">interactive step indicator</Link>, <Link to="/components/alert/section-alerts">section alert</Link>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Added hover state specifications on <Link to="/components/help-tip">help tip</Link> and <Link to="/components/input-stepper">input stepper</Link> pages.
            </ListItem>
            <ListItem>
              Added focus state specifications on <Link to="/components/back-to-top">back to top</Link>, <Link to="/components/footer/big-footer">big footer</Link> and <Link to="/components/footer/slim-footer">slim footer</Link>.
            </ListItem>
            <ListItem>
              Added icon specifications to the <Link to="/components/date-field">date field</Link> component page for desktop and mobile.
            </ListItem>
            <ListItem>
              Added a new <Link to="/components/step-indicator">step indicator</Link> section that includes the <Link to="/components/step-indicator/interactive-step-indicator">interactive step indicator</Link> and <Link to="/components/step-indicator/noninteractive-step-indicator">non-interactive step indicator</Link> components, and is reflected in the side navigation.
            </ListItem>
            <ListItem>
              Added a new <Link to="/components/card">card</Link> section that includes the <Link to="/components/card/primary-card">primary card</Link> and <Link to="/components/card/secondary-card">secondary card</Link> components, and is reflected in the side navigation.
            </ListItem>
            <ListItem>
              Added accessibility markup to the custom icons on the <Link to="/styles/iconography">iconography</Link> page.
            </ListItem>
            <ListItem>
              Fixed active state indicator on the side navigation for <Link to="/components/radio-button">radio button</Link>.
            </ListItem>
            <ListItem>
              Fixed typo on the <Link to="/components/form-overview">form overview</Link> preview tab.
            </ListItem>
            <ListItem>
              Fixed the warning alert icon size under <Link to="/components/alert/section-alerts">section alert</Link> to 24px by 21px.
            </ListItem>
            <ListItem>
              Fixed the <Link to="/components/pagination">pagination</Link> demo page where a hover bug showed the navigation.
            </ListItem>
            <ListItem>
              Fixed the known accessibility issues header and content consistency on <Link to="/components/tab-view">tab view</Link>, <Link to="/components/date-field">date field</Link>, and <Link to="/components/dropdown">dropdown</Link>.
            </ListItem>
            <ListItem>
              Fixed the label text color contrast ratio requirement on the <Link to="/components/step-indicator/noninteractive-step-indicator">non-interactive step indicator</Link> page from #808080 to #5b616b.
            </ListItem>
            <ListItem>
              Fixed the "Component update in progress" alert placement on the <Link to="/components/header">header</Link> page to be above the page title.
            </ListItem>
            <ListItem>
              Fixed the asterisk color to #d11242 within the typography specification tables on <Link to="/components/date-field">date field</Link>, <Link to="/components/dropdown">dropdown</Link>, <Link to="/components/input-stepper">input stepper</Link>, <Link to="/components/text-input/text-area">text area</Link>, and <Link to="/components/text-input/text-area">text area</Link>.
            </ListItem>
            <ListItem>
              ODG application-wide updates include:
              <List>
                <ListItem>Updated entire ODG site to sentence case.</ListItem>
                <ListItem>
                  Updated the global navigation changing design style to <Link to="/styles">styles</Link>, and UI elements to <Link to="/components">components</Link>.
                </ListItem>
                <List>
                  <ListItem>Redirects have been applied. </ListItem>
                </List>
                <ListItem>
                  Updated incorrect external icon sr-only descriptions.
                </ListItem>
                <ListItem>
                  Fixed accessibility VoiceOver issue where periods were not
                  being recognized.
                </ListItem>
                <ListItem>
                  Fixed incorrect table markup for accessibility and added table
                  captions for screen reader users.
                </ListItem>
                <ListItem>
                  Fixed anchor links within component specification tables to link to the correct corresponding section on the <Link to="/styles/typography">typography</Link> page.
                </ListItem>
                <ListItem>
                  Removed all referenced anchor links that map to specific colors on the <Link to="/styles/colors">colors</Link> page due to the redesigned page.
                </ListItem>
                <ListItem>
                  Removed extra letter spacing on all button text.
                </ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <h3 className={styles.versionHeading3}>Updates in UI Kit 4.3.0</h3>
          </p>
          <List>
            <ListItem>Updated UI Kit and components to sentence case.</ListItem>
            <ListItem>
              Updated unauthenticated big footer links to match IRS.gov.
            </ListItem>
            <ListItem>Updated the pagination spacing specifications.</ListItem>
            <ListItem>
              Removed the word "icon" on the radio button specifications.
            </ListItem>
            <ListItem>Removed the usage column on the colors page.</ListItem>
            <ListItem>
              Added "Outline-offset: 0" to focus state specifications.
            </ListItem>
            <ListItem>
              Added a new section for link stencils and specifications.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
