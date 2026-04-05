/**
 * A function that takes a value and returns the appropriate string to represent
 * that value in the table.
 *
 * @typedef {function} Formatter
 * @param {string} value The raw value.
 * @param {Object[]} addtl Additional values.
 * @param {string} addtl[].field The name of the field.
 * @param {Datum} addtl[].row The full data for the row.
 * @returns {string} The value to display in the table.
 */
export type Formatter = (value: string, addtl: { field: string, row: Datum }) => string;

/**
 * A function that takes in the data for a whole row and returns an array of
 * CSS class names that should be applied to the whole row.
 *
 * For example, if rendering an email inbox view, you could apply a bold text
 * style to any rows representing an unread email.
 *
 * @typedef {function} RowFormatter
 * @param {number} rowIndex The index of the row.
 *
 * @returns {Array<string>}
 */
export type RowFormatter = (row: Object) => Array<string>;

/**
 * A function that will take two values and return `-1`, `0`, or `1` to indicate
 * whether the first item belongs above, below, or similar to the second item.
 *
 * @typedef {function} Comparator
 * @param {string} v1 The first value.
 * @param {string} v2 The second value.
 * @param {Object[]} addtl Additional values used to perform the sort.
 * @param {string} addtl[].field The name of the field being compared.
 * @param {Datum} addtl[].lowerRow The full row for the first item.
 * @param {Datum} addtl[].upperRow The full row for the second item.
 * @returns {number} A number suitable for sorting.
 */
export type Comparator = (v1: string, v2: string, addtl: { field: string, lowerRow: Datum, upperRow: Datum }) => -1 | 0 | 1;

/**
 * A function that will return the value used for a particular column.
 *
 * NOTE: This function is the fundamental retriever of a value. This differs from
 * a {@link Formatter} in that the value returned by this function is used for
 * sorting and other raw data actions. This method should only be supplied if
 * the raw value provided by the data needs some massaging. If only the display
 * value needs massaging (e.g. for dates), you should use a {@link Formatter}.
 *
 * @typedef {function} Retriever
 * @params {Datum} row The data for the whole row.
 * @returns {any} The raw value to be used for this row + column.
 */
export type Retriever = (row: Datum) => any;

/**
 * Represents a column in a {@link TableDataSource}.
 *
 * @typedef {object} Column
 * @property {string} title The value of the column header displayed in the table.
 * @property {string} field The field in the object that contains the value.
 * @property {boolean} isRowHeader Indicates whether this column should be treated
 *                                 as a row header (e.g. use a `<th>` element).
 * @property {Formatter|null} formatter The formatter for this column.
 * @property {Comparator|null} comparator The comparator for this column.
 * @property {Retriever} retriever The retriever for this column.
 */
export type Column = {
  title: string,
  field: string,
  isRowHeader: boolean,
  formatter: ?Formatter,
  comparator: ?Comparator,
  retriever: Retriever,
  classNames: Array<string>,
  dataType: ?string
};

/**
 * Fields necessary to add a new column in a {@link TableDataSource}.
 *
 * @typedef {object} NewColumn
 * @property {any} title The value of the column header displayed in the table.
 * @property {string} field The field in the object that contains the value.
 * @property {boolean|null} isRowHeader Indicates whether this column should be
 *                                      treated as a row header (e.g. use a
 *                                      `<th>` element).
 * @property {Formatter|null} formatter The formatter for this column.
 * @property {Comparator|null} comparator The comparator for this column.
 * @property {Retriever|null} retriever The retriever for this column.
 */
export type NewColumn = {
  title: any,
  field: string,
  isRowHeader?: boolean,
  formatter?: Formatter,
  comparator?: Comparator,
  retriever?: Retriever,
  classNames?: Array<string>,
  dataType?: string
};

/**
 * Represents the data for a single row in a table.
 *
 * @typedef {object} Datum
 */
export type Datum = {
  [key: string]: any
};

/**
 * The map of rows in the data source to rows that should be visible based on
 * the current search term.
 *
 * @typedef {Set} VisibilityMap
 */
export type VisibilityMap = Set<number>;
