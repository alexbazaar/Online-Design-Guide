import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import SystemAlert from "../../../ols-ui/src/components/Alerts";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";

import SystemAlertsDesktop from '../assets/images/spacing-specs/General_Elements_Alerts_System_Desktop.png';
import SystemAlertsMobile from '../assets/images/spacing-specs/General_Elements_Alerts_System_Mobile.png';

import styles from "../styles/App.scss";
import appStyles from "../styles/App.scss";
import List, {ListItem} from "../../../ols-ui/src/components/List";


/**
 * *****************************************************************************
 * Content for System Alerts.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function SystemAlertsPage() {
  return (
    <div>
      <Helmet title="System alert" />
      <DocsPage
        className="docs-styles"
        title="System alert"
        subtitle="System alerts inform users of system-wide issues."
        emphasisTag={[ 'IRAP APPROVED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <SystemAlert id="warning-message" group="system" type="warning" title="Warning Status" headingLevel="2" closeAlert={() => {
                // placeholder
                }}>
                This is a warning message within a system alert. <Link to="/" style={{ color: "black" }}>Read more</Link>
                </SystemAlert>
              </Panel>
            </Tab>

            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  src={SystemAlertsDesktop}
                  alt="This is a marked up graphic of the System Alerts spacing on desktop"
                  aria-hidden="true"
                  className={styles.previewSpacingDesktopFluid}
                />
                <img
                  src={SystemAlertsMobile}
                  alt="This is a marked up graphic of the System Alerts spacing on mobile"
                  aria-hidden="true"
                  className={styles.previewSpacingMobileFluid}
                />

              <div>
                <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
              </div>
              </Panel>
            </Tab>
          <Tab label="HTML">
            <Panel className="panel-code" padding="none" maxheight="medium">
              <DocsCode language="xml">
                {heredoc`
                  <SystemAlert id="warning-message" group="system" type="warning" title="Warning Status" closeAlert={() => { // placeholder }}>
                    This is a warning message within a system alert. <Link to="/" style={{ color: "black" }}>Read More</Link>
                  </SystemAlert>
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
                    info: #e7f6f8
                    success: #ecf8ed
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
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>System alerts should be used when it is important to provide system-wide messaging. System alerts should:</p>
          <List>
            <ListItem>
              Provide information that the entire taxpayer population might be interested in (such as stimulus check information or tax filing deadline changes). 
            </ListItem>
            <ListItem>
              Provide information about system-wide failures.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="System Alerts Typography Specifications"
          >
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
                <TableHeaderCell>Alert title (warning)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Heading 16
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Link</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>System alert elements</h3>
          <Table
            caption="System Alerts Elements Specifications"
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
                <TableHeaderCell>Background (warning)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Yellow
                  </Link>
                </TableCell>
                <TableCell>
                  #fdb81e
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (top, bottom)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (left)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter (left, right)</TableHeaderCell>
                <TableCell>162px (extra large), 20px (extra small)</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table
            caption="System Alerts Icon Elements Specifications"
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
                <TableHeaderCell>Icon (warning)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">
                  triangle-exclamation-solid
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size</TableHeaderCell>
                <TableCell>24px x 21px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="System Alerts Focus State Specifications">
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
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
            System alerts should only contain timely, short-term messages and should appear on a page only for the duration of the issue it's reporting.
            </ListItem>
            <ListItem>
            System alerts should stretch the entire width of the page and should be displayed above the main IRS header.
            </ListItem>
            <ListItem>
            The alert message content should be short and direct.
            </ListItem>
            <ListItem>
            The alert message may contain links to relevant content.
            </ListItem>
            <ListItem>
            System alerts should appear on all pages across the IRS application; however, they should also be easily closable, similar to a modal. Once a user clicks the X to close the alert on any page, it should no longer appear on any other pages for that user during that particular browsing session.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
            Icons are invisible to screen readers. The only way non-sighted users comprehend the alert type is by the alert's heading and content. Headings must be programmatically identified.
            </ListItem>
            <ListItem>
            If the alert is added after the page has loaded, the alert text must be announced by screen readers. Depending on the circumstance, the focus may need to be moved to the alert.
            </ListItem>
            <ListItem>
            If the alert contains the mechanism to dismiss it (for example a button), it should contain the mechanism to retrieve the alert message. For multiple alerts on the same page the dismissal mechanism needs to have a unique name. This can be achieved my using <code>aria-labelledby</code> attribute to indicate different messages the button will close. Consider adding the instructions to the user about the alert functionality.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#timing-adjustable">2.2.1 Timing Adjustable</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">2.4.6 Headings and Labels</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#error-identification">3.3.1 Error Identification</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#status-messages">4.1.3 Status Messages</ExternalLink>
            </ListItem>
          </List>

    


          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html">Alert Dialog Example</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/tutorials/forms/notifications/#listing-errors">Listing errors</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_role_of_alert_for_Error_Feedback_in_Forms">Using ARIA role of alert for Error Feedback in Forms</ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(SystemAlertsPage);
