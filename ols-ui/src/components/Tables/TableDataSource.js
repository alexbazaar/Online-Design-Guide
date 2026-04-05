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

import { KeywordIndex } from "../../helpers/utilities";
import Table from './Table.js';

// eslint-disable-next-line no-unused-vars
/* global TableDataSource */
/**
 * The interface for any object that can be supplied as the `dataSource` for
 * a table.
 *
 * @typedef {object} TableDataSource
 * @property {function} numberOfRows (required)
 * @property {function} numberOfColumns (required)
 * @property {function} contentForCell (required)
 * @property {function} preload (optional)
 * @property {function} columnIsRowHeader (optional)
 * @property {function} sortRowsUsingColumn (optional)
 * @property {function} enableIndex (optional)
 * @property {function} getKeywordIndex (optional)
 */
export interface TableDataSource
{
  // Required.
  numberOfRows(params: { table: Table }): number;
  numberOfColumns(params: { table: Table }):  number;
  contentForCell(params: { table: Table, columnIndex: number, rowIndex: number }): string;
  // Optional
  preload(callback: (wasSuccessful: boolean) => void): void;
  columnIsRowHeader(params: { table: Table, columnIndex: number }): boolean;
  contentForColumnHeader(params: { table: Table, columnIndex: number }): string;
  cssClassNamesForColumn(params: { table: Table, columnIndex: number }): Array<string>;
  cssClassNamesForRow(params: { table: Table, rowIndex: number }): Array<string>;
  dataTypeForColumn(params: { table: Table, columnIndex: number }): ?string;
  sortRowsUsingColumn(params: { table: Table, columnIndex: number, upper: number, lower: number }): number;
  enableIndex(): void;
  getKeywordIndex(): ?KeywordIndex;
}
