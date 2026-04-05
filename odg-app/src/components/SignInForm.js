import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Spacer from "../../../ols-ui/src/components/Spacer";
import SignInForm from "../../../ols-ui/src/components/SignInForm";

/**
 * *****************************************************************************
 * Content for SignInForm.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function SignInFormPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Sign In Form"
      subtitle="Allow the user to sign in."
    >
      <DocsSection>
        <Panel>
          <SignInForm
            id="signInForm"
            createAccountUrl="http://irs.gov"
            forgotUrl="/getting-started"
            onSubmit={() => { /* onSubmit logic goes here */ } }
          />
          <Spacer height={24} />
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>Sign-in forms are used when users need to login to an account or
          otherwise access content that is hidden behind a password wall.
        </p>
      </DocsSection>

      <DocsSection title="Specifications">
        <h3>Typography</h3>
        <Table
          caption="Sign In Form Typography Specifications">
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
            <TableRow>
              <TableHeaderCell>
                Link
              </TableHeaderCell>
              <TableCell>
                <Link to="/styles/typography">
                  Text
                </Link>
              </TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Blue
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>
                Button
              </TableHeaderCell>
              <TableCell>
                <Link to="/components/buttons">
                  Filled
                </Link>
              </TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </tbody>
        </Table>

        <h3>Fields</h3>
        <Table
          caption="Sign In Form Fields Specifications"
        >
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
                Checkbox
              </TableHeaderCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                see <Link to="/components/checkbox">
                  Checkbox
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
            Make it immediately clear where the login boxes are by placing them
            on the homepage or on the individual application's landing page (i.e.,
            for Account, the fields should be on the Account landing page, so that it is easily accessible).
          </li>
          <li>
            Allow people to use their email address, phone number or username to
            sign in. Users tend to have multiple online accounts and will not remember
            every username that they've ever created. Their email address and their
            phone number are much more easily retrieved in their memories.
          </li>
          <li>
            Include a "Remember me" option so users can stay signed in on their
            private devices.
          </li>
          <li>
            Make the username and password retrieval processes as simple as possible.
            Users tend to forget usernames or passwords for sites that they do not
            access very often, including for federal government sites.
          </li>
          <li>
            Allow users to unmask the password so they can see what they are typing
            as they type. This is especially pertinent when using mobile, as users
            are more likely to mistype characters on the smaller keyboard.
          </li>
          <li>
            Warn users if their caps lock is on when they first select the
            password field.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">
        <h4>
          Ensure that Text Area follows the Accessibility guidelines for Forms
          and Form controls
        </h4>

        <h4>Ensure the user is not automatically signed without giving them 20 seconds'
          advance notice to request more time.
        </h4>

        <p>Provide users enough time to read and use content. Users with disabilities
          sometimes require more time to respond to prompts.
        </p>

        <h4>
          Additional Tips
        </h4>

        <ul>
          <li>
            Less is more — make your explanations concise. Users sign in faster
            when less text surrounds the form.
          </li>
          <li>
            Allow people to use their email address to sign in. People have an easier
            time remembering their email address than they do a unique username.
          </li>
          <li>
            If you must include a sign-in form, consider allowing users to stay
            logged in ("Remember me") on trusted computers so they can avoid this
            barrier in the future.
          </li>
          <li>
            Make it easy for users to retrieve a forgotten username and password.
            Most authentication failures occur because a user has forgotten their
            username or password. This is especially common when a long time passes
            between visits, as is the case with most federal websites.
          </li>
          <li>
            Password masking (replacing what the user types with a generic symbol)
            makes it more likely that users will make mistakes when trying to sign
            in, and doesn't offer much in the way of additional security. Allow
            users to unmask the password field so they can see what they type. This
            is especially useful on mobile devices, when users are more likely
            to mistype.
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
              SignInForm
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
