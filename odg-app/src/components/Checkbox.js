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

import Checkbox from "../../../ols-ui/src/components/Checkbox";

import CheckboxSpacing from '../assets/images/spacing-specs/Form_Elements_Check_Box.png';
import appStyles from "../styles/App.scss";


/**
 * *****************************************************************************
 * Content for Checkbox.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function CheckboxPage() {
  return (
    <div>
      <Helmet title="Checkbox" />
      <DocsPage
        className="docs-styles"
        title="Checkbox"
        subtitle="Checkboxes allow users to select one or more values from a small set of options."
        emphasisTag={[ 'IRAP APPROVED', 'USER TESTED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <fieldset>
                  <legend className={appStyles["sr-only"]}>Famous people checkboxes</legend>
                  <Checkbox label="Sojourner Truth" defaultChecked />
                  <Checkbox label="Frederick Douglass" defaultChecked />
                  <Checkbox label="Booker T. Washington" disabled />
                  <Checkbox label="George Washington Carver" />
                </fieldset>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <img style={{ width: "100%", maxWidth: '300px', height: 'auto' }} src={CheckboxSpacing} alt="This is a marked up graphic of the Checkbox spacing" />

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
                    <legend className={appStyles["sr-only"]}>Famous people checkboxes</legend>
                    <Checkbox label="Sojourner Truth" defaultChecked />
                    <Checkbox label="Frederick Douglass" defaultChecked />
                    <Checkbox label="Booker T. Washington" disabled />
                    <Checkbox label="George Washington Carver" />
                  </fieldset>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`

                  $checkbox-icon-size: 20px;

                  .checkbox {
                    position: absolute;
                    margin-left: -20px;
                    opacity: 0;
                  }

                  .checkbox + label {
                    margin: baselines(3) 0;
                    cursor: pointer;
                    font-weight: 400;
                  }

                  .checkbox + label {
                    line-height: 25px;
                  }

                  .checkbox + label::before {
                    display: inline-block;
                    width: $checkbox-icon-size;
                    height: $checkbox-icon-size;
                    border: solid 1px #5b616b;
                    margin-right: $module-spacing;
                    background: #ffffff;
                    border-radius: $border-radius;
                    content: "\a0";
                    line-height: 17px;
                    text-indent: 0.15em;
                    vertical-align: middle\0; // Target IE 11 and below to vertically center inputs
                  }

                  .checkbox:disabled + label {
                    color: #5b616b;
                    cursor: not-allowed;
                  }

                  .checkbox:disabled + label::before {
                    background: #d6d7d9;
                    border-color: #d6d7d9;
                    cursor: not-allowed;
                  }

                  .checkbox:checked + label::before {
                    background-color: #00599c;
                    border-color: #00599c;
                  }

                  .checkbox:checked + label::before,
                  .checkbox:checked:disabled + label::before {
                    background-image: url("./check.svg");
                    background-position: 50%;
                    background-repeat: no-repeat;
                  }

                  // Custom focus outline for Checkbox
                  .checkbox:checked + label,
                  .checkbox:not(:checked) + label {
                    position: relative;
                  }

                  .checkbox:not(:checked):focus + label::after,
                  .checkbox:checked:focus + label::after {
                    box-sizing: border-box;
                    border: 3px solid #2491ff;
                    content: "";
                    height: 34px;
                    width: 34px;
                    position: absolute;
                    top: -4px;
                    left: -7px;
                    border-radius: 0;
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
          Checkboxes are to be used when a user needs to be presented with a list of options and needs the ability to select more than one option. Each checkbox functions independently from all the others, meaning that selecting one will not automatically deselect any others.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Checkbox Typography Specifications"
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
                <TableHeaderCell>Label (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Body text
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
                <TableHeaderCell>Gutter (left)</TableHeaderCell>
                <TableCell>
                  16px
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Panel elements</h3>
          <Table
            caption="Checkbox Panel Elements Specifications"
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
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table
            caption="Checkbox Icon Elements Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Checkbox (load)</TableHeaderCell>
                <TableCell>
                  not selected
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    White
                  </Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Checkbox border (load)</TableHeaderCell>
                <TableCell>
                  1px solid
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray dark
                  </Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Checkbox (selected)</TableHeaderCell>
                <TableCell>
                  selected
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue
                  </Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Checkbox icon (selected)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">
                    check-solid
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    White
                  </Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Checkbox (disabled)</TableHeaderCell>
                <TableCell>
                  disabled
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray light
                  </Link>
                </TableCell>
                <TableCell>#d6d7d9</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Checkbox</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Checkbox Focus State Specifications">
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
              A checkbox should always be a square shape; it should show an X or a
              checkmark when the user selects it.
            </ListItem>
            <ListItem>
              List the options vertically whenever possible, as opposed to
              horizontally.
            </ListItem>
            <ListItem>
              Due to the small size of checkboxes, ensure that both the box icon
              itself as well as its label is selectable (meaning that users can
              check an option by selecting both the box itself or its label text).
            </ListItem>
            <ListItem>
              Use positive and active wording; checkboxes should be worded to
              ensure that the user knows exactly what will happen if they check it
              AND what will happen if they do not.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Provide a visible label that describes the checkbox's purpose.
            </ListItem>
            <ListItem>
              Checkboxes also need a programmatic label such as an accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical).
            </ListItem>
            <ListItem>
              Checkboxes need to indicate state of checked/not checked.
            </ListItem>
            <ListItem>
              Group checkboxes to provide an ability to choose one or more items from a group of related options.
              <List>
                <ListItem>
                  Grouping needs to be carried out visually and in the code, for example, by using the <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements to associate related form controls. For example, on an order form, authors should separate categories such as &quot;Billing information&quot;, &quot;Shipping address&quot;, and &quot;Order summary&quot; using fieldset elements.
                </ListItem>
                <ListItem>
                  By grouping all of the elements in one category users of assistive technologies can understand the relationship of the elements.
                </ListItem>
              </List>
            </ListItem>
          </List>
          <p>
            <b>Note:</b> Checkboxes need to conform to WCAG 2.0 requirements for forms. See the <Link href="/components/form-overview">form overview</Link> page for more detail.
          </p>
          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">1.3.1 Info and Relationships</ExternalLink>

              <List>
                <ListItem>Technique H71: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H71">Providing a description for groups of form controls using fieldset and legend elements</ExternalLink></ListItem>
              </List>
            </ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum">1.4.3 Contrast Minimum</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#non-text-contrast">1.4.11 Non-text Contrast</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">2.1.1 Keyboard</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">2.4.7 Focus Visible</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#label-in-name">2.5.3 Label in Name </ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#target-size">2.5.5 Target Size</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#labels-or-instructions">3.3.2 Labels or Instructions</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#name-role-value">4.1.2 Name, Role, Value</ExternalLink></ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
