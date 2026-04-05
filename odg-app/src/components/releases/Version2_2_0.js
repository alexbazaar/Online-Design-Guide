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
      <Helmet title="Version 2.2.0" />
      <DocsPage
        title="Version 2.2.0"
      >
        <DocsSection title="August 30, 2019">
          <p>
            In this release, new functionality and styling updates are added to Alerts and Form Input fields (e.g., Text Field and Text Area):
          </p>
          <List>
            <ListItem>
              Both Section and System Alerts now contain the ability to make an Alert dismissable by selecting the "X" icon. By default, an alert will not have this new dismiss functionality, but it can be added using the <code>closeAlert</code> prop.
            </ListItem>

            <ListItem>
              Text Field and Text Area now contain optional "Hint text" above the input field.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
