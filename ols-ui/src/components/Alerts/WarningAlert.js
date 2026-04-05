import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


const propTypes = {
  children: PropTypes.node
};

/**
 * Makes a warning alert
 * @param {node} children - children
 * @param {array} props - props
 * @returns {node} rendered DOM node
 */
export default function WarningAlert({ children, ...props }) {
  return (
    <Alert type="warning" {...props}>
      {children}
    </Alert>
  );
}

WarningAlert.propTypes = propTypes;
