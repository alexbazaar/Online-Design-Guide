import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";

import styles from "../../styles/App.scss";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Version() {
  return (
    <div>
      <Helmet title="Version 2.4.0" />
      <DocsPage
        title="Version 2.4.0"
      >
        <DocsSection title="November 22, 2019">
          <p>
            This is a major release that adds the functional Step Indicator and the non-functional Step Indicator into the Online Design Guide.
          </p>
          <List>
            <ListItem>
              The Step Indicator component contains both a basic, non-functional (non-selectable) and a functional (selectable) indicator that track a user's progress through a set of forms or actions through completion.
            </ListItem>
            <ListItem>
              Both the functional and non-functional Step Indicators have been 508-tested and approved.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
