import React from "react";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexCol, FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import StepIndicator, { StepIndicatorItem } from "../../../ols-ui/src/components/StepIndicator";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { AppWrapper, Page } from "../../../ols-ui/src/components/AppFoundations";
import MainContentTemplate from "../components/MainContentTemplate";
import Panel from "../../../ols-ui/src/components/Panel";
import { OutlinedButton, FilledButton } from "../../../ols-ui/src/components/Buttons";
import Step2 from "./Step2";
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
import Link from "../../../ols-ui/src/components/Links";
/**
 * [NotFound404 description]
 * @constructor
 */
function Step3() {
  return (
    <div className={styles.breadCrumbTestPage}>
      <FlexContainer>
        <div role="status"
          aria-live="polite"
          aria-atomic="true"
          style={srOnly}
          aria-label="Online Design Guide Step Indicator Results Step 3 of 3">
        </div>
        <MainContentTemplate hasFullWidthStyle>
          <div className={styles.defaultPage}>
            <FlexRow>
              <FlexCol>
                <h1 className={styles.title} style={headerStyle}>Interactive Step Indicator Test Page</h1>
              </FlexCol>
            </FlexRow>
            <FlexRow justify="center">
              <StepIndicator>
                <StepIndicatorItem stepRoute="/stepindicator-test-interactive" stepNum="1" status="completed" title="Income">
                Income
                </StepIndicatorItem>
                <StepIndicatorItem stepRoute="/Step2" stepNum="2" status="completed" title="Adjustments">
                Adjustments
                </StepIndicatorItem>
                <StepIndicatorItem stepRoute="/Step3" stepNum="3" status="active" title="Results">
                Results
                </StepIndicatorItem>
              </StepIndicator>
            </FlexRow>
            <FlexRow>
              <Panel className={docStyles.fullWidth}>
                <p>This is the third step.</p>
                <button type="button" className={docStyles.StepIndicatorBtnPrev} name="Next" onClick={(e) => { e.preventDefault(); window.location.href = '/Step2'; }}>Back</button>
              </Panel>
            </FlexRow>
          </div>
        </MainContentTemplate>
      </FlexContainer>
    </div>
  );
}
export default withRouter(EmbedStyles(styles, docStyles)(Step3));