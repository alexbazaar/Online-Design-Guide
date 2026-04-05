import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./DateFieldRange.scss";


import DateField from "../DateField/DateField";

const propTypes = {
  id: PropTypes.string,
  toLabel: PropTypes.string,
  fromLabel: PropTypes.string,
  isValid: PropTypes.bool,
  required: PropTypes.bool,
  toHintText: PropTypes.string,
  fromHintText: PropTypes.string,
  toValue: PropTypes.string,
  fromValue: PropTypes.string,
  toPlaceholder: PropTypes.string,
  fromPlaceholder: PropTypes.string,
  minFromDate: PropTypes.object,
  maxToDate: PropTypes.object,
  disabledDates: PropTypes.array,
  fromErrorMessage: PropTypes.string,
  toErrorMessage: PropTypes.string
};

const defaultProps = {
  id: "date",
  toLabel: "End date",
  fromLabel: "Start date",
  isValid: false,
  required: false,
  toHintText: "MM/DD/YYYY",
  fromHintText: "MM/DD/YYYY",
  toValue: "",
  fromValue: "",
  toPlaceholder: "",
  fromPlaceholder: "",
  minFromDate: moment("1900-01-01"),
  maxToDate: moment("3000-01-01"),
  disabledDates: [],
  fromErrorMessage: "",
  toErrorMessage: ""
};

/**
 * DateFieldRange component consists of two DateField components that work in tangent to allow choosing
 * dates from the calendar picker based on min and max dates set.
 * @returns {node} rendered DOM node
 */
export default class DateFieldRange extends Component {
  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);

    this.state = {
      isValid: props.isValid,
      fromValue: "",
      toValue: "",
      fromErrorMessage: props.fromErrorMessage ? props.fromErrorMessage : "",
      toErrorMessage: props.toErrorMessage ? props.toErrorMessage : "",
      isOpen: false
    };

    this.toInput = React.createRef();
    this.fromInput = React.createRef();

  }

  // TODO: Clean up function and refactor duplicate code
  /**
   * Handles date change for each respective date field
   * @param {object} day - moment object - the day that was clicked
   * @param {string}  inputName -  input field  - unique name of input
   */
  handleDayChange = (day, inputName) => {
    const lowerCaseInputName = inputName.toLowerCase();
    
    // // input name should be either the to or from field name
    if (lowerCaseInputName.includes('from')) {
      this.setState({ fromValue: day }, () => {
        if (this.state.toValue !== "" && day.isBefore(this.state.toValue)) {
          if (this.state.fromErrorMessage) {
            this.setState({ fromErrorMessage: "" });
          }
          return;
        }
      });

      if (this.state.toValue !== "") {
        this.setState({ fromErrorMessage: "Error: The date must be before end date" });
      }
    } else if (lowerCaseInputName.includes('to')) {

      this.setState({ toValue: day }, () => {
        if (this.state.fromValue !== "" && day.isAfter(this.state.fromValue)) {
          if (this.state.toErrorMessage) {
            this.setState({ toErrorMessage: "" });
          }
          return;
        }
      });
      
      if (this.state.fromValue !== "") {
        this.setState({ toErrorMessage: "Error: The date must be after start date" });
      }

    }

  }


  /**
   * @returns {node}
   */
  render() {
    const {
      id,
      toPlaceholder,
      fromPlaceholder,
      disabledDates,
      toLabel,
      fromLabel
    } = this.props;

    return (
      <div data-component="DateFieldRange">
        <div className={styles.DateFieldRangeContainer}>

          <DateField
            id={`${id}-From`}
            name={`${id}-From`}
            placeholder={fromPlaceholder}
            label={fromLabel}
            disabledDates={disabledDates}
            lowerLimit={this.props.minFromDate}
            handleDayChange={this.handleDayChange}
            onChange={this.handleInputChange}
            errorMessage={this.state.fromErrorMessage}
            ref={this.applyRef}
            required={this.props.required}
            range
          />
        </div>
        <div className={styles.DateFieldRangeContainer}>
          <DateField
            id={`${id}-To`}
            name={`${id}-To`}
            placeholder={toPlaceholder}
            label={toLabel}
            disabledDates={disabledDates}
            upperLimit={this.props.maxToDate}
            onChange={this.handleInputChange}
            handleDayChange={this.handleDayChange}
            errorMessage={this.state.toErrorMessage}
            ref={this.toInput}
            required={this.props.required}
            range
          />
        </div>
      </div>
    );
  }
}

DateFieldRange.propTypes = propTypes;
DateFieldRange.defaultProps = defaultProps;
