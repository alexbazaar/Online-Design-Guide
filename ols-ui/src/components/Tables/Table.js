// @flow

/**
 * Adapted from I3.TableView and related classes that are part of the
 * i3 Framework.
 *
 *   https://github.com/i3-framework/i3
 *
 * Original Copyright / License:
 *
 *   Copyright 2009 Mission Aviation Fellowship
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { uniqueIdForComponent } from "../../helpers/utilities";
import Alert from "../Alerts";
import { TableDataSource } from './TableDataSource';
import { TableDelegate } from './TableDelegate';
import ArrayTableDataSource from "./ArrayTableDataSource";
import TableColumn from "./TableColumn";
import RowFormatter from "./RowFormatter";
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableHeaderCell from './TableHeaderCell';
import { VisibilityMap, Datum } from './types';

import styles from "./Tables.scss";

/*
global React$Component
global React$Element
global SyntheticEvent
*/

/**
 * The props for {@link Table}.
 *
 * @typedef {object} TableProps
 * @property {string} id
 * @property {boolean} bordered
 * @property {string} caption
 * @property {Array<Datum>} data
 * @property {TableDataSource} dataSource
 * @property {TableDelegate} delegate
 * @property {boolean} enableSearch
 * @property {boolean} enableRowSelection
 * @property {string} className
 * @property {number} defaultSortColumn
 * @property {"asc" | "desc"} defaultSortDirection
 * @property {boolean} showCaption
 */
type TableProps = {
  id?: string,
  bordered?: boolean,
  caption: string,
  data?: Array<Datum>,
  dataSource?: TableDataSource,
  delegate?: TableDelegate,
  enableSearch?: boolean,
  searchField?: (Table) => Element | ?React$Component<any, any>,
  enableRowSelection?: boolean,
  className?: string,
  defaultSortColumn?: number,
  defaultSortDirection?: "asc" | "desc",
  showCaption?: boolean,
  children?: any
};

// Define the shape of the `state` of this component.
type TableState = {
  dataSourceDidPreload: boolean,
  enableColumnHeaders: boolean,
  sortColumn: number,
  selectedRow: number,
  searchTerm: string,
  hasError: boolean,
  errorTitle: string,
  errorMessage: string,
  shouldReverseSort: boolean,
  statusMessage: string,
  visibilityMap: ?VisibilityMap
};

/**
 * Simplifies the creation of commonly used tables.
 *
 * # Overview
 *
 * This file defines several classes that make it easy to create attractive,
 * sortable, searchable tables of data.  There are two pieces involved in
 * table creation: the *component*, which creates the HTML for the table and
 * handles searching and sorting, and the *data source*, which provides the data
 * that the view displays.
 *
 * # The Table Component
 *
 * The component is managed by the {@link Table} class.  The component can be
 * used in one of two ways:
 *
 *   1. Include the content of the table as children using {@link TableRow},
 *      {@link TableCell}, {@link TableHeaderCell}, `tbody`, `thead`, etc.
 *   2. Using a data source that conforms to {@link TableDataSource}.
 *
 * The first way -- explicitly setting the rows and cells -- allows for custom
 * tables to be hand-crafted for unique scenarios. The {@link TableRow},
 * {@link TableCell}, and {@link TableHeaderCell} classes are available to help
 * create standard, compliant tables.
 *
 * The second way -- using a data source -- allows for the table to be
 * automatically created from a set of raw data. The data source should
 * conform to the {@link TableDataSource} interface and may optionally include
 * custom formatters, comparators, find-as-you-type indexing, etc. A data
 * source for an array of JSON objects is provided by the
 * {@link ArrayTableDataSource} class. See that class's documentation for more
 * information.
 *
 * # Data Source classes
 *
 * While you can easily create your own table data source classes with completely
 * custom functionality, a couple of general-use classes are included.
 * These classes implement the table data source protocol for some of the more
 * common cases so that you don't have to.
 *
 * The first class provided is {@link ArrayTableDataSource}.  When you create
 * an instance of this, you provide an array of JavaScript objects, and the
 * class will automatically generate columns from the fields in
 * the objects.  A single call to {@link ArrayTableDataSource#enableIndex} will
 * turn on find-as-you-type support for the table.  For more control,
 * {@link ArrayTableDataSource#addColumn} can be used to explicitly define the
 * columns, including titles, custom formatters, and so on.
 *
 * # Keyword indexing
 *
 * The {@link KeywordIndex} class is used to associate keywords with row indices
 * in the data source.  A keyword index is automatically generated by the
 * included data source classes when `enableIndex` is called, but if you're
 * creating your own data source class, you can create your own {@link KeywordIndex}
 * instance and use it for searches.
 *
 * Though {@link KeywordIndex} was created for use with {@link Table}, which
 * expects words to be associated with model indices, it can be used for
 * virtually anything that would benefit from an optimized index.  Keywords
 * can be associated with numbers, strings, or objects such as DOM elements;
 * whatever value you associate with the keyword is what will be returned by
 * {@link KeywordIndex#search}.
 *
 * # Examples
 *
 * Assume that you have an array of JavaScript objects named `myArray`.
 * The following code would create a table from the array, complete with
 * clickable column headers that sort the table:
 *
 * First, you can define a custom formatter method that can take an owner object
 * and format it.  When the owner column is defined, this method will be supplied
 * as the "formatter" option.
 *
 * <code>
 *   function formatOwner(owner) {
 *     return owner.last_name + ", " + owner.first_name;
 *   }
 * </code>
 *
 * You'll also need a custom comparator method that can compare two owners
 * to see how they should be sorted, since JavaScript doesn't know how to
 * sort the custom owner object by itself.  This too will be supplied when
 * the column is defined.
 *
 * <code>
 *   function compareOwners(owner1, owner2) {
 *     var name1 = owner1.last_name + ", " + owner1.first_name;
 *     var name2 = owner2.last_name + ", " + owner2.first_name;
 *     if (name1 < name2) return -1;
 *     if (name1 > name2) return 1;
 *     return 0;
 *   }
 * </code>
 *
 * Now a {@link ArrayTableDataSource} instance can be set up with custom
 * columns.  The keyword index feature will be enabled, which the view will
 * detect and use to provide an instant-find box that filters table rows.
 *
 * <code>
 *   import Table, { TableColumn } from "ols-ui/tables";
 *
 *   const data = [
 *     { make: "Tesla", model: "Roadster", year: "2018", owner: { ... } },
 *     { ... }
 *   ];
 *
 *   function MyStatelessComponent(props) {
 *     return (
 *       <Table data={data} enableSearch>
 *         <TableColumn field="make">Make</TableColumn>
 *         <TableColumn field="model">Model</TableColumn>
 *         <TableColumn field="year">Year</TableColumn>
 *         <TableColumn
 *           field="owner"
 *           formatter={this.formatOwner}
 *           comparator={this.compareOwners}
 *         >
 *           Owner
 *         </TableColumn>
 *       </Table>
 *     );
 *   }
 * </code>
 *
 * # Props
 *
 * ## Required Props
 *
 * A table requires one of two things to render correctly. If a `dataSource` is
 * supplied, it will be used to render the table. Otherwise, the table will
 * simply render the supplied children inside a wrapping `<table>` DOM element.
 *
 * Due to 508 compatibility requirements, a `caption` is also required.
 *
 * ## Optional Props
 *
 * The table can be customized further by supplying optional props. They are
 * listed below:
 *
 *   - className: string (default = "")
 *     Allows consumers of this component to add a custom CSS class name so that
 *     custom styles may be applied or overridden.
 *
 *   - bordered: boolean (default = false)
 *     Set whether the table has outer borders or not. Tables will always have
 *     row separators.
 *
 *   - delegate: TableDelegate (default = undefined)
 *     A delegate object to receive callbacks when certain events happen.
 *     See {@link TableDelegate} for more information.
 *
 *   - enableSearch: boolean (default = true)
 *     The find-as-you-type box will be automatically enabled if the data source
 *     implements the `getKeywordIndex` method. Setting this prop to `false`
 *     will disable the rendering of the search box under all scenarios.
 *
 *   - searchField: function (default = undefined)
 *     If the search field that you want to use for find-as-you-type is rendered
 *     independently of the table, you can pass in a function that return a
 *     ref to the element. This will allow the table to set up the necessary
 *     event listeners.
 *
 *   - enableRowSelection: boolean (default = false)
 *     Sets whether the table supports selecting rows. If enabled, the `delegate`
 *     will receive callbacks to its {@link TableDelegate#tableRowSelectionDidChange}
 *     method.
 *
 *   - defaultSortColumn: number (default = -1)
 *     Sets which column should be responsible for sorting the table by default.
 *     When set to `-1`, the table will not be sorted by default and will
 *     be rendered in the order of the items returned by the `dataSource`.
 *
 *   - defaultSortDirection: "asc" | "desc" (default = "asc")
 *     Sets whether the default sort direction for the `defaultSortColumn` is
 *     ascending or descending. This value is only effective for the initial
 *     render of the table.
 *
 *   - showCaption: boolean (default = false)
 *     Although captions are required for 508 compliance, they are typically
 *     not displayed. To enable display of the caption, set this prop to
 *     `true`.
 */
export default class Table extends React.Component<TableProps, TableState>
{
  id: string;
  props: TableProps;
  dataSource: ?TableDataSource;
  _previousStatusMessage: string;
  _searchTimer: any;
  _externalSearchField: ?HTMLInputElement;
  __onExternalSearchKeyUp: (e: Event) => void;

  static propTypes = {
    id: PropTypes.string,
    bordered: PropTypes.bool,
    caption: PropTypes.string.isRequired,
    data: PropTypes.array,
    dataSource: PropTypes.object,
    delegate: PropTypes.object,
    enableSearch: PropTypes.bool,
    searchField: PropTypes.func,
    enableRowSelection: PropTypes.bool,
    className: PropTypes.string,
    defaultSortColumn: PropTypes.number,
    defaultSortDirection: PropTypes.oneOf([ "asc", "desc" ]),
    showCaption: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    className: "",
    bordered: false,
    enableSearch: true,
    enableRowSelection: false,
    defaultSortColumn: -1,
    defaultSortDirection: "asc",
    showCaption: false
  };

  // The delay between keystrokes before search is run (in milliseconds).
  static SEARCH_DELAY = 250;

  /**
   * Constructor for {@link Table}.
   *
   * @param {TableProps} props The component props
   */
  constructor(props: TableProps)
  {
    super(props);
    // Set initial state.
    // We can accept either a `data` prop or a `dataSource` but not both.
    if (props.data && props.dataSource) {
      throw "Tables may use either `data` or `dataSource` but not both.";
    }
    const data = props.data;
    if (data) {
      this.dataSource = this._buildDataSource(data);
    }
    if (props.dataSource) {
      this.dataSource = props.dataSource;
    }
    this.state = {
      // We consider ourselves already pre-loaded unless we have a data source
      // that has a `preload` method.
      dataSourceDidPreload: !(this.dataSource && this.dataSource.preload),
      enableColumnHeaders: !!(this.dataSource && this.dataSource.contentForColumnHeader),
      sortColumn: props.defaultSortColumn || -1,
      selectedRow: -1,
      searchTerm: "",
      hasError: false,
      errorTitle: "",
      errorMessage: "",
      shouldReverseSort: props.defaultSortDirection === "desc",
      statusMessage: "",
      visibilityMap: null
    };
    this.__onExternalSearchKeyUp = this._onExternalSearchKeyUp.bind(this);
  }

  /**
   * React lifecycle method that gets called before the component is mounted
   * in the DOM.
   *
   * This method is also called during server-side rendering.
   *
   * This method will set the `id` property of this instance to a unique value
   * that is used when adding keys to child components rendered programmatically.
   *
   * This method also applies the filter that will be used during rendering to
   * hide rows that don't match the current search term.
   *
   * Finally, this method will kick off the `preload` method on the data source
   * (if applicable) so that the data will be downloaded and ready for display.
   */
  componentWillMount()
  {
    this.id = this.props.id || uniqueIdForComponent();
    const dataSource = this.dataSource;
    if (dataSource) {
      this._initializeDataSource(dataSource);
    }
  }

  /**
   * React lifecycle method that gets called just before this components props
   * are updated with (potentially) new values.
   *
   * This method checks to see if the data source changed and re-caches the
   * visibility map if necessary.
   *
   * @param {TableProps} nextProps The new props to be sent to the component.
   */
  componentWillReceiveProps(nextProps: TableProps)
  {
    // Check to see if our `dataSource` prop changed. If so, we need to
    // rebuild our state.
    const dataSource = nextProps.dataSource;
    if (dataSource) {
      // If our data source didn't change, then we don't need to initialize it.
      if (dataSource === this.dataSource) return;
      this.dataSource = dataSource;
      this._initializeDataSource(dataSource);
      return;
    }
    // Check to see if our `data` prop changed. If so, we need to rebuild
    // our data source and state.
    const data = nextProps.data;
    if (data && data !== this.props.data) {
      this.dataSource = this._buildDataSource(data);
      this._initializeDataSource(this.dataSource);
      return;
    }
    // If we have a `data` prop, check to see if our children changed.
    // If so, we need to rebuild our data source as the column information
    // may have changed.
    if (data && this.props.children !== nextProps.children) {
      this.dataSource = this._buildDataSource(data);
      this._initializeDataSource(this.dataSource);
    }
  }

  /**
   * @private
   *
   * Builds a data source object from our `data` prop and any children
   * that define columns, row formatters, etc.
   *
   * @param {Array<Datum>} data The data for this table.
   *
   * @returns {ArrayTableDataSource}
   */
  _buildDataSource(data: Array<Datum>): ArrayTableDataSource
  {
    const dataSource = new ArrayTableDataSource(data);
    React.Children.forEach(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const props = child.props;
        /* eslint-disable no-case-declarations */
        switch (child.type) {
          case TableColumn:
            const column = {
              ...props
            };
            if (props.children) {
              column.title = props.children;
            }
            dataSource.addColumn(column);
            break;
          case RowFormatter:
            dataSource.setRowFormatter(props.formatter);
            break;
        }
        /* eslint-enable no-case-declarations */
      }
    });
    if (this.props.enableSearch) dataSource.enableIndex();
    return dataSource;
  }

  /**
   * @private
   *
   * Initializes a data source by pre-generating a visibility map and preloading
   * the data if necessary.
   *
   * @param {TableDataSource} dataSource The data source.
   */
  _initializeDataSource(dataSource: TableDataSource)
  {
    // Pre-initialize our visibility map.
    this.setState({ visibilityMap: this._filterRows(dataSource) });
    // If the data source has a `preload` method, call it.
    if (typeof dataSource.preload === 'function') {
      dataSource.preload(this._onDataSourcePreload.bind(this));
    }
    else {
      // If the data source doesn't have a preload method, then just call
      // the callback directly.
      this._onDataSourcePreload(true);
    }
  }

  /**
   * React lifecycle method that gets called after the component mounts in the
   * DOM.
   *
   * Here, we set up the appropriate event listener if an external search field
   * is specified in our props.
   */
  componentDidMount()
  {
    // Only attempt to hook up the event listeners on an external search field
    // if the function is defined and our data source has its index enabled.
    // We determine whether the index is enabled by attempting to grab the
    // KeywordIndex. If it comes back `null`, then the index was not enabled
    // and we don't care about the search field.
    const dataSource = this.dataSource;
    const index = dataSource && dataSource.getKeywordIndex();
    if (typeof this.props.searchField === "function" && index) {
      const searchField = this.props.searchField(this);
      // eslint-disable-next-line react/no-find-dom-node
      const element = ReactDOM.findDOMNode(searchField);
      if (!element || !(element instanceof HTMLElement)) {
        console.error("Unable to find valid search field."); // eslint-disable-line no-console
        return;
      }
      let inputElement: HTMLInputElement;
      if (element instanceof HTMLInputElement) {
        inputElement = element;
      }
      else {
        const inputs = element.getElementsByTagName("input");
        if (inputs.length === 0) {
          console.error( // eslint-disable-line no-console
            "You tried to use an external search field, but the field cannot " +
            "be found. An HTML input element must be in the DOM hierarchy."
          );
          return;
        }
        // Assume that it's the first input in the hierarchy.
        // TODO: Maybe look for a `type = search`???
        inputElement = inputs[0];
      }
      inputElement.addEventListener("keyup", this.__onExternalSearchKeyUp);
      this._externalSearchField = inputElement;
    }
  }

  /**
   * React lifecycle method that will be called just before the component is
   * removed from the DOM tree.
   *
   * This method removes the event listener we added to the external search box.
   */
  componentWillUnmount()
  {
    const externalSearchField = this._externalSearchField;
    if (externalSearchField) {
      externalSearchField.removeEventListener("keyup", this.__onExternalSearchKeyUp);
    }
  }

  /**
   * Sets the index of the row that is currently selected.  Pass `-1` to
   * deselect all rows.
   *
   * @param {number} rowIndex The index of the selected row or `-1` for no selection.
   */
  setSelectedRow(rowIndex: number)
  {
    this.setState({ selectedRow: (rowIndex || -1) });
  }

  /**
   * Sets the term that will be used to filter the table to only rows that
   * match.
   *
   * @param {string} term The search term used to filter rows in the table.
   */
  search(term: string)
  {
    this.setState({ searchTerm: term });
    const dataSource = this.dataSource;
    if (dataSource) {
      this.setState({ visibilityMap: this._filterRows(dataSource) });
    }
  }

  /**
   * Sorts the table on the supplied column index.
   *
   * Pass `-1` to return to the default order.
   *
   * If the data source supports the `sortRowsUsingColumn` method,
   * it will be used to compare rows as the sort is taking place.
   * Otherwise a generic sort will be performed on the values returned
   * by the data source's `contentForCell` method.
   *
   * In addition to supplying the column index, you can supply the following
   * additional params:
   *
   *   - shouldReverse: boolean
   *     Columns are sorted in ascending order by default. Set this to `true`
   *     to have the column sort in descending order.
   *
   * @param {number} columnIndex The column index to sort by.
   * @param {object} params An object that contains additional params. See
   *                        above for more information.
   */
  sort(columnIndex: number, params: { shouldReverse: boolean })
  {
    this.setState({
      sortColumn: columnIndex,
      shouldReverseSort: params.shouldReverse || false
    });

    // If there is a delegate, notify them that the sort column has changed.
    const delegate = this.props.delegate;
    if (delegate && delegate.tableDidSortOnColumn) {
      // Use `setTimeout` to give the component time to update its render state.
      setTimeout(() => { delegate.tableDidSortOnColumn({ table: this, columnIndex }); }, 10);
    }
  }

  /**
   * Renders the table.
   *
   * If for some reason the table cannot be rendered, an {@link Alert} will
   * be rendered with the reason why the table can't be rendered.
   *
   * If the `dataSource` supports preloading but has not completed yet,
   * a loading message will be rendered.
   *
   * @returns {JSX.Element} DOM node
   */
  render()
  {
    // If we don't have a valid data source, display an alert.
    if (this.state.hasError) {
      return this._renderError(this.state.errorTitle, this.state.errorMessage);
    }

    // Check to see if our data source requires pre-loading.
    if (!this.state.dataSourceDidPreload) {
      // TODO: Display a spinner.
      return (
        <div>Loading...</div>
      );
    }
    else {
      return (
        <div
          className={[ styles["table-container"], this.props.className ].join(" ")}
          data-component="Table"
        >
          {this._renderSearchBox()}
          {this._renderTable()}
        </div>
      );
    }
  }

  /**
   * @private
   *
   * Callback method for when the data is ready to be displayed.
   *
   * If `false` is passed as an argument, the table will go into an error
   * state and display an {@link Alert} indicating that the data source is
   * not available.
   *
   * @param {boolean} wasSuccessful Indicates whether the data was loaded
   *                                successfully or not.
   */
  _onDataSourcePreload(wasSuccessful: boolean)
  {
    // If an explicit status was not passed in, assume that it succeeded.
    if (wasSuccessful === null) wasSuccessful = true;
    if (wasSuccessful) {
      this.setState({ dataSourceDidPreload: true });
    }
    else {
      this.setState({
        hasError: true,
        errorTitle: "Data Service Unavailable",
        errorMessage: "The data service you are trying to view is not available. Please try again later."
      });
    }
  }

  /**
   * @private
   *
   * Renders an {@link Alert} indicating that something is preventing the table
   * from rendering correctly.
   *
   * @param {string} title The short description of the problem.
   * @param {string} message A long description of the problem.
   * @returns {JSX.Element} An {@link Alert} component.
   */
  _renderError(title: string, message: string)
  {
    return (
      <Alert
        type={Alert.TYPE_ERROR}
        title={title}
        role={Alert.ROLE_ALERT}
      >
        {message}
      </Alert>
    );
  }

  /**
   * @private
   *
   * Renders the table.
   *
   * @returns {JSX.Element} The rendered table.
   */
  _renderTable()
  {
    let caption = null;
    if (this.props.caption) {
      // If a caption was provided, render it
      caption = (
        <caption>
          <span className={this.props.showCaption ? "" : styles["sr-only"]}>
            {this.props.caption}
          </span>
        </caption>
      );
    }

    const tableStyle = [
      this.props.bordered ? styles['bordered'] : ""
    ].join(" ");

    // If we don't have a data source, then render the children directly.
    if (!this.dataSource) {
      return (
        <table className={`${styles["regular-table"]} ${tableStyle}`} aria-readonly="true">
          {caption}
          {this.props.children}
        </table>
      );
    }

    const renderedHeaders = this._renderHeaders();
    if (!renderedHeaders) {
      return this._renderError("Unable to render headers",
        "We were unable to render the requested table headers.");
    }
    const { headers, mobileHeaders } = renderedHeaders;

    const renderedRows = this._renderRows();
    if (!renderedRows) {
      return this._renderError("Unable to render rows",
        "We were unable to render the requested rows.");
    }
    const { rows, mobileRows } = renderedRows;

    // We have a data source, so let's use it to render the table.
    return (
      <div className={styles["responsive-table"]}>
        <table className={`${styles["regular-table"]} ${tableStyle}`} aria-readonly="true">
          {caption}
          {headers}
          <tbody>
            {rows}
          </tbody>
        </table>
        <div
          role="grid"
          className={`${styles["mobile-table"]} ${tableStyle}`}
          title={this.props.caption}
          aria-readonly="true"
        >
          {mobileHeaders}
          {mobileRows}
        </div>
      </div>
    );
  }

  /**
   * @private
   *
   * Filters the rows using the data source's {@link KeywordIndex}.
   *
   * @param {TableDataSource} dataSource The data source to use.
   * @returns {VisibilityMap|null} Either the visibility map or `null`.
   */
  _filterRows(dataSource: TableDataSource): ?VisibilityMap
  {
    // Grab the current search term and normalize it.
    const term = (this.state.searchTerm || "").trim();

    // Find the rows in the model that match the search term.
    let resultCount = -1;
    let visibilityMap: VisibilityMap = new Set();
    // Check to see if we even have a search term.
    if (term.length === 0) {
      // No search term. All rows will be visible.
      for (let i = 0; i < dataSource.numberOfRows({ table: this }); i++) {
        visibilityMap.add(i);
      }
    }
    else {
      const index = dataSource.getKeywordIndex();

      // We have one or more search terms. Use the model's KeywordIndex to match rows.
      if (!index) {
        // If for some reason, the index isn't accessible, return a visibility
        // map with all rows visible and log an error.
        // eslint-disable-next-line no-console
        console.error("Data Source doesn't have getKeywordIndex. Filtering impossible.");
        return visibilityMap;
      }

      const terms = term.split(/[^\w]/);
      let matches: Set<any>;
      if (terms.length === 1) {
        // Just one word to match.
        matches = index.search(terms[0]);
      }
      else {
        // User typed in more than one word. Match each word and then merge the
        // results so that only rows that contain all terms are shown.
        let matchMap: Set<any>;
        let newMatchMap: Set<any>;
        // Grab the first set so we have a baseline set.
        matchMap = index.search(terms[0]);
        // Now start with the second term and only include rows that match
        // all previous terms as well.
        for (let i = 1; i < terms.length; i++) {
          if (terms[i].length > 0) {
            // Reset the new match map.
            newMatchMap = new Set();
            index.search(terms[i]).forEach((match) => {
              // If this match is already in our matchMap, then add it to this
              // one.  This will filter out rows that don't match all prior
              // search terms.
              if (matchMap.has(match)) newMatchMap.add(match);
            });
            // Set our prior matchMap with this new one.  This will ensure that
            // only rows that match all prior terms are enabled.
            matchMap = newMatchMap;
          }
        }
        matches = matchMap;
      }
      // Tally the results.
      resultCount = matches.size;
      visibilityMap = matches;
    }

    // Set the status to display how many matches we have.
    if (resultCount === -1) {
      this.setState({ statusMessage: "" });
    }
    else {
      this.setState({ statusMessage: `Found ${resultCount} ${resultCount === 1 ? "match" : "matches"}` });
    }

    return visibilityMap;
  }

  /**
   * @private
   *
   * Sorts the rows in the data source on the column indicated by our state's
   * `sortColumn` value.
   *
   * If the value of `this.state.sortColumn` is `-1`, then no sorting is done
   * and the order will be the default provided by the data source.
   *
   * @returns {object}
   */
  _sortRows(): { rowMap: Array<number>, rowIndexMap: Array<number> }
  {
    // Grab the number of rows in the data source.
    const dataSource = this.dataSource;
    if (!dataSource) return { rowMap: [], rowIndexMap: [] };
    const rowCount = dataSource.numberOfRows({ table: this });
    const rowMap: Array<number> = [];
    for (let i = 0; i < rowCount; i++) {
      rowMap.push(i);
    }

    // If we have a sort column, then call the data source to sort the rows.
    if (this.state.sortColumn >= 0) {
      if (dataSource.sortRowsUsingColumn) {
        rowMap.sort((lower, upper) => dataSource.sortRowsUsingColumn({
          table: this,
          columnIndex: this.state.sortColumn,
          lower,
          upper
        }));
      }
      else {
        // Sort the table by the string value of the cell contents.
        rowMap.sort((lower, upper) => {
          const a = dataSource.contentForCell({
            table: this,
            columnIndex: this.state.sortColumn,
            rowIndex: lower
          }).toString().toLowerCase();
          const b = dataSource.contentForCell({
            table: this,
            columnIndex: this.state.sortColumn,
            rowIndex: upper
          }).toString().toLowerCase();
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
      }
    }

    // Build an index of row index to row order.
    const rowIndexMap: Array<number> = [];
    for (let i = 0; i < rowMap.length; i++) {
      rowIndexMap[rowMap[i]] = i;
    }
    // If we are reversing the sort order, reverse the array.
    if (this.state.shouldReverseSort) rowMap.reverse();

    return { rowMap, rowIndexMap };
  }

  /**
   * @private
   *
   * Renders the search box if a data source is provided and that data source
   * responds to `getKeywordIndex`, and the `enableSearch` prop is not set to
   * `false`.
   *
   * @returns {React$Element|null}
   */
  _renderSearchBox()
  {
    // If an external searchField prop was supplied, then we never want to
    // render our own.
    if (typeof this.props.searchField === "function") return null;
    // Only render the search box if the data source has enabled indexing.
    const dataSource = this.dataSource;
    if (dataSource && dataSource.getKeywordIndex() && this.props.enableSearch) {
      return (
        <div className={styles["search-container"]}>
          {/* TODO: Make this a TextField component rather than a plain input */}
          Find:&nbsp;
          <input
            value={this.state.searchTerm}
            onChange={(e) => { this._onSearchChange(e); }}
            onKeyUp={(e) => { this._onSearchKeyUp(e); }}
          />
          <span className={styles["status"]}>{this.state.statusMessage}</span>
        </div>
      );
    }
    else {
      return null;
    }
  }

  /**
   * @private
   *
   * Renders the column headers wrapped in a `<thead>` DOM element.
   *
   * Column headers will be rendered unless the `enableColumnHeaders` prop is
   * set to `false`.
   *
   * @returns {JSX.Element}
   */
  _renderHeaders(): ?{ headers: React$Element<*>, mobileHeaders: React$Element<*> }
  {
    if (this.state.enableColumnHeaders) {
      const dataSource = this.dataSource;
      if (!dataSource) return;
      // Grab the number of columns from the data source.
      const columnCount = dataSource.numberOfColumns({ table: this });
      const columns = [];
      const mobileColumns = [];
      for (let i = 0; i < columnCount; i++) {
        let sortDirection = "";
        if (i === this.state.sortColumn) {
          sortDirection = this.state.shouldReverseSort ? "desc" : "asc";
        }
        const content = dataSource.contentForColumnHeader({
          table: this,
          columnIndex: i
        });
        columns.push(
          <TableHeaderCell
            scope="col"
            sortable={true}
            key={`${this.id}-column-${i}`}
            sortDirection={sortDirection}
            onClick={() => { this._onColumnSort(i); }}
          >
            {content}
          </TableHeaderCell>
        );
        mobileColumns.push(
          <div role="columnheader" key={`${this.id}-mobilecolumn-${i}`}>
            {content}
          </div>
        );
      }
      const headers = (
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
      );
      const mobileHeaders = (
        <div role="row" className={styles["sr-only"]}>
          {mobileColumns}
        </div>
      );
      return { headers, mobileHeaders };
    }
    else {
      return null;
    }
  }

  /**
   * @private
   *
   * Renders the rows of the table and returns an Array of {@link TableRow}
   * components.
   *
   * @returns {Object}
   */
  _renderRows(): ?{ rows: Array<React$Element<*>>, mobileRows: Array<React$Element<*>> }
  {
    const dataSource = this.dataSource;
    if (!dataSource) return;
    const { rowMap } = this._sortRows();
    const columnCount = dataSource.numberOfColumns({ table: this });
    const rows = [];
    const mobileRows = [];
    let dataSourceRowIndex: number;
    for (let rowIndex = 0; rowIndex < rowMap.length; rowIndex++) {
      dataSourceRowIndex = rowMap[rowIndex];
      // Check to see if this row has been hidden by a search. If so, skip to the
      // next row.
      if (this.state.visibilityMap && !this.state.visibilityMap.has(dataSourceRowIndex)) continue;
      // This row should be shown. Proceed.
      const cells = [];
      const mobileCells = [];
      for (let i = 0; i < columnCount; i++) {
        const key = `${this.id}-column-${i}-row-${rowIndex}`;
        const mobileKey = `${this.id}-mobilecolumn-${i}-row-${rowIndex}`;
        const columnName = dataSource.contentForColumnHeader({
          table: this,
          columnIndex: i
        });
        const content = dataSource.contentForCell({
          table: this,
          columnIndex: i,
          rowIndex: dataSourceRowIndex
        });
        const cellStyle = dataSource.cssClassNamesForColumn({ table: this, columnIndex: i }).join(" ");
        const additionalProps = {};
        const dataType = dataSource.dataTypeForColumn({ table: this, columnIndex: i });
        if (dataType) {
          additionalProps["data-type"] = dataType;
        }
        // If this columns also serves as a row header, then use a
        // TableHeaderCell.
        if (dataSource.columnIsRowHeader({ table: this, columnIndex: i })) {
          cells.push(
            <TableHeaderCell
              key={key}
              className={cellStyle}
              data-title={columnName}
              {...additionalProps}
            >
              {content}
            </TableHeaderCell>
          );
          mobileCells.push(
            <div
              key={mobileKey}
              role="rowheader"
              {...additionalProps}
            >
              <span aria-hidden="true">{columnName}: </span>
              {content}
            </div>
          );
        }
        else {
          // Use a regular TableCell.
          cells.push(
            <TableCell
              key={key}
              className={cellStyle}
              data-title={columnName}
              {...additionalProps}
            >
              {content}
            </TableCell>
          );
          mobileCells.push(
            <div
              key={mobileKey}
              role="gridcell"
              {...additionalProps}
            >
              <div aria-hidden="true">{columnName}</div>
              <div>{content}</div>
            </div>
          );
        }
      }
      const rowStyle = dataSource.cssClassNamesForRow({ table: this, rowIndex: dataSourceRowIndex }).join(" ");
      rows.push(
        <TableRow key={`${this.id}-row-${rowIndex}`} className={rowStyle}>
          {cells}
        </TableRow>
      );
      mobileRows.push(
        <div key={`${this.id}-mobilerow-${rowIndex}`} role="row" className={rowStyle}>
          {mobileCells}
        </div>
      );
    }
    return { rows, mobileRows };
  }

  /**
   * @private
   *
   * Event handler for when the search box content changes.
   *
   * This method will set the `searchTerm` state to the current value of the
   * element that triggered this event. This ensures that the search box
   * always contains the value that the user typed in.
   *
   * @see {@link https://facebook.github.io/react/docs/forms.html#controlled-components}
   * for more information.
   *
   * @param {Event} e The event that was fired.
   */
  _onSearchChange(e: SyntheticEvent<HTMLInputElement>)
  {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  /**
   * @private
   *
   * Event handler for when the search box receives a `keyup` event.
   *
   * This method will clear out any previous timers and then set a new timer
   * to set the value of the search term. Using timers here ensures that the
   * value is only updated when the user pauses their typing.
   *
   * @param {Event} e The event that was fired.
   */
  _onSearchKeyUp(e: Event) // eslint-disable-line no-unused-vars
  {
    // Reset the search timer. We only want to perform the search when the
    // user is finished typing.
    if (this._searchTimer) clearTimeout(this._searchTimer);
    this._searchTimer = setTimeout(this._onSearchDelayComplete.bind(this), Table.SEARCH_DELAY);
    this.setState({ statusMessage: "Finding..." });
  }

  /**
   * @private
   *
   * Event handler for when an external search field receives a `keyup` event.
   *
   * This method combines the behavior of both the normal `_onSearchChange` and
   * `_onSearchKeyUp`.
   *
   * @param {Event} e The event that was fired.
   */
  _onExternalSearchKeyUp(e: Event)
  {
    const currentTarget = e.currentTarget;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ searchTerm: currentTarget.value });
      this._onSearchKeyUp(e);
    }
  }

  /**
   * @private
   *
   * Function that gets called when the search timer fires.
   *
   * This method will call {@link Table#search}.
   */
  _onSearchDelayComplete()
  {
    clearTimeout(this._searchTimer);
    this._searchTimer = null;
    this.search(this.state.searchTerm);
  }

  /**
   * @private
   *
   * Event handler for when the user clicks on a column header.
   *
   * This method will set the sort column by calling {@link Table#sort} and
   * will display a temporary message indicating that it is sorting if the
   * search box is currently displayed.
   *
   * @param {number} columnIndex The index of the column to sort on.
   */
  _onColumnSort(columnIndex: number)
  {
    let shouldReverse = false;
    if (columnIndex === this.state.sortColumn) shouldReverse = !this.state.shouldReverseSort;
    this._setTemporaryStatusMessage("Sorting...");
    this.sort(columnIndex, { shouldReverse });
    setTimeout(() => { this._restoreStatusMessage(); }, 100);
  }

  /**
   * @private
   *
   * Event handler for when a row is selected.
   *
   * TODO: Implement this method.
   *
   * @param {Event} e The event.
   */
  _onRowSelect(e: Event) // eslint-disable-line no-unused-vars
  {
    // TODO: Implement this method.
  }

  /**
   * @private
   *
   * Sets a temporary message in the status line next to the search box.
   *
   * NOTE: This method is only "effective" (i.e. seen by the user) if the
   * search box is currently being displayed.
   *
   * It will store the current status and replace it with the message provided.
   * The original status can be restored by calling {@link _restoreStatusMessage}.
   *
   * @param {string} message The message to display.
   */
  _setTemporaryStatusMessage(message: string)
  {
    // Store the current status message.
    this._previousStatusMessage = this.state.statusMessage;
    this.setState({ statusMessage: message });
  }

  /**
   * @private
   *
   * Restores the original status message in the status box.
   *
   * NOTE: This method is only "effective" (i.e. seen by the user) if the
   * search box is currently being displayed.
   *
   * @see {@link _setTemporaryStatusMessage} for more information.
   */
  _restoreStatusMessage()
  {
    const previousStatusMessage = this._previousStatusMessage || "";
    this.setState({ statusMessage: previousStatusMessage });
    this._previousStatusMessage = "";
  }

}
