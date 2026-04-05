import React from "react";
import PropTypes from "prop-types";
import Highlight from "./Highlight";
import styles from "./Docs.scss";

const propTypes = {
  children: PropTypes.node
};

/**
 * *****************************************************************************
 * When a single DocsPage contains documentation for multiple components, wrap
 * each component in a DocsComponent.
 *
 * Id is required because it is assumed that there will be a sidebarGroup item
 * for each component and the link needs a page anchor to point to.
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsCode(props) {
  const { children, ...otherProps } = props;
  return (
    <div
      className={styles.docsCode}
      data-component="DocsCode"
    >
      <Highlight {...otherProps}>{children}</Highlight>
    </div>
  );
}

DocsCode.propTypes = propTypes;
