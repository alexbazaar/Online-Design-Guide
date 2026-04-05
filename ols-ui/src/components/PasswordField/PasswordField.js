import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "../TextField/index";
import Checkbox from "../Checkbox/index";
import styles from "./PasswordField.scss";
import { buildClassList } from "../../helpers/utilities";

/**
 * Class representing a password input field
 *
 * This component extends Text Input
 *
 * Required props:
 * - label: string. Sets the text for the input's label
 * - type: string. Sets the input field type
 *
 * Optional props:
 * - id: string. Sets the input fields's id attribute and the label's for attribute
 * - type: string. Sets the input field's type attribute, will need to be manipulated to show/hide password
 * - hasToggle: bool. Adds a toggle label, 'show password'/'hide password'
 */
export default class PasswordField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hasToggle: PropTypes.bool,
    showRequired: PropTypes.bool,
    toggleLabelOn: PropTypes.string,
    toggleLabelOff: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    label: "Password",
    hasToggle: false,
    showRequired: false,
    toggleLabelOn: "Show password",
    toggleLabelOff: "Uncheck to hide password"
  };

  state = {
    type: "password",
    isTypePassword: true,
    setToggleLabelOn: this.props.toggleLabelOn,
    setToggleLabelOff: this.props.toggleLabelOff
  };

  /**
   * Toggle hidden password text
   */
  _handleClick() {
    if (this.state.isTypePassword) {
      this.setState({
        type: "text",
        isTypePassword: false,
        setToggleLabelOff: this.props.toggleLabelOff,
        setToggleLabelOn: this.props.toggleLabelOn
      });
    } else {
      this.setState({
        type: "password",
        isTypePassword: true,
        setToggleLabelOn: this.props.toggleLabelOn,
        setToggleLabelOff: this.props.toggleLabelOff
      });
    }
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const {
      label,
      hasToggle,
      showRequired,
      toggleLabelOn,
      toggleLabelOff,
      id = this.id
    } = this.props;
    const style = buildClassList({
      [styles.passwordField]: true
    });
    const checkboxLabel = this.state.isTypePassword
      ? toggleLabelOn
      : toggleLabelOff;
    const checkboxClassNames =
      styles.toggleCheckbox +
      " " +
      (this.state.isPristine ? style.showPassword : style.hidePassword);
    const toggleText = (
      <Checkbox
        id={`${id}-show-password`}
        name={`${id}-show-password`}
        label={checkboxLabel}
        className={checkboxClassNames}
        onClick={this._handleClick.bind(this)}
      />
    );

    return (
      <div
        className={styles.passworldFieldWrapper}
        data-component="PasswordField"
      >
        <TextField
          className={style}
          label={label}
          id={id}
          type={this.state.type}
          hasToggle={hasToggle}
          toggleOnText={toggleLabelOn}
          toggleOffText={toggleLabelOff}
          required={showRequired}
        />
        {hasToggle ? toggleText : null}
      </div>
    );
  }
}
