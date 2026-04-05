import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import ZipCodeValidator from '../../helpers/validators/ZipCodeValidator';

/**
 * TextField with a validator for zip codes
 * @param {string} id - id for input element
 * @param {string} label - label text
 * @param {array} props - other props
 * @returns {node} - the rendered DOM node
 */
export default function ZipCodeField({ id, label, ...props }) {
  return (
    <TextField
      label={label}
      id={id}
      validator={ZipCodeValidator}
      autoComplete="postal-code"
      maxLength="10"
      data-component="ZipCodeField"
      {...props}
    />
  );
}

ZipCodeField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};
ZipCodeField.defaultProps = {
  label: 'ZIP Code'
};
