/* eslint-disable indent */
import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Alert from "../../../ols-ui/src/components/Alerts";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import styles from "../styles/App.scss";

import FormErrorAlertSpacingDesktop from "../assets/images/spacing-specs/Form_Elements_Error_Alert_Desktop.png";
import FormErrorAlertSpacingMobile from "../assets/images/spacing-specs/Form_Elements_Error_Alert_Mobile.png";

/**
 * *****************************************************************************
 * Content for Form Error Alert.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function FormErrorAlertPage() {
  const errors = [
    { fieldId: "#LastName", label: "Label:", message: "Error message" },
    { fieldId: "#FirstName", label: "Label:", message: "Error message" },
  ];

  return (
    <div>
      <Helmet title="Form error alert" />
      <DocsPage
        className="docs-styles"
        title="Form error alert"
        subtitle="Form error alerts help users identify form errors."
        emphasisTag={[ 'IRAP APPROVED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <div>
                  <Alert
                    title="The following 2 errors have occurred:"
                    id="error"
                    headingLevel="2"
                    type="error"
                    tabIndex="-1"
                    aria-atomic="true"
                  >
                    <List type="ol" style={{ paddingLeft: "16px" }}>
                      {errors.map((error) => (
                        <ListItem key={error.fieldId}>
                          <Link href={`${error.fieldId}`}>
                            {`${error.label} `} {error.message}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Alert>
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={FormErrorAlertSpacingDesktop}
                  alt="This is a marked up graphic of the Form Error Alert spacing on Desktop"
                  className={styles.previewSpacingDesktopFluid}
                />
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={FormErrorAlertSpacingMobile}
                  alt="This is a marked up graphic of the Form Error Alert spacing on Mobile"
                  className={styles.previewSpacingMobileFluid}
                />
                <div>
                  <span
                    style={{
                      marginTop: "16px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      display: "inline-block",
                    }}
                  >
                    <br />
                    <strong>Note:</strong> Please refer to the specifications
                    section for more detail.
                  </span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                   <Alert
                    title="The following 2 errors have occurred:"
                    id="error"
                    headingLevel="2"
                    type="error"
                    tabIndex="-1"
                    aria-atomic="true"
                  >
                    <List type="ol" style={{ paddingLeft: "16px" }}>
                      {errors.map((error) => (
                        <ListItem key={error.fieldId}>
                          <Link href={\`\${error.fieldId}\`}>
                            {\`\${error.label}\`} {error.message}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Alert>
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    // Alert variables ---------- //
                    $custom-alerts: () !default;
                    
                    $alerts: (
                      info: #e7f6f8,
                      success: #ecf8ed,
                      warning: #fff4dd,
                      error: #faf0f0
                    );
                    
                    $alert-accents: (
                      info: #087591,
                      success: #2e8540,
                      warning: #fdb81e,
                      error: #d11242
                    );
                    
                    $alert-system-text: (
                      info: #ffffff,
                      success: #ffffff,
                      warning: #1b1b1b,
                      error: #ffffff
                    );
                    
                    $alert-system-links: (
                      info: #ffffff,
                      success: #ffffff,
                      warning: #1b1b1b,
                      error: #ffffff
                    );
                    
                    $alerts: map-merge($alerts, $custom-alerts);
                    
                    $alert-icon: 18px;
                    $alert-icon-size: 24px;
                    $alert-icon-size-sm: 24px;
                    
                    .alert {
                      color: #1b1b1b;
                      position: relative;
                      padding: $module-spacing * 1.5;
                      border: 0;
                      margin: $module-spacing 0;
                    
                      &[data-alert-group = "system"] {
                        margin: 0;
                      }
                    
                      ul {
                        margin-top: baselines(3);   // *** Not sure why this is here
                        margin-bottom: 0;
                      }
                    
                      p {
                        @include body;
                        margin-bottom: baselines(3);
                    
                        &:last-of-type {
                          margin-bottom: 0;
                        }
                      }
                    
                      [data-alert-group = "system"] {
                        .text {
                          border-left: 0;
                        }
                      }
                    }
                    
                    .icon {
                      // need to explicitly set the height and width
                      // to make sure the icon bounding box is not oversized
                      position: absolute;
                      top: $module-spacing * 1.5 + (($line-height-heading4 - $alert-icon-size) / 2);
                      left: $module-spacing * 1.5;
                      font-size: $alert-icon-size;
                      height: 21px;
                      width: $alert-icon-size;
                    }
                    
                    // Maps out the Section Alert background color for each type of: success, warning, error, info.
                    //
                    @each $name, $bgcolor in $alerts {
                      .alert-#{$name} {
                        background-color: $bgcolor;
                      }
                    }
                    
                    // Maps the accent colors to each type of alert: success, warning, error, info. This is for the border and the icon in Section Alerts.
                    //
                    @each $name, $accentcolor in $alert-accents {
                      .alert-#{$name} {
                        border-left: solid 3px $accentcolor;
  
                        .text {
                          border-left: 0;
                        }
  
                        // Sets background color in System Alerts using accent colors
                        //
                        &[data-alert-group = "system"] {
                          background-color: $accentcolor;
  
                          .text {
                            background-color: $accentcolor;
                          }
                        }
                      }
  
                      .icon-#{$name} {
                        color: $accentcolor;
                      }
                    }
  
                    // Sets color of text and icon in System Alerts (black or white)
                    @each $name, $textcolor in $alert-system-text {
                      [data-alert-group = "system"] {
                        .alert-#{$name} {
                          color: $textcolor;
                        }
  
                        .icon-#{$name} {
                          color: $textcolor;
                        }
                      }
                    }
  
                    // Sets color of links in System Alerts (black or white)
                    @each $name, $linkcolor in $alert-system-links {
                      [data-alert-group = "system"] {
                        .alert-#{$name} a,
                        .alert-#{$name} a:focus,
                        .alert-#{$name} a:hover,
                        .alert-#{$name} a:visited {
                          color: $linkcolor;
                        }
                      }
                    }
  
                    .heading {
                      @include heading3;
                      margin-top: 0;
                      margin-bottom: baselines(3);
                      margin-left: 24px;
                      padding-left: baselines(3);
                      text-transform: none;
                    }
  
                    .text {
                      max-width: $type-max-width;
                      margin-top: 0;
                      margin-bottom: 0;
                      margin-left: 24px;
                      padding-left: baselines(3);
                      font-size: $font-size-base;
                      line-height: $line-height-base;
  
                      > *:first-child {
                        margin-top: 0;
                      }
  
                      > *:last-child {
                        margin-bottom: 0;
                      }
                    }
  
                    // System Alerts: General, Text and Icon styling
                    //
                    [data-alert-group = "system"] {
                      font-weight: 600;
                      padding: $module-spacing * 0.75 $module-spacing * 1.25 $module-spacing * 0.75 $module-spacing * 1.25;
                      border-left: 0;
  
                      //  Sets general styling for System-level Alerts on mobile
                      //
                      @include media-breakpoint-down(sm) {
                        padding: $module-spacing * 0.75;
                        border-left: 0;
                      }
  
                      .icon, .text {
                        display: inline-block;
                        position: relative;
                        vertical-align: top;
                      }
  
                      .text {
                        padding-left: 12px;
                        margin: 0;
                        max-width: $type-max-width * 1.5;
                        width: 90%;
  
                        @include media-breakpoint-down(md) {
                          width: 95%;
                        }
  
                        @include media-breakpoint-down(sm) {
                          width: 85%;
                        }
  
                        @include media-breakpoint-down(sm) {
                          width: 75%;
                        }
                      }
  
                      .icon {
                        height: 21px;
                        width: 24px;
                        top: -2px;
                        left: auto;
                        vertical-align: middle;
                      }
  
                      .icon [data-icon="triangle-exclamation"] {
                        top: 0px;
                      }
  
                      .closeButton {
                        @include button-unstyled;
                        position: absolute;
                        font-size: $alert-icon-size;
                        color: #ffffff;
                        top: 12px;
                        right: 12px;
                        width: $alert-icon-size;
                        height: $alert-icon-size;
                        cursor: pointer;
                        text-align: center;
                      }
  
                      .alertWrapper {
                        align-items: center !important;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
  
                        @include media-breakpoint-up(xs) {
                          width: 540px;
                          max-width: 100%;
                        }
  
                        @include media-breakpoint-up(sm) {
                          width: 720px;
                          max-width: 100%;
                        }
  
                        @include media-breakpoint-up(md) {
                          width: 960px;
                          max-width: 100%;
                        }
  
                        @include media-breakpoint-up(lg) {
                          width: 1140px;
                          max-width: 100%;
                        }
  
                        .alertContainer {
                          width: 100%;
                        }
                      }
  
                      // Styles the System Alert > Warning Alert's Close "X" to be black
                      &.alert-warning .closeButton {
                        color: #1b1b1b;
                        top: 10px;
                      }
  
                      [data-component="FlexRow"] {
                        @include media-breakpoint-down(sm) {
                          padding: 8px;
                        }
                      }
                    }
  
                    [data-alert-group = "section"] {
                      .closeButton {
                        @include button-unstyled;
                        color: #1b1b1b;
                        font-size: $alert-icon-size;
                        position: absolute;
                        top: 24px;
                        right: 24px;
                        height: $alert-icon-size;
                        cursor: pointer;
                        text-align: center;
                      }
  
                      .icon {
                        color: #1b1b1b;
                      }
                    }
  
                    .srOnly {
                      @include sr-only;
                    }
  
                    .alert {
                      &[data-alert-group = "system"] {
                        display: flex !important;
                        justify-content: space-around !important;
                      }
                    }         
                  `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Form error alerts are used on application pages to notify the user of errors to be corrected before resubmitting the page.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Form Error Alert Typography Specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Alert title</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 20</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Alert title gutter (bottom)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Link</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#links">Link</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Message elements</h3>
          <Table caption="Form Error Alert Message Elements Specifications">
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
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red lightest</Link>
                </TableCell>
                <TableCell>#faf0f0</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Left border</TableHeaderCell>
                <TableCell>3px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>#d11242</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Form Error Alert Icon Elements Specifications">
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
                <TableHeaderCell>Icon (error)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-exclamation-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Form Error Alert Focus State Specifications">
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
                <TableCell>
                  <Link to="/styles/colors">Blue vivid</Link>
                </TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <h3>General rules</h3>
          <List>
            <ListItem>
              List errors at the top of the page, before the form. The list should have a distinctive heading so that it is easy to identify.
            </ListItem>
            <ListItem>
              Use form error alerts to direct the user to fix errors after they select "Submit" in a form. If possible, implement immediate inline validation so the users can fix form errors straight away.
            </ListItem>
            <ListItem>
              Implement dynamic form error alert text. As the user corrects the errors, the form error alert text should dynamically change to reflect the number of errors present on the page. The form error alert will disappear altogether when the user corrects all the errors.
            </ListItem>
            <ListItem>
              Avoid modals or confirmation dialogs to communicate form errors.
            </ListItem>
          </List>
          <h3>Error messages</h3>
          <List>
            <ListItem>
              State the number of errors that have occurred on the form:
            </ListItem>
            <List>
              <ListItem>
                If one error is present, the heading will state "The following error has occurred:".
              </ListItem>
              <ListItem>
                If multiple errors are present, the heading will state "The following [insert number] errors have occurred:".
              </ListItem>
            </List>
            <ListItem>
              Use the input field label that triggered the error for the "Label" of the error message and repeat the inline error message description. Review the <Link href="/components/form-overview">form overview</Link> page for an error message visual example.
            </ListItem>
            <ListItem>
              Order the error messages in the form error alert box in a sequential order. The order of the error messages should correspond to the order of the inline error messages on the page.
            </ListItem>
            <ListItem>
              Use anchor links for each error link allowing the user to "jump" to the error location.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Listing errors</h3>
          <List>
            <ListItem>
              The list of errors should be inserted into a prominent container that has the <code>role="alert"</code> to make assistive technology users aware of this change.
            </ListItem>
            <ListItem>
              The errors should be in an ordered list to help the user to track how many errors they need to correct.
            </ListItem>
            <ListItem>
              The list of errors should have a distinctive heading so that it is easy to identify. The heading gets focus when the list displays.
            </ListItem>
            <ListItem>
              Each error listed should:
            </ListItem>
            <List>
              <ListItem>
                Be identified in text and sufficiently described to the user.
              </ListItem>
              <ListItem>
                Reference the label of the corresponding form control to help the user recognize the control. For example, <em>"First name: Required field."</em>
              </ListItem>
              <ListItem>
                Provide a concise description of the error in a way that is easy to understand by everyone.
              </ListItem>
              <ListItem>
                Provide an indication of how to correct mistakes and remind users of any format requirements. For example, <em>"Start date: Use the MM/DD/YYYY format."</em>
              </ListItem>
              <ListItem>
                Include an in-page link to the corresponding form control to make access easier for the users.
              </ListItem>
            </List>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={styles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships" target="_blank">1.3.1 Info and Relationships</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum" target="_blank">1.4.3 Contrast (Minimum)</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#resize-text" target="_blank">1.4.4 Resize text</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#reflow" target="_blank">1.4.10 Reflow</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard" target="_blank">2.1.1 Keyboard</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-order" target="_blank">2.4.3 Focus Order</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels" target="_blank">2.4.6 Headings and Labels</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-visible" target="_blank">2.4.7 Focus Visible</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name" target="_blank">2.5.3 Label in Name</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#error-identification" target="_blank">3.3.1 Error Identification</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions" target="_blank">3.3.2 Labels or Instructions</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion" target="_blank">3.3.3 Error Suggestion</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#error-prevention-legal-financial-data" target="_blank">3.3.4 Error Prevention</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value" target="_blank">4.1.2 Name, Role, Value</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#status-messages" target="_blank">4.1.3 Status Messages</ExternalLink>
            </ListItem>
          </List>
          <h4 className={styles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html" target="_blank">Alert Dialog Example</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/tutorials/forms/notifications/#listing-errors" target="_blank">Listing errors</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_role_of_alert_for_Error_Feedback_in_Forms" target="_blank">Using ARIA role of alert for Error Feedback in Forms</ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
