import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag.js';

/**
 * Makes a filled button
 * @param {[node]} children children
 * @param {[array]} props props
 * @returns {node} rendered DOM node
 */
export default function EmphasisTag({ children, ...props }) {
  return (
    <Tag {...props}>{children}</Tag>
  );
}

EmphasisTag.propTypes = {
  children: PropTypes.node.isRequired
};
