import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import findTabbable from "tabbable";
import InputLabel from "../InputLabel";
import Portal from "../Portal";
import CalendarGrid from "./CalendarGrid";
import styles from "./DateField.scss";
import { DateValidator } from "../../helpers/validators";
import { announce, buildClassList } from "../../helpers/utilities";
import { BREAKPOINT_SM, DATE_DISPLAY_FORMAT } from "../../helpers/constants";

import CalendarOIcon from '../Icons/CalendarO';

import Cleave from 'cleave.js/react';

const propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isValid: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  hintText: PropTypes.string,
  placeholder: PropTypes.string,
  upperLimit: PropTypes.object,
  lowerLimit: PropTypes.object,
  /** @type {function} handles change of day on calendar day click*/
  handleDayChange: PropTypes.func,
  /** @type {boolean} checks if field belongs to range*/
  range: PropTypes.bool,
  /** @type {string} name of field */
  name: PropTypes.string,
  disabledDates: PropTypes.array
};

const defaultProps = {
  id: "date",
  value: "",
  name: "date",
  label: "Date",
  isValid: false,
  disabled: false,
  required: false,
  placeholder: "MM/DD/YYYY",
  errorMessage: "",
  hintText: "MM/DD/YYYY",
  lowerLimit: moment("1900-01-01"),
  upperLimit: moment("3000-01-01"),
  range: false,
  disabledDates: []
};

/**
 * DateField component contains a button that opens the CalendarPicker (CalendarGrid) component
 * @returns {node} rendered DOM node
 */
export default class DateField extends Component {
  /**
   * constructor
   * @param {object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);

    // no initial value or error message passed
    let pristine = true;

    // checks if datefield has value, errorMessage or if its part of a range
    if (props.value || props.errorMessage || props.range) {
      pristine = false;
    }

    this.state = {
      value: props.value,
      isPristine: pristine,
      isValid: props.isValid,
      hasError: props.errorMessage.length > 0,
      errorMessage: props.errorMessage,
      hintText: props.hintText,
      placeholder: props.placeholder,
      isOpen: false,
      focusedDate: moment(),
      isMobile: false
    };


    this.onCalendarToggleClick = this.onCalendarToggleClick.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
    this.decrementMonth = this.decrementMonth.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validate = this.validate.bind(this);
    this.setFocusToFirstItemInModal = this.setFocusToFirstItemInModal.bind(
      this
    );
    this.handleInputOnKeyDown = this.handleInputOnKeyDown.bind(this);
    this.setUpOnResize = this.setUpOnResize.bind(this);
  }


  /**
   * Resize event listener function that helps determine if current screen is mobile
   * or desktop. When mobile, the calendar picker will display as a modal. When desktop,
   * the current position of the calendar picker is determined by the input field position.
   */
  setUpOnResize() {
    const bodyRect = document.body.getBoundingClientRect();
    const isMobile = bodyRect.width <= BREAKPOINT_SM;

    this.setState({ isMobile });

    if (isMobile && this.state.isOpen) {
      document.body.classList.add('modal__open');
    }

    if (!isMobile && document.body.classList.contains('modal__open')) {
      document.body.classList.remove('modal__open');
    }

    if (this.input && !isMobile) {
      const targetRect = this.input.getBoundingClientRect();
      this.setState({
        top: this.state.isMobile ? 0 : targetRect.bottom - bodyRect.top,
        left: this.state.isMobile ? 0 : targetRect.left - bodyRect.left - 4
      });
    } else {
      this.setState({
        top: 0,
        left: 0
      });
    }

  }

  /**
   * componentDidMount lifecycle function
   * In this instance, it checks the current window size to determine if the date field
   * is contained in a mobile window.
   */
  componentDidMount() {
    const bodyRect = document.body.getBoundingClientRect();
    const isMobile = bodyRect.width < BREAKPOINT_SM;
    this.setState({ isMobile });

    if (isMobile && this.state.isOpen) {
      document.body.classList.add('modal__open');
    } else {
      document.body.classList.remove('modal__open');
    }
    window.addEventListener('resize', this.setUpOnResize);

  }

  /**
   * componentWillUnmount lifecycle function
   * clean up resize event listener when component unmounts.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.setUpOnResize);
  }

  /**
   * Click handler for day button - passed to CalendarDay
   * @param  {object} day - moment object - the day that was clicked
   * @param  {event} e - click event
   */
  onDayClick(day, e) {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      focusedDate: day,
      value: day.format(DATE_DISPLAY_FORMAT),
      hasError: false,
      isValid: true,
      errorMessage: ""
    });

    if (this.props.range) {
      this.props.handleDayChange(day, this.input.name);
    }

    this.closeModal();
  }

  /**
   * Click handler for Show/hide calendar button
   * @param  {event} e - click event
   */
  onCalendarToggleClick(e) {
    e.preventDefault();

    const bodyRect = document.body.getBoundingClientRect();
    const targetRect = this.input.getBoundingClientRect();
    // check for mobile or tablet

    this.setState({
      top: this.state.isMobile ? 0 : targetRect.bottom - bodyRect.top,
      left: this.state.isMobile ? 0 : targetRect.left - bodyRect.left - 4
    }, () => {
      if (this.state.isOpen) {
        this.closeModal();
      } else {
        this.openModal();
      }
    });
  }


  /**
   * Click handler for previous month
   */
  decrementMonth() {
    this.setState({
      focusedDate: this.state.focusedDate.subtract(1, "months")
    });
  }

  /**
   * Click handler for next month
   */
  incrementMonth() {
    this.setState({
      focusedDate: this.state.focusedDate.add(1, "months")
    });
  }

  /**
   * Opens the modal
   */
  openModal() {
    this.setState({
      isOpen: true
    });

    let announcement = '';

    // appends modal__open class for mobile so content can't be scrolled in background.
    if (this.state.isMobile) {
      document.body.classList.add('modal__open');
      announcement = "Swipe left or right to navigate the days of the month. Tap the Previous and Next buttons to navigate by month. ";
    } else {
      announcement = "Press the arrow keys to navigate by day, PageUp and PageDown to navigate by month, or Escape to cancel.";
    }

    document.getElementById("app").setAttribute("aria-hidden", "true");

    announce(
      announcement,
      true
    );
  }

  /**
   * Close the modal
   */
  closeModal() {

    document.getElementById("app").setAttribute("aria-hidden", "false");

    if (this.state.isMobile) {
      document.body.classList.remove('modal__open');
    }

    // remove announcement on close
    // IE compatibility (.remove() doesnt work)
    if (typeof document.getElementById("announcement").remove === 'function') {
      document.getElementById("announcement").remove();
    } else {
      document.getElementById("announcement").outerHTML = '';
    }

    this.setState({
      isOpen: false
    });

    // This timeout prevents an occasional weird scroll jump
    setTimeout(() => {
      this.toggleButtonRef.focus();
    }, 0);
  }

  /**
   * Puts focus on first tabbable item in modal
   */
  setFocusToFirstItemInModal() {
    const focusableItems = findTabbable(this.modalRef);
    focusableItems[0].focus();
  }

  /**
   * Click handler for overlay between page and modal
   * @param  {event} e - event
   */
  onOverlayClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.closeModal();
  }

  /**
   * Key press handler for calendar modal
   * @param {event} e - React synthetic event
   */
  onKeyDown(e) {
    e.stopPropagation();
    if (!this.state.focusedDate) return;

    if (e.key === "Tab") {
      // get list of focusable items
      const focusableItems = findTabbable(this.modalRef);
      // get currently focused item
      const focusedItem = document.activeElement;
      // get the number of focusable items
      const numberOfFocusableItems = focusableItems.length;
      // get the index of the currently focused item
      const focusedItemIndex = focusableItems.indexOf(focusedItem);

      if (e.shiftKey) {
        // Shift tab - if first item has focus, go to the last focusable item
        if (focusedItemIndex === 0) {
          e.preventDefault();
          focusableItems[numberOfFocusableItems - 1].focus();
        }
      } else {
        // Tab - if last item has focus, go to the first focusable item
        if (focusedItemIndex === numberOfFocusableItems - 1) {
          e.preventDefault();
          focusableItems[0].focus();
        }
      }
      return;
    }

    const newFocusedDate = this.state.focusedDate.clone();

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        newFocusedDate.subtract(1, "week");
        break;
      case "ArrowLeft":
        e.preventDefault();
        newFocusedDate.subtract(1, "day");
        break;
      case "Home":
        e.preventDefault();
        newFocusedDate.startOf("week");
        break;
      case "PageUp":
        e.preventDefault();
        newFocusedDate.subtract(1, "month");
        break;
      case "ArrowDown":
        e.preventDefault();
        newFocusedDate.add(1, "week");
        break;
      case "ArrowRight":
        e.preventDefault();
        newFocusedDate.add(1, "day");
        break;
      case "End":
        e.preventDefault();
        newFocusedDate.endOf("week");
        break;
      case "PageDown":
        e.preventDefault();
        newFocusedDate.add(1, "month");
        break;
      case "Escape":
        e.preventDefault();
        this.closeModal();
        break;
      default:
        break;
    }

    if (!newFocusedDate.isSame(this.state.focusedDate)) {
      this.setState({
        focusedDate: newFocusedDate
      });
    }
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
          errorMessage: `Error: ${this.dateInputLabel} field is required`
        });
      } else {
        // is empty so reset isValid and hasError
        this.setState({
          hasError: false,
          isValid: false,
          errorMessage: ""
        });
      }
    } else {
      // validate date in input field
      const parsed = DateValidator(
        this.state.value,
        this.props.upperLimit,
        this.props.lowerLimit,
        true,
        this.props.disabledDates
      );

      // Check if range is set to true on field and there is an error message
      if (this.props.range) {
        this.props.handleDayChange(parsed.moment, this.input.name);
        if (parsed.isValid && !this.props.errorMessage) {
          this.setState({
            value: parsed.formattedValue,
            hasError: false,
            isValid: true,
            errorMessage: '',
            showSuccess: parsed.showSuccess || false,
            focusedDate: parsed.moment
          });
        } else {
          this.setState({
            hasError: true,
            isValid: false,
            errorMessage: this.props.errorMessage ? this.props.errorMessage : parsed.errorMessage,
            value: parsed.formattedValue
              ? parsed.formattedValue
              : this.state.value
          });
        }
        return;
      }


      if (parsed.isValid) {
        this.setState({
          value: parsed.formattedValue,
          hasError: false,
          isValid: true,
          showSuccess: parsed.showSuccess || false,
          focusedDate: parsed.moment
        });

      } else {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: this.props.errorMessage ? this.props.errorMessage : parsed.errorMessage,
          value: parsed.formattedValue
            ? parsed.formattedValue
            : this.state.value
        });
      }
    }
  }

  /**
   * onBlur event on input
   */
  handleBlur() {
    if (this.props.required || !this.state.isPristine) {
      this.validate();
    }
    this.setState({ placeholder: this.props.placeholder });
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
    });

  }

  /**
   * Handles validation on key down. For any values that aren't numeric an error message
   * is shown. Implemented for speech to text (Dragon)
   * @param {event} e - synthetic react event
   */
  handleInputOnKeyDown(e) {
    e.stopPropagation();

    // TODO: Remove duplicate check for validation on key press
    if (e.key === "Enter") {
      e.preventDefault();
      if (this.props.required || !this.state.isPristine) {
        this.validate();
      }
    } else if (e.key === "Tab") {
      if (this.props.required || !this.state.isPristine) {
        this.validate();
      }
    } else if (e.keyCode === 8) {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
          isValid: false,
          errorMessage: ""
        });
      }
    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
      this.setState({
        hasError: true,
        isValid: false,
        errorMessage: 'Error: The input needs to be numeric and follow MM/DD/YYYY format'
      });
    } else {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
          isValid: false,
          errorMessage: ""
        });
      }
    }
    this.handleChange(e);
  }

  // checks label for range (From, Start), in order to validate date range
  checkLabelForRange = () => this.props.label === "From" || this.props.label === "To";

  /**
   * @returns {node}
   */
  render() {
    const { id, disabled, required, disabledDates, upperLimit, lowerLimit } = this.props;
    let error = null;

    // Set name for input and aria label
    this.dateInputLabel = this.checkLabelForRange() ? `Date ${this.props.label}` : this.props.label;

    if (this.state.hasError) {
      error = (
        <div
          className={styles.errorMessage}
          role="alert"
          aria-live="polite"
          data-component="errorMessage"
        >
          {this.state.errorMessage}
        </div>
      );
    }

    const inputStyle = buildClassList(styles.input, {
      [styles.error]: this.state.hasError
    });

    return (
      <div data-component="DateField" className={styles.dateFieldInputContainer}>

        <InputLabel
          htmlFor={id}
          required={this.props.required}
          disabled={this.props.disabled}
          label={this.props.label}
        >
          {this.props.label === "From" || this.props.label === "To" ? <span className={styles.srOnly}>Date</span> : null}
        </InputLabel>


        <p id={`${id}-hint`} className={styles.hintStyle}>{this.state.hintText}</p>

        <Cleave
          type="text"
          id={id}
          options={{ blocks: [ 2, 2, 4 ], delimiter: '/', numericOnly: true }}
          name={this.props.name ? this.props.name : id}
          value={this.state.value}
          className={`${inputStyle} ${styles.dateFieldInput}`}
          placeholder={this.state.placeholder}
          required={required}
          disabled={disabled}
          aria-required={required}
          aria-labelledby={`${id}-label ${id}-hint`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          htmlRef={(ref) => (this.input = ref)}
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
          inputMode="numeric"
          onKeyDown={this.handleInputOnKeyDown}
          autoComplete="off"
        />


        <button
          type="button"
          ref={(ref) => {
            this.toggleButtonRef = ref;
          }}
          id={`${this.props.id}-calendarBtn`}
          className={styles.calendarLaunchBtn}
          onClick={this.onCalendarToggleClick}
          onBlur={this.handleBlur}
          disabled={disabled}
          aria-describedby={id}
        >
          <CalendarOIcon crop />

          <span className={styles.srOnly}>
            Calendar select to view a date
          </span>
        </button>
        {error}

        {this.state.isOpen && (
          <Portal>
            <div
              aria-hidden={!this.state.isOpen}
              ref={(ref) => {
                this.modalRef = ref;
              }}
            >
              <div
                className={styles.overlay}
                tabIndex="-1"
                onClick={this.onOverlayClick}
                onFocus={this.setFocusToFirstItemInModal}
                data-component="ModalOverlay"
                role="presentation"
              />
              <CalendarGrid
                left={this.state.left}
                top={this.state.top}
                width={this.state.width}
                focusedDate={this.state.focusedDate}
                onDayClick={this.onDayClick}
                incrementMonth={this.incrementMonth}
                decrementMonth={this.decrementMonth}
                onKeyDown={this.onKeyDown}
                closeModal={this.closeModal}
                isMobile={this.state.isMobile}
                disabledDates={disabledDates}
                lowerLimit={lowerLimit}
                upperLimit={upperLimit}
              />
            </div>
          </Portal>
        )}
      </div>
    );
  }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;
