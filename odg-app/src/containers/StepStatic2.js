import React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexCol, FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import StepIndicator, { StepIndicatorItem } from "../../../ols-ui/src/components/StepIndicator";
import MainContentTemplate from "../components/MainContentTemplate";
import Panel from "../../../ols-ui/src/components/Panel";
import { OutlinedButton, FilledButton } from "../../../ols-ui/src/components/Buttons";
import StepStatic2 from "./StepStatic2";
import styles from "../styles/App.scss";
import docStyles from "../styles/Docs.scss";
const headerStyle = {
  lineHeight: '1.2'
};
const srOnly = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap'
};
const btnsSpan = {
  verticalAlign: 'baseline',
  marginRight: '0'
};
/**
 * [NotFound404 description]
 * @constructor
 */
function StepIndicatorTestStatic() {
  return (
    <div className={styles.breadCrumbTestPage}>
      <div role="status"
        aria-live="polite"
        aria-atomic="true"
        style={srOnly}
        aria-label="Online Design Guide Step Indicator Results Step 1 of 2">
      </div>
      <FlexContainer>
        <MainContentTemplate hasFullWidthStyle>
          <div className={styles.defaultPage}>
            <FlexRow>
              <FlexCol>
                <h1 className={styles.title} style={headerStyle}>Non-Interactive Step Indicator Test Page</h1>
              </FlexCol>
            </FlexRow>
          </div>
        </MainContentTemplate>
        <FlexRow justify="center">
          <StepIndicator>
            <StepIndicatorItem stepNum="1" title="About you" status="completed">
                About You
            </StepIndicatorItem>
            <StepIndicatorItem stepNum="2" title="Results" status="active">
                Results
            </StepIndicatorItem>
          </StepIndicator>
        </FlexRow>
        <FlexRow>
          <Panel className={docStyles.fullWidth}>
            <p>This is the last step.</p>
            <button type="button" className={docStyles.StepIndicatorBtnPrev} name="Next" onClick={(e) => { e.preventDefault(); window.location.href = '/stepindicator-test-static'; }} tabIndex="0">Back</button>
          </Panel>
        </FlexRow>
      </FlexContainer>
    </div>
  );
}
export default withRouter(EmbedStyles(styles, docStyles)(StepIndicatorTestStatic));
