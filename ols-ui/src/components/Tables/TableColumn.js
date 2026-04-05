// @flow

import React from "react";
import type { NewColumn } from "./types";

type TableColumnProps = NewColumn;

/**
 *
 */
export default class TableColumn extends React.Component<TableColumnProps> {

  /**
   * This is a data-only component with no visual output.
   * @returns {null}
   */
  render() {
    return null;
  }

}
