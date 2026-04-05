import React from "react";
import Table, {
  TableRow,
  TableCell,
  TableHeaderCell
} from './index';

module.exports = (
  <div>
    <Table caption="Borderless table">
      <thead>
        <TableRow>
          <TableHeaderCell>Tax year</TableHeaderCell>
          <TableHeaderCell>Tax type</TableHeaderCell>
          <TableHeaderCell>You owe</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>2018</TableCell>
          <TableCell>1040</TableCell>
          <TableCell>$1,921.21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2018</TableCell>
          <TableCell>Shared Responsibility Payment</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2017</TableCell>
          <TableCell>1040</TableCell>
          <TableCell>$210.82</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2016</TableCell>
          <TableCell>Form 5329</TableCell>
          <TableCell>$5,599.37</TableCell>
        </TableRow>
      </tbody>
    </Table>

    <Table caption="Bordered table" bordered>
      <thead>
        <TableRow>
          <TableHeaderCell>Tax year</TableHeaderCell>
          <TableHeaderCell>Tax type</TableHeaderCell>
          <TableHeaderCell>You owe</TableHeaderCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>2018</TableCell>
          <TableCell>1040</TableCell>
          <TableCell>$1,921.21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2018</TableCell>
          <TableCell>Shared Responsibility Payment</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2017</TableCell>
          <TableCell>1040</TableCell>
          <TableCell>$210.82</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2016</TableCell>
          <TableCell>1040</TableCell>
          <TableCell>$599.37</TableCell>
        </TableRow>
      </tbody>
    </Table>
  </div>
);
