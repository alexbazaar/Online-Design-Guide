import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import InputStepperImage from "../assets/images/spacing-specs/General_Elements_Input_Stepper.png";
import InputStepper from "../../../ols-ui/src/components/InputStepper";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for TabView.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function InputStepperPage() {
  return (
    <div>
      <Helmet title="Input stepper" />
      <DocsPage
        className="docs-styles"
        title="Input stepper"
        subtitle="Input steppers allow users to easily input data."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <div style={{ marginBottom: "24px" }}>
                  <InputStepper
                    id="basic"
                    min={1}
                    max={10}
                    initialValue={1}
                    required={false}
                    label="Label"
                  />
                </div>
                <InputStepper
                  id="required-with-error"
                  min={1}
                  max={10}
                  initialValue={0}
                  errorState={true}
                  required={true}
                  label="Label"
                />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  src={InputStepperImage}
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                  alt="This is a marked up graphic of the Input Stepper spacing"
                />
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
                  <InputStepper
                    id="basic"
                    min={1}
                    max={10}
                    initialValue={1}
                    required={false}
                    label="Label"
                  />
                  <InputStepper
                    id="required-with-error"
                    min={1}
                    max={10}
                    initialValue={0}
                    errorState={true}
                    required={true}
                    label="Label"
                  />
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    $btn-width: 44px;
                    $btn-height: 44px;
                    
                    .wrapper {
                      display: inline-flex;
                      &:focus {
                        outline: none;
                      }
                    }
                    
                    .stepperButton[data-component="Button"] {
                      width: $btn-width;
                      height: $btn-height;
                      border: 1px solid #00599c;
                      margin: 0;
                      padding: 0;
                    
                      span {
                        display: inline-flex;
                      }
                    
                      &[aria-disabled="true"], &[aria-disabled="true"]:hover {
                        border: 1px solid #5b616b;
                      }
                    
                      &:focus:not(.focus-visible):before {
                        z-index: 2;
                        height: calc(100% + 8px);
                        width: calc(100% + 8px);
                        top: -4px;
                        left: -4px;
                      }
                    
                      &:focus{
                        z-index: 3;
                      }
                    
                      &:hover:not(:disabled) {
                        background-color: #f3f3f3;
                        border: 1px solid #00599c;
                      }
                    }
                    
                    .decrementButton {
                      border-radius: 4px 0px 0px 4px !important;
                    }
                    
                    .incrementButton {
                      border-radius: 0px 4px 4px 0px !important;
                    }
                    
                    .inputField {
                      text-align: center;
                      margin-right: -1px;
                      margin-left: -1px;
                      line-height: 24px;
                      color: #1b1b1b;
                      font-size: 16px;
                      height: 44px;
                      width: 98px !important;
                    
                      &:focus {
                        z-index: 2 !important;
                        outline: 3px solid #2491ff;
                        outline-offset: 0;
                      }
                    }
                    
                    .inputField::-webkit-outer-spin-button,
                    .inputField::-webkit-inner-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                    
                    .inputField[type="number"] {
                      -moz-appearance: textfield;
                    }
                    
                    .hintMessage {
                      font-size: 14px;
                      line-height: 20px;
                      color: #5b616b;
                      display: block;
                      margin-bottom: 8px;
                    }
                    
                    .errorMessage {
                      font-size: 14px;
                      line-height: 20px;
                      color: #d11242;
                      display: block;
                      margin-top: 8px;
                    }
                    
                    .srOnly {
                      @include sr-only;
                    }
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}>
            <strong>Note:</strong>
            <ul>
              <li>Use browser inspect tool to view the component at various breakpoints.</li>
              <li>There are multiple buttons on this page that have the same accessible name because their functionality is the same. A unique identifier was not assigned since they will be used by the developers to fit respective applications or websites.</li>
            </ul>
          </span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            An input stepper is an easy-to-use control that can be used in
            online forms when a user needs to enter a small numerical value.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Input Stepper Typography Specifications">
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
                  <Link to="/styles/typography/#form-inputs">Hint text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Error text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">Error text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>#d11242</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Input text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Button elements</h3>
          <Table caption="Input Stepper Button Elements Specifications">
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
                <TableHeaderCell>Border (default)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (disabled)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Background (hover)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray light</Link>
                </TableCell>
                <TableCell>#d6d7d9</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>44px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>44px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius (minus button)</TableHeaderCell>
                <TableCell>4px 0px 0px 4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius (plus button)</TableHeaderCell>
                <TableCell>0px 4px 4px 0px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Input Stepper Icon Elements Specifications">
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
                <TableHeaderCell>Minus (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">minus-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Plus (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">plus-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Minus (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">minus-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Plus (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">plus-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Minus width</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Minus height</TableHeaderCell>
                <TableCell>2px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Plus width</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Plus height</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Text field elements</h3>
          <Table caption="Input Stepper Text Field Elements Specifications">
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
                <TableHeaderCell>Input border</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Error border</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>#d11242</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus State</h3>
          <Table caption="Input Stepper Focus State Specifications">
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
                <TableCell>3px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue vivid</Link>
                </TableCell>
                <TableCell>2491ff</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              Input stepper should be used for a small number with a defined
              minimum and maximum.
            </ListItem>
            <ListItem>
              In some situations, set the most frequently selected number as
              default.
            </ListItem>
            <ListItem>
              Clearly indicate to which form content that the input stepper
              applies. For example, if an input stepper is used for changing
              time and date, the input being adjusted should be clearly
              highlighted so that users are aware of what they are changing.
            </ListItem>
            <ListItem>
              Use large buttons for both desktop and mobile to support input
              modality.
            </ListItem>
            <ListItem>
              In addition to a well-designed input stepper, consider adding
              alternative input methods to give users control and flexibility.
            </ListItem>
            <ListItem>
              The input stepper should be avoided when a numeric field allows
              for a wide range of values (e.g., age), with no one value being
              entered significantly more often than others.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Form instructions</h3>
          <List>
            <ListItem>
              Provide instructions to help users understand how to use
              individual input steppers.
            </ListItem>
          </List>
          <h3>Name and labels</h3>
          <List>
            <ListItem>
              Labels describe the purpose of the input stepper.
            </ListItem>
            <ListItem>
              Input steppers have an accessible label. Example:&nbsp;
              <i style={{ fontStyle: "italic" }}>
                Quantity. To set the value use the arrow keys or type the value.
              </i>
            </ListItem>
            <ListItem>
              By default, the accessible name is computed from any text content
              inside the button element. However, it can also be provided with <code>aria-labelledby</code> or <code>aria-label</code>.
            </ListItem>
            <ListItem>
              Label text has high contrast with the button color.
            </ListItem>
          </List>
          <h3>Input stepper role and state</h3>
          <List>
            <ListItem>
              Input stepper button has a role of <code>&lt;button&gt;</code>.
            </ListItem>
            <ListItem>
              When the action associated with a button is unavailable, the
              button has <code>aria-disabled=true</code>.
            </ListItem>
            <ListItem>
              Input stepper form controls that are related need to be grouped to
              be more understandable as related controls are easier to identify.
            </ListItem>
            <ListItem>
              Grouping needs to be carried out visually and in the code, for
              example, by using the <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements to associate related form
              controls.
            </ListItem>
            <ListItem>
              Related entries of a <code>&lt;select&gt;</code> element can be
              grouped using <code>&lt;optgroup&gt;</code>.
            </ListItem>
          </List>
          <h3>Keyboard</h3>
          <p>
            When interacting with the input stepper changes the content on the
            page:
          </p>
          <List>
            <ListItem>
              The page provides notification of each change in content. For
              example, after adding or removing dependents, the screen reader
              announces:
              <List>
                <ListItem>
                  <i style={{ fontStyle: "italic" }}>dependents added, dependents total [list number]</i>
                </ListItem>
                <ListItem>
                  <i style={{ fontStyle: "italic" }}>dependent removed, the total [list number]</i>
                </ListItem>
              </List>
            </ListItem>
          </List>
          <h3>Visible focus and focus order</h3>
          <List>
            <ListItem>Input stepper displays visible focus.  </ListItem>
            <ListItem>
              Keyboard focus automatically returns to the logical sequence of
              focus order before the content was revealed, OR the focus does not
              return exactly to the place before content was revealed as long as
              the sequence is logical. One additional keystroke or keystroke
              combination returns focus to the logical sequence of focus order
              before the content was revealed.
            </ListItem>
          </List>
          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                1.3.1 Info and Relationships{" "}
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
                target="_blank"
              >
                1.4.3 Contrast (Minimum)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text">
                1.4.4 Resize Text
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#no-keyboard-trap">
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#link-purpose-in-context">
                2.4.4 Link Purpose
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#headings-and-labels">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#on-focus">
                3.2.1 On Focus
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#labels-or-instructions">
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
