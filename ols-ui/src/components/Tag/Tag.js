import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import Link from "../Links/index";

import styles from "./Tag.scss";

/**
 * The emphasisTag component shows a button with a blue background.
 * @returns {node} The rendered DOM node
 * @param {object} props - the props.
 * @param {bool} hover if true, makes the appearance of being hovered (for docs)
 * @param {bool} active if true, makes the appearance of being active (for docs)
 * @param {bool} focus if true, makes the appearance of being focused (for docs)
 * @param {node} children required. Expected to be the text to display inside the button
 */
export default function Tag(props) {
  const {
    srOnlyText,
    unstyled,
    emphasis,
    classification,
    hover,
    active,
    focus,
    tagGen,
    children,
    className,
    to,
    ...otherProps
  } = props;

  const tagClassName = buildClassList({
    [styles.tag]: !unstyled,
    [styles.emphasisTag]: emphasis && !unstyled,
    [styles.classificationTag]: classification && !unstyled,
    [styles.hover]: hover,
    [styles.active]: active,
    [styles.focus]: focus,
    [styles.tagGen]: tagGen
  });

  // Classification
  if (to) {
    return (
      <Link
        to={to}
        role="button"
        className={buildClassList([ tagClassName, className, tagGen ? styles['tagGen'] : '' ])}
        data-component="Tag"
        {...otherProps}
      >

        <span aria-hidden="true">{children}</span><span className={styles['sr-only']}>{srOnlyText}</span>
      </Link>
    );
  }

  // Emphasis
  return (
    <div
      className={buildClassList([ tagClassName, className ? styles['leading-icon'] : '' ])}
      data-component="Tag"
      {...otherProps}
    >
      <span aria-hidden="true">{children}</span><span className={styles['sr-only']}>{srOnlyText}</span>
    </div>
  );
}


Tag.propTypes = {
  srOnlyText: PropTypes.string,
  children: PropTypes.node.isRequired,
  emphasis: PropTypes.bool,
  classification: PropTypes.bool,
  unstyled: PropTypes.bool,
  hover: PropTypes.bool,
  active: PropTypes.bool,
  focus: PropTypes.bool,
  tagGen: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
};

Tag.defaultProps = {
  srOnlyText: null,
  unstyled: false,
  emphasis: false,
  classification: false,
  hover: false,
  active: false,
  focus: false,
  tagGen: false,
  className: null,
  to: null,
  href: null
};
