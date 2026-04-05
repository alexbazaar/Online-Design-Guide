import React from "react";
import PropTypes from "prop-types";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import FocusManager from "../../../ols-ui/src/components/FocusManager";

import styles from "../styles/App.scss";

/**
 * MainContentTemplate Elements section
   * @param  {[type]} props    [description]
 * @returns {node} DOM node
 */
function MainContentTemplate(props) {

  const { children, hasFullWidthStyle, ...otherProps } = props;
  /*
  *  Added MainClass wrapper and FocusManager to individual templates
  *  Allows for the Route-specific classes/styles and sets the container height to 100%.
   */
  const mainClasses = buildClassList({
    [styles.mainContent]: true,
    [styles.defaultPageWrapper]: hasFullWidthStyle
  });

  return (
    <div role="main" tabIndex="-1" className={mainClasses} {...otherProps}>
      <FocusManager>
        {children}
      </FocusManager>
    </div>
  );
}


MainContentTemplate.propTypes = {
  children: PropTypes.node,
  hasFullWidthStyle: PropTypes.bool
};

MainContentTemplate.defaultProps = {
  hasFullWidthStyle: true
};

export default EmbedStyles(styles)(MainContentTemplate);
