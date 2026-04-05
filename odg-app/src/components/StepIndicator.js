import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import Link from "../../../ols-ui/src/components/Links";

/**
 * *****************************************************************************
 * Content for Step Indicator
 *
 * @returns {node} the node
 * *****************************************************************************
 */
export default function StepIndicatorPage() {

  return (
    <div>
      <Helmet title="Step indicator" />
      <DocsPage
        className="docs-styles"
        title="Step indicator"
        subtitle="Step indicators guide users through a multi-step process."
      >
        <DocsSection title="When to use">
          <p>
            Use step indicators anytime there is a process spanning several
            pages. Step indicators tell users how far they are into a process.
            Step indicators break a process sequence up into multiple numbered
            steps and guide the user through those steps.
          </p>
          <p>
            Use an{" "}
            <Link to="/components/step-indicator/interactive-step-indicator">
              interactive step indicator
            </Link>{" "}
            when the application <i style={{ fontStyle: "italic" }}>allows</i> the user to navigate using the step
            indicator.
          </p>

          <p>
            Use a{" "}
            <Link to="/components/step-indicator/noninteractive-step-indicator">
              non-interactive step indicator
            </Link>{" "}
            when the application <i style={{ fontStyle: "italic" }}>does not allow</i> for the user to navigate using
            the step indicator.
          </p>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
