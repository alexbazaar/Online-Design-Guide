import React from 'react';
import PropTypes from "prop-types";

import styles from "./SplitView.scss";

/**
 * Component for a single segment inside a SplitView.
 *
 * @param {Object} style An object containing inline styles to apply.
 * @param {Node} children The children to render in this segment.
 * @returns {Node}
 */
export default function SplitViewSegment({ style = {}, children })
{
  return (
    <div className={styles["segment"]} style={style} data-component="SplitViewSegment">
      {children}
    </div>
  );
}

SplitViewSegment.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

SplitViewSegment.defaultProps = {
  style: {}
};
