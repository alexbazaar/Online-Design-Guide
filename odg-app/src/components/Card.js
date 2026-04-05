import React from "react";
import Helmet from "react-helmet";

import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import Link from "../../../ols-ui/src/components/Links";

import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import styles from "../styles/Docs.scss";

/**
 * *****************************************************************************
 * Content for Card.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function CardPage() {
  return (
    <div>
      <Helmet title="Card" />
      <DocsPage
        className="docs-styles"
        title="Card"
        subtitle="Cards are styled containers for short and related pieces of information."
      >
        <DocsSection title="When to use">
          <p>
            <Link to="/components/card/primary-card">Primary cards</Link> have
            a thick, top border in gold and thin, gray borders for the other
            three sides. These cards also have the option to include an image.
            If both primary and secondary card styles are needed in a design,
            the primary content would use the primary card style. Primary cards
            should be used when an image is required
          </p>
          <p>
            <Link to="/components/card/secondary-card">Secondary cards</Link> have 
            gray borders that are all the same thickness. There is no
            option to add images. If both primary and secondary card styles are
            needed in a design, the secondary content would use the secondary
            card style.
          </p>
          <p>
            Except for the scenarios described above, either card style can be
            used depending on the design preference and need. The secondary card
            can be used independently of the primary card.
          </p>
          <p>
            Cards can be used to distribute information visually so users can
            consume content in smaller pieces. They help users learn small
            pieces of information quickly and enable them to learn more detailed
            information by selecting a call to action within the box (typically
            a button, linked image, or text link). This design format can help
            users identify highlights of several different products, apps, or
            content pages side-by-side.
          </p>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(CardPage);
