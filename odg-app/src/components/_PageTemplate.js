import React from "react";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import { ExternalLink } from "../../../ols-ui/src/components/Links";

/**
 * *****************************************************************************
 * Content for XXXX.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function XXXX() {
  return (
    <DocsPage
      title="XXXX"
      subtitle="Xxxxx"
    >
      <DocsSection>
        <Panel>
          {/* ******************
          PREVIEW GOES HERE
          ****************** */}
        </Panel>
      </DocsSection>

      <DocsSection title="When to use">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Best practices">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Accessibility">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="Specifications">
        <p>Xxxxx</p>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="XXXXXXXXXXXXX">
              XXXXXXXXXXXXXXX
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
