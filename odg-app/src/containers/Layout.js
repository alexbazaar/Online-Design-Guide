import React from "react";
import { withRouter } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
// import { Sidebar, SidebarLink } from "../../../ols-ui/src/components/Sidebar";
import Panel from "../../../ols-ui/src/components/Panel";
import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * [Layout description]
 * @constructor
 */
function Layout() {
  return (
    <MainContentTemplate>
      <div className={styles.mainContentMargin}>
        <FlexContainer>
          <div className={styles.outerWrapper}>
            <aside className={styles.sidebarWrapper}>
            </aside>
            <div id="main-content" className={styles.contentWrapper}>
              <Panel className="body-panel" padding="none" borderless>
                <h2 className={styles.title}>
                  Layout Placeholder
                </h2>
              </Panel>
            </div>
          </div>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(Layout));
