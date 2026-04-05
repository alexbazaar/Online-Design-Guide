import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import { InfoAlert } from "../../../ols-ui/src/components/Alerts";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, {ListItem} from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for Text Input.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function TextInputPage() {
  return (
    <div>
      <Helmet title="Text input" />
      <DocsPage
        className="docs-styles"
        title="Text input"
        subtitle="Text inputs allow users to enter open-ended text, numbers, or symbols."
      >

        <DocsSection title="When to use">
          <p>The text input is used when the user needs to enter an open-ended response to a question. Text inputs should not be used if the user can select from a pre-determined set of options.</p>

          <p>A <Link to="text-input/text-area">text area</Link> is a labeled text input control with <i style={{ fontStyle: "italic" }}>multiple</i> lines. A text area should be used when users need to enter a large amount of open-ended text.</p>

          <p>A <Link to="text-input/text-field">text field</Link> is a labeled text input control with a <i style={{ fontStyle: "italic" }}>single</i> line. Text fields should be used when users are entering only a small amount of text, like an address or a zip code.</p>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
