import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./TimelinePanel.scss";

const propTypes = {
  children: PropTypes.node,
  fill: PropTypes.oneOf([ "blue", "red", "green", "gold", "gray" ])
};

/**
 * The timeline item with circle and vertical line
 * @returns {node} rendered DOM node
 * @param {object} props - the props
 *
 * children: text contents of the item
 * fill: the fill color of the circle
 */
export default function TimelinePanelItem(props) {
  const { children, fill, ...otherProps } = props;
  const knotClass = buildClassList({
    [styles.knot]: true,
    [styles[fill]]: fill
  });

  return (
    <div
      className={styles.item}
      data-component="TimelinePanelItem"
      {...otherProps}
    >
      <div className={styles.knotLine}>
        <div className={styles.line} />
        <div className={knotClass} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

TimelinePanelItem.propTypes = propTypes;
