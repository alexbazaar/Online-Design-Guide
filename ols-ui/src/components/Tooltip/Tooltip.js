// Resources
// ---------------
// http://pauljadam.com/demos/tooltip.html
// https://inclusive-components.design/tooltips-toggletips/
// http://w3c.github.io/aria-practices/#tooltip

import React from "react";
import PropTypes from "prop-types";
import Transition from "react-transition-group/Transition";

import Portal from "../Portal";
import styles from "./Tooltip.scss";

const DEFAULT_STYLE = {
  transition: `all 100ms ease-in-out`,
  opacity: 0
};
const POSITION_STYLE = {
  bottom: {
    transform: "translate(0, 6px)"
  },
  top: {
    transform: "translate(0, -6px)"
  },
  right: {
    transform: "translate(6px, 0)"
  }
};
const TRANSITION_STYLE = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1,
    transform: "translate(0, 0)"
  }
};
const TOOLTIP_ID = "tooltip-component";
const TOOLTIP_MARGIN = 8;
const TIMEOUT = 300;

/**
 * Tooltip provides a non-focusable description for interactive elements
 */
export default class Tooltip extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    position: PropTypes.oneOf([ "bottom", "right", "top" ]),
    tag: PropTypes.string
  };

  static defaultProps = {
    position: "bottom",
    tag: "span"
  };

  state = {
    isVisible: false,
    measuredTooltipRect: null
  };

  /**
   * Add keydown event listener for escape key
   */
  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }

  /**
   *  Remove keyup event listener
   */
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  /**
   * Escape key hides the tooltip
   * @param {syntheticEvent} event - keyboard event
   */
  handleKeyUp = (event) => {
    const key = event.key || event.keyCode;
    const { isVisible } = this.state;

    switch (key) {
      case "Escape" || "Esc" || 27:
        if (isVisible) {
          event.preventDefault();
          this.makeInvisible();
        }
        break;
      default:
        break;
    }
  };

  /**
   * Render the tooltip itself.
   * It first renders a hidden tooltip to get the measurments, then re-renders
   * calculating the correct positioning with those measurements.
   *
   * @returns {node} - DOM node
   */
  renderTooltip = () => {
    const { content, position } = this.props;
    const { isVisible, measuredTooltipRect } = this.state;

    // bail if it's hidden
    if (!isVisible) return null;

    // if no rect data, then draw hidden tooltip to measure
    if (!measuredTooltipRect) {
      return (
        <Portal>
          <span
            className={styles.tooltip}
            style={{ visibility: "none" }}
            ref={(ref) => {
              this.measurableTooltip = ref;
            }}
          >
            {content}
          </span>
        </Portal>
      );
    }

    const bodyRect = document.body.getBoundingClientRect();
    const triggerRect = this.wrapper.childNodes[0].getBoundingClientRect();
    const widthDifference = (triggerRect.width - measuredTooltipRect.width) / 2;
    const heightDifference = (triggerRect.height - measuredTooltipRect.height) / 2;

    let top;
    let left;

    switch (position) {
      case "right":
        top =
          triggerRect.bottom -
          bodyRect.top -
          triggerRect.height +
          heightDifference;
        left = triggerRect.right + (TOOLTIP_MARGIN * 2);
        break;
      case "top":
        top = triggerRect.top - bodyRect.top - measuredTooltipRect.height - TOOLTIP_MARGIN;
        left = triggerRect.left - bodyRect.left + widthDifference;
        break;
      default:
        // default is "bottom"
        top = triggerRect.bottom - bodyRect.top + TOOLTIP_MARGIN;
        left = triggerRect.left - bodyRect.left + widthDifference;
        break;
    }

    const style = { top, left, width: measuredTooltipRect.width };

    return (
      <Portal>
        <Transition in={true} appear={true} timeout={TIMEOUT}>
          {(status) => (
            <span
              className={styles.tooltip}
              data-component="Tooltip"
              style={{
                ...style,
                ...DEFAULT_STYLE,
                ...POSITION_STYLE[position],
                ...TRANSITION_STYLE[status]
              }}
              id={TOOLTIP_ID}
            >
              {content}
            </span>
          )}
        </Transition>
      </Portal>
    );
  };

  /**
   * Check if there's a measurableTooltip, and if so, put it's rect in state
   */
  componentDidUpdate() {
    if (this.measurableTooltip) {
      this.setState({
        measuredTooltipRect: this.measurableTooltip.getBoundingClientRect()
      });
    }
  }

  makeVisible = () => {
    this.setState({
      isVisible: true
    });
  };

  makeInvisible = () => {
    this.setState({
      isVisible: false,
      measuredTooltipRect: null
    });
  };

  /**
   * [render description]
   * @returns {[type]} [description]
   */
  render() {
    const { children, tag: Tag, ...otherProps } = this.props;

    const clonedChildren = React.Children.map(children, (child) =>
      React.cloneElement(child, {
        "aria-describedby": TOOLTIP_ID,
        onMouseOver: this.makeVisible,
        onMouseOut: this.makeInvisible,
        onFocus: this.makeVisible,
        onBlur: this.makeInvisible
      })
    );

    return (
      <Tag
        data-component="TooltipWrapper"
        ref={(ref) => {
          this.wrapper = ref;
        }}
        {...otherProps}
      >
        {clonedChildren}
        {this.renderTooltip()}
      </Tag>
    );
  }
}
