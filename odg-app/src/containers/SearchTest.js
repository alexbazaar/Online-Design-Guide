import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

import SearchField from "../../../ols-ui/src/components/SearchField";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";

/**
 * [Footer Test description]
 * @constructor
 */
function SearchTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <FlexContainer>
        <SearchField />
      </FlexContainer>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(SearchTest));
