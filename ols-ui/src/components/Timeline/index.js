import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Timeline.scss";

import Timeline from "./Timeline";
import UnstyledTimelineItem from "./TimelineItem";

const TimelineItem = EmbedStyles(styles)(UnstyledTimelineItem);

export { Timeline, TimelineItem };
