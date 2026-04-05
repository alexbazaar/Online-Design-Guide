import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { buildClassList } from "../../helpers/utilities";
import styles from "./NavBar.scss";

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string
};

/**
 * *****************************************************************************
 * Nav bar item
 * requires a 'to' prop with the path the link should go to
 *
 * @param {object} props - the props
 * @returns {node} - DOM node
 * *****************************************************************************
 */
export default function NavBarItem(props) {
  const { to, children, activeClassName, className, ...otherProps } = props;

  return (
    <li
      className={buildClassList([ styles.navItem, className ])}
      data-component="NavBarItem"
      {...otherProps}
    >
      <NavLink
        to={to}
        activeClassName={activeClassName || styles.active}
      >
        {children}
      </NavLink>
    </li>
  );
}

NavBarItem.propTypes = propTypes;
