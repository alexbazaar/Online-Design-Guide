import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";
import { EmphasisTag } from "../Tag";

const propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  tabindex: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  emphasisTag: PropTypes.array
};

/**
 * *****************************************************************************
 * A section of a component's documentation (e.g. "Basic usage" or "Props")
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsSection(props) {
  return (
    <section
      id={props.id}
      className={styles.docsSection}
      data-component="DocsSection"
    >
      {props.title && (
        <h2 className={styles.docsSectionTitle} data-component="sectionTitle">
          {props.title}
        </h2>
      )}
      {props.children}
    </section>
  );
}

DocsSection.propTypes = propTypes;
