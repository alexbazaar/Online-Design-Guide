import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag.js';

/**
 * Makes a text button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function TextButton({ children, ...props }) {
  return (
    <Tag unstyled {...props}>{children}</Tag>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired
};
