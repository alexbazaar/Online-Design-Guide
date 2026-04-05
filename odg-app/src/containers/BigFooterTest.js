import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Helmet from "react-helmet";
import { TestPage } from "../../../ols-ui/src/components/DocsFoundations";

import Panel from "../../../ols-ui/src/components/Panel";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import footerStyles from "../styles/FooterDemo.scss";

import BigFooter from "../../../ols-ui/src/components/BigFooter";

/**
 * [Footer Test description]
 * @constructor
 */
class BigFooterTest extends React.Component {

  /**
   * add data-demo attribute to body to scope styles
   */
  componentDidMount() {
    document.body.setAttribute("data-demo", "big-footer");
  }

  /**
   * remove data-demo attribute
   */
  componentWillUnmount() {
    document.body.removeAttribute("data-demo");
  }

  /**
   * render
   * @returns {node} react element
   */
  render() {

    return (
      <MainContentTemplate id="main-content" hasFullWidthStyle>
        <Helmet title="Big Footer Demo" />
        <Panel padding="large" maxheight="medium">
          <TestPage backURL="/components/footer/big-footer">
            <BigFooter className={footerStyles.footerTest} />
          </TestPage>
        </Panel>
      </MainContentTemplate>
    );
  }
}

export default withRouter(EmbedStyles(styles, footerStyles)(BigFooterTest));
