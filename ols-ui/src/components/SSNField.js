import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import SSNValidator from '../helpers/validators/SSNValidator';

/**
 * Text input with a U.S. phone validator
 * @param {string} id - the id for the input element
 * @param {array} props - all other desired props
 * @returns {node} rendered DOM node
 */
export default function SSNField({ id, label, ...props }) {
  return (
    <TextField
      label={label}
      id={id}
      validator={SSNValidator}
      type="text"
      maxLength="11"
      data-component="SSNField"
      {...props}
    />
  );
}

SSNField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

SSNField.defaultProps = {
  label: 'Social Security Number (SSN)'
};
