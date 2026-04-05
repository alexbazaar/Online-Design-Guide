import { EmbedStyles } from "../../helpers/utilities";
import NavBar from "./NavBar";
import NavBarItem from "./NavBarItem";
import styles from "./NavBar.scss";

const styledNavBarItem = EmbedStyles(styles)(NavBarItem);

export default EmbedStyles(styles)(NavBar);
export { styledNavBarItem as NavBarItem };
