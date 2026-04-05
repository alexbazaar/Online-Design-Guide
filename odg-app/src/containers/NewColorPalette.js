import React from "react";

import Link from "../../../ols-ui/src/components/Links";

import { InfoAlert } from "../../../ols-ui/src/components/Alerts";

import styles from "../styles/App.scss";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

/**
 * [NotFound404 description]
 * @constructor
 */
function NewColorPalette() {
  return (
    <div>
      <InfoAlert title="New Color Palette" id="info">
      On June 30, 2020, the Online Design Guide adopted the new IRS Patriotic Color Theme. All elements have been updated to reflect the new theme. For  more information about what has changed, please visit the <Link to="/styles/colors">Colors</Link> page.
      </InfoAlert>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(NewColorPalette));
