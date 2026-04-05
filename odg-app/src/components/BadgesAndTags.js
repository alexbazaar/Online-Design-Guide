import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";


import Link from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for Badges & Tags.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function BadgesAndTags() {
  return (
    <div>
      <Helmet title="Badge and tag" />
      <DocsPage
        className="docs-styles"
        title="Badge and tag"
        subtitle="Badges and tags are visual indicators used to draw attention."
      >

        <DocsSection title="When to use">
          <p>Badges and tags are used to either draw attention or categorize content.</p>
          <p>A <Link to="/components/badge-and-tag/badge">badge</Link> is used to inform users of a specific characteristic of content with numerical values.</p>
          <p>A tag is used to inform users of a specific characteristic of content with text. Tags are characterized into two types:</p>
          <List>
            <ListItem>A <Link to="/components/badge-and-tag/classification-tag">classification tag</Link> classifies and organizes content.</ListItem>
            <ListItem>An <Link to="/components/badge-and-tag/emphasis-tag">emphasis tag</Link> draws attention to new or important content.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
