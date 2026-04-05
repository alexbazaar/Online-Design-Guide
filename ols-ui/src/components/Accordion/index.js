import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Accordion.scss";

import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionItemTrigger from "./AccordionItemTrigger";
import AccordionItemBody from "./AccordionItemBody";

const _AccordionItem = EmbedStyles(styles)(AccordionItem);
const _AccordionItemTrigger = EmbedStyles(styles)(AccordionItemTrigger);
const _AccordionItemBody = EmbedStyles(styles)(AccordionItemBody);

export default EmbedStyles(styles)(Accordion);
export {
  _AccordionItem as AccordionItem,
  _AccordionItemTrigger as AccordionItemTrigger,
  _AccordionItemBody as AccordionItemBody
};
