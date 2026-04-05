import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Docs.scss";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

/**
 * *****************************************************************************
 * Container to render a working example of the component. Contains a thick
 * border to blend the example with a sample code block.
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsPreview(props) {
  return (
    <div
      className={buildClassList(styles.docsPreview, props.className)}
      data-component="DocsPreview"
    >
      {props.children}
    </div>
  );
}

DocsPreview.propTypes = propTypes;
