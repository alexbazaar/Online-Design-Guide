import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import Link from "../Links";
import { CheckIcon } from "../Icons";
import styles from "./StepIndicator.scss";


const propTypes = {
  children: PropTypes.node,
  status: PropTypes.oneOf([ "completed", "active", "default", "disabled" ]),
  title: PropTypes.string,
  stepNum: PropTypes.string.isRequired,
  stepRoute: PropTypes.string, // Clickable (url) vs static; May rename?
  maxsteps: PropTypes.number
};

/**
 * The timeline item with circle and vertical line
 * @returns {node} rendered DOM node
 * @param {object} props - the props
 *
 * children: text contents of the item
 * status: the status color of the circle
 */
export default function StepIndicatorItem(props) {
  const { children, status, title, stepNum, stepRoute, maxsteps, ...otherProps } = props;
  const isCompleted = status === "completed";
  const isActive = status === "active";
  const isDisabled = status === "disabled";

  const knotClass = buildClassList({
    [styles.knot]: true
  });

  const staticActiveKnotClass = buildClassList({
    [styles.knot]: true,
    [styles['static-active-knot']]: true
  })

  const stepClass = buildClassList({
    [styles['step-label']]: true,
    [styles['sr-only']]: isCompleted
  });

  const completedStepClass = buildClassList({
    [styles['completed-step-label']]: true
  });

  const staticCompletedStepClass = buildClassList({
    [styles['static-completed-step-label']]: true
  });

  const contentClass = buildClassList({
    [styles.content]: true
  });

  const itemClass = buildClassList({
    [styles.item]: true,
    [styles.hasLabel]: children,
    [styles[status]]: status,
  });

  const itemLinkClass = buildClassList({
    [styles.functionalItem]: true,
    [styles.hasLabel]: children,
    [styles[status]]: status,
    [styles['item-link']]: stepRoute
  });

  const staticItemClass = buildClassList({
    [styles.functionalItem]: true,
    [styles.hasLabel]: children,
    [styles[status]]: status
  });

  // Checks to see if you've added a url, or stepRoute, to make a Functional Step Indicator. If not, you will get a static Step Indicator.
  if (stepRoute) {
    return (
      isActive ? (
        <li
          className={itemLinkClass}
          data-component="StepIndicatorItem"
          {...otherProps}
        >
          <div className={styles.knotLine}>
            <div className={styles.line} data-component="StepIndicatorItemLine" aria-hidden="true"/>
            <Link to={stepRoute} aria-label={`${title} Step ${stepNum} of ${maxsteps} current`} data-component="activeLink" tabIndex="0" >
            <div
              className={staticActiveKnotClass}
              data-component="StepIndicatorItemKnot"
            >
              <div className={stepClass} aria-hidden="true">
                <span className="sr-only" aria-hidden="true"> </span>
                <span aria-hidden="true">
                  {stepNum}
                </span>
              </div>
            </div>
            </Link>

            {children ? (
              <div className={contentClass} id="activeLabel" aria-hidden="true">
                {children}
              </div>)
              : (null)
            }
          </div>
        </li>
      ) :
        isCompleted ? (
          <li
            className={itemLinkClass}
            data-component="StepIndicatorItem"
            {...otherProps}
          >
            <div className={styles.knotLine}>
              <div className={styles.line} data-component="StepIndicatorItemLine" />
              <Link to={stepRoute} aria-label={`${title} Step ${stepNum} of ${maxsteps} completed`} data-component="Link" tabIndex="0">
              
                <div
                  className={knotClass}
                  data-component="StepIndicatorItemKnot"
                >
                  <div className={completedStepClass} aria-hidden="true">
                    <CheckIcon
                      focusable="false"
                      unstyled
                    />
                  </div>
                </div>
                </Link>

                {children ? (
                  <div className={contentClass} aria-hidden="true">
                    {children}
                  </div>)
                  : (null)
                }
            </div>
          </li>
        ) :
        // The default (disabled/future) and completed statuses are both clickable in the Functional Step Indicator.
          (
            <li
              className={itemLinkClass}
              data-component="StepIndicatorItem"
              {...otherProps}
            >
              <div className={styles.knotLine}>
                <div className={styles.line} data-component="StepIndicatorItemLine" />
                <Link to={stepRoute} aria-label={`${title} Step ${stepNum} of ${maxsteps} not completed`} data-component="Link" tabIndex="0">
                  <div
                    className={knotClass}
                    data-component="StepIndicatorItemKnot"
                  >
                    <div className={stepClass} aria-hidden="true">
                      <span aria-hidden="true">
                        {stepNum}
                      </span>
                    </div>
                  </div>
                  </Link>

                  {children ? (
                    <div className={contentClass} aria-hidden="true">
                      {children}
                    </div>)
                    : (null)
                  }
              </div>
            </li>
          )
    );
    // The following are the states of the NON-FUNCTIONAL Step Indicator: Completed, Active/Current, and Normal Steps
  } else {
    return (
      isCompleted ? (
        <li
          className={itemClass}
          data-component="StepIndicatorItem"
          {...otherProps}
        >
          <div className={styles.knotLine}>
            <div className={styles.line} data-component="StepIndicatorItemLine" />

            <div
              className={knotClass}
              data-component="StepIndicatorItemKnot"
            >
              <div className={staticCompletedStepClass}>
                <CheckIcon
                  focusable="false"
                  unstyled
                />
                <span className="sr-only"> {`${title} Step ${stepNum} of ${maxsteps} completed`}</span>
              </div>
            </div>

            {children ? (
              <div className={contentClass} aria-hidden="true">
                {children}
              </div>)
              : (null)
            }
          </div>
        </li>
      ) :
        isActive ? (
          <li
            className={itemClass}
            data-component="StepIndicatorItem"
            {...otherProps}
          >
            <div className={styles.knotLine}>
              <div className={styles.line} data-component="StepIndicatorItemLine" />

              <div
                className={knotClass}
                data-component="StepIndicatorItemKnot"
              >
                <div className={stepClass}>
                  <span className="sr-only"> {`${title} Step ${stepNum} of ${maxsteps} current`}</span>
                  <span aria-hidden="true">{stepNum}</span>
                </div>
              </div>
              {children ? (
                <div className={contentClass} aria-hidden="true">
                  {children}
                </div>)
                : (null)
              }
            </div>
          </li>
        ) :
          (
            <li
              className={itemClass}
              data-component="StepIndicatorItem"
              {...otherProps}
            >
              <div className={styles.knotLine}>
                <div className={styles.line} data-component="StepIndicatorItemLine" />

                <div
                  className={knotClass}
                  data-component="StepIndicatorItemKnot"
                >
                  <div className={stepClass}>
                    <span className="sr-only"> {`${title} Step ${stepNum} of ${maxsteps} disabled`}</span>
                    <span aria-hidden="true">{stepNum}</span>
                  </div>
                </div>

                {children ? (
                  <div className={contentClass} aria-hidden="true">
                    {children}
                  </div>)
                  : (null)
                }
              </div>
            </li>
          )
    );
  }
}

StepIndicatorItem.propTypes = propTypes;
