import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
export default function DocsComponent(props) {
  return (
    <section
      id={props.id}
      className={styles.docsComponent}
      data-component="DocsComponent"
    >
      {props.title && (
        <h2
          className={styles.docsComponentTitle}
          data-component="docsComponentTitle"
        >
          {props.title}
        </h2>
      )}
      {props.children}
    </section>
  );
}

DocsComponent.propTypes = propTypes;
