import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";

const propTypes = {
  children: PropTypes.node
};

/**
 * *****************************************************************************
 * Denotes required props in the props tables
 * @param {object} props - The props
 * @returns {node} - DOM node
 * *****************************************************************************
 */
export default function DocsBadge(props) {
  return (
    <span className={styles.docsRequired} {...props}>
      {props.children}
    </span>
  );
}

DocsBadge.propTypes = propTypes;
