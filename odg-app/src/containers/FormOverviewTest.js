import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import Heading from "../../../ols-ui/src/components/Heading";
import Alert from 'ols-ui/alerts';
import List, { ListItem } from 'ols-ui/list';
import TextField from 'ols-ui/text-field';
import Link from 'ols-ui/links';
import Dropdown from 'ols-ui/dropdown';
import { FilledButton } from 'ols-ui/buttons';

/**
 * [Form Overview Test Page]
 * @class
 */
class FormOverviewTest extends React.Component {

  state = {
    hasError: false,
    textFieldValue: "",
    textFieldError: "",
    dropdownValue: "",
    dropdownError: "",
    dropdownValid: false
  }

  /**
   * Handle submit
   * @param {event} evt click event
   */
  _testSubmit(evt) {
    evt.preventDefault();
    this.setState({
      hasError: true,
      dropdownError: "Dropdown error",
      dropdownValid: false,
      textFieldError: "Text Field error"
    });
  }

  /**
   * Lifecycle
   * @returns {Node}
   */
  render() {
    return (
      <MainContentTemplate hasFullWidthStyle>
        <div className={styles.defaultPage}>
          <form className={styles.formOverviewTest} onSubmit={this._testSubmit.bind(this)}>
            <FlexContainer>
              {(this.state.textFieldError || this.state.dropdownError) &&
                <Alert
                  headingLevel="3"
                  type="error"
                  title="The following 2 errors have occurred:"
                  id="error"
                  tabIndex="-1"
                  aria-atomic="true"
                >
                  <List type="ol" style={{ paddingLeft: '16px' }}>
                    {this.state.textFieldError &&
                      <ListItem><Link href="#example1">Text Field Label: Error Message</Link></ListItem>
                    }
                    {this.state.dropdownError &&
                      <ListItem><Link href="#example3">Dropdown Label: Error Message</Link></ListItem>
                    }
                  </List>
                </Alert>
              }
              <Heading headinglevel="2">Form Heading</Heading>
              <p>All fields marked with an asterisk (<span style={{ color: '#d11242' }}>*</span>) are required.</p>
              <div>
                <TextField
                  label="Text Field Label"
                  id="example1"
                  hintText="Text field hint text"
                  value={this.state.textFieldValue}
                  errorMessage={this.state.textFieldError}
                  required
                  onValueChange={(newVal) => {
                    this.setState(Object.assign({}, this.state, {
                      textFieldValue: newVal,
                      textFieldError: ''
                    }));
                  }}
                />
              </div>
              <div>
                <Dropdown
                  label="Dropdown Label"
                  hintText="Dropdown hint text"
                  placeholder="Select an option"
                  id="example3"
                  errorMessage={this.state.dropdownError}
                  isValid={this.state.dropdownValid}
                  value={this.state.dropdownValue}
                  required
                  onChange={() => {
                    this.setState(Object.assign({}, this.state, {
                      dropdownError: "",
                      dropdownValid: true
                    }));
                  }}
                >
                  <option value="value1">Option A</option>
                  <option value="value2">Option B</option>
                  <option value="value3">Option C</option>
                </Dropdown>
              </div>
              <FilledButton
                wide
                onClick={this._testSubmit.bind(this)}
              >Submit</FilledButton>
            </FlexContainer>
          </form>
        </div>
      </MainContentTemplate>
    );
  }
}

export default withRouter(EmbedStyles(styles)(FormOverviewTest));
