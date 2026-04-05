import React, { Component } from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import { SearchIcon } from "../Icons";

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./SearchField.scss";

const propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  btnLabel: PropTypes.string,
  size: PropTypes.oneOf([ "small", "medium", "big" ])
};

const defaultProps = {
  size: "medium",
  btnLabel: "Search"
};

/**
 * Provides a standard Search Field.
 *
 * The search field can be one of three sizes by setting the `size` prop. The
 * valid values for the `size` prop are as follows:
 * For more information on when to use each of the different sizes, please
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 * @returns {node} The rendered DOM node
 * @param {array} props  The props
 */
export default class SearchField extends Component {

  /**
   * constructor
   * Sets state of search input text to empty string
   * @param  {type} props description
   */
  constructor() {
    super();
    this.state = {
      inputSearch: ""
    };
  }

  /**
   * Clears search text
   */
  cancelSearch = () => {
    this.setState({
      inputSearch: ""
    });
  }

  /**
   * Handle on change event of search field
   * @param {SyntheticEvent} e - event
   */
  handleSearchChange = (e) => {
    this.setState({ inputSearch: e.target.value });
  }

  /**
   * Renders the component
   * @returns {JSXElement}
   */
  render() {
    let buttonContents;
    if (this.props.size === "small") {
      buttonContents = (
        <span>
          <FontAwesomeIcon icon={ faMagnifyingGlass } style={{ height: "16px", verticalAlign: "-0.025em" }} />
          <span className={styles.srOnly}>
            {this.props.btnLabel}
          </span>
        </span>
      );
    } else {
      buttonContents = (
        <span className={styles.submitText}>
          {this.props.btnLabel}
        </span>
      );
    }

    return (
      <div role="search">
        <form
          className={buildClassList([ styles.search, styles[this.props.size] ])}
          data-component="SearchField"
        >
          <label htmlFor={this.props.id}>
            <span className={styles.srOnly}>{this.props.btnLabel}</span>
          </label>
          <input
            id={this.props.id}
            className={`${styles.input} ${styles.searchBox}`}
            type="search"
            name="search"
            aria-label={this.props.btnLabel}
            placeholder={this.props.placeholder}
            value={this.state.inputSearch} onChange={this.handleSearchChange}
          />
          {/* Hides/shows Search "X" when input field is populated */}
          { this.state.inputSearch && <button className={styles.closeIcon} type="reset" name="reset" value="Reset" onClick={this.cancelSearch}></button> }
          <button type="submit" className={styles.submit}>
            {buttonContents}
          </button>
        </form>
      </div>
    );
  }
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;
