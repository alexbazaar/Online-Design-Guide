import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.scss";

/**
 * Returns a group of {@link SidebarLink} items under a specific label.
 *
 * For more information on how to use the {@link Sidebar} and {@link SidebarLink}s,
 * please see the documentation for {@link Sidebar}.
 *
 * @param {object} props The props.
 * @returns {Node} DOM node
 */
export default function SidebarGroup(props) {
  const { label, children } = props;

  if (React.Children.count(children) === 0) return null;
  return (
    <li>
      <div className={styles.groupLabel}>{label}</div>
      <ul className={styles.groupList}>{children}</ul>
    </li>
  );
}

SidebarGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
};
