import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

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

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import TextField from "../../../ols-ui/src/components/TextField";
import TextFieldSpacing from '../assets/images/spacing-specs/Form_Elements_Text_Field.png';
import TextFieldErrorDesktop from '../assets/images/spacing-specs/Form_Elements_Text_Field_Error_Desktop.png';
import TextFieldErrorMobile from '../assets/images/spacing-specs/Form_Elements_Text_Field_Error_Mobile.png';

import styles from "../styles/Typography.scss";
import appStyles from "../styles/App.scss";
import List, { ListItem } from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for TextField.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function TextFieldPage() {
  return (
    <div>
      <Helmet title="Text field" />
      <DocsPage
        className="docs-styles"
        title="Text field"
        subtitle="Text fields allow users to input a single line of text."
        emphasisTag={[ 'IRAP APPROVED', 'USER TESTED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <div style={{ marginTop: "-24px", display: "block" }}>
                  <TextField label="Label" id="example1" />
                </div>
                <div>
                  <TextField
                    label="Label"
                    hintText="This is an optional hint message."
                    id="example3"
                  />
                </div>
                <div>
                  <TextField
                    label="Label"
                    required
                    errorMessage="Error: This field is required"
                    id="example4"
                    value=""
                  />
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ width: "100%", maxWidth: '360px', height: 'auto' }}
                  src={TextFieldSpacing}
                  alt="This is a marked up graphic of the Text Field spacing"
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
                    <TextField label="Label" id="example1" />

                    <TextField
                      label="Label"
                      hintText="This is an optional hint message."
                      id="example3"
                    />

                    <TextField
                      label="Label"
                      required
                      errorMessage="Error: This field is required"
                      id="example4"
                      value=""
                    />                   
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .input {
                    @include input-text;
                    border-radius: 0;
                  
                    &.success {
                      padding: ($input-padding-vertical - 2px) 0.7em;
                      border: 1px solid #2e8540;
                    }
                  
                    &.error {
                      padding: ($input-padding-vertical - 2px) 0.7em;
                      border: 1px solid #d11242;
                    }
                  
                    &:disabled {
                      background-color: #d6d7d9;
                      border-color: #d6d7d9;
                      color: #5b616b;
                      cursor: not-allowed;
                      -webkit-text-fill-color: #5b616b;  // Needed for Safari
                    }
                  
                    &.medium {
                      max-width: $input-max-width / 2;
                    }
                  
                    &.small {
                      max-width: $input-max-width / 4;
                    }
                  
                    &.tiny {
                      max-width: $input-max-width / 8;
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
                    margin-right: $module-spacing;
                  }
                  
                  // Custom focus outline for TextField
                  .input:focus {
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
          Text fields should be used when answers to a question are open-ended, but only need a single line to answer, such as a name or phone number. Text fields should not be used when users are choosing between a predetermined set of options.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Text field typography specifications"
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
                <TableHeaderCell>Label</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">
                  Input label
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
                <TableHeaderCell><span style={{ color: '#d11242' }}>*</span></TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">
                  Input label
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Red
                  </Link>
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
                  <Link to="/styles/colors">
                  Gray dark
                  </Link>
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
                  <Link to="/styles/colors">
                  Red
                  </Link>
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
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Text field elements</h3>
          <Table
            caption="Text field elements specifications"
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
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  White
                  </Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (error)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Red
                  </Link>
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
          <Table caption="Text field focus state specifications">
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
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>Ensure that the text field is an affordance to fit the content being asked for. For example, a state abbreviation text field should be two characters wide instead of a longer text field.</ListItem>
            <ListItem>Implement default masking to cover up sensitive information with bullet symbols but provide a way to turn masking off. For example, an SSN text field would have a "Show SSN" toggle option.</ListItem>
            <ListItem>Add an input hint above the text field and input masking inside the text field when text fields require a specific type of formatting like a phone number, SSN, TIN, or EIN. For example, (###) ### - #### would display as an input hint above a phone number text field and would display again as input masking with fixed hyphens inside the text field.</ListItem>
            <ListItem>Provide a clear label that is always visible, so users know exactly what kind of content goes into each text field. Try to keep the label as short as possible.</ListItem>
            <ListItem>Provide a visual notification, such as outlining the field in another color, to clearly indicate to the user which field is currently active.</ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>Provide text instructions prior to the text field that describe the necessary input.</ListItem>
            <ListItem>Use the label element to make association with the text field explicitly. 
            <List>
              <ListItem>Use <code>id</code> attribute to associate the text field with its label.</ListItem>
              <ListItem>The label may also be used to include text or a text symbol indicating that input is required or indicate the number of characters allowed.</ListItem>
              <ListItem>The user is notified visually and programmatically how many characters are left. For example, 24 characters left. </ListItem>
              <ListItem>When the label needs to be hidden visually, it still needs to be programmatically determinable to support screen reader and speech input users.</ListItem>
              <ListItem>Position labels to maximize predictability of relationships: either to the left of the text area or above it. Be aware that most browsers' default rendering of placeholder text does not provide a high enough contrast ratio. </ListItem>
            </List>
            </ListItem>
            <ListItem>When using placeholder text, make sure there is an onscreen and programmatic label that identifies the text area.</ListItem>
            <ListItem>Avoid breaking numbers with distinct sections into separate input fields (such as phone numbers, social security numbers, or credit card numbers). </ListItem>
          </List>

          <p><strong>Note:</strong> Refer to ODG <Link href="https://online-design-guide-dev-pl.irslabs.org/components/form-overview">form overview</Link> and <Link href="https://online-design-guide-dev-pl.irslabs.org/components/form-error-alert">form error alert</Link> content to adhere to all accessibility standards.</p>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">1.4.3 Contrast (Minimum)</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">1.4.4 Resize text</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">1.4.10 Reflow</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">2.1.1 Keyboard</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">2.4.7 Focus Visible</ExternalLink></ListItem>
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
