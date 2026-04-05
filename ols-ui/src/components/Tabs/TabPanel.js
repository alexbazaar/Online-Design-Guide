import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Tabs.scss";

const propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
};

/**
 * Renders a container with the contents of the tab panel.
 * Expected parent is <TabPanels>
 * Expect children are strings or html elements
 *
 * All props are received from the <Tabs> component; Do not manually set.
 *
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
export default function TabPanel(props) {
  const { children, id, className, ...otherProps } = props;

  // contruct a compound style list if a className is provided
  const style = className
    ? buildClassList([ styles.tabPanel, className ])
    : styles.tabPanel;

  return (
    <div
      role="tabpanel"
      id={id}
      className={style}
      data-component="TabPanel"
      tabIndex="0"
      {...otherProps}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = propTypes;
