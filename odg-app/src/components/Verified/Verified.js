import React from "react";
import PropTypes from "prop-types";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { CheckCircleIcon } from "../../../ols-ui/src/components/Icons";

import styles from "./Verified.scss";

const propTypes = {
  children: PropTypes.node
};

/**
 * [Verified description]
 * @param       {[type]} children [description]
 * @param       {[type]} props    [description]
 * @returns {node} DOM node
 */
function Verified({ children, ...props }) {
  return (
    <span className={styles.verified} tabIndex="0">
      <CheckCircleIcon {...props} />
      <span className={styles.children}>{children}</span>
    </span>
  );
}

Verified.propTypes = propTypes;

export default EmbedStyles(styles)(Verified);
