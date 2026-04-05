// @flow

import React from "react";
import type { RowFormatter } from "./types";

type RowFormatterProps = {
  formatter: RowFormatter
};

/**
 *
 */
export default class RowFormatterComponent extends React.Component<RowFormatterProps> {

  /**
   * This is a data-only component with no visual output.
   * @returns {null}
   */
  render() {
    return null;
  }

}
