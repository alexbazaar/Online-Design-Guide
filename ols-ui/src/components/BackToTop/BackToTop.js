/* eslint-disable require-jsdoc */
import React, { Component }  from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { ArrowUpIcon } from "../Icons";
import styles from "./BackToTop.scss";

/**
 * Accordions contain any number of AccordionItems. Do no wrap AccordionItems in
 * any other sort of markup, as the AccordionItems are cloned to pass down data.
 *
  * @param {string} headingLevel  - heading level of accordion item
 *
 * @type {Object}
 */


export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.checkHidden = this.checkHidden.bind(this);
    this.setHeight = this.setHeight.bind(this);
    
    this.state = { hidden: true, windowHeight: 400, belowFold: false, previousTop: 0 };
  }

  static defaultProps = {
    relative: false,
    iconOnly: false,
    children: 'Top'
  };


  componentDidMount() {
    window.addEventListener('scroll', this.checkHidden);
    window.addEventListener('resize', this.setHeight);
   
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkHidden);
    window.removeEventListener('resize', this.setHeight);
  }

  checkHidden(){
    // Check if Below Fold
    if (window.pageYOffset > this.state.windowHeight) {
      this.setState({ hidden: this.state.hidden, windowHeight: window.innerHeight, belowFold: true, previousTop: this.state.previousTop });
    } else {
      this.setState({ hidden: this.state.hidden, windowHeight: window.innerHeight, belowFold: false, previousTop: this.state.previousTop });
    }

    // Check if Hidden
    if (this.state.hidden) {
      // Check if should show
      if (this.state.belowFold && window.pageYOffset < this.state.previousTop) {
        this.setState({ hidden: false, windowHeight: window.innerHeight, belowFold: true, previousTop: this.state.previousTop });
      }

      // Set New Previous Top
      this.setState({ hidden: this.state.hidden, windowHeight: window.innerHeight, belowFold: this.state.belowFold, previousTop: window.pageYOffset });
    } else {
      // If already visible...
      // Check to reset
      if (window.pageYOffset == 0) {
        this.setState({ hidden: true, windowHeight: window.innerHeight, belowFold: false, previousTop: this.state.previousTop });
        if(document.activeElement.id="backToTop"){
          setTimeout(function() {
              document.activeElement.blur();
          }, 750);
        }
      }
    }
  }

  setHeight() {
    this.setState({ hidden: this.state.hidden, windowHeight: window.innerHeight });
  }

  goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    console.log(document.activeElement.id);
  }


  render() {
    const buttonIcon = <ArrowUpIcon unstyled crop focusable="false" />;
 
    const mainClasses = buildClassList({
      [styles.hidden]: this.state.hidden,
      [styles.relative]: this.props.relative,
      [styles.backToTop]: true
    });

    const content = <span>{this.props.children}</span> ;


    return (
      <button
        id="backToTop"
        className={mainClasses}
        onClick={this.goToTop}
        data-component="BackToTop">
        {buttonIcon}
        {content}
      </button>
    );
  }


}
