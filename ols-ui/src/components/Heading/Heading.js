import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  headinglevel: PropTypes.oneOf([ "1", "2", "3", "4", "5", "6" ]).isRequired,
  children: PropTypes.node.isRequired
};

/**
 * Returns a specific heading based on the value of the headinglevel prop
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
export default function Heading(props) {
  const { headinglevel, children, ...otherProps } = props;

  switch (headinglevel) {
    case "1":
      return <h1 {...otherProps}>{children}</h1>;
    case "2":
      return <h2 {...otherProps}>{children}</h2>;
    case "3":
      return <h3 {...otherProps}>{children}</h3>;
    case "4":
      return <h4 {...otherProps}>{children}</h4>;
    case "5":
      return <h5 {...otherProps}>{children}</h5>;
    case "6":
      return <h6 {...otherProps}>{children}</h6>;
  }

  return <div>{children}</div>;
}

Heading.propTypes = propTypes;
