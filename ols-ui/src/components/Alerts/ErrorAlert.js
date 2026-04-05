import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


const propTypes = {
  children: PropTypes.node
};

/**
 * Makes an error alert
 * @param {node} children - children
 * @param {array} props - props
 * @returns {node} rendered DOM node
 */
export default function ErrorAlert({ children, ...props }) {
  return (
    <Alert type="error" {...props}>
      {children}
    </Alert>
  );
}

ErrorAlert.propTypes = propTypes;
