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
import PropTypes from "prop-types";
import { buildClassList } from '../../helpers/utilities';
import { SortAscIcon, SortDescIcon } from "../Icons";
import styles from "./Tables.scss";


/**
 * [SortIcon description]
 * @param {object} props - the props
 * @returns {node} DOM node
 */
function SortIcon(props) {
  const { sortDirection } = props;

  switch (sortDirection) {
    case "asc":
      return <SortAscIcon unstyled className={buildClassList([ styles.sortIcon, styles.ascSortIcon ])} />;
    case "desc":
      return <SortDescIcon unstyled className={buildClassList([ styles.sortIcon, styles.descSortIcon ])} />;
    default:
      return null;
  }
}

SortIcon.propTypes = {
  sortDirection: PropTypes.oneOf([ "", "asc", "desc" ])
};


/**
 * A table header cell element.
 *
 * @param {object} props The props.
 * @returns {React$Element} The rendered table header cell.
 */
export default function TableHeaderCell(props: { [any]: any }) {
  const { children, sortDirection, sortable, ...otherProps } = props;

  return (
    <th
      data-component="TableHeaderCell"
      className={sortable ? styles.sortable : null}
      {...otherProps}
    >
      <span className={styles.inner}>
        {children}
        <SortIcon sortDirection={sortDirection} />
      </span>
    </th>
  );
}

TableHeaderCell.propTypes = {
  scope: PropTypes.oneOf([
    'col',
    'row'
  ]).isRequired,
  children: PropTypes.node.isRequired,
  sortable: PropTypes.bool,
  sortDirection: PropTypes.oneOf([ "", "asc", "desc" ])
};

TableHeaderCell.defaultProps = {
  scope: 'row',
  sortable: false,
  sortDirection: ""
};
