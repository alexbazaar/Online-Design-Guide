import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Badges.scss";

/**
 * The Badges component shows a colored circle of a numerical value.
 * Provide a label for screen-readers to describe the numerical value.
 * @param {props} props for badges
 * @returns {node} The rendered DOM node
 */
function Badges(props) {
  const { value, hiddenLabel } = props;
  const [ currentValue, setCurrentValue ] = useState(value);
  const [ size, setSize ] = useState("single", "double", "triple");

  const getBadgeSize = (value) => {
    const valueLength = value.toString().length;

    if (valueLength === 1) return "single";
    if (valueLength === 2) return "double";
    if (valueLength === 3) return "triple";
  };
  
  useEffect(
    () => {
      const badgeSize = getBadgeSize(value);
      setSize(badgeSize);
      if (badgeSize === "triple") setCurrentValue("99+");
    },
    [ value, currentValue ]
  );

  return (
    <div
      className={styles.basicBadge}
      data-component="Badges"
      data-component-size={size}
    >
      {currentValue}
      <span className="sr-only">{hiddenLabel}</span>
    </div>
  );
}

Badges.propTypes = {
  value: PropTypes.number.isRequired,
  hiddenLabel: PropTypes.string.isRequired
};

export default Badges;
