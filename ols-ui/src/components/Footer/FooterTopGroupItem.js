import React, { Component } from "react";
import PropTypes from "prop-types";
import Link, { ExternalLink } from "../Links";

/**
 * [propTypes description]
 */
export default class FooterTopGroupItem extends Component {
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
        <li data-component="FooterTopGroupItem" {...props}>
          <ExternalLink href={href}>{children}</ExternalLink>
        </li>
      );
    } else if (typeof to === "string" && to.length) {
      return (
        <li data-component="FooterTopGroupItem" {...props}>
          <Link to={to}>{children}</Link>
        </li>
      );
    } else {
      return (
        <li data-component="FooterTopGroupItem" {...props}>
          {children}
        </li>
      );
    }
  }
}
