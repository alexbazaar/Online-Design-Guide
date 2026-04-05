import { EmbedStyles } from "../../helpers/utilities";
import styles from "./IRSHeader.scss";
import IRSHeader from "./IRSHeader";
import IRSHeaderNav from "./IRSHeaderNav";
import IRSHeaderNavGroup from "./IRSHeaderNavGroup";
import IRSHeaderNavItem from "./IRSHeaderNavItem";
import IRSHeaderMobile from "./IRSHeaderMobile";

const styledIRSHeaderNav = EmbedStyles(styles)(IRSHeaderNav);

export default EmbedStyles(styles)(IRSHeader);
export { styledIRSHeaderNav as IRSHeaderNav, IRSHeaderNavGroup, IRSHeaderNavItem, IRSHeaderMobile };
