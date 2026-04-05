import React from 'react';
import { EmbedStyles } from '../../helpers/utilities';
import styles from "./DraftNotice.scss";


/**
 * DraftNotice - description
 *
 * @returns {type}  description
 */
function DraftNotice() {
  return (
    <div className={styles.draft}>
      DESIGN RESEARCH DRAFT
    </div>
  );
}

export default EmbedStyles(styles)(DraftNotice);
