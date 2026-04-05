import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Spacer from "../../../ols-ui/src/components/Spacer";
import NameForm from "../../../ols-ui/src/components/NameForm";

/**
 * *****************************************************************************
 * Content for NameForm.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function NameFormPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Name Form"
      subtitle="Ask the user for their full name."
    >
      <DocsSection>
        <Panel>
          <NameForm id="nameFormPreview" />
          <Spacer height={24} />
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>
          Use a name form when you need the user to enter their name and you need
          to store each name component separately.
        </p>
      </DocsSection>

      <DocsSection title="Specifications">
        <h3>Typography</h3>
        <Table
          caption="Name Form Typography Specifications"
        >
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
          caption="Name Form Fields Specifications">
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
                see <Link to="/components/text-field">
                  Text Field
                </Link>
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
            Leave the title and suffix boxes as text boxes instead of dropdown options.
            There are many possible options for these, and dropdowns usually only
            provide the most common ones, leaving some users out.
          </li>
          <li>
            Do not restrict character types in these fields. Allow users to enter
            letters, numbers, symbols, and international characters.
          </li>
          <li>
            Match the fields to the size and type of the input text. Prefix and
            suffix fields should be rather small. First, Middle, and Last Name fields
            should be longer, but not stretch the entire length of a desktop screen.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">

        <h4>
          Additional Tips
        </h4>

        <ul>
          <li>
            Leave the title and suffix fields as text boxes instead of offering
            drop downs. There are many possible titles and suffixes; text boxes
            accommodate them all.
          </li>
          <li>
            Do not restrict the types of characters users can enter in any of these
            fields. Names can include characters outside the standard Roman alphabet.
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
              NameForm
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
