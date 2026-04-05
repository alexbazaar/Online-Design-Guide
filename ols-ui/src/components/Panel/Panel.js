import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import Heading from "../Heading";
import styles from "./Panel.scss";

const propTypes = {
  title: PropTypes.string,
  padding: PropTypes.oneOf([ "none", "normal", "medium", "large", "extra" ]),
  borderless: PropTypes.bool,
  className: PropTypes.string,
  headinglevel: PropTypes.oneOf([ "2", "3", "4", "5", "6" ]),
  children: PropTypes.node,
  minheight: PropTypes.oneOf([ "medium", "large" ]),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.string
};

const defaultProps = {
  padding: "normal",
  borderless: false,
  headinglevel: "2"
};


/**
 * renderPanel - description
 *
 * @param  {type} props description
 * @returns {type}       description
 */
function renderPanel(props) {
  const {
    title,
    padding,
    headinglevel,
    borderless,
    className,
    children,
    minheight
  } = props;

  const panelStyle = buildClassList(styles.panel, {
    [styles["border-less"]]: borderless,
    [styles[`padding-${padding}`]]: padding
  });

  const titleStyle = buildClassList({
    [styles.paddedPanelTitle]: padding !== "none",
    [styles.title]: padding === "none"
  });

  const heightStyle = buildClassList({
    [styles.panelHeight]: minheight,
    [styles[`min-height-${minheight}`]]: minheight
  });

  return (
    <div
      className={buildClassList([ panelStyle, className, heightStyle ])}
      data-component="Panel"
    >
      {title ? (
        <div className={titleStyle} data-component="PanelHeader">
          <Heading className={styles.heading} headinglevel={headinglevel}>
            {title}
          </Heading>
        </div>
      ) : null}
      <div className={styles["panel-body"]} data-component="PanelBody">
        {children}
      </div>
    </div>
  );
}

/**
 * The Module component is the white box container for module chunks of the app.
 * @returns {node} The rendered DOM node
 * @param {object} props  - the props
 */
export default function Panel(props) {
  return (
    renderPanel(props)
  );
}

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
