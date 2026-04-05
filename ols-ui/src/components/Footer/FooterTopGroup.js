import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlexCol } from "../FlexGrid";
import MobileFooterGroup from "./MobileFooterGroup";
import styles from "./Footer.scss";
import {
  setMaxHeightAndPosition
} from "../../helpers/utilities";

/**
 * FooterTopGroup - description
 *
 * @param  {type} props description
 * @returns {type}       description
 */
export default class FooterTopGroup extends Component {
  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    mobileVisible: PropTypes.bool
  };

  state = {
    mobileVisible: this.props.mobileVisible || false
  };


  /**
   * Watches for the window width change to mobile
   * Updates the `mobileVisible` state according to logic
   *
   * @method handleResize
   */
  handleResize = () => {
    let appWidth;
    if (document.getElementById("app") !== null) {
      appWidth = document.getElementById("app").offsetWidth;
    }
    // Needs dual check for offsetWidth
    if (window.innerWidth < 996 || appWidth < 996) {
      this.setState({
        mobileVisible: true
      });
      return;
    } else {
      if (this.state.mobileVisible) {
        this.setState({
          mobileVisible: false
        });
      }
    }
  };


  /**
   * componentDidMount - watches for the window resize
   *
   */
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  /**
   * [componentWillUnmount - removes the listeners
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  /**
   * render - description
   *
   * @returns {type}  description
   */
  render() {
    const { label, children } = this.props;

    if (React.Children.count(children) === 0) return null;

    return (
      <FlexCol md="3" sm="4" className={styles.footerTopGroup}>
        {this.state.mobileVisible ? (
          <MobileFooterGroup label={label}>
            {children}
          </MobileFooterGroup>
        ) : (
          <div ref={(ref) => {
            this.footerGroupWrapper = ref;
          }} data-component="FooterTopGroup">
            <h3 className={styles.groupLabel}>{label}</h3>
            <ul className={styles.groupList}>{children}</ul>
          </div>
        )}
      </FlexCol>
    );

  }
}
