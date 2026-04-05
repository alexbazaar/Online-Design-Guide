import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Principles() {
  return (
    <div>
      <Helmet title="Design principles" />
      <DocsPage
        className="docs-styles"
        title="Design principles"
        subtitle="The ODG principles are the foundation for providing a consistent digital experience."
      >
        <DocsSection title="Let data drive design">
          <p>
            Our designs are based on data driven decisions. Testing, analytics, and best practice research ensure we build solutions that address our customers' needs.
          </p>
        </DocsSection>
        <DocsSection title="Maintain consistency ">
          <p>
            Be one IRS. Ensure design patterns behave the same across applications by using consistent UI elements, visual metaphors, and functionality.
          </p>
        </DocsSection>
        <DocsSection title="Consider the greater context">
          <p>
            Think of how a UI element's form/implementation supports the taxpayer's goals, page purpose, and fits in with the overall experience across all IRS products. Don't design in a vacuum.
          </p>
        </DocsSection>
        <DocsSection title="Communicate clearly">
          <p>
            Ensure that there is no ambiguity in our designs and instructions. Use plain language and avoid jargon.
          </p>
        </DocsSection>
        <DocsSection title="Design for accessibility and inclusion">
          <p>
            Provide taxpayers with equal access to information and functionality. Create Section 508 compliant designs that follow the latest Web Content Accessibility Guidelines (WCAG). Support multiple languages and account for translation differences in layout.
          </p>
        </DocsSection>
        <DocsSection title="Design with purpose">
          <p>
            Keep the taxpayer's goals and page performance at the core of every decision made. Do not bury the primary purpose/action with clutter or competing messages.
          </p>
        </DocsSection>
        <DocsSection title="Start small">
          <p>
            Take a mobile first approach and design for scalability. Our process begins with research, empathy and understanding from sketches through high fidelity prototypes. We test with the primary customer in mind expanding to all taxpayers.
          </p>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Principles));
