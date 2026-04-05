import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";

import styles from "./Accordion.scss";

/**
 * AccordionItem wraps the trigger and the body, though those items are not
 * actually required.
 *
 * @type {Object}
 */
export default class AccordionItem extends Component {
  static propTypes = {
    border: PropTypes.bool,
    isActive: PropTypes.bool.isRequired,
    allowMultipleOpen: PropTypes.bool.isRequired,
    padding: PropTypes.bool.isRequired,
    bodyIndent: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    headingLevel: PropTypes.oneOf([ "2", "3", "4", "5", "6 " ]).isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false,
    border: true
  };

  static childContextTypes = {
    isActive: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    bodyIndent: PropTypes.bool.isRequired,
    headingLevel: PropTypes.string.isRequired
  };

  state = {
    isActive: this.props.isActive,
    isExpanded: this.props.isActive
  };

  onTriggerClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  /**
   * lifecycle
   * set data-expanded styling hook when accordionItem is completely open
   * use same duration as transition-duration
   */
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        isExpanded: this.state.isActive
      });
    }, 300);
  }

  /**
   * getChildContext
   * @returns {object} context
   */
  getChildContext() {
    const {
      allowMultipleOpen,
      onSelect,
      disabled,
      bodyIndent,
      headingLevel
    } = this.props;
    const { isActive } = this.state;
    return {
      isActive: isActive,
      bodyIndent: bodyIndent,
      onSelect: allowMultipleOpen ? this.onTriggerClick : onSelect,
      disabled: disabled,
      headingLevel: headingLevel
    };
  }

  /**
   * Update when isActive changes for this item
   * @param  {object} nextProps - incoming props
   * @param  {object} prevState - current state
   * @returns {object|null} state object
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isActive !== prevState.isActive) {
      return {
        isActive: nextProps.isActive
      };
    }

    return null;
  }

  /**
   * Render
   * @returns {node} rendered DOM node
   */
  render() {
    const { children, className, padding, border } = this.props;
    const style = buildClassList(styles.accordionItem, {
      [styles.padding]: padding,
      [styles.noBorder]: !border
    });

    return (
      <div
        className={buildClassList([ style, className ])}
        data-expanded={this.state.isExpanded}
        data-component="AccordionItem"
      >
        {children}
      </div>
    );
  }
}
