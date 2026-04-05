import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper for the TabPanel contents with a required prop for the tab label
 */
export default class Tab extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired
  };

  /**
   * Returns a simple div
   * @returns {node} Rendered DOM node
   */
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}
