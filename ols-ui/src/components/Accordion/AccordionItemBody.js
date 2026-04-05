import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { ACCORDION_ANIMATION_TIME } from "../../helpers/constants";

import styles from "./Accordion.scss";

/**
 * The Accordion item body is the content that is displayed when the accordion
 * is open
 */
export default class AccordionItemBody extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  static contextTypes = {
    isActive: PropTypes.bool.isRequired,
    bodyIndent: PropTypes.bool.isRequired
  };

  // Because we can't check the previous context in the componentDidUpdate method,
  // we're transferring the context to internal state
  state = {
    isActive: this.context.isActive
  };

  /**
   * Check for context change and match that change to our internal state
   * @param  {object} nextProps - not used
   * @param  {object} nextState - not used
   * @param  {object} nextContext - the incoming context
   */
  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextContext.isActive !== this.context.isActive) {
      this.setState({
        isActive: nextContext.isActive
      });
    }
  }

  /**
   * When the component mounts, set the maxHeight based on the state
   */
  componentDidMount() {
    this.itemDiv.style.maxHeight = this.state.isActive ? "none" : "0";
    this.bodyDiv.style.display = this.state.isActive ? "block" : "none";
  }

  /**
   * If isActive has changed, explicitly set the maxHeight for the animation,
   * then if it's open, remove the maxHeight after the animation so the div can
   * naturally shrink/grow when the content changes. Inner div's display is either
   * block (if active) or hidden to prevent tab focus inside the hidden Accordion
   * body.
   * @param  {object} prevProps - not used
   * @param  {object} prevState - the previous state
   */
  componentDidUpdate(prevProps, prevState) {
    // Closed going to open
    if (this.state.isActive && !prevState.isActive) {
      this.bodyDiv.style.display = "block";
      const itemHeight = this.bodyDiv.clientHeight
        ? this.bodyDiv.clientHeight
        : "none";

      this.itemDiv.style.maxHeight = `${itemHeight}px`;

      setTimeout(() => {
        this.itemDiv.style.maxHeight = "none";
      }, ACCORDION_ANIMATION_TIME);
    }

    // Opened going to close
    if (!this.state.isActive && prevState.isActive) {
      const itemHeight = this.bodyDiv.clientHeight
        ? this.bodyDiv.clientHeight
        : "none";

      this.itemDiv.style.maxHeight = `${itemHeight}px`;

      setTimeout(() => {
        this.itemDiv.style.maxHeight = "0";
      }, 0);

      setTimeout(() => {
        this.bodyDiv.style.display = "none";
      }, ACCORDION_ANIMATION_TIME);
    }
  }

  /**
   * Renders an outer div to hold the max-height needed for animation,
   * and an inner div with the content (children)
   * @returns {node} rendered DOM node
   */
  render() {
    const { bodyIndent } = this.context;
    const { children, className, ...props } = this.props;

    return (
      <div
        ref={(ref) => {
          this.itemDiv = ref;
        }}
        data-component="AccordionItemBody"
        className={buildClassList([ styles.body, className ])}
        {...props}
      >
        <div
          ref={(ref) => {
            this.bodyDiv = ref;
          }}
          style={{ boxSizing: "border-box !important" }}
          className={bodyIndent ? null : styles.noBodyIndent}
        >
          {children}
        </div>
      </div>
    );
  }
}
