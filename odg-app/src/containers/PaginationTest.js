import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Panel from 'ols-ui/panel';
import Pagination from "../../../ols-ui/src/components/Pagination";
import MOCK_DATA_EXTRA_LARGE from "../data/MOCK_DATA_EXTRA_LARGE.json";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * Test Page for Pagination
 * @constructor
 */
class PaginationTest extends React.Component {
  state = {
    currentPage: 0,
    pageSize: 25,
    data: MOCK_DATA_EXTRA_LARGE,
    dataSetSize: 1000
  };

  /**
   * add data-demo attribute to body to scope styles
   */
  componentDidMount() {
    document.body.setAttribute("data-demo", "pagination");
  }

  /**
   * remove data-demo attribute
   */
  componentWillUnmount() {
    document.body.removeAttribute("data-demo");
  }

  /**
   * Handle page size change
   * @param {Object} evt data from dropdown change
   */
  handleDataSetChange(evt) {
    const { newValue } = evt;
    const newState = Object.assign({}, this.state);
    newState.currentPage = 0;
    newState.data = MOCK_DATA_EXTRA_LARGE.slice(0, parseInt(newValue));
    newState.dataSetSize = parseInt(newValue);
    this.setState(newState);
  }

  /**
   * Handle page size change
   * @param {Number} newPageSize new value of page size selector
   */
  handlePageSizeChange(newPageSize) {
    this.setState(Object.assign(this.state, {
      pageSize: newPageSize
    }));
  }


  /**
   * Handle page change
   * @param {Number} newPage page number of selected page
   */
  handlePageChange(newPage) {
    this.setState(Object.assign(this.state, {
      currentPage: newPage
    }));
  }

  /**
   * Lifecycle
   * @returns {Node}
   */
  render() {
    return (
      <MainContentTemplate className={styles.PaginationTest} id="main-content" hasFullWidthStyle>
        <Helmet title="Pagination Demo" />
        <Panel padding="large" maxheight="medium">
          <div style={{ minHeight: "70vh" }}>
            <Pagination
              id="pagination-test"
              totalResults={this.state.data.length}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
              onPageSizeChange={this.handlePageSizeChange.bind(this)}
              onPageChange={this.handlePageChange.bind(this)}
              onGo={this.handlePageChange.bind(this)}
            />
          </div>
        </Panel>
      </MainContentTemplate>
    );
  }
}

export default withRouter(EmbedStyles(styles)(PaginationTest));
