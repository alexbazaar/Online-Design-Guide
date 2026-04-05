import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Sidebar.scss";

import UnstyledSidebar from "./Sidebar";
import UnstyledSidebarLink from "./SidebarLink";
import UnstyledSidebarGroup from "./SidebarGroup";
import SidebarCollapsible from "./SidebarCollapsible";

const Sidebar = EmbedStyles(styles)(UnstyledSidebar);
const SidebarLink = EmbedStyles(styles)(UnstyledSidebarLink);
const SidebarGroup = EmbedStyles(styles)(UnstyledSidebarGroup);

export { Sidebar, SidebarLink, SidebarGroup, SidebarCollapsible };
