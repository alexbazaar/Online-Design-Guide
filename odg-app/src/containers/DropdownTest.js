import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import Dropdown from "../../../ols-ui/src/components/Dropdown";

import styles from "../styles/App.scss";


/**
 * [Buttons Test description]
 * @constructor
 */
function DropdownTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="center">
            <div style={{ width: '455px' }}>
              <Dropdown label="Label" id="dropdown-preview-1">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </Dropdown>
              <Dropdown label="Label" id="dropdown-preview-2" hintText="This is an optional hint message">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </Dropdown>
              <Dropdown label="Label" id="dropdown-preview-3" required errorMessage="Error: This field is required">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </Dropdown>
            </div>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(DropdownTest));
