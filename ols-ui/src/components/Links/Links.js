import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as RRLink, NavLink as RRNavLink } from "react-router-dom";
import { buildClassList } from "../../helpers/utilities";
import ExternalLinkIcon from "../Icons/ExternalLink";

import styles from "./Links.scss";
import EnvelopeUnfilledIcon from "../Icons/EnvelopeUnfilled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
/**
 * Represents a generic link element.
 *
 * If an href attribute is passed, then the Link is rendered as an <a>,
 * otherwise it becomes a wrapper around the React Router Link class and accepts
 * any props supported by that class.
 *
 * If no `activeClassName` is defined, this class will set it to the default
 * value of "current" per the U.S. Web Design Standards.
 */
export default class Link extends Component {
  static propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { href, children, className, ...props } = this.props;

    if (typeof href === "string" && href.length) {
      return (
        <a
          data-component="Link"
          href={href}
          className={buildClassList([styles.link, className])}
          {...props}
        >
          {children}
        </a>
      );
    } else {
      return (
        <RRLink
          data-component="Link"
          className={buildClassList([styles.link, className])}
          {...props}
        >
          {children}
        </RRLink>
      );
    }
  }
}

/**
 * Renders an <a> link with the "external link" icon after the text.
 * The link will open in a new window by default, to change this behavior supply
 * a value for the target attribute.
 * @type {Object}
 */
export class ExternalLink extends Component {
  static propTypes = {
    className: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
  };

  /**
   * Render
   * @returns {node} DOM node
   */
  render() {
    const { children, className, href, target, ...props } = this.props;

    return (
      <a
        data-component="ExternalLink"
        href={href}
        className={buildClassList([styles.externalLink, className])}
        target={target ? target : "_blank"}
        rel="noopener noreferrer"
        {...props}
      >
        {children}

        <ExternalLinkIcon
          height="14px"
          width="14px"
          crop
          className={styles.externalLinkIcon}
          focusable="false"
        />

        <span className={styles["sr-only"]}>
          This link will open in a new window
        </span>
      </a>
    );
  }
}

/**
 * Renders a <a> link with the "email link" icon after the text.
 * The link will open in a new window by default.
 * @type {Object}
 */
export class EmailLink extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
  };

  /**
   * Render
   * @returns {node} DOM node
   */
  render() {
    const { children, className, href, ...props } = this.props;

    return (
      <a
        data-component="EmailLink"
        href={href}
        className={buildClassList([styles.externalLink, className])}
        {...props}
      >
        {children}

        <EnvelopeUnfilledIcon
          height="12px"
          width="16px"
          crop
          className={styles.emailLinkIcon}
          focusable="false"
        />
        <span className={styles["sr-only"]}>
          This link will open the default email application
        </span>
      </a>
    );
  }
}

/**
 * Represents a generic link element.
 *
 * This class is a wrapper around the React Router Link class and accepts any
 * props supported by that class.
 *
 * If no `activeClassName` is defined, this class will set it to the default
 * value of "active".
 */
export class NavLink extends Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const props = Object.assign({}, this.props);
    if (props.activeClassName === undefined) {
      props.activeClassName = "active";
    }
    return <RRNavLink data-component="NavLink" {...props} />;
  }
}
