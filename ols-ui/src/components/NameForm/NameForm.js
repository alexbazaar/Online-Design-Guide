import React, { Component } from "react";
import PropTypes from "prop-types";
import FieldSet from "../FieldSet";
import TextField from "../TextField";

import styles from "./NameForm.scss";

/**
 * Class representing a generic Name Form
 *
 * This component returns a <form> with legend and some default Name fields: title, first/middle/last name, suffix
 *
 * Required props:
 * - input: node. Series of field control types
 *
 * Optional props:
 * - legend: string. sets the form legend
 * - id: string. Sets the form's id attribute
 * - inputClass: string. Adds any custom classes to TextField fields
 */
export default class NameForm extends Component {
  static propTypes = {
    formTitle: PropTypes.string
  };

  static defaultProps = {
    formTitle: "Name"
  };

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    const { formTitle, ...otherProps } = this.props;

    return (
      <FieldSet legend={formTitle} className={styles.fieldSet} {...otherProps}>
        <TextField id="title" label="Title" width="tiny" />
        <TextField id="firstName" label="First Name" required />
        <TextField id="middleName" label="Middle Name" />
        <TextField id="lastName" label="Last Name" required />
        <TextField id="suffix" label="Suffix" width="tiny" />
      </FieldSet>
    );
  }
}
