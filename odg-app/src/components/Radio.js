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
import List, { ListItem } from "../../../ols-ui/src/components/List";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Radio from 'ols-ui/radio';

import RadioSpacing from '../assets/images/spacing-specs/Form_Elements _Radio_Button.png';
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Radio.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function RadioPage() {
  return (
    <div>
      <Helmet title="Radio button" />
      <DocsPage
        className="docs-styles"
        title="Radio button"
        subtitle="Radio buttons allow users to select a single value from a small set of options."
        emphasisTag={['IRAP APPROVED', 'USER TESTED']}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <fieldset>
                  <legend className={appStyles["sr-only"]}>Famous people radio buttons</legend>
                  <Radio id="truth" label="Sojourner Truth" />
                  <Radio id="douglass" label="Frederick Douglass" defaultChecked />
                  <Radio id="washington" label="Booker T. Washington" />
                  <Radio id="carver" label="George Washington Carver" />
                </fieldset>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <img style={{ width: "100%", maxWidth: '300px', height: 'auto' }} src={RadioSpacing} alt="This is a marked up graphic of the Radio spacing" />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <fieldset>
                    <legend className={appStyles["sr-only"]}>Famous people radio buttons</legend>
                    <Radio id="truth" label="Sojourner Truth" />
                    <Radio id="douglass" label="Frederick Douglass" defaultChecked />
                    <Radio id="washington" label="Booker T. Washington" />
                    <Radio id="carver" label="George Washington Carver" />
                  </fieldset>
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $radio-button-size: 20px;

                  .radio {
                    position: absolute;
                    margin-left: -20px;
                    opacity: 0;
                    outline: none;

                    .lt-ie9 & {
                      position: static;
                      width: auto;
                      border: 0;
                      margin: 0.4em 0.4em 0 0;
                      float: left;
                    }
                  }

                  .radio + label {
                    display: block;
                    margin: baselines(3) 0;
                    cursor: pointer;
                    font-weight: 400;
                  }

                  /* Circle */
                  .radio-icon {
                    display: inline-flex;
                    height: $radio-button-size;
                    width: $radio-button-size;
                    border: 1px solid #1b1b1b;
                    border-radius: 50%;
                    margin-top: -2px;
                    margin-right: $radio-button-size - 4;
                    vertical-align: middle;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                  }

                  /* Checked Circle */

                  .radio:checked + label .radio-icon {
                    border: 2px solid #00599c;
                  }

                  .radio:checked + label .radio-icon::before {
                    content: "";
                    display: inline-block;
                    height: 12px;
                    width: 12px;
                    border-radius: 50%;
                    background-color: #00599c;
                  }

                  /* Disabled */
                  .radio:disabled + label {
                    color: #d6d7d9;
                    cursor: not-allowed;
                  }

                  .radio:disabled + label .radio-icon {
                    border: 1px solid #d6d7d9;
                    cursor: not-allowed;
                  }
                  .radio:checked:disabled + label .radio-icon {
                    border: 2px solid #d6d7d9;
                    cursor: not-allowed;
                  }
                  .radio:checked:disabled + label .radio-icon:before {
                    background-color: #d6d7d9;
                    cursor: not-allowed;
                  }

                  /* Focus outline */
                  .radio:focus + label .radio-icon:after {
                    content: '';
                    display: inline-block;
                    height: $radio-button-size + 8 + 6;
                    width: $radio-button-size + 8 + 6;
                    position: absolute;
                    top: -9px;
                    left: -9px;
                    border: 3px solid #2491ff;
                  }
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>Radio buttons are to be used when a user needs to be presented with a list of five options or less and needs the ability to select only one option. The buttons are mutually exclusive, meaning that selecting one will automatically deselect any others.</p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Radio button typography specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="25%">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Label</TableHeaderCell>
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
                <TableHeaderCell>Gutter (left)</TableHeaderCell>
                <TableCell>
                  16px
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Radio button elements</h3>
          <Table
            caption="Radio button elements specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="25%">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Radio button (default)</TableHeaderCell>
                <TableCell>
                  Not selected
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (default)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Radio button (selected)</TableHeaderCell>
                <TableCell>Selected</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (selected)</TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Radio button</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Radio button focus state specifications">
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
            <ListItem>
              Radio buttons should be circular so as to differentiate them from checkboxes.
            </ListItem>
            <ListItem>
              Radio buttons should always have labels and the labels should be stylistically consistent.
            </ListItem>
            <ListItem>
              Options should be ordered logically, but not alphabetically, as that ordering is not transferrable to other languages.
            </ListItem>
            <ListItem>
              Only offer a pre-selected default radio button selection if you want to encourage the user to select a certain option. Use the pre-selected default radio button selection with caution since it biases the user towards a certain answer. If users should be given an "opt out" option, provide one in the form of "none" or "not applicable."
            </ListItem>
            <ListItem>
              List the options vertically whenever possible, as opposed to horizontally.
            </ListItem>
            <ListItem>
              Due to the small size of radio buttons, ensure that both the button icon itself as well as its label is selectable (meaning that users can check an option by selecting both the button itself or its label text).
            </ListItem>
            <ListItem>
              Use radio buttons instead of dropdowns whenever possible. By displaying all possible choices at once, user cognitive load is minimized.
            </ListItem>
            <ListItem>
              Ensure that options are clear and distinct from one another. Because users can only select one option, any overlap will cause user confusion.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Provide instructions to help users understand how to use radio buttons. </ListItem>
            <ListItem>
              Indicate any required and optional radio buttons.</ListItem>
            <ListItem>
              Provide labels to identify radio buttons and describe their purpose.</ListItem>
            <ListItem>
              Group radio buttons and associate related radio buttons with a <code>&lt;fieldset&gt;</code> and a <code>&lt;legend&gt;</code>.</ListItem>
            <List>
              <ListItem>
                The <code>&lt;fieldset&gt;</code> element provides a container for related form controls, and the <code>&lt;legend&gt;</code> element acts as a heading to identify the group.</ListItem>
              <ListItem>
                The <code>&lt;legend&gt;</code> for a group of controls can also highlight common attributes of all controls, for example, to advise that all fields in the group are required.</ListItem>
            </List>
            <ListItem>
              ARIA can also be used to group form fields. The <code>role="group"</code> or <code>role="radiogroup"</code> can be used to group controls. The group needs to have an accessible name using <code>aria-labelledby</code>.</ListItem>
            <ListItem>
              Ensure radio button's target size is at least 44 by 44 CSS pixels.</ListItem>
            <ListItem>
              When radio button group does not have a default selected, the focus should move to the first radio button in the group.</ListItem>
            <ListItem>
              In left-to-right languages, it is customary to visually position labels to the right of radio buttons.</ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships" target="_blank">1.3.1 Info and Relationships</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#contrast-minimum" target="_blank">1.4.3 Contrast (Minimum) </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;showtechniques=143&amp;currentsidebar=%23col_overview#non-text-contrast" target="_blank">1.4.11 Non-text Contrast</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard" target="_blank">2.1.1 Keyboard </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-visible" target="_blank">2.4.7 Focus Visible </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;showtechniques=143&amp;currentsidebar=%23col_overview#label-in-name" target="_blank">2.5.3 Label in Name </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;showtechniques=143&amp;currentsidebar=%23col_overview#target-size" target="_blank">2.5.5 Target Size</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions" target="_blank">3.3.2 Labels or Instructions </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143#name-role-value" target="_blank">4.1.2 Name, Role, Value</ExternalLink></ListItem>
          </List>
                  
          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4> 
          <List>
            <ListItem><ExternalLink href="https://www.w3.org/TR/WCAG20-TECHS/ARIA17.html" target="_blank">ARIA17: Using grouping roles to identify related form controls</ExternalLink></ListItem>
          </List>      
        </DocsSection>
      </DocsPage>
    </div>
  );
}
