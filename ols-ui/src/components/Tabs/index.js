import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Tabs.scss";

import Tabs from "./Tabs";
import TabList from "./TabList";
import TabButton from "./TabButton";
import TabPanels from "./TabPanels";
import TabPanel from "./TabPanel";

const _TabList = EmbedStyles(styles)(TabList);
const _TabButton = EmbedStyles(styles)(TabButton);
const _TabPanels = EmbedStyles(styles)(TabPanels);
const _TabPanel = EmbedStyles(styles)(TabPanel);

export default EmbedStyles(styles)(Tabs);
export {
  _TabList as TabList,
  _TabButton as TabButton,
  _TabPanels as TabPanels,
  _TabPanel as TabPanel
};
