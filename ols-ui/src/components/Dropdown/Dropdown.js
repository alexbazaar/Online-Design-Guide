import React, { Component } from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { uniqueIdForComponent, buildClassList } from "../../helpers/utilities";
import styles from "./Dropdown.scss";

/**
 * Class representing a dropdown
 *
 * This component expects that its children will be <options> elements
 *
 * Required props:
 * - label: string. Sets the text for the input's label
 * - children: node. Series of <option> elements
 *
 * Optional props:
 * - id: string. Sets the select's id attribute nd the label's for attribute
 * - value: string. Sets default select choice. Must match the value of one of the <option> elements. Or if an empty string, a blank placeholder is added.
 * - required: bool. Adds required label, required attribute and aria-required='true'
 * - errorMessage: string. If present triggers the error state and displays the error message
 * - allowBlank: string. Shows a selectable placeholder. set to false if need a proper value at all times.
 */
export default class Dropdown extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    srOnlyLabel: PropTypes.bool,
    children: PropTypes.node,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    hintText: PropTypes.node,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    allowBlank: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    inline: PropTypes.bool
  };

  static defaultProps = {
    id: null,
    name: "select",
    required: false,
    hasError: false,
    errorMessage: "",
    value: "",
    isValid: false,
    disabled: false,
    placeholder: "Select an option",
    inline: false,
    allowBlank: true
  };

  /**
   * Constructor
   * @param {object} props The props. See proptypes below.
   *
   * Set initial state
   * value: default selected option passed from a prop
   * hasError: tracks if the field has an error
   * errorMessage: displayed message when the field hasError
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || "",
      hasError: this.props.errorMessage !== "",
      errorMessage: this.props.errorMessage ? this.props.errorMessage : null,
      isValid: this.props.isValid,
      isDisabled: this.props.disabled
    };

    // this.handleBlur = this.handleBlur.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  /**
   * TODO: Remove for future version of React. This can be added to componentDidMount
   * check to see if an Id was passed in, if not generate one. Set disabled if empty
   */
  UNSAFE_componentWillMount() {
    this.id = this.props.id ? this.props.id : uniqueIdForComponent();

    if (!this.props.children && !this.props.options) {
      this.setState({
        isDisabled: true
      });
    }
  }

  /**
   * TODO: Remove for future version of React. Replace with getDeriveStateFromProps
   * If a errorMessage is passed after initial render, adjust the state accordingly
   */
  UNSAFE_componentWillReceiveProps({ errorMessage, isValid }) {
    if (errorMessage) {
      this.setState({
        hasError: true,
        isValid: false,
        errorMessage: errorMessage
      });
    }

    if (isValid) {
      this.setState({
        hasError: false,
        isValid: true,
        errorMessage: null
      });
    }
  }

  /**
   * Update the state when user selects a new option
   * @param {event} event The async event
   */
  _handleChange(event) {
    if (this.props.onChange) {
      const change = {
        oldValue: this.state.selected,
        newValue: event.target.value
      };
      this.props.onChange(change);
    }
    this.setState({
      value: event.target.value
    });
  }

  /**
   * @returns {node} The rendered DOM node
   */
  render() {
    let errorMessage = null;
    let options = this.props.options;

    if (this.state.hasError) {
      errorMessage = (
        <span className={styles.errorMessage} role="alert">
          {this.state.errorMessage}
        </span>
      );
    }

    let emptyPlaceholder = null;

    let hintText = null;
    if (this.props.hintText) {
      hintText = (
        <div className={styles.hintText} data-component="hintText">
          {this.props.hintText}
        </div>
      );
    }

    /**
     * This is the placeholder text (i.e., "Select..."). It remains a possible option in the list of dropdown options but carries a value of "".
    **/
    if (this.props.allowBlank) {
      emptyPlaceholder = (
        <option value="">
          {this.props.placeholder}
        </option>
      );
    }

    // builds the option list from array passed in by prop "options"
    if (options) {
      options = this.props.options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ));
    } else {
      options = "";
    }

    const selectStyle = buildClassList(styles.dropdown, {
      [styles.success]: this.state.isValid,
      [styles.error]: this.state.hasError
    });

    const wrapperStyle = buildClassList({
      [styles.disabled]: this.state.isDisabled,
      [styles.inline]: this.props.inline
    });

    const labelStyle = buildClassList({
      [styles.srOnly]: this.props.srOnlyLabel
    });

    return (
      <div
        className={buildClassList([ wrapperStyle, this.props.className ])}
        data-component="Dropdown"
      >
        <InputLabel
          htmlFor={this.id}
          required={this.props.required}
          label={this.props.label}
          disabled={this.state.isDisabled}
          className={labelStyle}
        />

        {hintText}

        <select
          data-component="DropdownSelect"
          disabled={this.state.isDisabled}
          className={selectStyle}
          name={this.props.name}
          id={this.id}
          required={this.props.required}
          value={this.state.value}
          onChange={this._handleChange}
          onBlur={this._handleChange}
        >
          {emptyPlaceholder}
          {this.props.children ? this.props.children : options}
        </select>

        {errorMessage}
      </div>
    );
  }
}
