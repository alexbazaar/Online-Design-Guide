import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import TextField from "../../../ols-ui/src/components/TextField";

/**
 * [Buttons Test description]
 * @constructor
 */
function TextFieldTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="center">
            <div style={{ width: '455px' }}>
              <div>
                <TextField label="Label" id="example1" />
              </div>
              <div>
                <TextField
                  label="Label"
                  hintText="This is an optional hint message."
                  id="example3"
                />
              </div>
              <div>
                <TextField
                  label="Label"
                  required
                  errorMessage="Error: This field is required"
                  id="example4"
                  value=""
                />
              </div>
            </div>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(TextFieldTest));
