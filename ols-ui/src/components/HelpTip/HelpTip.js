import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./HelpTip.scss";
import { HelpTipCloseIcon, HelpTipIcon } from "../Icons";

/**
 * *****************************************************************************
 * HelpTip
 *
 * Props:
 * link   - string - the text used in the link-style button
 * isOpen - bool  -  the default open state for the helpTip. Also listens for
 *                   changes so a parent component can control the state.
 * *****************************************************************************
 */
export default class HelpTip extends Component {
  static propTypes = {
    link: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string
  };

  state = {
    isOpen: false,
    iconOffset: 0,
    wrapperOffset: 0,
    isTriggered: false
  };

  /**
   * Check if the default state is open. Performing the state change here
   * because it's impossible to correctly render the position of the arrow until
   * after the initial render.
   */
  componentDidMount() {
  }


  /**
   * When the trigger is clicked, change the state
   * @param  {event} e [description]
   */
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
      isTriggered: true
    });
    this.helpTipButtonRef.focus();
  };


  // /**
  //  * RETURN, ESCAPE AND SPACE key handlers
  //  * @param {event} e - description
  //  *
  //  */
  handleKeyDown = (e) => {
    e.preventDefault();

    const ESCAPE_KEY = 27;
    const RETURN_KEY = 13;
    const SPACEBAR_KEY = 32;

    const keyCode = e.keyCode || e.key || e.which;

    if (this.state.isOpen === true) {
      if (keyCode === RETURN_KEY || keyCode === ESCAPE_KEY || keyCode === SPACEBAR_KEY) {
        this.handleClick(e);
      }
    }
  };

  /**
   * Calculate the left-right position of the icon so we can position the pointer
   * @param {node} elem - the dom element getting measured
   * @returns {number} the calculated offset
   */
  getOffset = (elem) => {
    const rect = elem.getBoundingClientRect();
    const doc = elem.ownerDocument;
    const docElem = doc.documentElement;
    return rect.left + window.pageXOffset - docElem.clientLeft;
  };

  /**
   * Renders a wrapper div with relative positioning, a button and the helpTip contents
   * @returns {node} rendered DOM node
   */
  render() {
    const { isOpen } = this.state;
    const { link, children, className, id, ...rest } = this.props;
    const otherProps = { ...rest };
    delete otherProps.isOpen;

    return (
      <div
        className={buildClassList(styles.wrapper, className)}
        ref={(el) => {
          this.wrapper = el;
        }}
        data-component="HelpTipWrapper"
        id={id}
      >
        <span>
          <span
            className={styles.link}
          >
            {link}
          </span>
          <button
            className={styles.helpTipButton}
            aria-expanded={this.state.isOpen}
            onClick={this.handleClick}
            data-component="HelpTipButton"
            aria-label={this.state.isOpen
              ? `Close Help tip`
              : `Help tip`}
            aria-controls={this.state.isOpen ? `${id}-Helptip-Desc` : null}
            ref={(el) => {
              this.helpTipButtonRef = el;
            }}
            aria-describedby={this.state.isOpen ? `${id}-Helptip-Desc` : null}
            {...otherProps}
          >
            {this.state.isOpen ?
              <HelpTipCloseIcon focusable="false" unstyled /> : <HelpTipIcon focusable="false" unstyled />}
          </button>
        </span>

        {isOpen && (
          <div
            id={`${id}-Helptip-Desc`}
            className={styles.helpTip}
            role="region"
            data-component="HelpTip"
            onKeyDown={this.handleKeyDown}
            ref={el => {this.helpTipRef = el}}
            tabIndex="-1"
          >
            <i
              className={styles.arrow}
              data-component="HelpTipArrow"
              style={{
                left: this.getOffset(this.helpTipButtonRef) - this.getOffset(this.wrapper)
              }}
            />
            {children}
          </div>
        )}
      </div>
    );
  }
}
