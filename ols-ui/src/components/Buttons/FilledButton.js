import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

/**
 * Makes a filled button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function FilledButton({ children, ...props }) {
  return (
    <Button {...props}>{children}</Button>
  );
}

FilledButton.propTypes = {
  children: PropTypes.node.isRequired
};
