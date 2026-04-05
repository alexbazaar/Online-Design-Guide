import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Footer.scss";

import Footer from "./Footer";
import FooterTop from "./FooterTop";
import FooterTopGroup from "./FooterTopGroup";
import FooterTopGroupItem from "./FooterTopGroupItem";
import MobileFooterGroup from "./MobileFooterGroup";

export default EmbedStyles(styles)(Footer);
export { FooterTop, FooterTopGroup, FooterTopGroupItem, MobileFooterGroup };
