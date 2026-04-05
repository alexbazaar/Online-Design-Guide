import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import styles from "../styles/App.scss";


/**
 *  Mobile Header style
 *  Using custom mobile header to account for the approved Design
 *  TO-DO: update IRSHeaderNav component mobile.
 */
class MobileHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    useHamburger: PropTypes.bool,
    hasSearch: PropTypes.bool
  };

  static defaultProps = {
    useHamburger: true,
    hasSearch: false
  };

  state = {
    isOpen: false,
    height: '100% !important',
    clearMobileStyle: false
  };


  /**
   * componentDidMount - description
   *
   *
   */
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  // This is to help us check when the width changes
  // If it is larger than the mobile width then remove the
  // inline styles (height, maxheight...)
  resize = () => {
    if (window.innerWidth >= 760) {
      this.setState({ clearMobileStyle: true });
    } else {
      this.setState({ clearMobileStyle: false });
    }
  }


  updateWindowDimensions = () => {
    const setHeight = Math.max(
      document.documentElement.clientHeight,
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );

    this.setState({ height: setHeight });
  };

  // /**
  //  * Gets the height of the nav.
  //  * If height is 16 or less, there is 0 or 1 items and we're going to assume
  //  * the display is in desktop and not a mobile view.
  //  * @returns {int} the clientHeight
  //  */
  // getNavHeight = () => (
  //   this.div.clientHeight > 16 && this.props.useHamburger ? this.div.clientHeight : 'auto'
  // )

  /**
   * Toggle mobile menu open/closed state
   * @param  {event} e [description]
   */
  handleClick = (e) => {
    e.preventDefault();
    this.navHeight = this.state.height;

    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  /**
   * @returns {node} rendered DOM node
   */
  render() {
    const { isOpen, clearMobileStyle } = this.state;
    const { children, useHamburger } = this.props;
    const ulStyle = {
      height: isOpen && !clearMobileStyle ? this.navHeight : null
    };

    const navBodyStyle = buildClassList(styles.navBody, {
      [styles.navBodyWithHamburger]: useHamburger,
      [styles.mobileOpen]: isOpen,
      [styles.mobileClosed]: !isOpen
    });

    return (
      <nav className={styles.nav}>
        <div className={navBodyStyle} style={ulStyle} tabIndex="-1">
          {useHamburger ? (
            <button
              onClick={this.handleClick}
              className={styles.hamburger}
              aria-expanded={this.state.isOpen}
              aria-controls="irs-header-nav-wrapper"
            >
              <span>
                {this.state.isOpen
                  ? <span>CLOSE</span>
                  : <span>MENU</span>
                }
              </span>
            </button>
          ) : null}
          <div className={styles.mobileMenuBg} />
          <div
            id="irs-header-nav-wrapper"
            className={styles.irsHeaderNavWrapper}
            ref={(ref) => { this.div = ref; }}
            style={{ boxSizing: 'border-box !important' }}
          >
            {children}
          </div>
        </div>
      </nav>
    );
  }

}


export default EmbedStyles(styles)(MobileHeader);
