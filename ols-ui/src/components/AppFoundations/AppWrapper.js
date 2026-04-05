import React from "react";
import PropTypes from "prop-types";
import styles from "./AppFoundations.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * [AppWrapper description]
 * @param {object} props - the props
 * @returns {node} DOM node
 */
export default function AppWrapper(props) {
  const { children, ...otherProps } = props;

  return (
    <div className={styles.appWrapper} id="app" {...otherProps}>
      {children}
    </div>
  );
}

AppWrapper.propTypes = propTypes;
