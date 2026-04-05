import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import InputLabel from "../InputLabel";
import styles from "./TextField.scss";

/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - label: Sets the text for the input's label
 *
 * Optional props:
 * - id: sets the id attribute for the input and the <label for... attribute
 * - type: string, defaults to 'text'. Sets the input type
 * - value: string. If present pre-populates the input with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - validators: array of Validator objects. If present, field get error state onBlur if the value does not match the given test
 * - enableSpellCheck: true or false, defaults to false. If true, enables browser autocorrection while typing
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - isValid: bool. If true, sets isValid state - i.e. green border
 */
export default class TextField extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
      "text",
      "email",
      "password",
      "search",
      "url",
      "date",
      "month",
      "tel",
      "week",
      "number"
    ]),
    width: PropTypes.oneOf([
      "normal",
      "medium",
      "small",
      "tiny"
    ]),
    isValid: PropTypes.bool,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validator: PropTypes.func,
    onValueChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    maxLength: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    enableSpellCheck: PropTypes.bool,
    autoComplete: PropTypes.string,
    errorMessage: PropTypes.string,
    hintText: PropTypes.node,
    placeholder: PropTypes.string,
    inline: PropTypes.bool
  };

  static defaultProps = {
    id: null,
    isValid: false,
    type: "text",
    width: "normal",
    enableSpellCheck: false,
    required: false,
    disabled: false,
    errorMessage: "",
    onBlur: null,
    onChange: null,
    validator: null,
    maxLength: null,
    autoComplete: null,
    inline: false
  };

  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   * Set initial state
   * Value: value of the input.
   * isPristine: tracks if user has typed in the input
   * isValid: tracks if the field is valid based on passed validators
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);

    let pristine = true;

    if (props.value || props.errorMessage) {
      pristine = false;
    }

    this.state = {
      value: props.value,
      isPristine: pristine,
      isValid: props.isValid,
      showSuccess: false,
      hasError: props.errorMessage !== "",
      errorMessage: props.errorMessage
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * If errorMessage is updated after initial render, adjust the state accordingly
   */
  componentWillReceiveProps({ errorMessage, value }) {
    if (errorMessage) {
      this.setState({
        isPristine: false,
        isValid: false,
        hasError: true,
        errorMessage: errorMessage
      });
    }
    if (typeof value === "string") {
      setTimeout(() => {
        this.setState({ value });
      }, 0);
    }
  }

  /**
   * @returns {node} (div) that includes a label, errorMessage, input
   */
  render() {
    let error = null;
    if (this.state.hasError) {
      error = (
        <span
          className={styles.errorMessage}
          role="alert"
          data-component="errorMessage"
        >
          {this.state.errorMessage}
        </span>
      );
    }

    let hintText = null;
    if (this.props.hintText) {
      hintText = (
        <div className={styles.hintText} data-component="hintText">
          {this.props.hintText}
        </div>
      );
    }

    const inputStyle = buildClassList(styles.input, {
      [styles.success]: this.state.isValid && this.state.showSuccess,
      [styles.error]: this.state.hasError,
      [styles.medium]: this.props.width === "medium",
      [styles.small]: this.props.width === "small",
      [styles.tiny]: this.props.width === "tiny"
    });

    const wrapperStyle = buildClassList({
      [styles.disabled]: this.props.disabled,
      [styles.inline]: this.props.inline
    });

    return (
      <div
        data-component="TextField"
        className={buildClassList([ wrapperStyle, this.props.className ])}
      >
        <InputLabel
          htmlFor={this.props.id}
          required={this.props.required}
          label={this.props.label}
          disabled={this.props.disabled}
        />

        {hintText}

        <input
          id={this.props.id}
          name={this.props.id}
          type={this.props.type}
          value={this.state.value}
          placeholder={this.props.placeholder}
          className={inputStyle}
          required={this.props.required}
          disabled={this.props.disabled}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          spellCheck={this.props.enableSpellCheck}
          maxLength={this.props.maxLength}
          min={this.props.min}
          max={this.props.max}
          autoComplete={this.props.autoComplete}
          onKeyUp={this.props.onKeyUp}
          onKeyDown={this.props.onKeyDown}
        />

        {error}
      </div>
    );
  }

  /**
   * Checks input value against required status and passed validators
   */
  validate() {
    // Check if field empty
    if (!this.state.value) {
      // If it's required, say so
      if (this.props.required) {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: "Error: This field is required"
        });
      } else {
        // is empty so reset isValid and hasError
        this.setState({
          isValid: false,
          hasError: false,
          errorMessage: null
        });
      }
    } else if (this.props.validator) {
      const parsed = this.props.validator(this.state.value);

      if (parsed.isValid) {
        this.setState({
          hasError: false,
          isValid: true,
          showSuccess: parsed.showSuccess || false
        });

        if (parsed.shouldUseFormattedValue) {
          this.setState({
            value: parsed.formattedValue
          });
        }
      } else {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: parsed.errorMessage,
          value: parsed.formattedValue ? parsed.formattedValue : this.state.value
        });
      }
    } else {
      // must be required field with a value, so no error
      this.setState({
        hasError: false,
        errorMessage: null
      });
    }
  }

  /**
   * onBlur event on input
   */
  handleBlur() {
    if (
      (this.props.required || this.props.validator) &&
      !this.state.isPristine
    ) {
      this.validate();
    }
  }

  /**
   * This function runs every time the user changes the contents of the input.
   * @param {event} event The event
   */
  handleChange(event) {
    // Commit the input's value to state.value.
    this.setState({ value: event.target.value }, () => {
      // React docs suggest this callback should generally go in ComponentDidUpdate,
      // however since both this callback actions update the state, they must
      // go here because changing state in ComponentDidUpdate would cause a
      // recursive loop and blow up the call stack
      if (this.state.value && this.state.isPristine) {
        this.setState({ isPristine: false });
      }
      // if is in error state or valid state, re-validate as the user types
      // Disabling this because behavior can be weird
      // if (this.state.hasError || this.state.isValid) {
      //   this.validate();
      // }

      if (this.props.onValueChange) {
        this.props.onValueChange(this.state.value, this);
      }
    });
  }
}
