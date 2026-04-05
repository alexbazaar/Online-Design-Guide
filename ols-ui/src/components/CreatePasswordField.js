import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextField from './TextField';
import Checkbox from './Checkbox';
import { buildClassList, EmbedStyles } from '../helpers/utilities';
import zxcvbn from 'zxcvbn';
import PasswordValidator from '../helpers/validators/PasswordValidator';
import { CheckIcon } from "./Icons";
import styles from './PasswordField/PasswordField.scss';
/**
 * Class representing a password input field
 *
 * This component extends Text Input
 *
 * Required props:
 * - id: string. Sets the input fields's id attribute and the label's for attribute
 *
 * Optional props:
 * - label: string. Override the default value of 'Password'
 * - type: string. Sets the input field's type attribute, will need to be manipulated to show/hide password
 * - hasToggle: bool. Adds a toggle label, 'show password'/'hide password'
 */
class CreatePasswordField extends Component {

  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      isTypePassword: true,
      setToggleLabelOn: props.toggleLabelOn,
      setToggleLabelOff: props.toggleLabelOff,
      hasLowercase: false,
      hasUppercase: false,
      hasNumber: false,
      hasSpecialChar: false,
      isCorrectLength: false
    };

    this.value = "";
  }

  /**
   * When user clicks show/hide password checkbox
   */
  _handleClick() {
    if (this.state.isTypePassword) {
      this.setState({
        type: 'text',
        isTypePassword: false,
        setToggleLabelOff: this.props.toggleLabelOff,
        setToggleLabelOn: this.props.toggleLabelOn
      });
    } else {
      this.setState({
        type: 'password',
        isTypePassword: true,
        setToggleLabelOn: this.props.toggleLabelOn,
        setToggleLabelOff: this.props.toggleLabelOff
      });
    }
  }

  /**
   * Assigns this.value the value of the TextField.
   * Runs every time the TextField change event fires.
   *
   * @param  {string} value - contents of input
   */
  onValueChange(value) {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*]/.test(value);
    const isCorrectLength = value.length >= 8 && value.length <= 20;

    // These two values are used in the checkPasswordStrength func
    this.value = value;
    this.meetsMinRequirements =
      hasLowercase
      && hasUppercase
      && hasNumber
      && hasSpecialChar
      && isCorrectLength;

    // Adding test values to State for dynamic requirements list styling
    this.setState({
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
      isCorrectLength
    });
  }

  /**
   * On key up, check to see if the input meets the minimum requirements, and if so,
   * check the password strength using zxcvbn (https://github.com/dropbox/zxcvbn)
   */
  checkPasswordStrength() {
    // If field is blank reset meter values. Score needs to be null so the bar is
    // removed, otherwise will show as 'weak'
    if (!this.value) {
      this.setState({
        meterMessage: null,
        meterScore: null
      });
      return;
    }

    // If the entry doesn't meet the minimum requirements,
    // set message and manually set score to 1
    if (!this.meetsMinRequirements) {
      this.setState({
        meterMessage: 'Password strength: Weak',
        meterScore: 1
      });
      return;
    }

    // Field has a value and it meets minimum requirements, so check it's strength
    const pw = zxcvbn(this.value);
    this.setState({ meterScore: this.meetsMinRequirements ? pw.score + 1 : 0 });

    switch (pw.score) {
      case 4 :
        this.setState({ meterMessage: 'Password strength: Great!' });
        break;
      case 3 :
        this.setState({ meterMessage: 'Password strength: Decent' });
        break;
      case 2 :
        this.setState({ meterMessage: 'Password strength: So-so' });
        break;
      default :
        this.setState({ meterMessage: 'Password strength: Weak' });
    }
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { label, hasToggle, toggleLabelOn, toggleLabelOff, id = this.id } = this.props;
    const style = buildClassList({
      [styles.passwordField]: true
    });
    const meterBarStyle = buildClassList({
      [styles.meterBar]: true,
      [styles.weak]: this.state.meterScore && this.state.meterScore < 3,
      [styles.ok]: this.state.meterScore === 3,
      [styles.good]: this.state.meterScore === 4,
      [styles.great]: this.state.meterScore === 5

    });
    const checkboxLabel = this.state.isTypePassword ? toggleLabelOn : toggleLabelOff;
    const checkboxClassNames = styles.toggleCheckbox;
    const toggleText = (
      <Checkbox id={`${id}-show-password`} label={checkboxLabel}
        className={checkboxClassNames}
        name="show-password-checkbox"
        onClick={this._handleClick.bind(this)} />
    );
    const checkmark = (
      <CheckIcon unstyled className={styles.checkmark} />
    );
    const bullet = (
      <span aria-hidden="true" className={styles.bullet}>•</span>
    );

    const requirements = (
      <ul className={styles.requirements}>
        <li className={this.state.isCorrectLength ? styles.passes : null}>
          {this.state.isCorrectLength ? checkmark : bullet}
          8 to 20 characters long
        </li>
        <li className={this.state.hasUppercase ? styles.passes : null}>
          {this.state.hasUppercase ? checkmark : bullet}
          At least one uppercase letter
        </li>
        <li className={this.state.hasLowercase ? styles.passes : null}>
          {this.state.hasLowercase ? checkmark : bullet}
          At least one lowercase letter
        </li>
        <li className={this.state.hasNumber ? styles.passes : null}>
          {this.state.hasNumber ? checkmark : bullet}
          At least one number
        </li>
        <li className={this.state.hasSpecialChar ? styles.passes : null}>
          {this.state.hasSpecialChar ? checkmark : bullet}
          At least one special character (!@#$%&)
        </li>
      </ul>
    );

    return (
      <div className={styles.wrapper}  data-component="CreatePasswordField">
        <TextField
          className={style}
          label={label}
          id={id}
          type={this.state.type}
          value={this.value}
          maxLength="20"
          validator={PasswordValidator}
          helpText={requirements}
          hasToggle={hasToggle}
          toggleOnText={toggleLabelOn}
          toggleOffText={toggleLabelOff}
          onKeyUp={this.checkPasswordStrength.bind(this)}
          onValueChange={this.onValueChange.bind(this)}
          required
        />
        <div className={styles.meter} id={`${id}-password-meter`} data-component="CreatePasswordFieldMeter">
          <span className={meterBarStyle} />
        </div>
        <div className={styles.meterMessage} id={`${id}-password-message`} aria-live="polite" data-component="CreatePasswordFieldMeterMsg">{this.state.meterMessage}</div>

        {hasToggle ? toggleText : null}
      </div>
    );
  }
}

CreatePasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  hasToggle: PropTypes.bool,
  toggleLabelOn: PropTypes.string,
  toggleLabelOff: PropTypes.string
};

CreatePasswordField.defaultProps = {
  label: 'Password',
  hasToggle: false,
  toggleLabelOn: 'Show password',
  toggleLabelOff: 'Uncheck to hide password'
};

export default EmbedStyles(styles)(CreatePasswordField);
