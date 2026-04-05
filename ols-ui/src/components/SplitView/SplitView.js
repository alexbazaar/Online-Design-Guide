import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { EmbedStyles } from "../../helpers/utilities";
import Alert from "../Alerts";
import { SplitViewSegment } from ".";

import styles from "./SplitView.scss";

/**
 * Provides a component that allows for a vertical or horizontal space to be
 * split into to two segments that are user-adjustable in size.
 *
 * Most attributes of the split view can be customized including the size of the
 * divider, the starting size of the left segment, whether the divider is
 * visible or not, and whether the orientation of the divider is vertical or
 * horizontal.
 *
 * This component requires that precisely two {@link SplitViewSegment} components
 * are supplied as children. You do not need to supply a divider; that is added
 * automatically.
 *
 * Example (Default configuration):
 * <code>
 *   import SplitView, { SplitViewSegment } from 'ols-ui/split-view';
 *
 *   <SplitView orientation="vertical" showDivider={true} dividerSize={4}>
 *     <SplitViewSegment>
 *       Left side content goes here...
 *     </SplitViewSegment>
 *     <SplitViewSegment>
 *       Right side content goes here...
 *     </SplitViewSegment>
 *   </SplitView>
 * </code>
 */
export default class SplitView extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    orientation: PropTypes.oneOf([ "vertical", "horizontal" ]),
    showDivider: PropTypes.bool,
    dividerSize: PropTypes.number, // In Pixels.
    startingLeftRatio: PropTypes.number
  };

  static defaultProps = {
    orientation: "vertical",
    showDivider: true,
    dividerSize: 4,
    startingLeftRatio: 0.5,
    style: {},
    className: ""
  };

  /**
   * Constructor
   * @param {Object} props See `SplitView.propTypes`.
   */
  constructor(props) {
    super(props);
    this.onDividerMove = this.onDividerMove.bind(this);
    this.onDividerRelease = this.onDividerRelease.bind(this);
    this.state = {
      leftSideSize: props.startingLeftRatio,
      rightSideSize: 1 - props.startingLeftRatio
    };
  }

  /**
   * Component lifecycle method that gets called just before this components is
   * removed from the DOM hierarchy.
   *
   * This method will ensure that any lingering callbacks that we've registered
   * are removed.
   */
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onDividerMove);
    window.removeEventListener("mouseup", this.onDividerRelease);
  }

  /**
   * Click handler for the divider. This method kicks off the drag process by
   * storing information about the geometry of the view at the beginning to use
   * as a baseline for differential calculations over the course of the drag.
   *
   * Since `onMouseMove` will get called potentially hundreds of times as the
   * user drags the divider, it is critically important for performance that
   * {@link onDividerMove} is as efficient as possible. To that end, we do some
   * of the more expensive calculations (such as finding the DOM node and getting
   * its geometry) here at the beginning and then cache it in an instance
   * variable so that {@link onDividerMove} simply has to do an object lookup
   * to get the values it needs to live-update the view as the user drags.
   *
   * We also manually add the `mousemove` and `mouseup` events to window so that
   * we can track when the user drags and eventually drops the divider. These
   * events are attached to `window` directly so that it doesn't matter where
   * the user's mouse goes, it will still register the event.
   *
   * When the user drops the divider and finishes the drag event, we remove the
   * event listeners. See {@link onDividerRelease}.
   *
   * @param {MouseEvent} event The mouse click event on the divider.
   */
  onDividerClick(event) {
    /* eslint-disable react/no-find-dom-node */
    const leftSideNode = ReactDOM.findDOMNode(this.leftSide);
    const rightSideNode = ReactDOM.findDOMNode(this.rightSide);
    /* eslint-enable react/no-find-dom-node */
    this.dragInfo = {
      min: leftSideNode.getBoundingClientRect()[
        this.props.orientation === "vertical" ? "left" : "top"
      ],
      max: rightSideNode.getBoundingClientRect()[
        this.props.orientation === "vertical" ? "right" : "bottom"
      ]
    };
    window.addEventListener("mousemove", this.onDividerMove);
    window.addEventListener("mouseup", this.onDividerRelease);
    event.stopPropagation();
    event.preventDefault();
  }

  /**
   * Event handler for when the user drags the divider. Since this method can be
   * called potentially hundreds of times over the course of the drag, it is
   * vitally important that this method is as efficient as possible. We use the
   * values cached by {@link onDividerClick} to calculate a delta between the
   * starting and current positions to update the values during the drag.
   *
   * Rather than update the values directly, this method calls `setState` so that
   * the component can update using the normal procedure for React components.
   *
   * @param {MouseEvent} event The `mousemove` event.
   */
  onDividerMove(event) {
    const { min, max } = this.dragInfo;
    const current =
      this.props.orientation === "vertical" ? event.clientX : event.clientY;
    const delta = (current - min) / (max - min - this.props.dividerSize);
    const boundedDelta = Math.min(Math.max(0, delta), 1);
    this.setState({
      leftSideSize: boundedDelta,
      rightSideSize: 1 - boundedDelta
    });
  }

  /**
   * Event handler for when the user lifts their mouse button, ending the drag.
   * Since the view live-updates as they drag, there is very little to do in
   * this method except cleanup. First, we remove the two event handlers we
   * added to window so that they won't continue to fire. Second we clear our
   * cache object since we don't need it anymore.
   *
   * TODO: If we want to get really clever, we can figure out a way to store the
   * geometry of this split view in HTML local storage so that when the page
   * reloads, it remembers the user's preference for this particular split view.
   *
   * @param {MouseEvent} event The `mouseup` event.
   */
  onDividerRelease(
    event // eslint-disable-line no-unused-vars
  ) {
    window.removeEventListener("mousemove", this.onDividerMove);
    window.removeEventListener("mouseup", this.onDividerRelease);
    this.dragInfo = null;
  }

  /**
   * Renders the DOM node
   *
   * @returns {node}
   */
  render() {
    // First check to make sure that we have more than one child and that all
    // our children are instances of `SplitViewSegment`.
    const children = React.Children.toArray(this.props.children);
    if (children.length !== 2) {
      return (
        <Alert type="error" title="Improper Usage">
          The SplitView component requires exactly two
          <pre style={{ display: "inline" }}> SplitViewSegment </pre>
          children in order to display properly.
        </Alert>
      );
    }
    if (!children.every((child) => child.type === SplitViewSegment)) {
      return (
        <Alert type="error" title="Improper Usage">
          The SplitView component children should all be instances of
          <pre style={{ display: "inline" }}> SplitViewSegment </pre>
          in order to display properly.
        </Alert>
      );
    }

    const leftSideStyle = {
      ...children[0].props.style,
      flexGrow: this.state.leftSideSize
    };
    const rightSideStyle = {
      ...children[1].props.style,
      flexGrow: this.state.rightSideSize
    };

    const leftSide = React.cloneElement(children[0], {
      splitView: this,
      ref: (e) => {
        this.leftSide = e;
      },
      style: leftSideStyle
    });
    const rightSide = React.cloneElement(children[1], {
      splitView: this,
      ref: (e) => {
        this.rightSide = e;
      },
      style: rightSideStyle
    });

    const dividerStyle = {
      background: this.props.showDivider ? "#ccc" : "transparent",
      cursor:
        this.props.orientation === "vertical" ? "col-resize" : "row-resize",
      flexBasis: `${this.props.dividerSize}px`,
      flexGrow: 0,
      flexShrink: 0
    };
    const divider = (
      <SplitViewDivider
        style={dividerStyle}
        onDrag={(e) => {
          this.onDividerClick(e);
        }}
      />
    );

    const rootStyle = {
      ...this.props.style,
      display: "flex",
      flexDirection: this.props.orientation === "vertical" ? "row" : "column"
    };

    return (
      <div
        id={this.props.id}
        style={rootStyle}
        className={`${styles["split-view"]} ${this.props.className}`}
        data-component="SplitView"
      >
        {leftSide}
        {divider}
        {rightSide}
      </div>
    );
  }
}

// =============================================================================

/**
 * Component for the divider that gets rendered between segments in a SplitView.
 *
 * @param {Object} style An object containing inline styles to apply.
 * @param {Function} onDrag The event handler that should be called when this
 *                          element is clicked.
 * @returns {Node}
 */
function _SplitViewDivider({ style, onDrag }) {
  return (
    <div
      role="presentation"
      style={style}
      onMouseDown={(e) => {
        onDrag(e);
      }}
      data-component="SplitViewDivider"
    />
  );
}

_SplitViewDivider.propTypes = {
  style: PropTypes.object,
  onDrag: PropTypes.func
};

const SplitViewDivider = EmbedStyles(styles)(_SplitViewDivider);
