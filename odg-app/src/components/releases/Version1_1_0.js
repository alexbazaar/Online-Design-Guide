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
      <Helmet title="Version 1.1.0" />
      <DocsPage
        title="Version 1.1.0"
      >
        <DocsSection title="September 21, 2018">
          <p>
            This is the first documented release of the Online Design Guide. The changes are plentiful, and include the following additions from our first four sprints:
          </p>
          <List>
            <ListItem>
              Updated the information architecture.
            </ListItem>
            <ListItem>
              Refined the Specifications and Accessibility sections throughout the application.
            </ListItem>
            <ListItem>
              Further condensed Accessibility information in order to keep UI Element content as concise as possible.
            </ListItem>
            <ListItem>
              Updated the typography and colors; Added in secondary colors.
            </ListItem>
            <ListItem>
              Created new pages: 404, Under Construction, Layouts, Downloads and Releases.
            </ListItem>
            <ListItem>
              Determined which types of headers and footers are needed.
            </ListItem>
            <ListItem>
              Started to capture analytics to track interactions.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
