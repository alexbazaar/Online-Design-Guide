import React, { Component } from "react";
import PropTypes from "prop-types";
import { FlexContainer, FlexRow, FlexCol } from "../FlexGrid";
import { buildClassList } from "../../helpers/utilities";
import styles from "./NavBar.scss";

/**
 * *****************************************************************************
 * Provides an outlined navigation bar.
 * Children of the Navigation Bar should be a NavigationBarItem
 * *****************************************************************************
 */
export default class NavBar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sticky: PropTypes.bool,
    fluid: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    sticky: false,
    fluid: false
  };

  /**
   * ComponentDidMount
   * If sticky, add event listener for scroll and change the position type
   */
  componentDidMount() {
    if (this.props.sticky) {
      const initialNavTop = this.nav.getBoundingClientRect().top + window.scrollY;
      this.wrapper.style.height = `${this.nav.offsetHeight}px`;

      window.addEventListener("scroll", () => {
        const top =
          document.documentElement.scrollTop || document.body.scrollTop;
        const bottom =
          document.documentElement.scrollHeight || document.body.scrollHeight;

        const stickyInitial = parseInt(initialNavTop, 10);

        if (top >= stickyInitial && top <= bottom) {
          this.nav.style.position = "fixed";
        } else {
          this.nav.style.position = "static";
        }
      });
    }
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { children, className, fluid, ...rest } = this.props;
    const otherProps = { ...rest };
    delete otherProps.sticky;
    return (
      <div
        ref={(ref) => (this.wrapper = ref)}
        className={buildClassList(styles.outerWrapper, className)}
        {...otherProps}
        role="none"
        data-component="NavBar"
      >
        <nav
          className={styles.nav}
          ref={(ref) => (this.nav = ref)}
          aria-label="Main"
        >
          <FlexContainer fluid={fluid}>
            <FlexRow>
              <FlexCol>
                <ul className={styles.navList} aria-label=" ">{children}</ul>
              </FlexCol>
            </FlexRow>
          </FlexContainer>
        </nav>
      </div>
    );
  }
}
