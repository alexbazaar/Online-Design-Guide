import { EmbedStyles } from "../../helpers/utilities";
import Alert from "./Alert";
import styles from "./Alert.scss";
import ErrorAlert from "./ErrorAlert";
import InfoAlert from "./InfoAlert";
import SuccessAlert from "./SuccessAlert";
import WarningAlert from "./WarningAlert";

const _ErrorAlert = EmbedStyles(styles)(ErrorAlert);
const _InfoAlert = EmbedStyles(styles)(InfoAlert);
const _SuccessAlert = EmbedStyles(styles)(SuccessAlert);
const _WarningAlert = EmbedStyles(styles)(WarningAlert);

export default EmbedStyles(styles)(Alert);
export {
  _ErrorAlert as ErrorAlert,
  _InfoAlert as InfoAlert,
  _SuccessAlert as SuccessAlert,
  _WarningAlert as WarningAlert
};
