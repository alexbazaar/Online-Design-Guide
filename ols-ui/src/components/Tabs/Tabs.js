import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Tabs.scss";

/**
 * The outer-most component for all the tab components.
 *
 * This component requires two children: TabList and TabPanels.
 *
 * Props:
 *   defaultActiveIndex: if provided, makes the tab panel at the specified index
 *     active on render instead of the first item
 *   activeIndex: This component can be either controlled or uncontrolled. Providing
 *     this prop makes this a controlled component. Selecting a tab will have no
 *     effect unless an onChange function is provided.
 *     as a controlled component. By defualt this value is 0.
 *   onChange: Provide a function to this prop to handle the change for a
 *     controlled component.
 *   id: {required} The id attribute for the tabs
 *   className: optional className for custom styling
 *   shouldFocus: used internally to set focus when using the arrow keys to select
 *     a tab. Do not manually specificy a value
 *
 * 508 reference: https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 */
export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    shouldFocus: PropTypes.bool
  };

  static defaultProps = {
    shouldFocus: false
  };

  state = {
    activeIndex: this.props.defaultActiveIndex || 0,
    shouldFocus: this.props.shouldFocus,
    isMobile: false
  };

  /**
   * constructor
   * @param {Object} props any
   */
  constructor(props) {
    super(props);
    this.mediaQuery;
  }

  /**
   * toggle mobile mode
   * @param {Event} evt matchMedia event
   */
  handleMobileChange(evt) {
    if (evt.matches) {
      this.setState(Object.assign(this.state, { isMobile: true }));
    } else {
      this.setState(Object.assign(this.state, { isMobile: false }));
    }
  }

  /**
   * setup media query
   */
  componentDidMount() {
    this.mediaQuery = window.matchMedia("(max-width: calc(720px + 32px))");
    try {
      this.mediaQuery.addEventListener(
        "change",
        this.handleMobileChange.bind(this)
      );
    } catch (e) {
      this.mediaQuery.addListener(this.handleMobileChange.bind(this));
    }

    // set correct mode on initial render.
    if (this.mediaQuery.matches) {
      this.setState(Object.assign(this.state, { isMobile: true }));
    }
  }

  /**
   * Check to see if this item should become focused
   */
  componentDidUpdate() {
    const { activeIndex, shouldFocus } = this.props;

    if (activeIndex && shouldFocus) {
      setTimeout(() => {
        this.buttonRef.focus();
      }, 500);
    }
  }

  /**
   * clean up media query
   */
  componentWillUnmount() {
    try {
      this.mediaQuery.removeEventListener("change", this.handleMobileChange);
    } catch (e) {
      // ie 11
      this.mediaQuery.removeListener(this.handleMobileChange);
    }
  }

  /**
   * isControlled
   * @returns {Boolean} if should be controlled or not based on if activeIndex is provided
   */
  isControlled() {
    return this.props.activeIndex != null;
  }

  /**
   * Makes the tab at the provided index active.
   * This is passed down and called in TabList.
   *
   * shouldFocus is set regardless if controlled or uncontrolled
   *
   * @param  {number} activeIndex - the index
   * @param  {bool} shouldFocus - if the tab should gain focus
   */
  selectTabIndex = (activeIndex, shouldFocus) => {
    if (this.isControlled()) {
      this.props.onChange(activeIndex);
      this.setState({ shouldFocus });
    } else {
      this.setState({
        activeIndex,
        shouldFocus
      });
    }
  };

  /**
   * Duplicates children to adds props.
   * Renders a container and the children with their new props.
   *
   * @returns {node} Rendered DOM node
   */
  render() {
    const { children, activeIndex, id, className } = this.props;

    const newChildren = React.Children.map(children, child =>
      React.cloneElement(child, {
        activeIndex: this.isControlled() ? activeIndex : this.state.activeIndex,
        onSelectTab: this.selectTabIndex,
        tabsId: id,
        shouldFocus: this.state.shouldFocus
      })
    );

    // contruct a compound style list if a className is provided
    const style = className
      ? buildClassList([styles.tabs, className])
      : styles.tabs;

    return (
      <div data-component="Tabs" id={id} className={style}>
        {newChildren}
        <span
          id={`${id}-tab-description`}
          aria-hidden={true}
          aria-label={
            !this.state.isMobile
              ? "Use the arrow keys to navigate the Tabs and the Tab key to move to the content."
              : ""
          }
        />
      </div>
    );
  }
}
