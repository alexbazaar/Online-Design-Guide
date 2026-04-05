import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Sidebar.scss";
/**
 * Provides a common sidebar.
 *
 * This class is meant to be used in conjunction with the {@link SidebarLink}
 * component.  {@link SidebarLink}s can be nested to provide a hierarchy of
 * links.
 *
 * Example:
 * <code>
 *   <Sidebar>
 *     <SidebarLink label="Index" to="/" onlyActiveOnIndex={true} />
 *     <SidebarLink label="First" to="/first" />
 *     <SidebarLink label="Second" to="/second">
 *       <SidebarLink label="TwoPointOne" to="/second/one" />
 *       <SidebarLink label="TwoPointTwo" to="/second/two" />
 *     </SidebarLink>
 *   </Sidebar>
 * </code>
 */
export default class Sidebar extends React.Component {
  /**
   * Applies class on inital page load
   */
  componentDidMount() {
    this.setActiveLink();
  }
  /** 
   * Applies class on each re-render
  */
  componentDidUpdate() {
    this.setActiveLink();
  }
  /**
   * Removes all active currentNavItem(s)
   * Add currentNavItem to active link
   */
  setActiveLink() {
    const activeLinks = this.sidenavAside.querySelectorAll(`[data-component="sidenavList"] .${styles['activeNavItem']}`);
    Array.from(activeLinks).forEach((link, i) => {
      link.classList.remove(styles['currentNavItem']);
      if (i !== activeLinks.length - 1) {
        link.removeAttribute("aria-current");
      } else {
        link.setAttribute("aria-current", 'page');
      }
    });
    const currentNavItem = activeLinks[activeLinks.length - 1];
    if (currentNavItem) {
      currentNavItem.classList.add(styles['currentNavItem']);
    }
  }
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { className, children } = this.props;
    return (
      <aside ref={(ref) => { this.sidenavAside = ref; }} className={buildClassList(styles.sidenav, className)}>
        <ul className={styles.sidenavList} data-component="sidenavList">
          {children}
        </ul>
      </aside>
    );
  }
}
Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
