import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Checklist.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

/**
 * *****************************************************************************
 * An unordered list with checkmark icons as bullets
 **
 * @returns {node} The rendered DOM node
 * @param {object} props - the props
 * *****************************************************************************
 */
export default function Checklist(props) {
  const { children, className, ...otherProps } = props;

  /* eslint-disable jsx-a11y/no-redundant-roles */

  return (
    <ul
      className={buildClassList([ styles.checkList, className ])}
      data-component="Checklist"
      role="list"
      {...otherProps}
    >
      {children}
    </ul>
  );
}

Checklist.propTypes = propTypes;
