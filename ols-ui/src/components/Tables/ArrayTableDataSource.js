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

import { stripTimeFromDate, KeywordIndex } from "../../helpers/utilities";
import Table from './Table';
import { TableDataSource } from './TableDataSource';
import {
  Column,
  NewColumn,
  RowFormatter,
  Datum
} from './types';

/**
 * A generic data source that represents an array of objects to display in
 * a table.
 *
 * Using this class can be as simple as creating an instance and passing
 * in an array as a parameter:
 *
 * <code>
 *   const model = new ArrayTableDataSource(myArray);
 * </code>
 *
 * In this simple case, columns will be created from the fields in each
 * JavaScript object (using the first object as a template for what fields
 * to expect), and each value will be displayed as a string.  Dates will
 * be rendered using a locale-specific format.
 *
 * The default behavior can be easily overridden via the
 * {@link ArrayTableDataSource#addColumn} method.  This disables the automatic
 * column generation and lets you specify a column title, which field
 * in each JavaScript object to draw the data from, and (optionally)
 * a CSS class to use to style the table cells in that column.
 * Custom formatter and comparator functions can also be supplied.
 *
 * Find-as-you-type is activated by calling {@link ArrayTableDataSource#enableIndex}.
 * This will generate a {@link KeywordIndex} and populate it with data from
 * the array.  Note that the index will use the values in the array itself,
 * not the formatted values, so formatter functions can be free to create
 * links or image tags or anything else without throwing off the index.
 *
 * @implements {TableDataSource}
 */
export default class ArrayTableDataSource implements TableDataSource
{
  data: Array<Datum>;
  columns: Array<Column>;
  rowFormatter: RowFormatter;
  keywordIndex: ?KeywordIndex;

  /**
   * Constructor for {@link ArrayTableDataSource}.
   *
   * @param {Datum[]} data The data to use for this data source.
   */
  constructor(data: Array<Datum>)
  {
    this.data = data;
    this.columns = [];
    this.rowFormatter = (row) => []; // eslint-disable-line no-unused-vars
  }

  /**
   * "Preloads" the data.
   *
   * Since we already have our all data and don't need to preload anything, we
   * use this method to automatically generate columns if they haven't been
   * explicitly set by the app.
   *
   * After we generate columns, we immediately call the callback so that
   * table rendering can continue straight away.
   *
   * @param {function} callback The callback to call when data loading is complete.
   */
  preload(callback:(success: boolean) => void): void
  {
    if (this.columns.length === 0) this.generateColumns();
    callback(true);
  }

  /**
   * Automatically generate columns based on the field names of the first row
   * of the data.
   *
   * This method is called automatically the first time our associated table
   * tries to render if explicit column definitions have not been set.
   */
  generateColumns(): void
  {
    const fieldNames: Array<string> = [];
    let key: string;
    // Grab the first row and create columns based on its keys.
    for (key in this.data[0]) { fieldNames.push(key); }
    fieldNames.sort();
    for (let i = 0; i < fieldNames.length; i++) {
      this.addColumn({ title: fieldNames[i], field: fieldNames[i] });
    }
  }

  /**
   * Returns the number of rows in our data set.
   *
   * @returns {number}
   */
  numberOfRows(): number
  {
    return this.data.length;
  }

  /**
   * Returns the number of columns in our data set.
   *
   * @returns {number}
   */
  numberOfColumns(): number
  {
    return this.columns.length;
  }

  /**
   * Returns an array of CSS class names to apply to each cell in the column at
   * `columnIndex`.
   *
   * @param {Object[]} params The params for this function.
   * @returns {Array<string>}
   */
  cssClassNamesForColumn(params: { table: Table, columnIndex: number }): Array<string>
  {
    return this.columns[params.columnIndex].classNames || [];
  }

  /**
   * Returns an array of CSS class names to apply to the whole row of data at
   * `rowIndex`.
   *
   * @param {Object[]} params The params for this function.
   * @returns {Array<string>}
   */
  cssClassNamesForRow(params: { table: Table, rowIndex: number }): Array<string>
  {
    return this.rowFormatter(this.data[params.rowIndex]);
  }

  /**
   * Returns the data type for the column. This is used to specify columns like
   * currency fields so that screen readers can read the value correctly.
   *
   * @param {Object[]} params The params for this function.
   * @returns {string | null}
   */
  dataTypeForColumn(params: { table: Table, columnIndex: number }): ?string
  {
    return this.columns[params.columnIndex].dataType;
  }

  /**
   * Returns a boolean indicating whether this column should be rendered as a
   * row header (e.g. using `<th>` instead of `<td>`.
   *
   * @param {Object[]} params The params for this function.
   * @param {Table} params[].table The table that requested this information.
   * @param {number} params[].columnIndex The column index that is being asked for.
   * @returns {boolean}
   */
  columnIsRowHeader(params: { table: Table, columnIndex: number }): boolean
  {
    return !!this.columns[params.columnIndex].isRowHeader;
  }

  /**
   * Returns the content that should be used for the column header.
   *
   * This is the value that will be used when rendering the `<thead>` elements.
   *
   * @param {Object[]} params The params for this function.
   * @param {Table} params[].table The table that requested this information.
   * @param {number} params[].columnIndex The column index that is being asked for.
   * @returns {string}
   */
  contentForColumnHeader(params: { table: Table, columnIndex: number }): string
  {
    return this.columns[params.columnIndex].title;
  }

  /**
   * Returns the content that should be used for a cell.
   *
   * For more information on how to change the raw value, or the value that is
   * displayed, see the documentation for {@link ArrayTableDataSource#addColumn}.
   *
   * @param {Object[]} params The params for this function.
   * @param {Table} params[].table The table that requested this information.
   * @param {number} params[].columnIndex The column index that is being asked for.
   * @param {number} params[].rowIndex The row index that is being asked for.
   * @returns {string}
   */
  contentForCell(params: { table: Table, columnIndex: number, rowIndex: number }): string
  {
    const value = this.columns[params.columnIndex].retriever(this.data[params.rowIndex]);
    if (this.columns[params.columnIndex].formatter) {
      return this.columns[params.columnIndex].formatter(
        value,
        {
          field: this.columns[params.columnIndex].field,
          row: this.data[params.rowIndex]
        }
      );
    }
    else if (value === null) {
      return "";
    }
    else if (value.constructor === Date) {
      return value.toLocaleDateString();
    }
    else {
      return value.toString();
    }
  }

  /**
   * Returns a value that will sort two values.
   *
   * This method is designed to be used by `Array#sort` to sort rows based on
   * their values in a specific column.
   *
   * @param {Object[]} params The params for this function.
   * @param {Table} params[].table The table that requested this information.
   * @param {number} params[].columnIndex The column index that is being asked for.
   * @param {number} params[].lower The index of the first row.
   * @param {number} params[].upper The index of the second row.
   * @returns {number} A number suitable for passing into `Array#sort`.
   */
  sortRowsUsingColumn(params: { table: Table, columnIndex: number, lower: number, upper: number }): number
  {
    const v1: any = this.columns[params.columnIndex].retriever(this.data[params.lower]) || "";
    const v2: any = this.columns[params.columnIndex].retriever(this.data[params.upper]) || "";
    if (this.columns[params.columnIndex].comparator) {
      return this.columns[params.columnIndex].comparator(v1, v2, {
        field: this.columns[params.columnIndex].field,
        lowerRow: this.data[params.lower],
        upperRow: this.data[params.upper]
      });
    }
    else {
      if ((v1.constructor === Number && v2.constructor === Number) ||
        (v1.constructor === Date && v2.constructor === Date))
      {
        return (v1 - v2);
      }
      else {
        const value1 = v1.toString().toLowerCase();
        const value2 = v2.toString().toLowerCase();
        if (value1 < value2) return -1;
        if (value1 > value2) return 1;
        return 0;
      }
    }
  }

  /**
   * TODO
   *
   * @param {RowFormatter} formatter The formatter for each row.
   */
  setRowFormatter(formatter: RowFormatter)
  {
    this.rowFormatter = formatter;
  }

  /**
   * Adds a column to the data source.
   *
   * This turns off auto-generation of columns.
   *
   * Retriever functions:
   *
   * The `retriever` function, if specified, needs to support a single `row`
   * argument, which will be the JavaScript object being processed.  The
   * retriever function is expected to return an object that can either be
   * displayed as-is (e.g. a string) or that can be further processed by
   * a formatter function.
   *
   * Retriever functions are useful for creating virtual columns, such
   * as a full name composed of multiple name fields.  If indexing is enabled,
   * the indexed keywords will be extracted from the value returned by the
   * retriever function.
   *
   * Formatter functions:
   *
   * The formatter can be as simple or as complex as you like.  A generic
   * formatter might take a date `value` and return a more friendly string,
   * ignoring the `field` and `row` arguments.  A more specific formatter
   * might pull multiple fields from the `row` data and combine them into
   * a single value (such as a permalink combined with a name to form a
   * hyperlink).
   *
   * Comparator functions:
   *
   * The `comparator` function is called when a table view needs to sort
   * the items in the model.  By default, a generic JavaScript sort will
   * be used; the `comparator` function overrides this.
   *
   * The function should compare the two items and return one of the
   * following integer values:
   *
   *   - `-1` if the first item comes before the second one
   *   - `0` if the two items are equal
   *   - `1` if the first item comes after the second one
   *
   * As with the `formatter` function, the comparator can be a generic one
   * that simply compares the two values, or it can be more specific and
   * compare multiple fields from the rows (e.g. a last name and a first
   * name).
   *
   * @param {NewColumn} newColumn The column definition to add to this data source.
   */
  addColumn(newColumn: NewColumn)
  {
    // Build a default retriever in case one wasn't provided in the new
    // column definition.
    const _retriever = eval(
      '({ retriever: function(row) { ' +
      'try { return row["' + newColumn.field + '"] }' +
      'catch(ex) { return null }' +
      '}})'
    ).retriever;

    // Mix together a set of defaults for potential missing fields that are
    // required. If provided in `newColumn` it will overwrite the defaults.
    // Thus we ensure the complete set of required fields.
    const column: Column = (Object.assign({}, {
      retriever: _retriever,
      isRowHeader: false,
      classNames: []
    }, newColumn): any);

    this.columns.push(column);
  }


  /**
   * Turns on keyword index support for the table.  This will cause
   * {@link Table} to automatically display an instant-find box for
   * filtering data.
   *
   * If columns have not been defined manually, they will be auto-generated
   * at this point.
   */
  enableIndex()
  {
    if (this.columns.length === 0) this.generateColumns();
    if (this.data.length > 0) this._indexData();
  }

  /**
   * Returns the {@link KeywordIndex} used by this data source.
   *
   * @returns {KeywordIndex}
   */
  getKeywordIndex(): ?KeywordIndex
  {
    return this.keywordIndex;
  }

  /**
   * @private
   *
   * Fills the {@link KeywordIndex} with values from the array.
   *
   * This method will also associate words like "today" and "tomorrow" with
   * their appropriate date values.
   */
  _indexData()
  {
    const keywordIndex = new KeywordIndex();

    // Add some helper terms like "today" and "tomorrow" to help match dates.
    const today = stripTimeFromDate(new Date());
    const yesterday = new Date(today - 86400000);

    // Loop through the data row-by-row and column-by-column.
    let value, dateValue, terms;
    this.data.forEach((row, rowIndex) => {
      this.columns.forEach((column) => {
        // Call the internal retriever to get the value.
        value = column.retriever(row);
        // Check the value type to handle special cases.
        if (value === null) {
          // If the value is null, treat it as an empty string.
          value = "";
        }
        if (value.constructor === Date) {
          // If the value is a Date, then perform some transformations before
          // adding it to the index.
          dateValue = stripTimeFromDate(value);
          // Look to see if the date is today.
          if (dateValue === today) {
            keywordIndex.associateKeywordWithIdentifier("today", rowIndex);
          }
          else if (dateValue === yesterday) {
            keywordIndex.associateKeywordWithIdentifier("yesterday", rowIndex);
          }
          // Index the locale-specific date string. This is generally how the
          // date will be displayed in the table anyway.
          value = dateValue.toLocaleDateString();
          keywordIndex.associateKeywordWithIdentifier(value, rowIndex);
        }
        else {
          // If we get here, then the value does not need to be handled specially.
          // Split the string by spaces and index each term.
          terms = value.toString().split(/[^\w]/);
          terms.forEach((term) => {
            if (term.length > 0) {
              keywordIndex.associateKeywordWithIdentifier(term, rowIndex);
            }
          });
        }
      });
    });

    // All the data has been added to the index. Pre-optimize it for searching.
    keywordIndex.prepareForSearch();
    this.keywordIndex = keywordIndex;
  }
}
