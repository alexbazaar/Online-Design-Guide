import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * *****************************************************************************
 * Replacement for DocsSection title - shows code usage
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsCodeUsage(props) {
  return (
    <div
      className={styles.docsCodeUsage}
      data-component="DocsCodeUsage"
    >
      {props.children}
    </div>
  );
}

DocsCodeUsage.propTypes = propTypes;
