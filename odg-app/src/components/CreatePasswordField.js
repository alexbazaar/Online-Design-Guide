import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import CreatePasswordField from "../../../ols-ui/src/components/CreatePasswordField";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

/**
 * *****************************************************************************
 * Content for PasswordField.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function CreatePasswordFieldPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Create Password Field"
      subtitle="Ask the user to create a secure password."
    >
      <DocsSection>
        <Panel>
          <CreatePasswordField id="create-password-preview" hasToggle />
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>
          Password creation should be used when the user is setting up an
          account or performing a similar action that would require them to log
          in to access a secure page at a later date.
        </p>
      </DocsSection>

      <DocsSection title="Specifications">
        <Table
          caption="Create Password Specifications"
        >
          <thead>
            <TableRow>
              <TableHeaderCell scope="col">Context</TableHeaderCell>
              <TableHeaderCell scope="col">Reference</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Input</TableCell>
              <TableCell>
                See
                <Link to="/components/text-field">
                  <code>Text Field</code>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Show Password</TableCell>
              <TableCell>
                See
                <Link to="/components/checkbox">
                  <code>Checkbox</code>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>List</TableCell>
              <TableCell>
                See
                <Link to="/styles/typography">
                  <code>Text List</code>
                </Link>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </DocsSection>

      <DocsSection title="Best practices">
        <ul>
          <li>
            Limit password rules to two or three when possible (NOTE: Might not
            always be possible due to agency security requirements).
          </li>
          <li>
            When using more than three password rules, ensure that the rules are
            clear, concise, and explained in plain language to minimize
            confusion.
          </li>
          <li>
            If a user's chosen password violates one or more of the password
            rules, highlight which rules the user violated so they know how to
            fix the error(s).
          </li>
          <li>
            Add an option to show/hide the password rather than making the user
            type the password twice. This minimizes cognitive load by allowing
            them to see as they type and correct any typos or missed keys
            without having to clear the whole field and type the entirety of the
            password again.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">
        <h4>Provide a valid label for form fields</h4>

        <p>
          When on-screen labels are present, they must be explicitly associated
          with form fields. When on-screen labels are not present, form fields
          must be given an accessible label.
        </p>

        <p>
          When form fields do not explicitly include a label, assistive
          technologies may incorrectly render the label or provide no label at
          all to users. When labels are not present or are incorrect, users of
          assistive technologies may not be able to complete a form.
        </p>

        <p>
          The HTML5 specification has a new form field attribute called
          placeholder. This represents a label or hint, such as a word or short
          phrase, that is assigned to a form field such as an input field. The
          label or hint appears within the form field and goes away when users
          start typing. When the placeholder attribute is used, the label or
          hint may not be detected by assistive technologies. Therefore,
          developers should provide off-screen text in the label element of the
          form field or provide a title.
        </p>

        <p>
          Developers should define form labels using the label element whenever
          an on-screen label is present. The label element's value is then
          explicitly associated with the relevant form field using the for and
          id attributes. Use of the label element provides an added benefit as
          it increases the target area that users can select to focus the form
          field. In certain instances, however, it is impractical or
          'undesirable' to use an explicit label for a form field; this is
          largely driven by the fact that the value between the opening and
          closing label tags must, by definition, be a block of displayed text.
        </p>

        <p>
          When on-screen text is not available or cannot programmatically be
          contained in a label (such as when a field in placed in a data table
          with a column label and a row label - developers should utilize the
          title attribute to provide the label. However, the title attribute
          will interfere with the label element in certain assistive
          technologies. In order to supplement or mimic a label, form fields are
          sometimes given a title attribute. In such cases, the title's value
          must sufficiently indicate the purpose/usage of the form field as
          conveyed by the visual label and/or the visual layout. This is
          important because some users of assistive technology such as speech
          recognition software may interact with a form field by speaking the
          field's visual label. When the programmatic label does not match the
          visual label or obstacle may be created for users of speech
          recognition software. Furthermore, to prevent confusion with AT to
          know which programmatic information to use as the accessible name,
          title, label, or ARIA based names should be used in a mutually
          exclusive fashion.
        </p>

        <p>
          When the title attribute is used, developers should ensure that the
          title attribute is specific for the given form field rather than a
          general description.
        </p>

        <p>
          The <em>aria-label</em> and <em>aria-labelledby</em> attributes can
          also be used to provide a label or labels for form fields to assistive
          technology that supports ARIA. The <em>aria-labelledby</em> attribute
          must contain one or more ids of elements that label the form field.
          Note: for multiple labels to properly be rendered in Internet Explorer
          it may be necessary to set <em>tabindex="-1"</em> on the elements
          designated as labels. The <em>aria-label</em> attribute should only be
          used when on-screen labels cannot be used. Developers should place the
          string that labels the form field in the <em>aria-label</em>
          attribute. Because ARIA is not supported by all assistive technology,
          developers may need to consider a non-ARIA based method in some
          situations such as when the environment used with the site or
          application mandates non-ARIA supporting assistive technology.
        </p>

        <h4>Note:</h4>

        <ul>
          <li>
            Whenever a form field is required, or some other form of constraint
            applies, developers should ensure the "required" indicator
            (typically an asterisk *) is included in the input label, again
            either in the label or the input title attribute. If ARIA is used,
            developers can use the <em>aria-required</em>
            attribute to indicate that a form field is required.
          </li>

          <li>
            Also, assistive technologies such as screen readers can become
            confused by the presence of formatting markup between the opening
            and closing label tags, resulting in the incorrect reading of its
            text value. Examples include the emphasis elements strong and b, and
            the line break element br. Developers should move any desired
            formatting markup outside the label block, rather than inside it, or
            verify that the usage is rendered correctly in screen readers. (This
            does not apply to the use of form input labels put in the input's
            title attribute.)
          </li>
          <li>
            There should be no more than one label explicitly associated to a
            given form field.
          </li>
          <li>
            HTML5 placeholder attribute should not be used as a substitute for
            the label of the form field. If the HTML5 placeholder is used as a
            label of the form field, an alternative method must be provided. For
            example, an explicit label, a title attribute or the CSS off-screen
            text.
          </li>
        </ul>

        <p>
          Some assistive technology may not support implicit form labels. For
          assistive technology such as speech recognition that does not support
          this another method should be provided. An implicit label is a label
          that wraps label text and a form field but that does not contain an
          explicit for and id relationship.
        </p>

        <h4>Ensure form field constraints are clearly indicated</h4>

        <p>
          When form fields have specific constraints, such as required state,
          formatting requirements, or unit requirements, developers must ensure
          these requirements are clearly communicated. These requirements should
          be communicated visually to the immediate left/above or right/below
          the field as well as programmatically associated with the field.
          Examples of form field constraints include:
        </p>

        <ul>
          <li>Date Masks (i.e., YYYY/MM/DD)</li>
          <li>Required field indicators</li>
          <li>Text representing a minimum and maximum range of numbers</li>
        </ul>

        <p>
          When field constraints are not displayed users with cognitive
          disabilities may not know what the minimum fields to complete are.
          When constraints are not associated with a field users of assistive
          technology may not understand the relationship of the constraint to
          the field.
        </p>

        <p>
          Ensure that all label text, including field name, required state, and
          any required formatting information is provided. This is best done by
          enclosing this information in the label element. The label and
          constraints element should be located to the immediate left or right
          of the field as displayed on the screen. There are additional
          techniques that can be used to associate constraints with fields
          including the <em>aria-required</em> attribute, the HTML5 required
          attribute and other mechanisms to assign/associate an accessible name
          to a field such as <em>aria-label</em> and <em>aria-labelledby</em>.
          The aria-describedby attribute can also be used to associate form
          field instructions and constraints with a form field. Keep in mind
          that constraints including required or optional fields must be
          communicated both visually and programmatically.
        </p>

        <p>
          "In some forms, it may be that all fields are required. Rather than
          indicating in every field that it is required, it may be simpler to
          meet this compliance requirement by placing simple text at the
          beginning of the form such as "All fields are required." Similarly, if
          most fields are required, the text atop the form could say "All fields
          are required except where indicated", with the optional fields visibly
          including "(optional)" in their labels. Note that while
          <em>aria-required="true"</em> indicates required fields to Assistive
          Technology, <em>aria-required="false"</em> is not a supported method
          of indicating optional fields."
        </p>

        <p>
          A note about the HTML5 required attribute. This attribute when set
          indicates that a form field is required. This attribute may not be
          detected by all assistive technologies and also cannot be detected
          visually until the user submits the forms at which time browsers may
          highlight the field in a red color and when focused or hovered may
          display an error message. Thus, when required attribute is use on the
          form fields, additional mechanisms other than required attribute must
          be used to indicate the required fields. For example, providing a cue
          that an asterisk is a required field indicator and including the
          asterisk inside the explicit label of the form field is an optimal
          solution when required is used in the form fields. An explanation of
          what the asterisk indicates should e provided at the top of the form
          -- i.e., "Required fields are marked with an *".
        </p>

        <h4>Provide suggestions for error messages when known</h4>

        <p>
          Suggestions must be provided for error messages when suggestions are
          known and when giving a suggestion would not invalidate the purpose of
          the field. When only notification of an error is provided, some users
          with cognitive impairments may not know how to correct the error.
          Suggestions may also allow users with visual and mobility impairments
          to complete the form before giving up as suggestions will allow them
          to correct the error without multiple error attempts. Multiple
          attempts can take many steps without the use of a mouse and users can
          give up if re-entering data is overwhelming.
        </p>

        <p>
          Provide suggestions when possible. For example, if a password does not
          meet the requirements for a secure password the user must be informed
          of what those requirements such as having capital letters, numbers,
          and symbols. Developers only have to provide suggestions if the error
          is automatically detected. Developers should provide suggestions to
          the user on what information should be entered in the form field that
          was found in error. This can be in the form of specific examples or
          the format of information that is required. This information should be
          provided at the top of the form where the error message is indicated
          and described.
        </p>

        <p>
          Developers are not required to allow the user to move focus from the
          error message to the form field although this is very helpful to many
          users with disabilities.
        </p>

        <p>
          Developers should not provide suggestions for errors when providing
          that information would jeopardize the purpose of the form input.
        </p>

        <h4>
          Ensure form fields are explicitly labeled when rendered and not only
          when focused
        </h4>

        <p>
          In order for users of assistive technology to properly access form
          fields, all fields must contain explicit labels no matter if the field
          is focused or not. When fields only contain explicit labels when the
          field is focused, users of assistive technology may not be able to
          complete the form. For example, users of speech recognition software
          can speak the label of the form to focus the field, if the field does
          not have a label until it is focus this method of access will not be
          possible. Similarly, users of screen readers may access form fields by
          select the field from a list of fields and not by tabbing to the
          field. When form fields do not contain labels until focused the fields
          labels will not be available in this selection list method.
        </p>

        <h4>
          Provide a clear indication of fields in error for information that is
          submitted
        </h4>

        <p>
          When information is entered into a form, developers must ensure that
          form fields that are in error are clearly identified and instructions
          are provided to users on the methods to address the errors. When
          general error messages are provided users with disabilities often find
          it difficult to determine which items in the form need to be modified
          to ensure a form can be submitted.
        </p>

        <p>
          Developers should ensure that all forms provided clearly identify
          individual fields in error and provide instructions on how to address
          the errors of individual fields. This can be achieved by placing the
          names of fields in error at the top of the form or by indicating there
          are errors and associating field-specific error messages with each
          field in error by a technique such as aria-describedby, explicit
          labels, etc. Properties such as the aria-invalid state attribute can
          also be used to indicate to assistive technology that a field is in
          error.
        </p>

        <p>
          Optimally, when the errors appear at the top of the form but are not
          associated with the fields, there should be some way to jump to the
          fields in error such as by links or another method. Refer to the ARIA
          specification for information on ARIA states and properties.
        </p>

        <p>
          It is advisory to alert the user that a field is in error after
          submitting by using a JavaScript Alert, ARIA alert/ARIA live region,
          or by focusing the error or focusing the field in error that has an
          associated error message via aria-describedby. JavaScript alerts may
          be less desirable because they pop a window but these may be good
          options when non-ARIA supporting assistive technology or user agents
          are required.
        </p>

        <h4>Applicable Standards</h4>
        <p>Section 508 and 255 (Revised 2017)</p>
        <p>Chapter 3: Functional Performance Criteria</p>
        <p>302.9 With Limited Language, Cognitive, and Learning Abilities</p>

        <p>Web Content Accessibility Guidelines (WCAG) 2.0</p>
        <ul>
          <li>
            1.3.1 Information and relationships conveyed through presentation
          </li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
          <li>3.3.3 Error Suggestion</li>
        </ul>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="https://component-library-master-pl.irslabs.org/create-password-field">
              CreatePasswordField
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
