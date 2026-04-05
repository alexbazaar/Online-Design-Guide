import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import { OutlinedButton, FilledButton } from "../../../ols-ui/src/components/Buttons";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * [Buttons Test description]
 * @constructor
 */
function ButtonsTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow>
            <FlexCol>
              <h2 className={styles.title}>Buttons Test Page</h2>
            </FlexCol>
          </FlexRow>

          <FlexRow justify="center">
            <FilledButton>Filled</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <OutlinedButton>Outlined</OutlinedButton>
          </FlexRow>

          <FlexRow justify="center">
            <FilledButton href="http://www.irs.gov">Go to IRS.gov Filled</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <OutlinedButton href="http://www.irs.gov">Go to IRS.gov Outlined</OutlinedButton>
          </FlexRow>

          <FlexRow justify="center">
            <FilledButton to="/">Return home Filled</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <OutlinedButton to="/">Return home Outlined</OutlinedButton>
          </FlexRow>

          <FlexRow justify="center">
            <FilledButton icon="chat">Chat</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <OutlinedButton icon="mail">Mail</OutlinedButton>
          </FlexRow>
          
          <FlexRow justify="center">
            <FilledButton block>Block</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <FilledButton disabled>Disabled Filled</FilledButton>
          </FlexRow>

          <FlexRow justify="center">
            <OutlinedButton disabled>Disabled Outlined</OutlinedButton>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(ButtonsTest));
