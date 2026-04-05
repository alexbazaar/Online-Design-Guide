import React, { Component } from "react";
import PropTypes from "prop-types";
import { uniqueIdForComponent, buildClassList } from "../../helpers/utilities";
import InputLabel from "../InputLabel";
import styles from "./TextArea.scss";

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hintMessage: PropTypes.node,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  id: null,
  label: "Text Area Label",
  value: "",
  required: false,
  disabled: false,
  hasError: false,
  hintMessage: null,
  errorMessage: null,
  onBlur: null,
  onChange: null
};


/**
 * Class representing a label and a input of type="text"
 *
 * Required props:
 * - label: Sets the text for the input's label
 *
 * Optional props:
 * - id: sets the id attribute for the textarea and the <label for... attribute
 * - value: string. If present pre-populates the textarea with the given string.
 * - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - isValid: bool. If true, sets isValid state - i.e. green border
 */
export default class TextArea extends Component {
  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   * Sets the initial state of the textarea
   * Value: value of the textarea.
   * isPristine: tracks if user has typed in the textarea
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
      value: props.value || "",
      isPristine: pristine,
      isValid: props.isValid,
      hasError: !!props.errorMessage,
      errorMessage: props.errorMessage
    };

    this.handleBlur = this._handleBlur.bind(this);
    this.handleChange = this._handleChange.bind(this);
  }

  /**
   * check to see if an Id was passed in, if not generate one.
   */
  UNSAFE_componentWillMount() {
    console.log('test')
    this.id = this.props.id ? this.props.id : uniqueIdForComponent();
  }

  /**
   * If errorMessage is updated after initial render, adjust the state accordingly
   */
  UNSAFE_componentWillReceiveProps({ errorMessage }) {
    if (errorMessage) {
      this.setState({
        isPristine: false,
        isValid: false,
        hasError: true,
        errorMessage: errorMessage
      });
    }
  }

  /**
   * @returns {node} (div) that includes a label, errorMessage, input
   */
  render() {
    let error = null;
    if (this.state.hasError) {
      error = (
        <span className={styles.errorMessage} role="alert">
          {this.state.errorMessage}
        </span>
      );
    }

    const hint = (
      this.props.hintMessage ? (
        <span className={styles.hintMessage} id={`${this.id}-hint`}>
          {this.props.hintMessage}
        </span>
      ) : null
    );

    const style = buildClassList({
      [styles.textarea]: true,
      [styles.disabled]: this.props.disabled,
      [styles.success]: this.state.isValid,
      [styles.error]: this.state.hasError,
      [styles.hint]: this.props.hintMessage
    });

    return (
      <div className={buildClassList([
        this.state.hasError ? "input-error" : "input",
        this.props.hintMessage ? "has-hint" : null
      ])}>
        <InputLabel
          htmlFor={this.id}
          required={this.props.required}
          disabled={this.props.disabled}
          label={this.props.label}
        />

        {hint}

        <textarea
          id={this.id}
          name={this.id}
          value={this.state.value}
          className={buildClassList([ style, this.props.className ])}
          required={this.props.required}
          disabled={this.props.disabled}
          aria-required={this.props.required}
          aria-labelledby={`${this.id}-label`}
          aria-describedby={`${this.id}${this.props.hintMessage ? "-hint" : "-label"}`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          data-component="TextArea"
        />

        {error}

      </div>
    );
  }

  /**
   * Checks textarea value against required status and passed validators
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
          isValid: true,
          hasError: false,
          errorMessage: null
        });
      }
    } else {
      // is empty so reset isValid and hasError
      // the catchall behavior if !hasError
      this.setState({
        isValid: true,
        hasError: false,
        errorMessage: null
      });
    }
  }

  /**
   * onBlur event on input
   */
  _handleBlur() {
    if (this.props.required && !this.state.isPristine) {
      this.validate();
    }
  }

  /**
   * This function runs every time the user changes the contents of the textarea.
   * @param {event} event The event
   */
  _handleChange(event) {
    // Commit the input's value to state.value.
    this.setState({ value: event.target.value }, () => {
      // React docs suggest this callback should generally go in ComponentDidUpdate,
      // however since both this callback actions update the state, they must
      // go here because changing state in ComponentDidUpdate would cause a
      // recursive loop and blow up the call stack
      if (this.state.value && this.state.isPristine) {
        this.setState({ isPristine: false });
      }
      // Verifies the current state before calling validate()
      // Prevents premature error/validation until user
      // has entered value
      if (this.state.hasError) {
        this.validate();
      }
    });
  }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;
