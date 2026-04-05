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
  className: PropTypes.string,
  headinglevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
  subheadinglevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
  children: PropTypes.node,
  minheight: PropTypes.oneOf([ "medium", "large" ]),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.string,
  imgInset: PropTypes.string
};

const defaultProps = {
  padding: "normal",
  borderless: false,
  headinglevel: "2",
  subheadinglevel: "3"
};

/**
 * renderCardPhoto - description
 *
 * @param  {type} props description
 * @returns {type}       description
 */
function renderCardPhoto(props) {
  const {
    title,
    subtitle,
    padding,
    headinglevel,
    subheadinglevel,
    borderless,
    className,
    children,
    minheight,
    imgInset
  } = props;

  const cardStyle = buildClassList(styles.cardPhoto, {
    [styles["border-less"]]: borderless,
    [styles[`padding-${padding}`]]: padding
  });

  const titleStyle = buildClassList({
    [styles.paddedCardPhotoTitle]: padding !== "none",
    [styles.title]: padding === "none"
  });

  const heightStyle = buildClassList({
    [styles.cardPhotoHeight]: minheight,
    [styles[`min-height-${minheight}`]]: minheight
  });

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgInsetWrapper}>
        <div className={styles.imgInsetContainer}>
          <img src={imgInset} alt="IRS placeholder" aria-hidden="true" style={{ minWidth: "100%" }} />
        </div>
        <div
          className={buildClassList([ cardStyle, className, heightStyle ])}
          data-component="Card"
        >
          {title ? (
            <div className={titleStyle} data-component="CardHeader">
              <Heading className={styles.heading} headinglevel={headinglevel} style={{ fontSize: "20px" }}>
                {title}
              </Heading>
            </div>
          ) : null}
          <div className={styles["content-box-body"]} data-component="CardBody">
            {children}
          </div>
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
export default function CardPhoto(props) {
  return (
    renderCardPhoto(props)
  );
}

CardPhoto.propTypes = propTypes;
CardPhoto.defaultProps = defaultProps;
