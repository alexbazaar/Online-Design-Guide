import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import PhoneValidator from '../helpers/validators/PhoneValidator';

/**
 * Text input with a U.S. phone validator
 * @param {string} id - the id for the input element
 * @param {array} props - all other desired props
 * @returns {node} rendered DOM node
 */
export default function PhoneNumberField({ id, label, ...props }) {
  return (
    <TextField
      label={label}
      id={id}
      validator={PhoneValidator}
      type="tel"
      autoComplete="tel"
      maxLength="17"
      data-component="PhoneNumberField"
      {...props}
    />
  );
}

PhoneNumberField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

PhoneNumberField.defaultProps = {
  label: 'Phone number'
};
