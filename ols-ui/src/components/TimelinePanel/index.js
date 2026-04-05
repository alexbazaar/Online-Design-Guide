import { EmbedStyles } from "../../helpers/utilities";
import styles from "./TimelinePanel.scss";

import UnstyledTimelinePanel from "./TimelinePanel";
import UnstyledTimelinePanelItem from "./TimelinePanelItem";

const TimelinePanel = EmbedStyles(styles)(UnstyledTimelinePanel);
const TimelinePanelItem = EmbedStyles(styles)(UnstyledTimelinePanelItem);


/* eslint-disable no-console */
console.warn("🚨 TimelinePanel is deprecated. Use the `Timeline` component inside a `Panel` instead. 🚨");


export { TimelinePanel, TimelinePanelItem };
