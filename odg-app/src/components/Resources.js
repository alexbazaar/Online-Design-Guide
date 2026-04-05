import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";
import styles from "../styles/Resources.scss";
import Spacer from "../../../ols-ui/src/components/Spacer";

/**
 * *****************************************************************************
 * Design Resources section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Resources() {
  return (
    <div>
      <Helmet title="Resources" />
      <DocsPage
        className="docs-styles"
        title="Resources"
        subtitle="Find everything you need to get started with the Online Design Guide right here."
      >
        <DocsSection title="ODG UI Kit">
          <h3>High fidelity</h3>
          <p>
            Use this high fidelity kit to build digital experiences that are consistent with current ODG standards. The high fidelity kit is updated and aligned with all major and minor ODG releases.
          </p>

          <FilledButton
            href={`/sketch-files/IRS-OLS-ODG-UIKit-4.3.0.sketch`}
            icon="download"
            leadingIcon={true}
          >
            Download ODG UI Kit <span style={{ textTransform: "none" }}>v</span>4.3.0
          </FilledButton>
          <Spacer height={20} />
          <Link href="/sketch-files/IRS-OLS-ODG-UIKit-4.3.0.pdf" target="_blank">Download ODG UI Kit v4.3.0 (pdf)</Link>
          <Spacer height={20} />
          <h3>Low fidelity</h3>
          <p>
            Use the low fidelity kit to wireframe and ideate initial layouts based on ODG components. Please note as of version 3.7, the low fidelity kit is no longer supported.
          </p>
          <Link href="/sketch-files/IRS-OLS-ODG-UIKit-3.7.0-LowFidelity.sketch" target="_blank">Download ODG UI Kit v3.7 - Low Fidelity (sketch)</Link>
        </DocsSection>
        <DocsSection title="Font files">
          <p>
            Source Sans Pro is an open source font family intended for user interface design. The Online Design Guide currently uses the Regular, Bold, Regular Italic and Bold Italic styles.
          </p>
        </DocsSection>
        <DocsSection title="Icons">
          <p>
            The IRS uses the free version of FontAwesome for its icons to ensure consistency in design. FontAwesome adds new icons frequently, so be sure to always use the latest version.
          </p>
          <ExternalLink
            className={buildClassList({
              [styles.colLinks]: true,
              [styles.colLeftIcon]: true
            })}
            href="https://fontawesome.com/start">
            Download FontAwesome
          </ExternalLink>
        </DocsSection>
        <DocsSection title="Accessibility">
          <p>
          We adhere to Web Content Accessibility Guidelines (WCAG) AA standards. Approved elements in this Online Design Guide will be AA compliant, unless otherwise noted.
          </p>
          <ExternalLink href="https://www.w3.org/WAI/standards-guidelines/wcag/">View WCAG AA Guidelines</ExternalLink>
        </DocsSection>
        <DocsSection title="Enterprise Architecture Technical Guidance/Design Patterns">
          <p>
          Enterprise Architecture (EA) Technical Guidance/Design Patterns provide a description of repeatable technology solutions (products, standards, and usage scenarios) that can be applied to multiple situations. These resources are for developers who are developing applications in compliance with the IRS Enterprise Architecture (EA). Please note this link is only accessible from the IRS network.          </p>
          <ExternalLink href="http://ea.web.irs.gov/ARCH/TargetArchFramework/EA-Framework/Apps_Tech/TechnicalGuidance_Design_Patterns/EAG_context%20page%20text.htm">Enterprise Architecture Technical Guidance/Design Patterns</ExternalLink>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Resources));
