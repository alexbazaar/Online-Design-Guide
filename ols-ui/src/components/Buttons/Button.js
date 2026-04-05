import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import Link from "../Links/index";
import {
  AngleRightButtonIcon,
  PrintIcon,
  EnvelopeIcon,
  CommentsIcon,
  DownloadIcon
} from "../Icons";
import styles from "./Button.scss";

/**
 * The FilledButton component shows a button with a blue background.
 * @returns {node} The rendered DOM node
 * @param {object} props - the props.
 * @param {string} type required. Defaults to 'button'. HTML button type. Must be 'button', 'submit' or 'reset'
 * @param {bool} outlined if true, makes a button a filled button
 * @param {bool} padded if true, makes a wider button with extrea left and right padding
 * @param {bool} block if true, makes button with width of the container
 * @param {bool} wide if true, makes button full width on small and xsmall breakpoints
 * @param {bool} disabled if true, makes button disabled
 * @param {bool} hover if true, makes the appearance of being hovered (for docs)
 * @param {bool} active if true, makes the appearance of being active (for docs)
 * @param {bool} focus if true, makes the appearance of being focused (for docs)
 * @param {func} handleClick The function to be run when the button is clicked
 * @param {node} children required. Expected to be the text to display inside the button
 */
export default function Button(props) {
  const {
    unstyled,
    iconOnly,
    outlined,
    padded,
    block,
    wide,
    hover,
    active,
    focus,
    icon,
    customIcon,
    children,
    className,
    to,
    href,
    type,
    disabled,
    leadingIcon,
    ...otherProps
  } = props;
  const iconClassName = icon ? icon : 'externalLink';

  const buttonClassName = buildClassList({
    [styles.textButton]: unstyled,
    [styles.filledButton]: !outlined && !unstyled,
    [styles.outlinedButton]: outlined && !unstyled,
    [styles.iconOnly]: iconOnly,
    [styles.block]: block,
    [styles.wide]: wide,
    [styles.padded]: padded,
    [styles.hover]: hover,
    [styles.active]: active,
    [styles.focus]: focus,
    [styles[iconClassName]]: href || icon
  });

  let buttonIcon = null;

  switch (icon) {
    case "externalLink":
      buttonIcon = <AngleRightButtonIcon unstyled focusable="false" />;
      break;
    case "mail":
      buttonIcon = <EnvelopeIcon focusable="false"/>;
      break;
    case "chat":
      buttonIcon = <CommentsIcon focusable="false" />;
      break;
    case "print":
      buttonIcon = <PrintIcon focusable="false"/>;
      break;
    case "custom":
      buttonIcon = customIcon || null;
      break;
    case "download":
      buttonIcon = <DownloadIcon focusable="false"/>;
      break;
    default:
      buttonIcon = null;
  }

  if (to && !disabled) {
    return (
      <Link
        to={to}
        role="button"
        className={buildClassList([ buttonClassName, className, leadingIcon ? styles['leading-icon'] : '' ])}
        data-component="Button"
        {...otherProps}
      >
        {leadingIcon && buttonIcon}
        <span>{children}</span>
        {!leadingIcon && buttonIcon}
      </Link>
    );
  }

  if (href && !disabled) {
    if (!buttonIcon) {
      buttonIcon = <AngleRightButtonIcon unstyled focusable="false" />;
    }
    return (
      <Link
        href={href}
        role="button"
        className={buildClassList([ buttonClassName, className, leadingIcon ? styles['leading-icon'] : '' ])}
        data-component="Button"
        target="_blank"
        rel="noopener noreferrer"
        icon="externalLink"
        {...otherProps}
      >
        {leadingIcon && buttonIcon}
        <span>{children}</span>
        {!leadingIcon && buttonIcon}
        {}
      </Link>
    );
  }

  return (
    <button
      className={buildClassList([ buttonClassName, className, leadingIcon ? styles['leading-icon'] : '' ])}
      data-component="Button"
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {leadingIcon && buttonIcon}
      <span>{children}</span>
      {!leadingIcon && buttonIcon}
    </button>
  );
}


Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([ "button", "submit", "reset" ]),
  unstyled: PropTypes.bool,
  outlined: PropTypes.bool,
  block: PropTypes.bool,
  wide: PropTypes.bool,
  padded: PropTypes.bool,
  icon: PropTypes.oneOf([ "externalLink", "mail", "chat", "print", "download", "custom" ]),
  hover: PropTypes.bool,
  active: PropTypes.bool,
  focus: PropTypes.bool,
  iconOnly: PropTypes.bool,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  leadingIcon: PropTypes.bool
};

Button.defaultProps = {
  type: "button",
  unstyled: false,
  outlined: false,
  block: false,
  wide: false,
  padded: false,
  icon: null,
  customIcon: null,
  hover: false,
  active: false,
  focus: false,
  iconOnly: false,
  className: null,
  to: null,
  href: null,
  leadingIcon: false
};
