import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import Panel from "../../../ols-ui/src/components/Panel";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import stylesSpinner from "../styles/Spinner.scss";
import Spinner from "../../../ols-ui/src/components/Spinner";

/**
 * [Buttons Test description]
 * @constructor
 */
function SpinnerTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="center">
            <div style={{ width: '455px' }}>
              <Panel
                padding="normal"
                maxheight="medium"
                className={stylesSpinner.swirlBackground}
              >
                <Spinner />
              </Panel>
            </div>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles, stylesSpinner)(SpinnerTest));
