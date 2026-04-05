import React, { Component } from "react";
import PropTypes from "prop-types";
import { BarsIcon } from "../Icons";
import { buildClassList } from '../../helpers/utilities';
import styles from "./IRSHeader.scss";

/**
 * [propTypes description]
 */
export default class IRSHeaderNav extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    useHamburger: PropTypes.bool
  };

  static defaultProps = {
    useHamburger: true
  };

  state = {
    isOpen: false
  };

  /**
   * Gets the height of the nav.
   * If height is 16 or less, there is 0 or 1 items and we're going to assume
   * the display is in desktop and not a mobile view.
   * @returns {int} the clientHeight
   */
  getUlHeight = () => (
    this.ul.clientHeight > 16 && this.props.useHamburger ? this.ul.clientHeight : 'auto'
  )

  /**
   * Toggle mobile menu open/closed state
   * @param  {event} e [description]
   */
  handleClick = (e) => {
    e.preventDefault();
    this.ulHeight = this.getUlHeight();

    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  /**
   * @returns {node} rendered DOM node
   */
  render() {
    const { isOpen } = this.state;
    const { children, useHamburger } = this.props;
    const ulStyle = {
      maxHeight: isOpen && useHamburger ? this.ulHeight : null
    };
    const navBodyStyle = buildClassList(styles.navBody, {
      [styles.navBodyWithHamburger]: useHamburger
    });

    return (
      <nav className={styles.nav} aria-label="Header Top Navigation">
        <div className={navBodyStyle} style={ulStyle}>
          <ul
            ref={(ref) => { this.ul = ref; }}
            style={{ boxSizing: 'border-box !important' }}
          >
            {children}
          </ul>
        </div>
      </nav>
    );
  }
}
