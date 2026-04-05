import { EmbedStyles } from "../../helpers/utilities";
import Table from "./Table";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";
import ArrayTableDataSource from "./ArrayTableDataSource";
import { TableDataSource } from "./TableDataSource";
import { TableDelegate } from "./TableDelegate";
import TableColumn from "./TableColumn";
import RowFormatter from "./RowFormatter";
import styles from "./Tables.scss";

const _TableHeaderCell = EmbedStyles(styles)(TableHeaderCell);

export default EmbedStyles(styles)(Table);
export { _TableHeaderCell as TableHeaderCell };
export {
  TableColumn,
  TableRow,
  TableCell,
  ArrayTableDataSource,
  TableDataSource,
  TableDelegate,
  RowFormatter
};
