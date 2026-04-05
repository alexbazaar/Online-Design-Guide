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
      <Helmet title="Version 2.5.0" />
      <DocsPage
        title="Version 2.5.0"
      >
        <DocsSection title="January 31, 2020">
          <p>
            This is a major release that adds the Date Field component back into the lineup of available UI Elements.
          </p>
          <List>
            <ListItem>
              The Date Field is an input field that allows you to type in a date field or select the Calendar Picker icon to select a date.
            </ListItem>
            <ListItem>
              The Date Field component contains new, 508-compliant validations and an updated design.
            </ListItem>
            <ListItem>
              The Date Field Range is a brand new component that uses the Date Field as a base, but uses extra functionality to set limits and provide extra validation.
            </ListItem>
            <ListItem>
              The Calendar Picker component is fully integrated into the Date Field. It renders a calendar modal window with selectable dates.
            </ListItem>
            <ListItem>
              The Date Field, Date Field Range, and Calendar Picker have all been 508-tested and approved.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(Version));
