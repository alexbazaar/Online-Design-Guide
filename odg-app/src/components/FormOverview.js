import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import Heading from 'ols-ui/heading';

import TextField from "../../../ols-ui/src/components/TextField";
import Dropdown from "../../../ols-ui/src/components/Dropdown";
import Alert from 'ols-ui/alerts';
import List, { ListItem } from 'ols-ui/list';
import { FilledButton } from "../../../ols-ui/src/components/Buttons";

import DropdownErrorSpacing from '../assets/images/spacing-specs/Dropdown_Error_Spacing.png';
import DropdownOpenSpacing from '../assets/images/spacing-specs/Dropdown_Open_Spacing.png';
import DropdownSpacing from '../assets/images/spacing-specs/Dropdown_Spacing.png';
import FormErrorAlertSpacing from '../assets/images/spacing-specs/FormErrorAlert_Spacing.png';

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Form Overview.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function FormOverviewPage() {
  return (
    <div>
      <Helmet title="Form overview" />
      <DocsPage
        className="docs-styles"
        title="Form overview"
        subtitle="Forms collect user input information with a goal of analyzing and/or storing this information."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <div style={{ marginTop: "-16px", display: "block" }}></div>
                <Alert
                  headingLevel="2"
                  type="error"
                  title="The following 2 errors have occurred:"
                  id="error"
                  tabIndex="-1"
                  aria-atomic="true"
                >
                  <List type="ol" style={{ paddingLeft: '16px' }}>
                    <ListItem>
                      <Link href="#">Text field label: Error message</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">Dropdown label: Error message</Link>
                    </ListItem>
                  </List>
                </Alert>
                <Heading headinglevel="2">Form heading</Heading>
                <p>
                  All fields marked with an asterisk (<span style={{ color: '#d11242' }}>*</span>) are required.
                </p>
                <div>
                  <TextField
                    label="Text field label"
                    id="example1"
                    hintText="Text field hint text"
                    value="Enter text"
                    errorMessage="Error: Error message"
                    required
                  />
                </div>
                <div>
                  <Dropdown
                    label="Dropdown label"
                    hintText="Dropdown hint text"
                    placeholder="Select an option"
                    id="example3"
                    errorMessage="Error: Error message"
                    required
                  >
                    <option value="value1">Option A</option>
                    <option value="value2">Option B</option>
                    <option value="value3">Option C</option>
                  </Dropdown>
                </div>
                <FilledButton wide>Submit</FilledButton>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
          A form should be used whenever user input is required.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <p>Please refer to each form element page for best practices:</p>
          <List>
            <ListItem>
              <Link to="/components/checkbox">Checkbox</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/date-field">Date field</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/dropdown">Dropdown</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/form-error-alert">Form error alert</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/input-stepper">Input stepper</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/radio">Radio button</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/text-input/text-area">Text area</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/text-input/text-field">Text field</Link>
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Usability guidance">

          <h3>Form error alert</h3>
          <List>
            <ListItem>Refer to <Link to="/components/form-error-alert">form error alert</Link> for best practices.</ListItem>
          </List>

          <h3>Form instruction</h3>
          <List>
            <ListItem>
              Under the form heading, insert instructions at top of the form: "All fields marked with an asterisk (<span style={{ color: '#d11242' }}>*</span>) are required."
            </ListItem>
            <ListItem>
              Limit asks for information to only what is really needed. Optional and extra fields may impact conversion rates.
            </ListItem>
          </List>

          <h3>Form structure</h3>
          <List>
            <ListItem>
              Order the information requested in the form logically from the user's perspective.
            </ListItem>
            <ListItem>
              Forms should be consistent with logical communication. Group the related information to flow from one set of questions to the next to easily make sense of the information to be filled in.
            </ListItem>
            <ListItem>
              When possible, group questions by input type (keyboard entry, click selection, etc.) to minimize back and forth actions from the user.
            </ListItem>
          </List>

          <h3>Required fields</h3>
          <List>
            <ListItem>Insert an asterisk <span style={{ color: '#d11242' }}>*</span> to the right of the onscreen label to indicate a required field and include a corresponding notation at top of the form explaining what the asterisk is for.</ListItem>
            <ListItem>Ask only what is required. Try to avoid optional and non-essential fields which may affect form completion rate.</ListItem>
          </List>

          <h3>Inline errors</h3>
          <List>
            <ListItem>
              An error message should appear under the field when the user leaves a required field empty and tabs out of the field (or swipes out in mobile).
            </ListItem>
            <ListItem>
              An error message should appear under the field when the user enters an invalid response and tabs out of the field (or swipes out in mobile).
            </ListItem>
            <ListItem>
              When an error occurs, the field outline should change to red and red error text will appear underneath the field.
            </ListItem>
            <ListItem>
              The error message should include the word "Error:" before the error. For example, "Error: Last name is required"
            </ListItem>
            <ListItem>
              Once the user corrects the error and tabs out of the field (or swipes out in mobile), the error message underneath the field disappears.
            </ListItem>
            <ListItem>
              Note: The form error alert box does not appear until after the user submits the page.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>
            Please refer to each form element page for accessibility best practices:
          </h3>
          <List>
            <ListItem>
              <Link to="/components/checkbox">Checkbox</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/date-field">Date field</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/dropdown">Dropdown</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/form-error-alert">Form error alert</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/input-stepper">Input stepper</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/radio">Radio button</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/text-area">Text area</Link>
            </ListItem>
            <ListItem>
              <Link to="/components/text-field">Text field</Link>
            </ListItem>
          </List>

          <h3>Error identification, suggestion, prevention</h3>
          <List>
            <ListItem>
              Provide feedback to users about the results of their form submission, whether successful or not.
              <List>
                <ListItem>
                  This includes in-line feedback at or near the form controls and overall feedback that is typically provided after form submission.
                </ListItem>
                <ListItem>
                  Notifications have to be concise and clear.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Identify the errors in text and sufficiently describe to the user in text.
            </ListItem>
            <ListItem>
              Provide guidance (e.g., suggestion for corrected input) about how to correct errors for form fields.
            </ListItem>
            <ListItem>
              The web page allows to the user to check, reverse, and or confirm submission.
            </ListItem>
          </List>

          <h3>Labeling controls</h3>
          <List>
            <ListItem>
              Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the <code>&#60;label&#62;</code> element.
            </ListItem>
            <ListItem>
              Labels describe the purpose of the form control.
            </ListItem>
            <ListItem>
              A label and a form control should be associated with each other.
            </ListItem>
          </List>

          <h3>Grouping controls</h3>
          <List>
            <ListItem>
              Group related form controls to make checkboxes/radio buttons more understandable as related controls are easier to identify.
            </ListItem>
            <ListItem>
              Grouping needs to be carried out visually and in the code, for example, by using the <code>&#60;fieldset&#62;</code> and <code>&#60;legend&#62;</code> elements to associate related form controls.
            </ListItem>
            <ListItem>
              Related entries of a <code>&#60;select&#62;</code> element can be grouped using <code>&#60;optgroup&#62;</code>.
            </ListItem>
          </List>

          <h3>Form instructions</h3>
          <List>
            <ListItem>Provide instructions to help users understand how to complete the form and use individual form controls.
            </ListItem>
            <ListItem>
              Indicate any required and optional input, data formats, and other relevant information.
            </ListItem>
          </List>

          <p style={{ fontWeight: 'bold' }}>Example:</p>
          <List>
            <ListItem>
              All fields marked "required" must be completed.
            </ListItem>
            <ListItem>
              Dates should all be typed in the format DD/MM/YYYY, (as in 21/07/2013).
            </ListItem>
            <ListItem>
              Passwords must contain at least 8 letters and/or numbers.
            </ListItem>
            <ListItem>
              Extra help can be found immediately after each field.
            </ListItem>
          </List>
          <h3>Validating input</h3>
          <List>
            <ListItem>
              Validate user input to help users avoid mistakes.
            </ListItem>
            <ListItem>
              Use HTML5 to validate common types of input, such as email addresses and dates.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">1.3.1 Info and Relationships</ExternalLink>
              <List>
                <ListItem>Technique H71: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H71">Providing a description for groups of form controls using fieldset and legend elements </ExternalLink></ListItem>
              </List>
            </ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#contrast-minimum">1.4.3 Contrast (Minimum)</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#resize-text">1.4.4 Resize text</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">2.1.1 Keyboard</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">2.4.6 Headings and Labels</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#focus-visible">2.4.7 Focus Visible</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#label-in-name">2.5.3 Label in Name</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#target-size">2.5.5 Target Size</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#error-identification">3.3.1 Error Identification</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">3.3.2 Labels or Instructions</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#error-suggestion">3.3.3 Error Suggestion</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#error-prevention-legal-financial-data">3.3.4 Error Prevention</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">4.1.2 Name, Role, Value</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#status-messages">4.1.3 Status Messages</ExternalLink></ListItem>
          </List>

          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>

          <List>
            <ListItem><ExternalLink href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/alertdialog.html">Alert Dialog Example</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/tutorials/forms/notifications/#listing-errors">Listing errors</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_role_of_alert_for_Error_Feedback_in_Forms">Using ARIA role of alert for Error Feedback in Forms</ExternalLink></ListItem>
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
