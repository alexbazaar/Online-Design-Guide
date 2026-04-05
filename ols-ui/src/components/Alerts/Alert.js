import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { FlexRow } from "../FlexGrid";
import Heading from "../Heading";
import {
  InfoCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  CloseIcon
} from "../Icons";

import styles from "./Alert.scss";

/**
 * Provides one of four standard alert types.
 * An alert consists of a box with a light background color,
 * an icon, a headline, and a short explaination.
 *
 * The alert type determines the background color and icon displayed
 *
 * Alert types are 'success', 'warning', 'error', 'info'
 * The type defaults to 'info' if no type is sent via props
 *
 *
 * @returns {node} the rendered DOM node
 * @param {object} theProps - the props
 * @param {string} type  Sets the alert type
 * @param {string} title Text for the headline
 * @param {node} body  Text for the description
 */
export default class Alert extends Component {
  static propTypes = {
    group: PropTypes.oneOf([ "section", "system" ]),
    type: PropTypes.oneOf([ "info", "success", "warning", "error" ]),
    title: (props, propName, componentName) => {
      if (!props['title'] && props['group'] === "section") {
        if ((typeof props['title']) !== "string") {
          return new Error(
            'Invalid prop `' + propName + '` of type `' + (typeof props['title']) + '` supplied to `' + componentName + '`, expected `string`.'

          );
        } else {
          return new Error(
            '`' + propName + '` is marked as required in `' + componentName + '`, but its value is ' + '`' + props['title'] + '.`'

          );
        }
      }
    },
    headingLevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
    closeAlert: PropTypes.func,
    isVisible: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.node.isRequired
  };

  static defaultProps = {
    group: "section",
    type: "info",
    headingLevel: "3",
    node: null
  };

  /**
   * When the trigger is clicked, change the open/close state
   * @param  {event} e - synthentic event
   */
  clickHandler = (e) => {
    e.preventDefault();
    this.props.closeAlert();
  };

  /**
   * Returns system or section alert based on type
   * @returns {JSX.Element}
   */
  render() {
    const { id, type, group, title, headingLevel, children, className, closeAlert, ...props } = this.props;
    const iconType = `icon-${type}`;
    const iconGroup = `icon-${group}`;
    const iconStyle = buildClassList([ styles.icon, styles[iconType], styles[iconGroup], className ]);

    const renderIcon = (type) => {
      switch (type) {
        case "info":
          return (
            <InfoCircleIcon
              unstyled
              className={iconStyle}
              data-component="AlertIcon"
              focusable="false"
            />
          );
        case "warning":
          return (
            <ExclamationTriangleIcon
              unstyled
              crop
              className={iconStyle}
              data-component="AlertIcon"
              focusable="false"
            />
          );
        case "error":
          return (
            <ExclamationCircleIcon
              unstyled
              className={iconStyle}
              data-component="AlertIcon"
              focusable="false"
            />
          );
        case "success":
          return (
            <CheckCircleIcon
              unstyled
              className={iconStyle}
              data-component="AlertIcon"
              focusable="false"
            />
          );
      }
    };

    const alertType = `alert-${type}`;
    const alertGroup = `alert-${group}`;
    const style = buildClassList([ styles.alert, styles[alertType], styles[alertGroup], className ]);
    const textStyle = buildClassList([ styles.text, styles[alertType], styles[alertGroup], className ]);
    const alertWrapper = buildClassList([ styles.alertWrapper, className ]);
    const alertContainer = buildClassList([ styles.alertContainer, className ]);

    // Close button for alert removed from UI Kit
    // const closeIcon = (
    //   <button
    //     className={styles.closeButton}
    //     onClick={this.clickHandler}
    //     data-component="alertCloseButton"
    //     aria-label="Dismiss the Alert"
    //     aria-labelledby={`${id}-alert`}
    //     ref={(i) => {
    //       this.closeButtonEl = i;
    //     }}
    //   >
    //     < CloseIcon
    //       focusable="false"
    //       unstyled
    //     />
    //   </button>
    // );

    return (
      <div
        className={style}
        id={`${id}-alert`}
        data-component="Alert"
        data-alert-type={`${type}`}
        data-alert-group={`${group}`}
        {...props}
      >
        { group === "section" ? (
          <React.Fragment>
            {renderIcon(type)}
            <Heading
              headinglevel={headingLevel}
              className={styles.heading}
              data-component={"AlertHeading"}
              id={`${id}-alert-heading`}
            >
              {title}

            </Heading>
          </React.Fragment>
        ) : null }

        { group === "system" ? (

          <React.Fragment>
            <div className={alertWrapper}>
              <div className={alertContainer}>
                {renderIcon(type)}

                <Heading
                  headinglevel={headingLevel}
                  className={textStyle}
                  data-component={"AlertText"}
                >
                  {children}
                </Heading>
              </div>
            </div>
          </React.Fragment>

        ) : (

          <div className={textStyle} data-component={"AlertText"}>
            {children}
          </div>

        )}
      </div>
    );

  }
}
