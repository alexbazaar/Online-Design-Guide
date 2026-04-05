import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import HelpTip from "../../../ols-ui/src/components/HelpTip";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, {ListItem} from 'ols-ui/list'
import HelpTipSpacing from '../assets/images/spacing-specs/helptip.png';
import styles from "../styles/Docs.scss";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for HelpTip
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function HelpTipPage() {
  return (
    <div>
      <Helmet title="Help tip" />
      <DocsPage
        className="docs-styles"
        title="Help tip"
        subtitle="Help tips are brief messages that provide additional information about a page element."
        emphasisTag={[ 'IRAP APPROVED', 'USER TESTED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <HelpTip link="Help tip label">
                  Help tip content goes here
                </HelpTip>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <img style={{ width: '100%', maxWidth: '300px', height: 'auto' }} src={HelpTipSpacing} alt="This is a marked up graphic of the Help Tip spacing" />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none">
                <DocsCode language="xml">
                  {heredoc`
                    <HelpTip link="Help tip label">
                      Help tip content goes here
                    </HelpTip>                  
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    @mixin help-tip-icon {
                      position: relative;
                      bottom: em(1px);
                      display: inline-block;
                      width: em(18px);
                      height: em(18px);
                      border: solid 1px #00599c;
                      margin-left: 0.25em;
                      border-radius: 50%;
                      vertical-align: middle;
                    }
                    
                    .srOnly, .hiddenText {
                      @include sr-only;
                    }
                    
                    .wrapper {
                      position: relative;
                    }
                    
                    .link {
                      @include button-unstyled;
                      display: inline;
                      color: #1b1b1b;
                      font-size: $font-size-base;
                      line-height: inherit;
                    }
                    
                    .helpTipButton {
                      width: 16px;
                      height: 16px;
                      padding: 0;
                      margin: 4px 0 0 8px;
                      border: 0;
                      -webkit-appearance: none;
                      -moz-appearance: none;
                      appearance: none;
                      background-color: transparent;
                      border-radius: 0;
                      color: #00599c;
                      vertical-align: top;
                      cursor: pointer;
                    
                      svg {
                        width: 100%;
                        height: 100%;
                      }
                    }
                    
                    .helpTip {
                      font-size: $font-size-base;
                      position: relative;
                      padding: $module-spacing;
                      border: solid 1px #d6d7d9;
                      margin-top: $module-spacing - 5px;
                      background: #ffffff;
                    
                      p {
                        margin-bottom: $module-spacing - 4px;
                      }
                    
                      p:last-child:first-child,
                      & > *:nth-last-child(1) {
                        margin-bottom: 0;
                      }
                    }
                    
                    .arrow {
                      position: absolute;
                      top: 0;
                      left: 2%;
                      margin-left: -2px;
                    
                      &::after,
                      &::before {
                        position: absolute;
                        bottom: 100%;
                        left: attr(data-position px);
                        width: 0;
                        height: 0;
                        border: solid transparent;
                        border-color: rgba(#d6d7d9, 0);
                        content: "";
                        pointer-events: none;
                      }
                    
                      &::after {
                        margin-left: 1px;
                        border-bottom-color: #ffffff;
                        border-width: 8px;
                      }
                    
                      &::before {
                        margin-left: 0;
                        border-bottom-color: #d6d7d9;
                        border-width: 9px;
                      }
                    }
                    
                    // Custom focus outline for Help Tip
                    .helpTipButton {
                      position: relative;
                    
                      &:hover {
                        color: #002d62;
                      }
                    }
                    
                    .helpTipButton:focus {
                      outline: none;
                    }
                    
                    .helpTipButton svg {
                      position: relative;
                    }
                    
                    .helpTipButton:focus:before {
                      box-sizing: border-box;
                      border: 3px solid #2491ff;
                      content: "";
                      display: block;
                      height: 30px;
                      width: 30px;
                      position: absolute;
                      top: -7px;
                      left: -7px;
                      outline: none;
                      padding: 0px;
                    }                                                       
                  `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>Use help tips to strengthen an existing message and increase certainty about an interaction.</p>
        </DocsSection>

        <DocsSection title="Visual style">
          <p>
          The help tip label is styled like body text, but has a "?" button. When
          the user selects the "?" button, the button icon becomes an "X".
          </p>
          <p>
          The help tip is a white box with an arrow that points to the "X" button.
          The help tip behaves similarly to an accordion and pushes the content
          below down.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Help tip elements</h3>
          <Table
            caption="Help tip Elements Specifications"
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
                <TableHeaderCell>Content</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Body text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Content padding</TableHeaderCell>
                <TableCell>
                16px
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Box border</TableHeaderCell>
                <TableCell>
                1px solid
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray light
                  </Link>
                </TableCell>
                <TableCell>#d6d7d9</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon closed (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-question-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue
                  </Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon closed (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-question-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue dark
                  </Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon expanded (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-xmark-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue
                  </Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon expanded (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-xmark-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue dark
                  </Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (left)</TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Help tip Focus State Specifications">
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
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>Context is most important for help tips. It should be very clear, and precisely where a user needs it to avoid confusion.</ListItem>
            <ListItem>Help tips should be brief and specific. They are not intended to explain an entire task flow.</ListItem>
            <ListItem>The text should consist of helpful information and should not repeat what is already visible on the screen.</ListItem>
            <ListItem>Ensure appropriate placement. Help tips should be prominent and easy to find but should not block important content or cover other page elements.</ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>Only interactive elements should trigger help tips.</ListItem>
            <ListItem>Help tips should directly describe the user interface (UI) control that triggers them (i.e. do not create a control purely to trigger a help tip).</ListItem>
            <ListItem>Hide when a keyboard user presses "Escape" (unless the help tip will never overlap other content).</ListItem>
            <ListItem>Allow a mouse or pointer user to hide the help tip, ideally through a close button (unless the help tip will never overlap other content).</ListItem>
            <ListItem>Allow a mouse user to move their mouse over the help tip content without dismissing the help tip -- ideally in a manner that does not require laser focus and precision mouse control.</ListItem>
            <ListItem>Remain in view until the user actively dismisses it, or it is no longer valid (e.g. if a loading help tip appeared, then it could disappear after the content loaded).</ListItem>
            <ListItem>Depending on the Assistive Technology and the browser, a screen reader can read the help tip contents either immediately after the help tip button is activated or with only one additional keystroke.</ListItem>
            <ListItem>Do not use the <code>title</code> attribute to create a help tip.</ListItem>
            <ListItem>Do not put essential information in help tip.</ListItem>
            <ListItem>Write concise help tip text so users on a small screen or with high zoom do not need to pan around to read the help tip.</ListItem>
            <ListItem>Avoid rich content. Formatting such as bold text, italics, headings, icons, etc. will not be conveyed through <code>aria-describedby</code> or <code>aria-labelledby</code>.</ListItem>
            <ListItem>The help tip button must have a focus outline and be tab focusable.</ListItem>
          </List>
          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C1410%2C149#info-and-relationships">1.3.1 Info and Relationships</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C1410%2C149#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C1410%2C149#keyboard">2.1.1 Keyboard</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C1410%2C149#focus-visible">2.4.7 Focus Visible</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#label-in-name">2.5.3 Label in Name</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C149%2C1410%2C253#target-size">2.5.5 Target Size</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&showtechniques=148%2C149%2C1410%2C253#name-role-value">4.1.2 Name, Role, Value</ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
