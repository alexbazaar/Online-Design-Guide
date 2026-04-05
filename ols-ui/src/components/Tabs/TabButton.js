import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";

import styles from "./Tabs.scss";

/**
 * The visible button the user clicks to activate a tab
 *
 * All props are received from the <Tabs> component; Do not manually set.
 *
 */
export default class TabButton extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func,
    onSelectNext: PropTypes.func.isRequired,
    onSelectPrevious: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    controls: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shouldFocus: PropTypes.bool.isRequired,
    tabsId: PropTypes.string.isRequired
  };

  /**
   * Check to see if this item should become focused
   */
  componentDidUpdate() {
    const { isActive, shouldFocus } = this.props;

    if (isActive && shouldFocus) {
      this.buttonRef.focus();
    }
  }

  /**
   * Respond to arrow key presses
   * @param  {event} event - the keyboard event
   */
  handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.props.onSelectNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.props.onSelectPrevious();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.props.onSelectPrevious();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      this.props.onSelectNext();
    }
  };

  /**
   * Renders a button
   * @returns {node} rendered DOM node
   */
  render() {
    const {
      children,
      isActive,
      disabled,
      onSelect,
      className,
      id,
      controls,
      tabsId
    } = this.props;

    // build compound style list
    const style = buildClassList([ styles.tab, className ], {
      [styles.disabled]: disabled
    });

    return (
      <button
        ref={(ref) => {
          this.buttonRef = ref;
        }}
        role="tab"
        aria-selected={isActive}
        aria-controls={controls}
        id={id}
        className={style}
        onClick={disabled ? null : onSelect}
        onKeyDown={this.handleKeyDown}
        disabled={disabled}
        data-component="Tab"
        tabIndex={isActive ? "0" : "-1" } // O: Default (focused content) -1: Prevents next tab from being focused
        aria-describedby={isActive ? `${tabsId}-tab-description` : ""}
      >
        {children}
      </button>
    );
  }
}
