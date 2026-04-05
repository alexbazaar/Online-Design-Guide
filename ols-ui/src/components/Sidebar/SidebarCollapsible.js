import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { AngleLeftIcon, AngleRightIcon } from "../Icons";
import styles from "./Sidebar.scss";

/**
 * Returns a sidebar with button to toggle open/close. Use for displaying the {@link Sidebar} component.
 */
export default class SidebarCollapsible extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCollapsed: PropTypes.bool,
    onChange: PropTypes.func
  };

  state = {
    isCollapsed: this.props.isCollapsed || false
  };

  /**
   * Helper to determine if component is controlled or not
   * @returns {Boolean} if component is controlled
   */
  isControlled() {
    return this.props.isCollapsed != null || this.props.onChange != null;
  }

  /**
   * Updates the state when user clicks on the button
   */
  handleClick = () => {
    if (this.isControlled()) {
      this.props.onChange();
    } else {
      this.setState({
        isCollapsed: !this.state.isCollapsed
      });
    }
  };

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { children, className } = this.props;
    const isCollapsed = this.isControlled()
      ? this.props.isCollapsed
      : this.state.isCollapsed;
    const SidebarStyles = buildClassList(
      styles.collapsibleSidenav,
      {
        [styles.closed]: isCollapsed
      }
    );

    return (
      <aside className={buildClassList(SidebarStyles, className)}>
        <button className={styles.collapseButton} onClick={this.handleClick}>
          <span className={styles.srOnly}>
            {isCollapsed ? "Expand menu" : "Collapse menu"}
          </span>
          {isCollapsed ?
            <AngleRightIcon unstyled focusable="false" className={styles.buttonArrow} />
            : <AngleLeftIcon unstyled focusable="false" className={styles.buttonArrow} />
          }
        </button>
        <ul className={styles.sidenavList} data-component="sidenavList">
          {children}
        </ul>
      </aside>
    );
  }
}
