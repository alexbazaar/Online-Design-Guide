import React, { Component } from "react";
import PropTypes from "prop-types";
import { DocsPage } from "../../../ols-ui/src/components/DocsFoundations";
import styles from "../styles/BlankTest.scss";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @param {object} props The props
 * @returns {node} - DOM node
 * *****************************************************************************
 */
class BlankTest extends Component {
  /** 
   * constructor 
   * @param {object} props The props that will be applied to this component.
  */
  constructor(props) {
    super(props);

    this.blankPage = React.createRef();
  }

  /**
   * Focus Header
   */
  focusHeader() {
    setTimeout(() => {
      const h1 = this.blankPage.current.querySelector("h1");
      h1.setAttribute("tabindex", -1);
      h1.focus();
    }, 0);
  }

  /**
   * focus the header when it renders completely
   */
  componentDidMount() {
    this.focusHeader();
  }

  /**
   * focus the header when it re-renders completely
   */
  componentDidUpdate() {
    this.focusHeader();
  }

  /**
   * Renders a blank page
   * @returns {node} rendered DOM node
   */
  render() {
    const { label } = this.props;
    const showLabel = label ? label : "";

    return (
      <div ref={this.blankPage}>
        <DocsPage
          className={styles.blankTest}
          title={showLabel}
          subtitle={`Test page content ${showLabel && `for ${showLabel}`}.`}
        />
      </div>
    );
  }
}

BlankTest.propTypes = {
  label: PropTypes.string
};

export default EmbedStyles(styles)(BlankTest);
