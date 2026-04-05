import React from 'react';
import PropTypes from 'prop-types';
import { buildClassList } from '../../helpers/utilities';
import styles from './Tabs.scss';

const propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  tabsId: PropTypes.string.isRequired
};


/**
 * Renders a container div that contains the active TabPanel.
 * Expected parent is <Tabs>
 * Expected children are one or more <TabPanel>s
 *
 * All props are received from the <Tabs> component; Do not manually set.
 *
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
export default function TabPanels(props) {
  const {
    children,
    activeIndex,
    className,
    tabsId
  } = props;

  // Duplicate the children to add new props
  const newChildren = React.Children.map(children, (child, index) => (
    React.cloneElement(child, {
      id: `${tabsId}-panel-${index}`
    })
  ));

  return (
    <div className={buildClassList([ styles.tabPanels, className ])} data-component="TabPanels">
      {newChildren[activeIndex]}
    </div>
  );
}

TabPanels. propTypes = propTypes;
