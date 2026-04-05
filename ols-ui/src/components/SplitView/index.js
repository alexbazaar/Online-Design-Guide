import { EmbedStyles } from "../../helpers/utilities";
import styles from "./SplitView.scss";

import UnstyledSplitView from "./SplitView";
import UnstyledSplitViewSegment from "./SplitViewSegment";
const SplitViewSegment = EmbedStyles(styles)(UnstyledSplitViewSegment);

export default EmbedStyles(styles)(UnstyledSplitView);
export { SplitViewSegment };
