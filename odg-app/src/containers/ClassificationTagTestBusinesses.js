import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";

import styles from "../styles/App.scss";

/**
 * [Classification Businesses Test description]
 * @constructor
 */
function ClassificationTagBusinessesTest() {
  return (
    <div className={styles.defaultPage}>
      <FlexContainer>
        <FlexRow justify="center">
          <div style={{ width: '1140px', padding: "0 20px" }}>
            <h1 style={{ marginTop: "0", fontFamily: "Source Sans Pro", fontWeight: "700", fontSize: "40px", lineHeight: "56px", marginBottom: "0" }}>Search Results - Businesses</h1>

            <h2 style={{ marginTop: "25px", fontFamily: "Source Sans Pro", fontWeight: "700", fontSize: "30px", lineHeight: "42px", marginBottom: "0" }}>First search result</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p><FilledButton to="/classificationtag-test" style={{ marginTop: '50px', display: "inline-block" }}>Back</FilledButton></p>
          </div>
        </FlexRow>
      </FlexContainer>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(ClassificationTagBusinessesTest));
