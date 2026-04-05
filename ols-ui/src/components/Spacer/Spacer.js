import React from "react";
import PropTypes from "prop-types";

/**
 * [Spacer description]
 * @param {object} props - The props
 * @returns {node} - DOM node
 */
export default function Spacer(props) {
  const { height, width, ...otherProps } = props;

  const style = {
    height: `${height}px`
  };

  if (width) {
    style.width = `${width}px`;
  }

  return <div style={style} {...otherProps} />;
}

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};

Spacer.defaultProps = {
  height: 16
};
