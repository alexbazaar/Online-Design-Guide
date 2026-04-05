import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabList, TabButton, TabPanels, TabPanel } from '../Tabs';

/**
 * Convenience component for tabs
 */
export default class TabView extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  };

  /**
   * Loops through the children, breaks down the bits,
   * and re-constructs the full tabs implementation
   * @returns {node} rendered DOM node
   */
  render() {
    const { children, id, ...props } = this.props;

    const newChildren = React.Children.toArray(children);
    const tabs = [];
    const panels = [];

    newChildren.forEach((child, index) => {
      tabs.push(
        <TabButton disabled={child.props.disabled} key={`key-${index}`}>{child.props.label}</TabButton>
      );
      panels.push(
        <TabPanel key={`tabpanel-${index}`}>{child}</TabPanel>
      );
    });

    return (
      <Tabs id={id} {...props}>
        <TabList>
          {tabs}
        </TabList>
        <TabPanels>
          {panels}
        </TabPanels>
      </Tabs>
    );
  }
}
