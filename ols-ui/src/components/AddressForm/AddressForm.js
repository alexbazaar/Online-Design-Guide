import React from "react";
import PropTypes from "prop-types";
import { FlexRow, FlexCol } from "../FlexGrid";
import FieldSet from "../FieldSet";
import TextField from "../TextField";
import ZipCodeField from "../ZipCodeField";
import StatePicker from "../StatePicker";
import styles from "./AddressForm.scss";

const propTypes = {
  formTitle: PropTypes.string
};

const defaultProps = {
  formTitle: "Mailing Address"
};

/**
 * *****************************************************************************
 * AddressForm
 *
 * @param {object} props - The props
 * @returns {node} - DOM node
 * *****************************************************************************
 */
export default function AddressForm(props) {
  const { formTitle, ...otherProps } = props;

  return (
    <FieldSet legend={formTitle} className={styles.addressForm} {...otherProps}>
      <TextField label="Street address 1" id="street-address-1" required />
      <TextField label="Street address 2" id="street-address-2" />

      <FlexRow>
        <FlexCol sm="8">
          <TextField label="City" id="city" required />
        </FlexCol>
        <FlexCol sm="4">
          <StatePicker id="state" required />
        </FlexCol>
      </FlexRow>

      <ZipCodeField id="zip-code" required width="small" />
    </FieldSet>
  );
}

AddressForm.propTypes = propTypes;
AddressForm.defaultProps = defaultProps;
