import { EmbedStyles } from "../../helpers/utilities";
import styles from "./FlexGrid.scss";

import UnstyledFlexContainer from "./FlexContainer";
import UnstyledFlexRow from "./FlexRow";
import UnstyledFlexCol from "./FlexCol";

const FlexContainer = EmbedStyles(styles)(UnstyledFlexContainer);
const FlexRow = EmbedStyles(styles)(UnstyledFlexRow);
const FlexCol = EmbedStyles(styles)(UnstyledFlexCol);

export { FlexContainer, FlexRow, FlexCol };
