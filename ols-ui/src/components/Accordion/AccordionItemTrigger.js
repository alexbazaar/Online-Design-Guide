import React, { Component } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading";
import { AccordionMinusIcon, AccordionPlusIcon, MinusIcon, PlusIcon, } from '../Icons';

import { faPlus, faMinus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buildClassList } from "../../helpers/utilities";

import styles from "./Accordion.scss";

/**
 * The button that also serves as the accordion item's headline/title
 *
 * @type {Object}
 */
export default class AccordionItemTrigger extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    headingLevel: PropTypes.oneOf([ "2", "3", "4", "5", "6 " ]),
    disabled: PropTypes.bool,
    footer: PropTypes.bool
  };
  static defaultProps = {
    disabled: false,
    footer: false
  };
  static contextTypes = {
    isActive: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    headingLevel: PropTypes.string.isRequired
  };

  /**
   * Render
   * @returns {node} rendered DOM node
   */
  render() {
    const { isActive, onSelect } = this.context;
    const {
      children,
      className,
      headingLevel,
      disabled,
      footer,
      ...props
    } = this.props;

    return (
      <Heading
        headinglevel={headingLevel ? headingLevel : this.context.headingLevel}
      >
        <button
          type="button"
          className={buildClassList([ styles.trigger, className ])}
          disabled={disabled || this.context.disabled}
          aria-expanded={isActive}
          onClick={onSelect}
          data-component="AccordionItemTrigger"
          {...props}
        >
          {isActive ? (
            <span
              className={buildClassList([ styles.triggerMinusIcon ])}
              data-component="TriggerCollapseIcon"
              aria-hidden="true"
            >
              {/* <AccordionMinusIcon focusable="false"/> */}
              {footer ? <FontAwesomeIcon viewBox="16 48 416 416" icon={faMinus}/> : <FontAwesomeIcon viewBox="-0.025 96.075 448 256" preserveAspectRatio="none" icon={faChevronUp}/> }
            </span>
          ) : (
            <span
              className={buildClassList([ styles.triggerPlusIcon ])}
              data-component="TriggerExpandIcon"
              aria-hidden="true"
            >
              {/*  <AccordionPlusIcon focusable="false"/> */}
              {footer ? <FontAwesomeIcon viewBox="16 48 416 416" icon={faPlus}/> : <FontAwesomeIcon viewBox="0.005 160 448.020 256" preserveAspectRatio="none" icon={faChevronDown}/> }
            </span>
          )}
          {children}
        </button>
      </Heading>
    );
  }
}
