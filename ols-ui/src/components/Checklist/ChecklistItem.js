import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { CheckListIcon } from "../Icons";
import styles from "./Checklist.scss";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

/**
 * *****************************************************************************
 * A list item component for the check list
 * Comes in two sizes: regular and big. Specify big by passing a 'big'
 * attribute.
 *
 * Role is explicitly set because several ATs do not read lists that are
 * unstyled
 *
 * @returns {node} The rendered DOM node
 * @param {object} props - the props
 * *****************************************************************************
 */
export default function ChecklistItem(props) {
  const { children, className, ...otherProps } = props;

  /* eslint-disable jsx-a11y/no-redundant-roles */
  return (
    <li
      className={buildClassList([ styles.checkListItem, className ])}
      data-component="ChecklistItem"
      role="listitem"
      {...otherProps}
    >
      <CheckListIcon unstyled className={styles.icon} />
      {children}
    </li>
  );
}

ChecklistItem.propTypes = propTypes;
