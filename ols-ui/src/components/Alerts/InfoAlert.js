import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


const propTypes = {
  children: PropTypes.node
};

/**
 * Makes an info alert
 * @param {node} children - children
 * @param {array} props - props
 * @returns {node} rendered DOM node
 */
export default function InfoAlert({ children, ...props }) {
  return (
    <Alert type="info" {...props}>
      {children}
    </Alert>
  );
}

InfoAlert.propTypes = propTypes;
