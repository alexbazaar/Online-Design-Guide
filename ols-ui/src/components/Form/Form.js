import React from "react";
import PropTypes from "prop-types";

/**
 * *****************************************************************************
 * This component just returns a form elements. Not sure we really need this,
 * but it's holding here in case we want to put some styling on all forms.
 *
 * @param {object} props - The props
 * @returns {node} - DOM node
 * *****************************************************************************
 */
export default function Form(props) {
  const { children, ...otherProps } = props;
  return (
    <form data-component="Form" {...otherProps}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired
};
