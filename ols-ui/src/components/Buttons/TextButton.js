import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

/**
 * Makes a text button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function TextButton({ children, ...props }) {
  return (
    <Button unstyled {...props}>{children}</Button>
  );
}

TextButton.propTypes = {
  children: PropTypes.node.isRequired
};
