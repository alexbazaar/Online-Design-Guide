import React from "react";
import PropTypes from "prop-types";
import styles from "./AppFoundations.scss";

const propTypes = {
  children: PropTypes.node.isRequired
};

/**
 * Wraps all the content (but not the ModalConductor)
 * @param {object} props - the props
 * @returns {node} DOM node
 */
export default function Page(props) {
  const { children, ...otherProps } = props;

  return (
    <div className={styles.page} id="page" {...otherProps}>
      {children}
    </div>
  );
}

Page.propTypes = propTypes;
