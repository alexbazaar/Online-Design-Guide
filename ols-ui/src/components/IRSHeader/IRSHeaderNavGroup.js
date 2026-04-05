import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from '../../helpers/utilities';
import angleUpIcon from '../../assets/images/angle-up-white.png';
import angleDownIcon from '../../assets/images/angle-down-white.png';
import styles from "./IRSHeader.scss";

const KEY_CODES = {
  escape: 27,
  end: 35,
  tab: 9,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  space: 32,
  enter: 13
};


/**
 *  IRSHeaderNavGroup
 */
export default class IRSHeaderNavGroup extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };


  state = {
    isExpanded: false,
    currentFocusedIndex: 0,
    previousFocusedIndex: 0
  }


  /**
   * TODO: Development of the Header
   * componentDidMount -
   *
   */
  componentDidMount() {
    // remove ability to tab trhough dropdown items
    // this.removeDropdownItemsFocus();
    // Removing the listeners for now until a better solution is identified
    // They interfered with SearchField component
    // document.addEventListener('mousedown', this.handleClickOutside);
    // document.addEventListener('keydown', this.handleKeyDown);
  }


  /**
   * componentWillUnmount - description
   *
   */
  componentWillUnmount() {
    // document.removeEventListener('mousedown', this.handleClickOutside);
    // document.removeEventListener('keydown', this.handleKeyDown);
  }


  /**
   * getAllItems - get all header nav items
   *
   * @returns {type}  description
   */
  getAllItems() {
    return this.navgroupwrapper.querySelectorAll('a[href], li[data-component="IRSHeaderNavItem"]');
  }

  /**
   * removeDropdownItemsFocus - remove focus of dropdown items
   *
   */
  removeDropdownItemsFocus() {
    const focusableEls = this.getAllItems();
    for (let i = 0; i < focusableEls.length; i++) {
      focusableEls[i].tabIndex = -1;
    }
  }


  /**
   * Toggle menu state to close
   * @returns {number}
   */
  updateMenuState() {
    return setTimeout(() => {
      this.setState({
        isExpanded: false
      });
    }, 20);
  }


  /**
   * handleClickOutside - handle click outside of header nav group
   *
   * @param  {type} e description
   */
  handleClickOutside = (e) => {
    e.preventDefault();

    const triggerID = this.props.id + '-button';

    if (e.target.id !== this.navgroupwrapper.id && e.target.id !== triggerID) {
      this.updateMenuState();
    }
  }

  /**
   * Blur event handler
   * @param {SythenticEvent} e - event
   */
  handleBlur = (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.updateMenuState();
      }
    }, 0);
  }


  /**
   * on click handler
   * focus on element with id and toggles expanded state.
   * @param   {SyntheticEvent} e - event
   */
  handleClick = (e) => {
    e.preventDefault();

    const triggerID = this.props.id + '-button';

    setTimeout(() => {
      document.getElementById(triggerID).focus();
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }, 20);

  }

  /**
   * handle on key down
   * ESCAPE - closes if expanded
   * UP-DOWN-HOME-END - set focus to element
   * @param {SyntheticEvent} e - event
   */
  handleKeyDown = (e) => {
    e.stopPropagation();

    switch (e.which) {
      case KEY_CODES.escape:
        if (this.state.isExpanded === true) {
          this.handleClick(e);
        }
        break;
      case KEY_CODES.up:
      case KEY_CODES.down:
      case KEY_CODES.home:
      case KEY_CODES.end:
        this.setFocus(e);
        break;
      default:
        break;
    }

  }

  /**
   * Set focus to element based on key click
   * @param {SyntheticEvent} e - event
   */
  setFocus = (e) => {
    e.preventDefault();
    const currentTarget = document.activeElement;
    const dropdownEls = this.navgroupwrapper.querySelectorAll('a[href]');
    const lastIndex = dropdownEls.length - 1;
    const activeLink = dropdownEls[this.state.currentFocusedIndex];
    const prevLink = dropdownEls[this.state.previousFocusedIndex];
    const firstLink = dropdownEls[0];
    const lastLink = dropdownEls[lastIndex];

    if (e.which === KEY_CODES.up) {
      if (this.state.currentFocusedIndex === 0) {
        firstLink.focus();
      } else {
        if (this.state.currentFocusedIndex <= lastIndex && this.state.currentFocusedIndex > 0) {
          this.setState((state) => ({
            currentFocusedIndex: state.currentFocusedIndex - 1,
            previousFocusedIndex: state.previousFocusedIndex
          }));
        } else {
          firstLink.focus();
        }
      }
      activeLink.focus();
      return;
    }
    if (e.which === KEY_CODES.home) {
      firstLink.focus();
      return;
    }
    if (e.which === KEY_CODES.end) {
      lastLink.focus();
      return;
    }
    if (e.which === KEY_CODES.down) {
      if (this.state.currentFocusedIndex < lastIndex) {
        this.setState((state) => ({
          currentFocusedIndex: state.currentFocusedIndex + 1,
          previousFocusedIndex: state.previousFocusedIndex
        }));
      } else {
        this.setState(() => ({
          currentFocusedIndex: lastIndex
        }));
      }
      activeLink.focus();
      return;
    }
  }

  /**
   * Render nav group component
   * @returns {JSX.Element}
   */
  render() {
    const { label, id, children, ...props } = this.props;
    const subMenuClasses = buildClassList(styles.navBody, styles.subMenu, {
      [styles.openSubMenu]: this.state.isExpanded,
      [styles.closeSubMenu]: !this.state.isExpanded
    });
    return (
      <li data-component="IRSHeaderNavGroup" role="group" className={styles.navBarGroup} {...props}>
        <button
          id={id + '-button'}
          {...props}
          className={styles.trigger}
          aria-expanded={this.state.isExpanded === true}
          aria-controls={id}
          aria-haspopup="true"
          type="button"
          onClick={this.handleClick}
        >
          {label}
          <span className={styles.iconWrapper} aria-hidden="true">
            {this.state.isExpanded
              ? <img src={angleUpIcon} alt="dropdown up icon" aria-hidden="true" className={styles.dropdownIcons} />
              : <img src={angleDownIcon} alt="dropdown down icon" aria-hidden="true" className={styles.dropdownIcons} />
            }
          </span>
        </button>

        <ul id={id}
          className={subMenuClasses}
          ref={(ref) => { this.navgroupwrapper = ref; }}
          data-component="IRSHeaderNavSubGroup"
          role="menu"
          onBlur={this.handleBlur}>
          {children}
        </ul>
      </li>
    );
  }
}
