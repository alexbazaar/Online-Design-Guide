import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import Spacer from "../../../../ols-ui/src/components/Spacer";

import styles from "../../styles/App.scss";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Unreleased() {
  return (
    <DocsPage
      className="docs-styles"
      title="Unreleased"
    >
      <DocsSection title="What's Coming">

        <ul>
          <li>HTML/CSS Snippets of Code within UI Elements</li>
          <li>Date Field + Calendar Picker</li>
          <li>Messaging - Icon Design/Usage</li>
          <li>Messaging - Design Messaging Components</li>
          <li>Headers - content and implementation</li>
          <li>Footers - content and implementation</li>
        </ul>

        <Spacer height={30} />

        <p>
          If you have any suggestions for future features we should consider please contact the OLS UXD team to provide us with your ideas.
        </p>
      </DocsSection>
    </DocsPage>
  );
}

export default withRouter(EmbedStyles(styles)(Unreleased));
