import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import Heading from "../Heading";
import styles from "./Card.scss";

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  padding: PropTypes.oneOf([ "none", "normal", "medium", "large", "extra" ]),
  borderless: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  headinglevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
  subheadinglevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
  children: PropTypes.node,
  minheight: PropTypes.oneOf([ "medium", "large" ]),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.string
};

const defaultProps = {
  padding: "normal",
  borderless: false,
  secondary: false,
  headinglevel: "2",
  subheadinglevel: "3"
};

/**
 * renderCard - description
 *
 * @param  {type} props description
 * @returns {type}       description
 */
function renderCard(props) {
  const {
    title,
    subtitle,
    padding,
    headinglevel,
    subheadinglevel,
    borderless,
    secondary,
    className,
    children,
    minheight,
    ...otherProps
  } = props;

  const cardStyle = buildClassList(styles.card, {
    [styles["border-less"]]: borderless,
    [styles["secondary-style"]]: secondary,
    [styles[`padding-${padding}`]]: padding
  });

  const titleStyle = buildClassList({
    [styles.paddedCardTitle]: padding !== "none",
    [styles.title]: padding === "none"
  });

  const heightStyle = buildClassList({
    [styles.cardHeight]: minheight,
    [styles[`min-height-${minheight}`]]: minheight
  });

  return (
    <div className={styles.cardContainer}>
      <div
        className={buildClassList([ cardStyle, className, heightStyle ])}
        data-component="Card"
        {...otherProps}
      >
        {title ? (
          <div className={titleStyle} data-component="CardHeader">
            <Heading className={styles.heading} headinglevel={headinglevel}>
              {title}
            </Heading>
          </div>
        ) : null}
        <div className={styles["content-box-body"]} data-component="CardBody">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * The Module component is the white box container for module chunks of the app.
 * @returns {node} The rendered DOM node
 * @param {object} props  - the props
 */
export default function Card(props) {
  return (
    renderCard(props)
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
