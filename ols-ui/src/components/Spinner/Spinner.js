import React from "react";
import PropTypes from "prop-types";
import styles from "./Spinner.scss";

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

/**
 * Loading spinner (aka indefinite activity indicator)
 *
 * By default, the spinner is white and 48px x 48px.
 *
 * Change the color by passing in a valid named color or HEX value to the color prop
 * e.g. ("blue" or "#333")
 *
 * Change the size by passing in a CSS size value to the size prop
 * (e.g. "32px" or "25%")
 *
 * @param {object} props - The props
 * @returns {node} - DOM node
 */
export default function Spinner(props) {
  const { color, size } = props;

  const barStyle = color ? { background: color, boxShadow: "none" } : null;
  const containerStyle = size ? { width: size, height: size } : null;

  return (
    <div
      className={styles.spinner}
      style={containerStyle}
      data-component="Spinner"
    >
      <div className={styles.bar1} style={barStyle} />
      <div className={styles.bar2} style={barStyle} />
      <div className={styles.bar3} style={barStyle} />
      <div className={styles.bar4} style={barStyle} />
      <div className={styles.bar5} style={barStyle} />
      <div className={styles.bar6} style={barStyle} />
      <div className={styles.bar7} style={barStyle} />
      <div className={styles.bar8} style={barStyle} />
      <div className={styles.bar9} style={barStyle} />
      <div className={styles.bar10} style={barStyle} />
      <div className={styles.bar11} style={barStyle} />
      <div className={styles.bar12} style={barStyle} />
    </div>
  );
}

Spinner.propTypes = propTypes;
