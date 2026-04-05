import { EmbedStyles } from "../../helpers/utilities";
import Link, { NavLink, ExternalLink, EmailLink } from "./Links";
import styles from "./Links.scss";

const styledExternalLink = EmbedStyles(styles)(ExternalLink);
const styledEmailLink = EmbedStyles(styles)(EmailLink);


export default EmbedStyles(styles)(Link);
export { NavLink, styledExternalLink as ExternalLink, styledEmailLink as EmailLink };
