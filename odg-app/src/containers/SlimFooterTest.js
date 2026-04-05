import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Helmet from "react-helmet";

import Panel from "../../../ols-ui/src/components/Panel";
import { TestPage } from "../../../ols-ui/src/components/DocsFoundations";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import footerStyles from "../styles/FooterDemo.scss";

import SlimFooter from "../../../ols-ui/src/components/SlimFooter";

/**
 * [Footer Test description]
 * @constructor
 */
class SlimFooterTest extends React.Component {
  /**
   * add data-demo attribute to body to scope styles
   */
  componentDidMount() {
    document.body.setAttribute("data-demo", "slim-footer");
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
        <Helmet title="Slim Footer Demo" />
        <Panel padding="large" maxheight="medium">
          <TestPage backURL="/components/footer/slim-footer">
            <SlimFooter className={footerStyles.slimFooterTest} />
          </TestPage>
        </Panel>
      </MainContentTemplate>
    );
  }
}

export default withRouter(EmbedStyles(styles, footerStyles)(SlimFooterTest));
