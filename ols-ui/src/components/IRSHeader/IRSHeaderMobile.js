import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import findTabbable from "tabbable";
import { EmbedStyles, buildClassList } from "../../helpers/utilities";

import styles from "./IRSHeader.scss";

/**
 * Mobile Header component
 * @extends Component - React component class
 */
class IRSHeaderMobile extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    changeMobileVisibility: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };


  /**
   * TAB AND ESCAPE key handlers
   * @param {event} e - description
   *
   */
  handleKeyDown = (e) => {
    if (event.defaultPrevented) {
      return;
    }

    const ESCAPE_KEY = 27;
    const TAB_KEY = 9;

    if (
      e.keyCode === ESCAPE_KEY ||
      e.key === ESCAPE_KEY ||
      e.which === ESCAPE_KEY
    ) {
      e.preventDefault();
      this.props.changeMobileVisibility();
    }

    if (e.keyCode === TAB_KEY || e.key === TAB_KEY || e.which === TAB_KEY) {
      // get list of focusable items
      const focusableItems = findTabbable(this.mobileEl);
      // get currently focused item
      const focusedItem = document.activeElement;
      // get the number of focusable items
      const numberOfFocusableItems = focusableItems.length;
      // get the index of the currently focused item
      const focusedItemIndex = focusableItems.indexOf(focusedItem);

      if (e.shiftKey) {
        // Shift tab - if first item has focus, go to the last focusable item
        if (focusedItemIndex === 0) {
          e.preventDefault();
          focusableItems[numberOfFocusableItems - 1].focus();
        }
      } else {
        // Tab - if last item has focus, go to the first focusable item
        if (focusedItemIndex === numberOfFocusableItems - 1) {
          e.preventDefault();
          focusableItems[0].focus();
        }
      }
    }
  };


  /**
   * componentDidMount
   * 1. Hide the IRSHeader on route change
   * 2. Puts the main content in "background mode"
   */
  componentDidMount() {
    window.addEventListener("load", () => {
      this.props.history.listen(() => {
        this.props.changeMobileVisibility();
      });
    });
    // Set aria-hidden on all the content except modal
    document.getElementById("app").setAttribute("aria-hidden", "true");
    // Forces focus back to modal if main page content somehow gets focus
    setTimeout(() => {
      this.buttonRef.focus();
    }, 200);
    // add modal__open class to body to prevent scroll
    document.body.classList.add("modal__open");

    // Animate opening. SetTimeout to make sure element is in DOM.
    setTimeout(() => {
      this.overlayEl.setAttribute("data-mobile-menu-open", "");
      this.mobileEl.setAttribute("data-mobile-menu-open", "");
    }, 0);
  }


  /**
   * componentWillUnmount
   * 1. Puts main content in "foreground mode"
   * 2. remove event listeners
   */
  componentWillUnmount() {
    // Set aria-hidden on all the content except modal
    document.getElementById("app").setAttribute("aria-hidden", "false");
    // // Forces focus back to modal if main page content somehow gets focus
    document.getElementById("irs-mobile-menu-btn").focus();
    // remove modal__open class to body to prevent scroll
    document.body.classList.remove("modal__open");

    // Animate opening. SetTimeout to make sure element is in DOM.
    setTimeout(() => {
      this.overlayEl.setAttribute("data-mobile-menu-open", "");
      this.mobileEl.setAttribute("data-mobile-menu-open", "");
    }, 0);
  }

  /**
   * render
   * Renders the mobile IRSHeader
   * @returns {node} DOM node
   */
  render() {
    return (
      <Fragment>
        <div
          className={styles.overlay}
          onClick={this.props.changeMobileVisibility}
          data-component="IRSHeader-Mobile-Overlay"
          tabIndex="-1"
          aria-hidden="true"
          ref={(el) => {
            this.overlayEl = el;
          }}
        />
        <div
          className={styles.IRSHeaderMobileContainer}
          data-component="IRSHeader-Mobile-Container"

          ref={(el) => {
            this.mobileEl = el;
          }}
          onKeyDown={this.handleKeyDown}
          tabIndex="-1"
        >
          <button
            className={styles.mobileCloseButton}
            onClick={this.props.changeMobileVisibility}
            aria-label="Close Application Menu"
            id="irs-mobile-menu-close-btn"
            ref={(el) => {
              this.buttonRef = el;
            }}
          >
            Close <span className={styles.srOnly}>Menu</span>
          </button>
          <div
            className={buildClassList(styles.IRSHeaderContent, styles.visible)}
            data-component="IRSHeader-Mobile-Nav"
            ref={(el) => {
              this.mobileMenu = el;
            }}
          >
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(EmbedStyles(styles)(IRSHeaderMobile));
