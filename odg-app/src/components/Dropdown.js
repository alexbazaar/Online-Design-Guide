import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Dropdown from "../../../ols-ui/src/components/Dropdown";

import DropdownSpacingClosed from "../assets/images/spacing-specs/Form_Elements_Dropdown.png";
import DropdownSpacingError from "../assets/images/spacing-specs/Form_Elements_Dropdown_Error.png";

import Styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Dropdown.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default class DropdownPage extends React.Component {
  state = {
    errorMessage: "Error: This field is required",
    isValid: false
  };

  /**
   * Render
   * @returns {NODE}
   */
  render() {
    return (
      <div>
        <Helmet title="Dropdown" />
        <DocsPage
          className="docs-styles"
          title="Dropdown"
          subtitle="Dropdowns allow users to select one option from a list."
          emphasisTag={[ "IRAP APPROVED", "USER TESTED" ]}
        >
          <DocsSection>
            <TabView id="preview-tabs">
              <Tab label="Preview">
                <Panel padding="normal" maxheight="medium">
                  <div style={{ marginTop: "-24px", display: "block" }}></div>
                  <Dropdown label="Label" id="dropdown-preview-1">
                    <option value="value1">Option A</option>
                    <option value="value2">Option B</option>
                    <option value="value3">Option C</option>
                  </Dropdown>
                  <Dropdown
                    label="Label"
                    id="dropdown-preview-2"
                    hintText="This is an optional hint message"
                  >
                    <option value="value1">Option A</option>
                    <option value="value2">Option B</option>
                    <option value="value3">Option C</option>
                  </Dropdown>
                  <Dropdown
                    label="Label"
                    id="dropdown-preview-3"
                    required
                    isValid={this.state.isValid}
                    errorMessage={this.state.errorMessage}
                    onChange={({ newValue }) => {
                      this.setState({ isValid: newValue });
                    }}
                  >
                    <option value="value1">Option A</option>
                    <option value="value2">Option B</option>
                    <option value="value3">Option C</option>
                  </Dropdown>
                </Panel>
              </Tab>
              <Tab label="Spacing">
                <Panel maxheight="medium">
                  <div style={{ marginBottom: "15px" }}>
                    <img
                      src={DropdownSpacingClosed}
                      alt="This is a marked up graphic of the Dropdown spacing when closed"
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <img
                      src={DropdownSpacingError}
                      alt="This is a marked up graphic of the Dropdown spacing with an Error message"
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        marginTop: "16px",
                        fontSize: "12px",
                        lineHeight: "16px",
                        display: "inline-block"
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
                <Dropdown label="Label" id="dropdown-preview-1">
                  <option value="value1">Option A</option>
                  <option value="value2">Option B</option>
                  <option value="value3">Option C</option>
                </Dropdown>

                <Dropdown label="Label" id="dropdown-preview-2" hintText="This is an optional hint message">
                  <option value="value1">Option A</option>
                  <option value="value2">Option B</option>
                  <option value="value3">Option C</option>
                </Dropdown>
                <Dropdown
                  label="Label"
                  id="dropdown-preview-3"
                  required
                  isValid={this.state.isValid}
                  errorMessage={this.state.errorMessage}
                  onChange={({ newValue }) => {
                    this.setState({ isValid: newValue });
                  }}
                >
                  <option value="value1">Option A</option>
                  <option value="value2">Option B</option>
                  <option value="value3">Option C</option>
                </Dropdown>
                `}
                  </DocsCode>
                </Panel>
              </Tab>
              <Tab label="CSS">
                <Panel className="panel-code" padding="none" maxheight="medium">
                  <DocsCode language="scss">
                    {heredoc`
                    .dropdown {
                      display: block;
                      width: 100%;
                      max-width: $input-max-width;
                      height: $input-height;
                      box-sizing: border-box;
                      padding: $input-padding-vertical baselines(4);
                      border: $input-border-width solid #1b1b1b;
                      margin: 8px 0;
                      appearance: none;
                      background-color: #ffffff;
                      background-image: url("./dropdown-arrow.svg");
                      background-position: right 13px center;
                      background-repeat: no-repeat;
                      background-size: 19px;
                      border-radius: 0;
                      color: #1b1b1b; // standardize on firefox
                      font-family: $font-sans;
                      font-size: $font-size-base;
                      line-height: $input-line-height;

                      &.success {
                        padding-top: $input-padding-vertical - 3px;
                        padding-bottom: $input-padding-vertical - 3px;
                        border: 1px solid #2e8540;
                      }

                      &.error {
                        padding-top: $input-padding-vertical - 3px;
                        padding-bottom: $input-padding-vertical - 3px;
                        border: 1px solid #d11242;
                      }

                      &:disabled {
                        background-color: #d6d7d9;
                        border-color: #d6d7d9;
                        color: #5b616b;
                        cursor: not-allowed;

                        &:hover,
                        &:active,
                        &:focus {
                          background-color: #d6d7d9;
                          border-color: #d6d7d9;
                          box-shadow: none;
                          color: #5b616b;
                        }
                      }
                    }

                    // HINT TEXT
                    .hintText {
                      display: block;
                      color: #5b616b;
                      font-size: $font-size-base - 2px;
                      line-height: 20px;
                    }

                    .errorMessage {
                      display: block;
                      color: #d11242;
                      font-size: $font-size-base - 2px;
                      line-height: 20px;
                    }

                    .disabled {
                      color: #5b616b;
                      cursor: not-allowed;
                    }

                    .inline {
                      display: inline-block;
                    }

                    // Custom focus outline for Dropdown
                    .dropdown:focus {
                      box-shadow: 0px 0px 0px 3px #2491ff;
                      border-radius: 0;
                      outline: none;
                      z-index: 1;
                    }                    
                  `}
                  </DocsCode>
                </Panel>
              </Tab>
            </TabView>
            <span className={Styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
          </DocsSection>

          <DocsSection title="When to use">
            <p>
            Dropdown menus function as an alternative to radio buttons: They are to be used when a user needs to be presented with a list of options and needs the ability to select only one option. The options in the dropdown are mutually exclusive, meaning that users cannot select more than one option at a time.
            </p>
          </DocsSection>

          <DocsSection title="Specifications">
            <h3>Typography</h3>
            <Table caption="Dropdown Typography Specifications">
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
                  <TableHeaderCell>Label</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#form-inputs">Input label</Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell><span style={{ color: '#d11242' }}>*</span></TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#form-inputs">Input label</Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Red</Link>
                  </TableCell>
                  <TableCell>#d11242</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Hint text</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#form-inputs">
                      Hint text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Gray dark</Link>
                  </TableCell>
                  <TableCell>#5b616b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Error text</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#form-inputs">
                      Error text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Red</Link>
                  </TableCell>
                  <TableCell>#d11242</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#form-inputs">
                      Input text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Dropdown elements</h3>
            <Table caption="Dropdown Elements Specifications">
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
                    <Link to="/styles/colors">White</Link>
                  </TableCell>
                  <TableCell>#ffffff</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Border</TableHeaderCell>
                  <TableCell>Solid 1px</TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Border (error)</TableHeaderCell>
                  <TableCell>Solid 1px</TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Red</Link>
                  </TableCell>
                  <TableCell>#d11242</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Padding</TableHeaderCell>
                  <TableCell>12px 16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Icon elements</h3>
            <Table caption="Dropdown Icon Elements Specifications">
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
                  <TableHeaderCell>Icon</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/iconography">chevron-down-solid</Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Margin (left)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Focus state</h3>
            <Table caption="Dropdown Focus State Specification">
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
            <List>
              <ListItem>
                Use dropdowns if the list of options includes more than 7
                options, but less than 16 options. Radio buttons are best if the
                list has fewer than 7 options, while autofill entries are best
                with larger lists.
              </ListItem>
              <ListItem>
                Include a meaningful label inside the select menu ("Select
                country" for a country dropdown or "Select time zone" for time
                zones, for example).
              </ListItem>
              <ListItem>
                Avoid having a default option selected; instead follow the
                advice above about a label inside the menu.
              </ListItem>
            </List>
          </DocsSection>

          <DocsSection title="Accessibility guidance">
            <h3>
              Ensure lists are not used inappropriately for unrelated items or
              for items that are not actual list items
            </h3>

            <p>
            When used appropriately, correctly structured lists can be very useful to users of assistive technology by providing context and conveying the organization and boundaries of the relevant page content. However, if unrelated items are grouped as list items, this may be misleading or confusing to users of assistive technology. Note that this determination may be clear-cut in some cases but somewhat subjective or contextual in others.
            </p>

            <p>
            For example, if a form was marked as with explicit list with each field as a list item, this is likely to be confusing and cumbersome--unless the form was actually visually rendered as an ordered list to help ensure that it was filled out in a particular order. Regarding the common use of list markup to render page tabs, some users may find this helpful while others may find it annoying, but this usage is not a clear-cut violation of Section 508's Functional Performance Criteria. Use list structures when items are appropriately part of a list. Otherwise do not enclose unrelated items in a list structure. Note - This best practice is not mapped to Web Content Accessibility Guidelines (WCAG) 2.0. Its intention is to cover situations where list markup is inappropriately included in an attempt to aid assistive technology users by marking up page content that is not really a list, which is more likely to create confusion instead.
            </p>

            <p>
            If list markup is inappropriately used for presentation effect of content that is not really a list, consider flagging "Ensure lists for indentation are not used" instead.
            </p>

            <p>
            Make sure your dropdown has a label. Don't replace it with the default menu option (for example, removing the "State" label and just having the dropdown read "Select a state" by default).
            </p>

            <h3>Additional tips</h3>

            <List>
              <ListItem>
                Test dropdowns thoroughly with members of your target audience.
                Several usability experts suggest they should be the "UI of last
                resort." Many users find them confusing and difficult to use.
              </ListItem>
              <ListItem>
                Avoid making options in one dropdown menu change based on the
                input to another. Users often don't understand how selecting an
                item in one impacts another.
              </ListItem>
              <ListItem>
                When most users will (or should) pick a particular option, make
                it the default: Default
              </ListItem>
              <ListItem>
                Don't use JavaScript to automatically submit the form (or do
                anything else) when an option is selected. Offer a "submit"
                button at the end of the form instead. Users often change their
                choices multiple times. Auto-submission is also less accessible.
              </ListItem>
            </List>

            <h3>Applicable standards</h3>

            <h4 className={Styles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

            <List>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                  1.3.1 Info and Relationships{" "}
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                  2.1.1 Keyboard{" "}
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143%2C144%2C244%2C247%2C249%2C321%2C243#focus-order">
                  2.4.3 Focus Order{" "}
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143%2C144%2C244%2C247%2C249%2C321%2C243#focus-visible">
                  2.4.7 Focus Visible{" "}
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">
                  2.5.3 Label in Name
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">
                  3.3.2 Labels or Instructions
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">
                  4.1.2 Name, Role, Value
                </ExternalLink>
              </ListItem>
            </List>

            <h3>Known accessibility issues</h3>

            <p>
            A known accessibility issue is a technical issue that platform or assistive technology (AT) engineers are working to fix with 
            each new release of iOS/Android or AT. For example, a role or state not being announced by a screen reader on a given platform.
            </p>

            <List>
              <ListItem>
                <strong>Issue:</strong> Android mobile devices paired with
                TalkBack do not announce form controls as "required" when using
                the <code>required</code> attribute. Use of ARIA attributes does
                not help to produce the expected announcements.
              </ListItem>
              <ListItem>
                <strong>Issue:</strong> When navigating to the dropdown label
                marked with an asterisk, indicating a required field, VoiceOver
                is not reading the asterisk.
              </ListItem>
            </List>
          </DocsSection>
        </DocsPage>
      </div>
    );
  }
}
