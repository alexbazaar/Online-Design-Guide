import React from "react";
import PropTypes from "prop-types";

import styles from "./List.scss";

/**
 * List components renders an ordered or unordered list based on "type" prop passed.
 *
 * @param {object} props - The props
 * @returns {node} - DOM node
 */
export default function List(props) {
  const { type, children, ...otherProps } = props;

  if (type === "ol") {
    return (
      <ol className={styles.ol} {...otherProps} data-component="List">
        {children}
      </ol>
    );
  }

  return <ul className={styles.ul} data-component="List">{children}</ul>;
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

List.defaultProps = {
  type: "ul"
};

/**
 * ListItem is a child component that is nested within the List component.
 * @param {object} props - The props
 * @returns {node} - DOM node
 */
export function ListItem(props) {
  const { children, ...otherProps } = props;
  return <li {...otherProps} data-component="ListItem">{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};
