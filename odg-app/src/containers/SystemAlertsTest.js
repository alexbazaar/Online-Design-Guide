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
function SystemAlertTestPageTemplate({ location }) {
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
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(SystemAlertTestPageTemplate));
