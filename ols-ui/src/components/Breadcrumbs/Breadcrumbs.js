import React from 'react';
import PropTypes from "prop-types";
import styles from './Breadcrumbs.scss';

/**
 * The Breadcrumbs component shows a horizontal list of links or text.
 * @returns {node} The rendered DOM node
 * @param {node} children required.
 */
export default function Breadcrumbs({ children }) {
  return (
    <nav aria-label="Breadcrumb" data-component="Breadcrumbs">
      <ul className={styles.breadcrumbs} data-component="BreadcrumbList">
        {children}
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired
};

Breadcrumbs.defaultProps = {
};
