import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

/**
 * Makes an outlined button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function OutlinedButton({ children, ...props }) {
  return (
    <Button outlined {...props}>{children}</Button>
  );
}

OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired
};
