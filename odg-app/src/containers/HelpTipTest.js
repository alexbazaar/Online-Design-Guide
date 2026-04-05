import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import HelpTip from "../../../ols-ui/src/components/HelpTip";

/**
 * [Buttons Test description]
 * @constructor
 */
function HelpTipTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="center">
            <div style={{width: '455px'}}>
              <HelpTip link="Help tip label">
                  Help tip content goes here
              </HelpTip>
            </div>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(HelpTipTest));
