import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import frown404 from "../assets/images/frown.svg";

import styles from "../styles/App.scss";

/**
 * [NotFound404 description]
 * @constructor
 */
function NotFound404() {
  return (
    <MainContentTemplate hasFullWidthStyle>
      <div id="main-content" className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow>
            <FlexCol>
              <img
                src={frown404}
                alt="404 Page Not Found Frown"
                className={styles.frown404}
              />
            </FlexCol>
          </FlexRow>
          <FlexRow>
            <FlexCol>
              <h2 className={styles.heroTitle}>
                Whoops! We can't find this page.
              </h2>
              <p className={styles.heroSubtitle}>
              The page you are trying to access no longer exists. Please contact us if you can't find what you are looking for!
              </p>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(NotFound404));
