import { EmbedStyles } from "../../helpers/utilities";
import List, { ListItem } from "./List";
import styles from "./List.scss";

const _ListItem = EmbedStyles(styles)(ListItem);

export default EmbedStyles(styles)(List);
export { _ListItem as ListItem };
