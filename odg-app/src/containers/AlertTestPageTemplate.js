import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import Alert from 'ols-ui/alerts';
import Spacer from "../../../ols-ui/src/components/Spacer";

/**
 * [Alert Test description]
 * @constructor
 */
function AlertTestPageTemplate({ location }) {
  const { search } = location;

  const alerts = {
    "success": {
      id: 'second',
      name: 'success',
      fullName: 'success'
    },
    "info": {
      id: 'first',
      name: 'info',
      fullName: 'informational'
    },
    "warning": {
      id: 'third',
      name: 'warning',
      fullName: 'warning'
    },
    "error": {
      id: 'fourth',
      name: 'error',
      fullName: 'error'
    }
  };

  // get type from query params
  const queryType = search.split("=")[1];
  const type = queryType in alerts ? alerts[queryType] : alerts['info'] ; // default to info alert info if unknown type passed

  return (
    <MainContentTemplate hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <Alert
            className={styles.alertTestStyle}
            type={type.name}
            id="section"
            title={`Title for ${type.fullName} section alert`}
            headingLevel="2"
          >
            <p>{`This is the content in ${type.name.charAt(0) === 'i' || type.name.charAt(0) === 'e' ? 'an' : 'a'} ${type.name} alert. 
              In some cases, this content will contain a lot of information. In other cases, this content would provide more information via a `}
            <a href="/">link to another page.</a></p>
          </Alert>
          <FlexRow>
            <FlexCol>
              <h1 className={styles.testPageTitle}>{`${type.fullName} Alert Test Page`}</h1>
              <Spacer height={20} />
              <p className={styles.testPageAlertText}>
                {`This is one of four section alert test pages.
                This ${type.id} example is an example of an ${type.fullName} section alert.`}
              </p>
            </FlexCol>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(AlertTestPageTemplate));
