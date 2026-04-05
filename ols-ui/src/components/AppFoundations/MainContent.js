import React from "react";
import PropTypes from "prop-types";
import styles from "./AppFoundations.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * [MainContent description]
 * @param {object} props - the props
 * @returns {node} DOM node
 */
export default function MainContent(props) {
  const { children, ...otherProps } = props;

  return (
    <main
      id="main-content"
      className={styles.mainContent}
      tabIndex="-1"
      {...otherProps}
    >
      {children}
    </main>
  );
}

MainContent.propTypes = propTypes;
