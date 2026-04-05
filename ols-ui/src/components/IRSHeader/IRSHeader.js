import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import { FlexContainer, FlexRow, FlexCol } from "../FlexGrid";
import Portal from "../Portal";
import IRSHeaderNav from "./IRSHeaderNav";
import IRSHeaderMobile from "./IRSHeaderMobile";
import OfficialSiteBanner from "./OfficialSiteBanner";
import DraftNotice from "./DraftNotice";
// import IRSLogo from "../../assets/images/IRSLogoxfff.png";
import IRSLogo from '../IRSLogo';
import NavBar from "../NavBar";
import Link from "../Links";
import {
  buildClassList,
  setMaxHeightAndPosition
} from "../../helpers/utilities";
import styles from "./IRSHeader.scss";

const propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  logoLinkPath: PropTypes.string,
  logoLinkTitle: PropTypes.string,
  versionLabel: PropTypes.string
};

const defaultProps = {
  logoLinkPath: "/",
  logoLinkTitle: "Go to the main view"
};

/**
 * Renders the logo and title. The logo and title are wrapped in a link if
 * props.logoLinkPath is not empty or null
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
function IRSHeaderLogo(props) {
  const { logoLinkPath, logoLinkTitle, title, versionLabel, children } = props;

  let ariaLabel = "IRS";
  let linkTitle = "";

  if (title) {
    ariaLabel += ` ${title}`;
  }

  if (versionLabel) {
    linkTitle = logoLinkTitle + " version " + versionLabel;
  } else {
    linkTitle = logoLinkTitle;
  }

  if (logoLinkPath) {
    return (
      <Link
        to={logoLinkPath}
        className={styles.logo}
        aria-label={ariaLabel}
        title={linkTitle}
      >
        {children}
        {versionLabel ? (
          <span className={styles.version} aria-hidden="true">
            {versionLabel}
          </span>
        ) : null}
      </Link>
    );
  } else {
    return (
      <div className={styles.logo} role="img" alt={ariaLabel}>
        {children}
      </div>
    );
  }
}

IRSHeaderLogo.propTypes = propTypes;
IRSHeaderLogo.defaultProps = defaultProps;

/**
 * The site header with logo, optional product name and optional space
 * for navigation or other elements.
 *
 * The Header's children are formatted to be on the right side of the header.
 * @param {object} props - the props
 */
export default class IRSHeader extends Component {
  static propTypes = {
    title: PropTypes.node,
    fluid: PropTypes.bool,
    showOfficialSiteBanner: PropTypes.bool,
    showDraftNotice: PropTypes.bool,
    headerSearch: PropTypes.node,
    children: PropTypes.node,
    headerNavLinks: PropTypes.node,
    headerNavButtons: PropTypes.node,
    navBar: PropTypes.node,
    mobileVisible: PropTypes.bool,
    disableMobileMenu: PropTypes.bool,
    systemAlert: PropTypes.node
  };

  static defaultProps = {
    fluid: false,
    showOfficialSiteBanner: true,
    showDraftNotice: false,
    disableMobileMenu: false
  };

  state = {
    mobileVisible: this.props.mobileVisible || false,
    activeElement: ""
  };

  /*
   * Determines if mobile menu is visible on screen size of 996px.
   */
  changeMobileVisibility = () => {
    const appWidth = document.getElementById("app").offsetWidth;
    if (window.innerWidth < 996 || appWidth < 996) {
      this.setState({
        mobileVisible: !this.state.mobileVisible
      });
    }
  };

  /**
   * Render the mobile menu
   * @param  {Element} el - menu element
   */
  renderMobileMenu = (el) => {
    const siblingEl = document.getElementById("IRSHeader");
    siblingEl.insertAdjacentElement("afterend", el);
  };

  /**
   * scroll handler method
   */
  handleScroll = () => {
    const initialTop =
      this.headerInner.parentElement.getBoundingClientRect().top +
      window.scrollY;
    setMaxHeightAndPosition(this.headerInner, initialTop);
  };

  /**
   * Resize handler method
   */
  handleResize = () => {
    let appWidth;
    if (document.getElementById("app") !== null) {
      appWidth = document.getElementById("app").offsetWidth;
    }
    // Needs dual check for offsetWidth
    if (window.innerWidth < 996 || appWidth < 996) {
      this.headerInner.removeAttribute("style");
      window.removeEventListener("scroll", this.handleScroll);
      return;
    } else {
      if (this.state.mobileVisible) {
        this.setState({
          mobileVisible: false
        });
      }
    }

    this.handleScroll();
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  };

  /**
   * Tab key press handler
   * @param {SyntheticEvent} event - react event
   */
  handleTabPress = (event) => {
    const focusableEls = this.mobileMenuWrapper.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const focusableElsLength = focusableEls.length - 1;
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableElsLength];

    if (event.keyCode === 9 || event.key === "Tab") {
      if (event.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          setTimeout(() => {
            lastFocusableEl.focus();
          }, 20);
          event.preventDefault();
        }
      } /* tab */ else {
        /* Checks for the last element || if last element is dropdown that is closed */
        if (
          document.activeElement === lastFocusableEl ||
          document.activeElement.getAttribute("aria-expanded") === "false"
        ) {
          setTimeout(() => {
            firstFocusableEl.focus();
          }, 20);
          event.preventDefault();
        }
      }
    }
  };

  /**
   * componentDidMount lifecycle method
   * adds resize event listener
   */
  componentDidMount() {
    if (!this.props.children) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
      // this.renderMobileMenu(this.mobileMenuWrapper);
      // document.addEventListener('keydown', this.handleTabPress);
    }
  }

  /**
   * componentWillUnmount lifecycle method
   * removes event listeners on unmount
   */
  componentWillUnmount() {
    // add modal__open class to body to prevent scroll
    document.body.classList.remove("modal__open");

    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    // document.removeEventListener('keydown', this.handleTabPress);
  }

  /**
   *
   * @returns {JSX.Element}
   */
  render() {
    const {
      fluid,
      showOfficialSiteBanner,
      disableMobileMenu,
      children,
      title,
      showDraftNotice,
      headerSearch,
      navBar,
      headerNavLinks,
      headerNavButtons,
      systemAlert,
      ...props
    } = this.props;

    const renderHeaderNavButtonGroup = (
      <div className={styles.headerNavButtonGroup}>{headerNavButtons}</div>
    );

    /**
     * Render nav bar
     * @type {JSX.Element}
     */
    const renderNavBar = (
      <NavBar
        className={buildClassList({
          [styles.visible]: true,
          [styles.navBar]: true
        })}
        style={{ height: "auto", maxwidth: "864px" }}
      >
        {navBar}
      </NavBar>
    );

    /**
     * Render search bar
     * @type {JSX.Element}
     */
    const renderSearch = (
      <FlexCol
        className={buildClassList({
          [styles.navSearch]: true,
          [styles.navSearchOnly]:
            !this.props.headerNavLinks && !this.props.headerNavButtons
        })}
        xs="10"
        xsOffset="1"
        sm="10"
        smOffset="1"
        md="10"
        mdOffset="1"
        lg="3"
        lgOffset="0"
        xl="auto"
        xlOffset="0"
      >
        {headerSearch}
      </FlexCol>
    );

    /**
     * Mobile nav element
     * @type {JSX.Element|null}
     */
    const mobileEl = !disableMobileMenu ? (
      this.state.mobileVisible ? (
        <Portal>
          <Transition
            in={this.state.mobileVisible}
            appear={true}
            timeout={100}
          >
            {(state) => (
              <div
                id="mobile-menu"
                className={buildClassList(styles.mobile, {
                  [styles.visible]: true,
                  [styles[`visible-${state}`]]: true
                })}
                ref={(ref) => {
                  this.mobileMenuWrapper = ref;
                }}
              >
                <IRSHeaderMobile
                  id="mobile__menu_inner"
                  changeMobileVisibility={this.changeMobileVisibility}
                >
                  {navBar ? renderNavBar : null}
                  <FlexRow align="center">
                    {renderSearch}
                    <FlexCol md="auto">
                      {headerNavButtons ? renderHeaderNavButtonGroup : null}
                      {headerNavLinks ? (
                        <IRSHeaderNav
                          className={styles.headerNav}
                          useHamburger={false}
                        >
                          {headerNavLinks}
                        </IRSHeaderNav>
                      ) : null}
                    </FlexCol>
                  </FlexRow>
                </IRSHeaderMobile>
              </div>
            )}
          </Transition>
        </Portal>
      ) : null
    ) : null;

    /**
     * Header for desktop nav
     * @type {JSX.Element}
     */
    const renderHeaderNavDesktop = (
      <FlexRow align="center" justify="end">
        {headerSearch || headerNavLinks || headerNavButtons ? (
          <FlexCol md="auto">
            <IRSHeaderNav className={styles.headerNav} useHamburger={false}>
              {headerNavLinks}
            </IRSHeaderNav>
          </FlexCol>
        ) : null}
        {headerNavButtons ? renderHeaderNavButtonGroup : null}
        {headerSearch ? renderSearch : null}
        {children}
      </FlexRow>
    );

    return (
      <Fragment>
        <a className={styles.skipnav} href="#main-content">
          Skip to main content
        </a>
        {systemAlert ? systemAlert : null}
        <div id="IRSHeader" data-component="IRSHeader" className={buildClassList(styles.outerWrapper, {
          [styles.hasBanner]: showOfficialSiteBanner
        })}>
          <header role="banner" aria-label="Site">
            {showOfficialSiteBanner ? <OfficialSiteBanner fluid={fluid} /> : null}
            <div className={styles.header}>
              <FlexContainer fluid={fluid}>
                <FlexRow
                  justify="between"
                  align="center"
                  style={{ position: "relative" }}
                >
                  <FlexCol sm="12" md="auto" lg="4">

                    <IRSHeaderLogo {...props} logoLinkTitle={title}>
                      <span className={styles['irs-header-logo-wrapper']}>
                        <IRSLogo
                          className={styles['irs-header-logo-icon']}
                          fill="currentColor"
                          preserveAspectRatio="none"/>
                      </span>
                      {title ? (
                        <span className={styles.title} aria-hidden="true">
                          {title}
                        </span>
                      ) : null}
                    </IRSHeaderLogo>
                    {showDraftNotice ? <DraftNotice /> : null}
                  </FlexCol>
                  <FlexCol
                    sm="12"
                    md="auto"
                    lg="8"
                    className={styles.rightCol}
                    data-component="IRSHeader-rightCol"
                  >
                    <div
                      id="irs-header-inner"
                      className={buildClassList(styles.headerInner)}
                      ref={(ref) => {
                        this.headerInner = ref;
                      }}
                      aria-hidden={this.state.mobileVisible}
                    >
                      {renderHeaderNavDesktop}
                    </div>
                  </FlexCol>
                </FlexRow>
              </FlexContainer>
              {!disableMobileMenu ? (
                <div className={styles.menuButton}>
                  <div className={styles.menuButtonInner}>
                    <button
                      id="irs-mobile-menu-btn"
                      aria-controls={mobileEl ? "mobile-menu" : ""}
                      aria-live="assertive"
                      className={buildClassList({
                        [styles.active]: this.state.mobileVisible
                      })}
                      onClick={this.changeMobileVisibility}
                    >
                      {!this.state.mobileVisible ? (
                        <span aria-label="Open Application Menu">
                          <span className={styles.srOnly}>Open</span> Menu
                        </span>
                      ) : (
                        <span>
                          Close <span className={styles.srOnly}>Menu</span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ) : null}
              {mobileEl}
            </div>
          </header>
          {navBar ? (
            <NavBar
              className={buildClassList({
                [styles.navBar]: true
              })}
              aria-hidden={this.state.mobileVisible}
              style={{ height: "auto" }}
            >
              {navBar}
            </NavBar>
          ) : null}
        </div>
      </Fragment>
    );
  }
}
