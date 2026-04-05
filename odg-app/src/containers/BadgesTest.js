import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import Helmet from "react-helmet";
import { DocsPage } from "../../../ols-ui/src/components/DocsFoundations";

import MainContentTemplate from "../components/MainContentTemplate";
import BadgesInboxTest from "./BadgesInboxTest";

import styles from "../styles/App.scss";

/**
 *
 * @constructor
 */
function BadgesTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <Switch>
        <Route path="/badges-demo/inbox" component={BadgesInboxTest} />
        <Route
          path="/badges-demo"
          render={() => (
            <FlexContainer>
              <div style={{ marginTop: "40px" }}>
                <Helmet title="Badges Demo" />
                <DocsPage
                  className="docs-styles"
                  title="Badge"
                  subtitle="This page demonstrates the badge component on a default tab. Please select the inbox tab to view the badge on an active tab."
                ></DocsPage>
              </div>
            </FlexContainer>
          )}
        />
      </Switch>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(BadgesTest));
