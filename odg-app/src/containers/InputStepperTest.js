import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import MainContentTemplate from "../components/MainContentTemplate";
import styles from "../styles/App.scss";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import InputStepper from "../../../ols-ui/src/components/InputStepper";

/**
 * [Footer Test description]
 * @constructor
 */
function InputStepperTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <FlexContainer>
        <h1 style={{ marginTop: "40px", fontWeight: 700, fontSize: "40px", lineHeight: "56px", marginBottom: "12px" }}>Input Stepper</h1>
        <p >
          All fields marked with an asterisk (
          <span style={{ color: "#d11242" }}>*</span>) are required.
        </p>
        <div style={{ marginBottom: "24px", marginTop: "40px" }}>
          <InputStepper
            id="demo"
            min={1}
            max={10}
            initialValue={1}
            required={true}
            label="How many dependents do you plan to claim on your 2022 tax return?"
            inputDescription="Dependents"
          />
        </div>
      </FlexContainer>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(InputStepperTest));
