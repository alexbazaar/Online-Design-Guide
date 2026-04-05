import React, { Component } from "react";
import PropTypes from "prop-types";
import { has } from "lodash";

/**
 * This component wraps around the app's different routed views (likely in your
 * App container) and performs two main tasks:
 *
 * 1) Before a route change, the clicked element id and current scroll
 *    position is saved into local session storage
 * 2) After a route change, it looks to see if there is a saved scroll
 *    position for the current route, and if so, it restores that scroll position.
 *    Focus is set to one of three options, based on availability, in this
 *    specific order:
 *      - navigational element with the id stored in local session storage,
 *      - the first h1 tag on the page
 *      - the div created by this component that wraps around the view
 *
 * Note: In the case of the h1 or wrapping div, the outline style is set to none
 * so the "unnatural" focus is not perceived by sighted users.
 *
 * Note: To have the focus set on a specific link or button, it MUST have an id attribute.
 *
 * Note: The location prop comes from React Router, and is automatically provided
 * because this component is exported using the withRouter higher order component
 * in the index.js
 */
export default class FocusManager extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
    style: PropTypes.object
  };

  /**
   * Check if if there's an navigational element ID in local storage to set focus on
   * If not, check if there's an h1 to focus on
   * If not, set focus on the wrapping div
   */
  setFocus() {
    const validFocusableItems = ["A", "BUTTON"];
    const { location } = this.props;
    const firstHeading = document.getElementsByTagName("h1")[0];
    let focusManagedPaths = {};

    if (window.sessionStorage.focusManagedPaths) {
      focusManagedPaths = JSON.parse(window.sessionStorage.focusManagedPaths);
    }

    const storedId = focusManagedPaths[location.pathname];
    let hasFocusableId = false;

    // Make sure stored element is in the DOM, otherwise the app will crash
    try {
      const tag = document.getElementById(storedId).tagName;
      hasFocusableId = storedId && validFocusableItems.includes(tag);
    } catch (e) {
      hasFocusableId = false;
    }

    if (hasFocusableId) {
      document.getElementById(storedId).focus();
    } else if (firstHeading) {
      firstHeading.setAttribute("tabindex", -1);
      firstHeading.style.outline = "none";
      firstHeading.focus();
    } else {
      this.wrapperDiv.focus();
    }

    // Deleted the stored id regardless if it was focusable or not
    if (storedId) {
      delete focusManagedPaths[location.pathname];
      window.sessionStorage.focusManagedPaths = JSON.stringify(
        focusManagedPaths
      );
    }
  }

  /**
   * Check if there's a saved scroll position and set it
   * If not, scroll to top of page
   */
  setScroll() {
    const { location } = this.props;
    let scrollManagedPaths = {};

    if (window.sessionStorage.scrollManagedPaths) {
      scrollManagedPaths = JSON.parse(window.sessionStorage.scrollManagedPaths);
    }

    if (scrollManagedPaths[location.pathname]) {
      window.scroll(0, scrollManagedPaths[location.pathname]);
      delete scrollManagedPaths[location.pathname];
    } else {
      window.scroll(0, 0);
    }
  }

  /**
   * Get the scroll position and add it to session storage
   */
  recordScrollPosition() {
    let scrollManagedPaths = {};
    if (window.sessionStorage.scrollManagedPaths) {
      scrollManagedPaths = JSON.parse(window.sessionStorage.scrollManagedPaths);
    }
    const lastScrollPosition =
      window.scrollY ||
      window.scrollTop ||
      document.getElementsByTagName("html")[0].scrollTop ||
      0;

    scrollManagedPaths[this.props.location.pathname] = lastScrollPosition;
    window.sessionStorage.scrollManagedPaths = JSON.stringify(
      scrollManagedPaths
    );
  }

  /**
   * Get the id of the item being clicked and add it to session storage.
   * @param  {event} e - click event
   */
  recordFocusIdAndScroll = e => {
    const id = e.target.id;
    let focusManagedPaths = {};

    if (window.sessionStorage.focusManagedPaths) {
      focusManagedPaths = JSON.parse(window.sessionStorage.focusManagedPaths);
      // Setting the value to null in case there's an old value and the
      // current event target has no id to save
      focusManagedPaths[this.props.location.pathname] = null;
    }

    if (id) {
      focusManagedPaths[this.props.location.pathname] = id;
      window.sessionStorage.focusManagedPaths = JSON.stringify(
        focusManagedPaths
      );
    }

    this.recordScrollPosition();
  };

  /**
   * Add click event handler to document to trigger saving focused item's id
   * and scroll position
   */
  componentDidMount() {
    document.addEventListener("mousedown", this.recordFocusIdAndScroll);
    document.addEventListener("keydown", this.recordFocusIdAndScroll);
  }

  /**
   * When the component updates (which is basically when the route changes),
   * check if it's a new location and run the setFocus function
   *
   * @param  {[type]} prevProps [description]
   */
  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location.hash.length || location === prevProps.location) {
      return;
    }

    this.setFocus();
    this.setScroll();
  }

  /**
   * Renders a wrapper that can receive focus and all the children
   * @returns {node} - Rendered DOM node
   */
  render() {
    const { children, style } = this.props;
    const baseStyle = { outline: "none" };

    return (
      <div
        ref={el => {
          this.wrapperDiv = el;
        }}
        tabIndex="-1"
        style={{ ...baseStyle, ...style }}
      >
        {children}
      </div>
    );
  }
}
