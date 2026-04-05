import React from "react";
import PropTypes from "prop-types";

/**
 * The timeline container
 * @param {object} props - The props.
 * @returns {node} Rendered DOM node
 */
export default function Timeline(props) {
  const { children, ...otherProps } = props;
  return (
    <div data-component="Timeline" {...otherProps}>
      {children}
    </div>
  );
}

Timeline.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
