import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { OutlinedButton } from "../Buttons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InputStepper.scss";

import Cleave from 'cleave.js/react';

/**
 * Input Stepper Component
 * @param {*} props for Input Stepper
 * @returns {Node}
 */
function InputStepper(props) {
  const { id, label, min, max, initialValue, errorState, required, inputDescription } = props;

  const [ inputField, setInputField ] = useState(initialValue ? initialValue : '');
  const [ disableDec, setDisableDec ] = useState(false);
  const [ disableInc, setDisableInc ] = useState(false);
  const [ hasError, setHasError ] = useState(errorState);
  const formattedDescription = inputDescription && inputDescription[0].toLowerCase() + inputDescription.substring(1);
  const [ errorMessage, setErrorMessage ] = useState(`Error: This field is required`);
  const [ warning, setWarning ] = useState("");
  const [ valueNowText, setValueNowText ] = useState("");
  const hintMessage = `Value must be between ${min}-${max}`;

  const inputStepper = useRef(null);
  const input = useRef(null);
  const decrementButton = useRef(null);
  const incrementButton = useRef(null);
  const valueNow = useRef(null);

  const validate = (val) => {
    if (!val) {
      if (required) {
        setHasError(true);
        if (inputDescription) {
          setErrorMessage(`Error: The number of ${formattedDescription} is required`);
        }
      }
    } else if (val && (val < min || val > max)) {
      setHasError(true);
      setErrorMessage(`Error: Value is outside of the range ${min}-${max}`);
    } else {
      setHasError(false);
    }
  };

  const handleOnChange = (evt) => {
    const val = evt.target.value;
    setInputField(val);
    validate(val);
  };

  /**
   * onBlur event on input
   * @param {Event} evt passed in
   */
  const handleOnBlur = (evt) => {
    if (required) {
      handleOnChange(evt);
    }
  };

  const handleInputKeyDown = (evt) => {
    if (/(ArrowUp|ArrowDown)/.test(evt.key)) {
      evt.preventDefault();
      evt.stopPropagation();
      const diff = evt.key === 'ArrowUp' ? 1 : -1;
      const curVal = inputField ? parseInt(inputField) : 0;
      const val = parseInt(curVal) + diff;
      updateValue(val);
    }
  };

  const handleButtonFocus = () => {
    valueNow.current.removeAttribute("aria-hidden");
  };

  const handleButtonBlur = () => {
    valueNow.current.setAttribute("aria-hidden", true);
  };

  const updateValue = (newVal) => {
    const curVal = inputField ? parseInt(inputField) : 0;

    // valid new value
    if ((newVal < curVal && newVal >= min) ||
        (newVal > curVal && newVal <= max)
    ) {
      setInputField(newVal);
      validate(newVal);
      const text = `${newVal} ${formattedDescription}`;
      setValueNowText(text);
      setTimeout(() => {
        setValueNowText("");
      }, 500);
      announceLimitWarning(newVal);
    }

    // trying to go below min
    if (newVal < min && curVal == min) {
      announceLimitWarning(min);
    }

    // trying to go above max
    if (newVal > max && curVal == max) {
      announceLimitWarning(max);
    }

  };

  const increment = () => {
    const curVal = inputField ? parseInt(inputField) : 0;
    const newVal = curVal + 1;

    updateValue(newVal);
  };

  const decrement = () => {
    const curVal = inputField ? parseInt(inputField) : 0;
    const newVal = curVal - 1;

    updateValue(newVal);
  };

  const announceLimitWarning = (val) => {
    setTimeout(() => {
      if (val === min || val == max) {
        setWarning(val === max ?
          `You have reached maximum number of ${formattedDescription}` :
          `You have reached minimum number of ${formattedDescription}`
        );
        setTimeout(() => {
          setWarning("");
        }, 500);
      }
    }, 500);
  };

  const focusWrapper = () => {
    const curEl = document.activeElement;
    inputStepper.current.setAttribute('tabindex', '-1');
    setTimeout(() => {
      const decBtnEl = inputStepper.current.querySelector('.' + styles.decrementButton);
      const incBtnEl = inputStepper.current.querySelector('.' + styles.incrementButton);

      // if focus is on a button when it disables, focus the input field.
      if ((curEl === decBtnEl && decBtnEl.disabled) ||
        (curEl === incBtnEl && incBtnEl.disabled)) {
        inputStepper.current.focus();
        setTimeout(() => {
          const text = `${inputField} ${formattedDescription}`;
          setTimeout(() => {
            setValueNowText(text);
            setTimeout(() => {
              setValueNowText("");
            }, 500);
          }, 500);
          announceLimitWarning(inputField);
        });
      }

    }, 250);
  };

  useEffect(
    () => {
      if (inputField <= min || !inputField) {
        focusWrapper();
        setDisableDec(true);
      } else {
        setDisableDec(false);
      }

      if (inputField >= max) {
        focusWrapper();
        setDisableInc(true);
      } else {
        setDisableInc(false);
      }
    },
    [ inputField ]
  );

  return (
    <div id={`input-stepper-${id}`}>
      {label && required ? (
        <label>
          {label}
          <span aria-label="required" style={{ color: "#D11242" }}> *</span>
        </label>
      ) : (
        <label>{label}</label>
      )}
      <p className={styles.hintMessage}>{hintMessage}</p>
      <div
        className={styles.wrapper}
        ref={inputStepper}
        aria-label="input stepper"
        onBlur={() => {
          inputStepper.current.removeAttribute('tabindex');
        }}
      >
        <OutlinedButton
          className={`${styles.stepperButton} ${styles.decrementButton}`}
          aria-label={`Remove ${inputDescription}`}
          onClick={decrement}
          ref={decrementButton}
          disabled={disableDec}
          aria-disabled={disableDec}
          onFocus={handleButtonFocus}
          onBlur={handleButtonBlur}
        >
          <FontAwesomeIcon
            width="12px"
            height="2px"
            color={disableDec ? "#5B616B" : "#00599C"}
            icon={faMinus}
          />
        </OutlinedButton>
        <Cleave
          ref={input}
          className={styles.inputField}
          options={{ numeral: true, numericOnly: true }}
          value={inputField}
          aria-label={`Number of ${inputDescription}`}
          id={`input-stepper-input-field-${id}`}
          required={required}
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          style={{
            border: hasError ? "1px solid #D11242" : "1px solid #1B1B1B",
            zIndex: hasError && 2
          }}
          onKeyDown={handleInputKeyDown}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <OutlinedButton
          className={`${styles.stepperButton} ${styles.incrementButton}`}
          aria-label={`Add ${inputDescription}`}
          onClick={increment}
          ref={incrementButton}
          disabled={disableInc}
          aria-disabled={disableInc}
          onFocus={handleButtonFocus}
          onBlur={handleButtonBlur}
        >
          <FontAwesomeIcon
            width="12px"
            height="12px"
            color={disableInc ? "#5B616B" : "#00599C"}
            icon={faPlus}
          />
        </OutlinedButton>
      </div>
      <p id={`input-stepper-error-${id}`} aria-live="polite" className={styles.errorMessage}>{hasError ? errorMessage : ""}</p>
      <span
        ref={valueNow}
        className={styles.srOnly}
        data-component="input-stepper-valuenow"
        aria-live="polite"
      >{valueNowText}</span>
      <span
        className={styles.srOnly}
        data-component="input-stepper-warning"
        aria-live="polite"
      >{warning}</span>
    </div>
  );
}

InputStepper.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  inputDescription: PropTypes.string,
  initialValue: PropTypes.number,
  errorState: PropTypes.bool,
  required: PropTypes.bool
};

InputStepper.defaultProps = {
  errorState: false,
  inputDescription: "",
  min: 1,
  max: 10
};

export default InputStepper;

