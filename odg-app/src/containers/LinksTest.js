import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow } from 'ols-ui/flex-grid';
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * [Links Test description]
 * @constructor
 */
function LinksTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <FlexContainer>
        <FlexRow justify="center">
          <Link to="/">
            Example link
          </Link>
        </FlexRow>

        <FlexRow justify="center">
          <ExternalLink href="http://www.irs.gov">
            Example External link
          </ExternalLink>
        </FlexRow>
      </FlexContainer>
    </MainContentTemplate>

  );
}

export default withRouter(EmbedStyles(styles)(LinksTest));
