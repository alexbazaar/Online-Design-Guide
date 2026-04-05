import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import { InfoAlert } from "../../../ols-ui/src/components/Alerts";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, {ListItem} from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for Alerts.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function AlertsPage() {
  return (
    <div>
      <Helmet title="Tags and Badges" />
      <DocsPage
        className="docs-styles"
        title="Tags and Badges"
        subtitle="Tags and badges are visual identifying indicators."
      >

        <DocsSection title="When to Use">
          <p>Tags are used to inform users of a specific characteristic of an object with text. Tags are characterized into two types:</p>
          <List>
            <ListItem>
            Emphasis tags draw attention to new or important content.
            </ListItem>
            <ListItem>
            Classification tags classify and organize content.
            </ListItem>
            <ListItem>
            Badges are used to inform users of a specific characteristic of an object with numerical values. 
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
