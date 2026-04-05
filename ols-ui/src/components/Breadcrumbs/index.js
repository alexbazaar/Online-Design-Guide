import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Breadcrumbs.scss";

import UnstyledBreadcrumbs from "./Breadcrumbs";
import UnstyledBreadcrumbItem from "./BreadcrumbItem";

const Breadcrumbs = EmbedStyles(styles)(UnstyledBreadcrumbs);
const BreadcrumbItem = EmbedStyles(styles)(UnstyledBreadcrumbItem);

export { Breadcrumbs, BreadcrumbItem };
