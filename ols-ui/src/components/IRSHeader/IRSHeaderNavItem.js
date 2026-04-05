import React, { Component } from "react";
import PropTypes from "prop-types";
import Link, { ExternalLink } from "../Links";
import { NavLink } from "react-router-dom";
import styles from "./IRSHeader.scss";

/**
 * [propTypes description]
 */
export default class IRSHeaderNavItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    to: PropTypes.string
  };

  /**
   * [render description]
   * @returns {node} Rendered DOM ndoe
   */
  render() {
    const { children, href, to, ...props } = this.props;

    if (typeof href === "string" && href.length) {
      return (
        <li data-component="IRSHeaderNavItem" className={styles.navItem} {...props}>
          <ExternalLink href={href}>{children}</ExternalLink>
        </li>
      );
    } else if (typeof to === "string" && to.length) {
      return (
        <li data-component="IRSHeaderNavItem" className={styles.navItem} {...props}>
          <NavLink to={to}>{children}</NavLink>
        </li>
      );
    } else {
      return (
        <li data-component="IRSHeaderNavItem" className={styles.navItem} {...props}>
          {children}
        </li>
      );
    }
  }
}
