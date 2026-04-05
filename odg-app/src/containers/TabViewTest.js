import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";

/**
 * [Footer Test description]
 * @constructor
 */
function TabViewTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <FlexContainer>
        <TabView id="basic-tabs">
          <Tab label="First item">First tab content goes here...</Tab>
          <Tab label="Second item">Second tab content goes here...</Tab>
          <Tab label="Third item">Third tab content goes here...</Tab>
        </TabView>
      </FlexContainer>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(TabViewTest));
