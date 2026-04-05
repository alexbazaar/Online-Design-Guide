import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


const propTypes = {
  children: PropTypes.node
};

/**
 * Makes a success alert
 * @param {node} children - children
 * @param {array} props - props
 * @returns {node} rendered DOM node
 */
export default function SuccessAlert({ children, ...props }) {
  return (
    <Alert type="success" {...props}>
      {children}
    </Alert>
  );
}

SuccessAlert.propTypes = propTypes;
