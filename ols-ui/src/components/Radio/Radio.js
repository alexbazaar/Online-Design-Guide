import React from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import styles from "./Radio.scss";

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  name: "radios",
  defaultChecked: false
};

/**
 * A radio button and a label
 *
 * Required props
 * - label, string -- Text for the label\
 * - id, string -- input's id and label's for attributes
 *
 * Optional props
 * - name, string, defaults to 'radios' -- Sets name attribute
 * - value, string, defaults to id -- Sets value attribute
 * - checked, bool -- If true, item is initially set to checked
 *
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
export default function Radio(props) {
  const { label, className, id, value, ...otherProps } = props;

  return (
    <div className={className} data-component="Radio">
      <input
        className={styles["radio"]}
        data-component="RadioInput"
        type="radio"
        id={id}
        value={value ? value : id}
        {...otherProps}
      />
      <InputLabel htmlFor={id} label={label}>
        <span className={styles["radio-icon"]} aria-hidden="true"></span>
      </InputLabel>
    </div>
  );
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
