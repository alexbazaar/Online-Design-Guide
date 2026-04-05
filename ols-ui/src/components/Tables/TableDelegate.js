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

import Table from './Table.js';

// eslint-disable-next-line no-unused-vars
/* global TableDelegate */
/**
 * The interface for any object that can be supplied as the `delegate` for
 * a table.
 *
 * @typedef {object} TableDelegate
 * @property {function} tableRowSelectionDidChange
 * @property {function} tableDidSortOnColumn
 */
export interface TableDelegate {
  tableRowSelectionDidChange(params: { table: Table }): void;
  tableDidSortOnColumn(params: { table: Table, columnIndex: number }): void;
}
