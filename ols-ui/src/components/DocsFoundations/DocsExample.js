import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * *****************************************************************************
 * A block that wraps a DocsPreview and a DocsCode
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsExample(props) {
  return (
    <div className={styles.docsExample} data-component="DocsExample">
      {props.children}
    </div>
  );
}

DocsExample.propTypes = propTypes;
