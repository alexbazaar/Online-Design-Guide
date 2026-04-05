import { EmbedStyles } from "../../helpers/utilities";
import Tag from "./Tag";
import EmphasisTag from "./EmphasisTag";
import ClassificationTag from "./ClassificationTag";
import TextButton from "./TextButton";
import styles from "./Tag.scss";

const styledEmphasisTag = EmbedStyles(styles)(EmphasisTag);
const styledClassificationTag = EmbedStyles(styles)(ClassificationTag);
const styledTextButton = EmbedStyles(styles)(TextButton);

export default EmbedStyles(styles)(Tag);
export {
  styledEmphasisTag as EmphasisTag,
  styledClassificationTag as ClassificationTag,
  styledTextButton as TextButton
};
