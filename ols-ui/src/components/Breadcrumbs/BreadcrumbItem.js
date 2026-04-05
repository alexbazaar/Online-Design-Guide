import React from "react";
import PropTypes from "prop-types";
import Link from "../Links";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Breadcrumbs.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
};

/**
 * A BreadcrumbItem can either be a link to a page or a link to an external page.
 * @param {array} props - the props
 * @returns {node} - rendered DOM node
 */
export default function BreadcrumbItem(props) {
  const { children, to, href, className, ...otherProps } = props;

  const renderChildren = () => {
    if (typeof to === "string" && to.length > 0) {
      return (
        <span>
          <Link to={to}>{children}</Link>
        </span>
      );
    } else if (typeof href === 'string' && href.length) {
      return (
        <span>
          <Link href={href}>{children}</Link>
        </span>
      );
    } else {
      return (
        <span aria-current="page">{children}</span>
      );
    }
  };


  return (
    <li
      className={buildClassList([ styles.breadcrumb, className ])}
      data-component="BreadcrumbItem"
      {...otherProps}
    >
      {renderChildren()}
    </li>
  );
}

BreadcrumbItem.propTypes = propTypes;
