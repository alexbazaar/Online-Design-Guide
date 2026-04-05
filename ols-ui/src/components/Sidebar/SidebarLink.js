import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "../Links";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Sidebar.scss";

const propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

/**
 * Returns a link suitable for displaying in the {@link Sidebar} component.
 *
 * This class can optionally take children that are also {@link SidebarLink}
 * components.  This allows for nested links in the sidebar.
 *
 * For more information on how to use the {@link Sidebar} and {@link SidebarLink}s,
 * please see the documentation for {@link Sidebar}.
 */
export default class SidebarLink extends React.Component {
  /**
   * Renders the children of this component.
   *
   * It's possible that this link doesn't have any children, in which case,
   * it returns an empty string. Otherwise, it return a `ul` element with all
   * the children.
   *
   * @returns {Node|String} The rendered DOM node or an empty string.
   */
  renderChildren() {
    let children = "";
    if (React.Children.count(this.props.children) > 0) {
      children = (
        <ul className={styles.sidenavSubList} data-component="sidenavSubList">
          {this.props.children}
        </ul>
      );
    }
    return children;
  }

  /**
   * Renders the component.
   * Accepts an icon, if no icon passed, it sets the default icon for sidebar-collapsible
   * Must pass in the icon filename ex: iconFile.svg => <SidebarLink icon="iconFile" label="test" />
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { icon, label, to, className, ...props } = this.props;

    const iconClassNames = buildClassList(styles.sidebarLink, {
      [styles.withIcon]: icon
    });

    return (
      <li ref={(ref) => this.navLink = ref } data-component="sidenavItem">
        <NavLink
          {...props}
          to={to}
          className={buildClassList(iconClassNames, className)}
          activeClassName={styles.activeNavItem}
          data-component="navLink"
        >
          {icon ? icon : null}
          <span className={styles.label}>{label}</span>
        </NavLink>
        {this.renderChildren()}
      </li>
    );
  }
}

SidebarLink.propTypes = propTypes;
