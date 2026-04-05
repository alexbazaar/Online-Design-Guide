import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Accordion.scss";

/**
 * Accordions contain any number of AccordionItems. Do no wrap AccordionItems in
 * any other sort of markup, as the AccordionItems are cloned to pass down data.
 *
 * Accordions can be uncontrolled or controlled. To make a controlled Accordion,
 * pass in an activeIndex and a onChange function. When an accordion is controlled,
 * the current/active index should stored in the container's state. The onChange
 * function then would change that state. For example:
 *
 * state = {
 *   currentAccordion: null
 * }
 *
 * handleChangeAccordion = (index) => {
 *   this.setState({
 *     currentAccordion: index === this.state.currentAccordion
 *       ? null
 *       : index
 *   });
 * }
 *
 * @param {number} activeIndex  The index of the AccordionItem that is open
 * @param {number} defaultActiveIndex  - this item will be open when the page renders
 * @param {bool} allowMultipleOpen  - if true, any number of AccordionItems can be open at once
 * @param {bool} padding  - if true, adds padding to accordion
 * @param {bool} bodyIndent  - if true, indents body content
 * @param {func} onChange - if the component is controlled, an onChange function must be passed in to control the opening and closing of AccordionItems
 * @param {string} className  - class name
 * @param {string} headingLevel  - heading level of accordion item
 *
 * @type {Object}
 */
export default class Accordion extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    defaultActiveIndex: PropTypes.number,
    allowMultipleOpen: PropTypes.bool,
    padding: PropTypes.bool,
    bodyIndent: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    headingLevel: PropTypes.oneOf([ "2", "3", "4", "5", "6 " ]),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    allowMultipleOpen: false,
    padding: false,
    bodyIndent: true,
    headingLevel: "3"
  };

  state = {
    activeIndex: this.props.defaultActiveIndex || null
  };

  /**
   * When the component mounts, set the defaultActiveIndex based on the state
   */
  componentDidMount() {
    this.setState({
      activeIndex: this.props.defaultActiveIndex
    });
  }

  /**
   * Helper to determine if component is controlled or not
   * @returns {Boolean} if component is controlled
   */
  isControlled() {
    return this.props.activeIndex != null || this.props.onChange != null;
  }

  onSelect = (activeIndex) => {
    if (this.isControlled() && this.props.onChange) {
      this.props.onChange(activeIndex);
    } else {
      this.setState({
        activeIndex: activeIndex === this.state.activeIndex ? null : activeIndex
      });
    }
  };

  /**
   * [render description]
   * @returns {node} rendered DOM node
   */
  render() {
    const {
      activeIndex,
      allowMultipleOpen,
      padding,
      headingLevel,
      bodyIndent,
      children,
      className,
      accordionOuterBorder
    } = this.props;
    const clonedChildren = React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        isActive: this.isControlled()
          ? index === activeIndex
          : index === this.state.activeIndex,
        allowMultipleOpen: allowMultipleOpen,
        padding: padding,
        headingLevel: headingLevel,
        bodyIndent: bodyIndent,
        accordionOuterBorder: accordionOuterBorder,
        onSelect: () => {
          this.onSelect(index);
        }
      })
    ));

    let classes = className;

    if (styles.accordionOuterBorder) {
      if (!className || className === ' ') {
        classes = styles.accordionOuterBorder;
      } else {
        classes = `${className} ${styles.accordionOuterBorder}`;
      }
    }
    
    return (
      <div data-component="Accordion" className={classes}>
        {clonedChildren}
      </div>
    );
  }
}
