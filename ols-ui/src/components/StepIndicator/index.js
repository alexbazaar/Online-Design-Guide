import { EmbedStyles } from "../../helpers/utilities";
import styles from "./StepIndicator.scss";

import UnstyledStepIndicator from "./StepIndicator";
import UnstyledStepIndicatorItem from "./StepIndicatorItem";

const StepIndicatorItem = EmbedStyles(styles)(UnstyledStepIndicatorItem);
const StepIndicator = EmbedStyles(styles)(UnstyledStepIndicator);

export default StepIndicator;
export { StepIndicatorItem };
