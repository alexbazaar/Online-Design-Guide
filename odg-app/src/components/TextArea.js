import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import TextArea from "../../../ols-ui/src/components/TextArea";

import TextAreaSpacing from "../assets/images/spacing-specs/Form_Elements_Text_Area.png";
import TextAreaSpacingError from "../assets/images/spacing-specs/Form_Elements_Text_Area_Error.png";
import styles from "../styles/App.scss";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for TextArea.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function TextAreaPage() {
  return (
    <div>
      <Helmet title="Text area" />
      <DocsPage
        className="docs-styles"
        title="Text area"
        subtitle="Text areas allow users to input multiple lines of text."
        emphasisTag={['IRAP APPROVED']}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <div style={{ marginTop: "-24px", display: "block" }}></div>
                <span aria-label="test">
                  <TextArea label="Label" />
                </span>
                <TextArea
                  label="Label"
                  hintMessage="This is an optional hint message."
                />
                <TextArea
                  label="Label"
                  required
                  errorMessage="Error: This field is required"
                />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ width: "100%", maxWidth: "340px", height: "auto" }}
                  src={TextAreaSpacingError}
                  alt="This is a marked up graphic of the Text Area spacing"
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
                  <TextArea label="Label" />

                  <TextArea
                    label="Label"
                    hintMessage="This is an optional hint message."
                  />

                  <TextArea
                    label="Label"
                    required
                    errorMessage="Error: This field is required"
                  />
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .textarea {
                    display: block;
                    @include input-text;
                    height: $input-height + 10;
                    line-height: $line-height-base - 4px;
                    padding: 12px 16px;
                    margin: 8px 0;
                    border-radius: 0;

                    &.success {
                      border: 1px solid #2e8540;
                    }

                    &.error {
                      border: 1px solid #d11242;
                    }

                    &.disabled {
                      background-color: #d6d7d9;
                      border-color: #d6d7d9;
                      color: #5b616b;
                      cursor: not-allowed;
                      -webkit-text-fill-color: #5b616b; // Needed for Safari
                    }
                  }

                  .errorMessage {
                    display: block;
                    color: #d11242;
                    font-size: $font-size-base - 2px;
                    line-height: 20px;
                  }

                  .hintMessage {
                    display: block;
                    color: #5b616b;
                    font-size: $font-size-base - 2px;
                    line-height: 20px;
                  }

                  textarea:focus {
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
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
          Text areas should be used when a user needs to enter a large amount of open-ended text to answer a question. Text areas should not be used when users are choosing between a predetermined set of options.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Text area typography specifications">
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
                  <Link to="/styles/typography/#form-inputs">
                    Input label
                  </Link>
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
            </tbody>
          </Table>

          <h3>Text area elements</h3>
          <Table caption="Text Area Elements Specifications">
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
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (error)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
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

          <h3>Focus state</h3>
          <Table caption="Text area focus state specifications">
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
            <ListItem>Ensure that the text area is an affordance to fit the content being asked for. Ideally, users should not have to scroll up and down in the field itself.</ListItem>
            <ListItem>Provide a clear label that is always visible, so users know exactly what kind of content goes into each text area. Try to keep the label as short as possible.</ListItem>
            <ListItem>Provide a visual notification, such as outlining the field in another color, to clearly indicate to the user which field is currently active.</ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>Provide text instructions prior to the text field that describe the necessary input.</ListItem>
            <ListItem>Use the <code>&lt;label&gt;</code> element to make association with the text field explicitly.
            <List>
              <ListItem>Use <code>id</code> attribute to associate the text field with its label.</ListItem>
              <ListItem>The label may also be used to include text or a text symbol indicating that input is required or indicate the number of characters allowed.</ListItem>
              <ListItem>The user is notified visually and programmatically how many characters are left. For example, 24 characters left.</ListItem>
              <ListItem>When the label needs to be hidden visually, it still needs to be programmatically determinable to support screen reader and speech input users.</ListItem>
              <ListItem>Position labels to maximize predictability of relationships: either to the left of the text area or above it. Be aware that most browsers' default rendering of placeholder text does not provide a high enough contrast ratio.</ListItem>
            </List>
            </ListItem>
            <ListItem>When using placeholder text, make sure there is an onscreen and programmatic label that identifies the text area.</ListItem>
            <ListItem>Avoid breaking numbers with distinct sections into separate input fields (such as phone numbers, social security numbers, or credit card numbers).</ListItem>
          </List>

          <p><strong>Note:</strong> Refer to ODG <Link href="https://online-design-guide-dev-pl.irslabs.org/components/form-overview">form overview</Link> and <Link href="https://online-design-guide-dev-pl.irslabs.org/components/form-error-alert">form error alert</Link> content to adhere to all accessibility standards.</p>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">1.4.3 Contrast (Minimum) </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">1.4.4 Resize text </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">1.4.10 Reflow</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">2.1.1 Keyboard </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">2.4.7 Focus Visible </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">3.3.2 Labels or Instructions</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">4.1.2 Name, Role, Value</ExternalLink></ListItem>
          </List>

          <h3>Known accessibility issues</h3>

          <p>
            A known accessibility issue is a technical issue that platform or
            assistive technology (AT) engineers are working to fix with each new
            release of iOS/Android or AT. For example, a role or state not being
            announced by a screen reader on a given platform.
          </p>
          <List>
            <ListItem>
              <strong>Issue:</strong> Android mobile devices paired with
              TalkBack do not announce form controls as "required" when using
              the <code>required</code> attribute. Use of ARIA attributes does not help to
              produce the expected announcements.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
