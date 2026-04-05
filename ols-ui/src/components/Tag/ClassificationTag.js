import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag.js';

/**
 * Makes an outlined button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function ClassificationTag({ children, ...props }) {
  return (
    <Tag {...props}>{children}</Tag>
  );
}

ClassificationTag.propTypes = {
  children: PropTypes.node.isRequired
};
