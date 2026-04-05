import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";

import styles from "./Tabs.scss";

/**
 * Expected to be the direct child of <Tabs>
 * Expects children to be one or more <Tab>s
 * @type {[type]}
 */
export default class TabList extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    tabsId: PropTypes.string.isRequired,
    shouldFocus: PropTypes.bool.isRequired,
    activeIndex: PropTypes.number,
    onSelectTab: PropTypes.func,
    className: PropTypes.string
  };

  /**
   * Renders a container div that holds all the tabs
   * @returns {node} rendered DOM node
   */
  render() {
    const {
      children,
      activeIndex,
      className,
      tabsId,
      onSelectTab,
      shouldFocus,
      ...props
    } = this.props;

    // create a new array of booleans for each tab indicating if it's disabled or not
    const disabledTabs = React.Children.map(children, (child) => {
      if (child.props.disabled) {
        return true;
      } else {
        return false;
      }
    });

    // find the index of the next tab that isn't disabled
    const nextValidTab = (index) => {
      let nextTab = null;
      let i = index;

      while (nextTab === null) {
        i += 1;

        if (i === disabledTabs.length) {
          i = 0;
        }

        if (disabledTabs[i] === false) {
          nextTab = i;
        }
      }

      return nextTab;
    };

    // find the index of the previous tab that isn't disabled
    const previousValidTab = (index) => {
      let previousTab = null;
      let i = index;

      while (previousTab === null) {
        i -= 1;

        if (i === -1) {
          i = disabledTabs.length - 1;
        }

        if (disabledTabs[i] === false) {
          previousTab = i;
        }
      }

      return previousTab;
    };

    // Duplicate children to add new props
    const newChildren = React.Children.map(children, (child, index) => (
      React.cloneElement(child, {
        id: `${tabsId}-tab-${index}`,
        tabsId,
        controls: `${tabsId}-panel-${index}`,
        isActive: index === activeIndex,
        onSelect: () => {
          onSelectTab(index, false);
        },
        onSelectNext: () => {
          onSelectTab(nextValidTab(index), true);
        },
        onSelectPrevious: () => {
          onSelectTab(previousValidTab(index), true);
        },
        shouldFocus: shouldFocus
      })
    ));

    // contruct a compound style list if a className is provided
    const style = className
      ? buildClassList([ styles.tabList, className ])
      : styles.tabList;

    return (
      <div className={styles.wrapper}>
        <div className={style} role="tablist" data-component="TabList" {...props}>
          {newChildren}
        </div>
      </div>
    );
  }
}
