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
      <Helmet title="Version 2.3.0" />
      <DocsPage
        title="Version 2.3.0"
      >
        <DocsSection title="September 13, 2019">
          <p>
            This is a minor release that updates the Preview tab contents, styling and layout of Alerts and modifies the styling specifications of Input fields.
          </p>
          <List>
            <ListItem>
              Both Section Alerts and System Alerts contain Preview panels that showcase the dismiss icon.
            </ListItem>

            <ListItem>
              Accessibility content for Alerts, Section Alerts and System Alerts pages was updated.
            </ListItem>

            <ListItem>
              Text Field and Text Area contain updated specifications for margins, padding and the font size of the labels.
            </ListItem>

            <ListItem>
              Accordion icons were replaced with higher-resolution SVG files.
            </ListItem>

            <ListItem>
              On the Colors page, usage for the Gray Dark was updated to include Hint Text for Text Field and Text Area.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
