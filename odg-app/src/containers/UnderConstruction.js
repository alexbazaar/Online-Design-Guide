import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import underConstruction from "../assets/images/cogs.svg";

import styles from "../styles/App.scss";

/**
 * UnderConstruction Elements section
 * @returns {node} DOM node
 */
function UnderConstruction() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow>
            <FlexCol>
              <img
                src={underConstruction}
                alt="Under Construction"
                className={styles.underConstruction}
              />
            </FlexCol>
          </FlexRow>
          <FlexRow>
            <FlexCol>
              <h2 className={styles.title}>
                Under Construction
              </h2>
              <p className={styles.contentText}>
                We're so sorry — the page you are trying to access is currently being developed right now! Please come back another time to see the latest guidance.
              </p>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(UnderConstruction));
