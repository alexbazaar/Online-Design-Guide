import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import { ExternalLink } from "../../../ols-ui/src/components/Links";
import PasswordField from "../../../ols-ui/src/components/PasswordField";

/**
 * *****************************************************************************
 * Content for PasswordField.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function PasswordFieldPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Password Field"
      subtitle="Ask the user to enter a password."
    >
      <DocsSection>
        <Panel>
          <PasswordField id="passwordField" hasToggle />
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Specifications">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Best practices">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Accessibility">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="https://component-library-master-pl.irslabs.org/password-field">
              PasswordField (docs TK)
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
