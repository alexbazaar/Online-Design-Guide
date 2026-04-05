import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Spacer from "../../../ols-ui/src/components/Spacer";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import AddressForm from '../../../ols-ui/src/components/AddressForm';

/**
 * *****************************************************************************
 * Content for AddressForm.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function AddressFormPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Address Form"
      subtitle="Ask the user for their mailing address."
    >
      <DocsSection>
        <Panel>
          <AddressForm  id="addressForm" />
          <Spacer height={24} />
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>
          Address forms are used when a user needs to enter his or her address in
          different fields (e.g., name in one field, street in one field, city in
          one field, etc.).
        </p>
      </DocsSection>

      <DocsSection title="Specifications">
        <h3>Typography</h3>
        <Table
          caption="Address Form Typography Specifications">
          <thead>
            <TableRow>
              <TableHeaderCell scope="col">Context</TableHeaderCell>
              <TableHeaderCell scope="col">Value</TableHeaderCell>
              <TableHeaderCell scope="col">Color</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableHeaderCell>
                Form Title
              </TableHeaderCell>
              <TableCell>
                <Link to="/styles/typography/#display-type">
                  Heading 28
                </Link>
              </TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>

        <h3>Fields</h3>
        <Table
          caption="Address Form Fields Specifications">
          <thead>
            <TableRow>
              <TableHeaderCell scope="col">Context</TableHeaderCell>
              <TableHeaderCell scope="col">Value</TableHeaderCell>
              <TableHeaderCell scope="col">Reference</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableHeaderCell>
                Input
              </TableHeaderCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                see <Link to="/components/text-field">Text Field</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>
                Pick List
              </TableHeaderCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                see <Link to="/components/dropdown">Dropdown</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>
                Gutter (bottom)
              </TableHeaderCell>
              <TableCell>24px</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </DocsSection>

      <DocsSection title="Best practices">
        <ul>
          <li>
            Use logical sequencing. The proper order for an address field is Name,
            Address, Address 2 or Apt # (optional), City, State, ZIP Code, and Country
            (if applicable).
          </li>
          <li>
            Match the fields to the size and type of the input text. For example,
            ZIP Code should be a maximum of 9 characters wide and only accept numbers.
            Name and Address should not stretch the entire length of a desktop
            computer.
          </li>
          <li>
            Designate optional fields as optional instead of designating required
            fields as required. Given that most will probably be required, designating
            the least number of fields reduces cognitive load.
          </li>
          <li>
            Allow users to type their state abbreviation as well as use a dropdown
            (i.e., give them more than one way to fill out the state field).
          </li>
          <li>
            Support both 5- and 9-digit zip codes.
          </li>
          <li>
            Consider whether a large number of users would have international addresses
            or not and ensure the form is usable for international users too (or
            provide a second form option).
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">

        <h4>
          Ensure labels or instructions are provided for text fields and text areas
        </h4>

        <p>
          The label for any interactive component within Web content makes the component's
          purpose clear. Using the appropriate technology-specific techniques for
          technologies for associating labels with interactive controls allows assistive
          technology to recognize the label and present it to the user, therefore allowing
          the user to identify the purpose of the control. The label may also be used to
          include text or a text symbol indicating that input is required. Ensure text
          instructions are provided at the beginning of a form or set of
          fields that describes the necessary input. Help the user avoid input errors by
          informing them ahead of time about restrictions on the format of data that
          they must enter. Instructions on such restrictions are provided at the top of
          forms. This technique works best for forms that have a small number of fields
          or those where many form fields require data in the same format. In these cases,
          it is more efficient to describe the format once in instructions at the top
          of the form rather than repeating the same information for each field that
          has the same restricted format requirement.
        </p>

        <h4>
          Ensure labels are positioned to maximize predictability of relationships
        </h4>

        <p>
          When labels for form fields are positioned where the user expects them
          visually, it is easier to understand complex forms and to locate specific
          fields. Labels for most fields are positioned immediately before the field,
          that is, for left-to-right languages, either to the left of the field or
          above it, and for right-to-left languages, to the right of the field or
          above it. Labels for radio buttons and checkboxes are positioned after the
          field. These positions are defined because that is the usual (and therefore
          most predictable) position for the label for fields, radiobuttons and
          checkboxes.
        </p>

        <h4>Ensure error identification</h4>

        <p>
          Notify the user when a field that must be completed has not been completed.
          When users fail to provide input for any mandatory form fields, information
          is provided in text to enable the users to identify which fields were omitted.
          One approach is to use client-side validation and provide an alert dialog
          box identifying the mandatory fields which were omitted. Another approach,
          using server-side validation, is to re-display the form (including any
          previously entered data), with either a text description at the location
          of the omitted mandatory field, or a text description that identifies the
          omitted mandatory fields.
        </p>

        <h4>Additional Tips</h4>

        <ul>
          <li>
            Only label the optional inputs. Users can infer that all the others are
            required.
          </li>
          <li>
            If possible, let users type their state's abbreviation when they reach
            the state drop-down menu.
          </li>
          <li>
            Support both five- and nine-digit ZIP codes. Some addresses require a
            nine-digit ZIP code. If you would like to use an input mask, it should be
            "#####-####" so that the text is properly formatted, regardless of whether
            a user enters a five- or nine-digit ZIP code.
          </li>
        </ul>

        <h4>Applicable Standards</h4>

        <p>Section 508 and 255 (Revised 2017)</p>

        <p>Chapter 3: Functional Performance Criteria</p>

        <p>302.9 With Limited Language, Cognitive, and Learning Abilities</p>

        <p>Web Content Accessibility Guidelines (WCAG) 2.0</p>

        <ul>
          <li>1.3.1 Information and relationships conveyed through presentation</li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
          <li>3.3.3 Error Suggestion</li>
        </ul>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="https://component-library-master-pl.irslabs.org/form-templates">
              AddressForm
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
