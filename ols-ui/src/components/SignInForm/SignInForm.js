import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import FieldSet from "../FieldSet";
import Link from "../Links";
import TextField from "../TextField";
import PasswordField from "../PasswordField";
import { FilledButton } from "../Buttons";
import styles from "./SignInForm.scss";

const propTypes = {
  createAccountUrl: PropTypes.string.isRequired,
  forgotUrl: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
  FilledButtonText: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  formTitle: "Sign In",
  FilledButtonText: "Sign in"
};

/**
 * Sign in form that contains text field and password field along with button.
 * @param {object} props - the props
 * @returns {node} - DOM node
 */
export default function SignInForm(props) {
  const {
    formTitle,
    createAccountUrl,
    forgotUrl,
    FilledButtonText,
    onSubmit,
    ...otherProps
  } = props;

  /**
   * Renders form
   */
  return (
    <Form
      {...otherProps}
    >
      <h1 className={styles.title}>{formTitle}</h1>
      <p>
        or <Link href={createAccountUrl}>create an account</Link>
      </p>

      <FieldSet legend={formTitle} showLegend={false}>
        <TextField
          label="Username"
          id="username"
        />
        <PasswordField id="passwordField" hasToggle />
        <div className={styles.buttonWrapper}>
          <FilledButton padded onClick={onSubmit}>{FilledButtonText}</FilledButton>
        </div>
        <p>
          <Link to={forgotUrl} title="Forgot username">
            Forgot username or password?
          </Link>
        </p>
      </FieldSet>
    </Form>
  );
}

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;
