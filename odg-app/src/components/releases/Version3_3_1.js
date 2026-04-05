import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";

import colorStyles from '../../styles/Colors.scss';

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
      <Helmet title="Version 3.3.1" />
      <DocsPage
        title="Version 3.3.1"
      >
        <DocsSection title="January 06, 2021">
          <p>
          This is a patch release that contains application-wide bug fixes and content edits.
          </p>
          <List>
            <ListItem>Removed the Patriotic Color Alerts from all the element pages.</ListItem>
            <ListItem>Alphabetized the General Elements side navigation.</ListItem>
            <ListItem>Removed the Unreleased section on the Releases page.</ListItem>
            <ListItem>Removed the "View Demo of Header" button on the header page.</ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
