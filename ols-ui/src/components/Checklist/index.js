import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Checklist.scss";

import UnstyledChecklist from "./Checklist";
import UnstyledChecklistItem from "./ChecklistItem";

const Checklist = EmbedStyles(styles)(UnstyledChecklist);
const ChecklistItem = EmbedStyles(styles)(UnstyledChecklistItem);

export { Checklist, ChecklistItem };
