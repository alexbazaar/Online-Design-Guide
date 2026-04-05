import { EmbedStyles } from "../../helpers/utilities";
import Button from "./Button";
import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";
import TextButton from "./TextButton";
import styles from "./Button.scss";

const styledFilledButton = EmbedStyles(styles)(FilledButton);
const styledOutlinedButton = EmbedStyles(styles)(OutlinedButton);
const styledTextButton = EmbedStyles(styles)(TextButton);

export default EmbedStyles(styles)(Button);
export {
  styledFilledButton as FilledButton,
  styledOutlinedButton as OutlinedButton,
  styledTextButton as TextButton
};
