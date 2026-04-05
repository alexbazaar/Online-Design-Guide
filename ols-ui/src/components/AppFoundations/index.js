import { EmbedStyles } from "../../helpers/utilities";
import styles from "./AppFoundations.scss";
import AppWrapper from "./AppWrapper";
import Page from "./Page";
import MainContent from "./MainContent";

const _AppWrapper = EmbedStyles(styles)(AppWrapper);
const _Page = EmbedStyles(styles)(Page);
const _MainContent = EmbedStyles(styles)(MainContent);

export {
  _AppWrapper as AppWrapper,
  _Page as Page,
  _MainContent as MainContent
};
