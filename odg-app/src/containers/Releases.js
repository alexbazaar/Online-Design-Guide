import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { Sidebar, SidebarLink, SidebarGroup } from "../../../ols-ui/src/components/Sidebar";

import MainContentTemplate from "../components/MainContentTemplate";
import Panel from "../../../ols-ui/src/components/Panel";

import Unreleased from "../components/releases/Unreleased";
import Version1_1_0 from "../components/releases/Version1_1_0";
import Version2_0_0 from "../components/releases/Version2_0_0";
import Version2_1_0 from "../components/releases/Version2_1_0";
import Version2_2_0 from "../components/releases/Version2_2_0";
import Version2_3_0 from "../components/releases/Version2_3_0";
import Version2_3_1 from "../components/releases/Version2_3_1";
import Version2_4_0 from "../components/releases/Version2_4_0";
import Version2_5_0 from "../components/releases/Version2_5_0";
import Version2_5_1 from "../components/releases/Version2_5_1";
import Version2_5_2 from "../components/releases/Version2_5_2";
import Version2_5_3 from "../components/releases/Version2_5_3";
import Version2_5_4 from "../components/releases/Version2_5_4";
import Version2_5_5 from "../components/releases/Version2_5_5";
import Version2_5_6 from "../components/releases/Version2_5_6";
import Version2_5_7 from "../components/releases/Version2_5_7";
import Version3_0_0 from "../components/releases/Version3_0_0";
import Version3_0_1 from "../components/releases/Version3_0_1";
import Version3_0_2 from "../components/releases/Version3_0_2";
import Version3_0_3 from "../components/releases/Version3_0_3";
import Version3_0_4 from "../components/releases/Version3_0_4";
import Version3_1_0 from "../components/releases/Version3_1_0";
import Version3_2_0 from "../components/releases/Version3_2_0";
import Version3_3_0 from "../components/releases/Version3_3_0";
import Version3_3_1 from "../components/releases/Version3_3_1";
import Version3_4_0 from "../components/releases/Version3_4_0";
import Version3_4_1 from "../components/releases/Version3_4_1";
import Version3_4_2 from "../components/releases/Version3_4_2";
import Version3_5_0 from "../components/releases/Version3_5_0";
import Version3_5_1 from "../components/releases/Version3_5_1";
import Version3_6_0 from "../components/releases/Version3_6_0";
import Version3_7_0 from "../components/releases/Version3_7_0";
import Version3_7_1 from "../components/releases/Version3_7_1";
import Version4_0_0 from "../components/releases/Version4_0_0";
import Version4_0_1 from "../components/releases/Version4_0_1";
import Version4_1_0 from "../components/releases/Version4_1_0";
import Version4_2_0 from "../components/releases/Version4_2_0";
import Version4_3_0 from "../components/releases/Version4_3_0";
import Version4_3_1 from "../components/releases/Version4_3_1";

import styles from "../styles/Releases.scss";

/**
 * *****************************************************************************
 * Releases section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Releases() {

  const ReleasesClass = buildClassList({
    [styles.mainContentMargin]: true,
    [styles["main-releases-style"]]: true
  });

  return (
    <MainContentTemplate hasFullWidthStyle={false}>
      <div className={ReleasesClass}>
        <FlexContainer>
          <div className={styles.outerWrapper}>
            <div className={styles.sidebarWrapper}>
              <Sidebar id="main-sidebar">
                <SidebarGroup label="Releases">
                  <SidebarLink label="Version 4.3.1" to="/releases/Version4_3_1" />
                  <SidebarLink label="Version 4.3.0" to="/releases/Version4_3_0" />
                  <SidebarLink label="Version 4.2.0" to="/releases/Version4_2_0" />
                  <SidebarLink label="Version 4.1.0" to="/releases/Version4_1_0" />
                  <SidebarLink label="Version 4.0.1" to="/releases/Version4_0_1" />
                  <SidebarLink label="Version 4.0.0" to="/releases/Version4_0_0" />
                  <SidebarLink label="Version 3.7.1" to="/releases/Version3_7_1" />
                  <SidebarLink label="Version 3.7.0" to="/releases/Version3_7_0" />
                  <SidebarLink label="Version 3.6.0" to="/releases/Version3_6_0" />
                  <SidebarLink label="Version 3.5.1" to="/releases/Version3_5_1" />
                  <SidebarLink label="Version 3.5.0" to="/releases/Version3_5_0" />
                  <SidebarLink label="Version 3.4.2" to="/releases/Version3_4_2" />
                  <SidebarLink label="Version 3.4.1" to="/releases/Version3_4_1" />
                  <SidebarLink label="Version 3.4.0" to="/releases/Version3_4_0" />
                  <SidebarLink label="Version 3.3.1" to="/releases/Version3_3_1" />
                  <SidebarLink label="Version 3.3.0" to="/releases/Version3_3_0" />
                  <SidebarLink label="Version 3.2.0" to="/releases/Version3_2_0" />
                  <SidebarLink label="Version 3.1.0" to="/releases/Version3_1_0" />
                  <SidebarLink label="Version 3.0.4" to="/releases/Version3_0_4" />
                  <SidebarLink label="Version 3.0.3" to="/releases/Version3_0_3" />
                  <SidebarLink label="Version 3.0.2" to="/releases/Version3_0_2" />
                  <SidebarLink label="Version 3.0.1" to="/releases/Version3_0_1" />
                  <SidebarLink label="Version 3.0.0" to="/releases/Version3_0_0" />
                  <SidebarLink label="Version 2.5.7" to="/releases/Version2_5_7" />
                  <SidebarLink label="Version 2.5.6" to="/releases/Version2_5_6" />
                  <SidebarLink label="Version 2.5.5" to="/releases/Version2_5_5" />
                  <SidebarLink label="Version 2.5.4" to="/releases/Version2_5_4" />
                  <SidebarLink label="Version 2.5.3" to="/releases/Version2_5_3" />
                  <SidebarLink label="Version 2.5.2" to="/releases/Version2_5_2" />
                  <SidebarLink label="Version 2.5.1" to="/releases/Version2_5_1" />
                  <SidebarLink label="Version 2.5.0" to="/releases/Version2_5_0" />
                  <SidebarLink label="Version 2.4.0" to="/releases/Version2_4_0" />
                  <SidebarLink label="Version 2.3.1" to="/releases/Version2_3_1" />
                  <SidebarLink label="Version 2.3.0" to="/releases/Version2_3_0" />
                  <SidebarLink label="Version 2.2.0" to="/releases/Version2_2_0" />
                  <SidebarLink label="Version 2.1.0" to="/releases/Version2_1_0" />
                  <SidebarLink label="Version 2.0.0" to="/releases/Version2_0_0" />
                  <SidebarLink label="Version 1.1.0" to="/releases/Version1_1_0" />
                </SidebarGroup>

              </Sidebar>
            </div>
            <div id="main-content" className={styles.contentWrapper}>
              <Panel  className="body-panel" padding="none" borderless>
                <Switch>
                  {/* Unreleased */}
                  <Route path="/releases/unreleased" component={Unreleased} />

                  {/* Released */}
                  <Route path="/releases/Version4_3_1" component={Version4_3_1} />
                  <Route path="/releases/Version4_3_0" component={Version4_3_0} />
                  <Route path="/releases/Version4_2_0" component={Version4_2_0} />
                  <Route path="/releases/Version4_1_0" component={Version4_1_0} />
                  <Route path="/releases/Version4_0_1" component={Version4_0_1} />
                  <Route path="/releases/Version4_0_0" component={Version4_0_0} />
                  <Route path="/releases/Version3_7_1" component={Version3_7_1} />
                  <Route path="/releases/Version3_7_0" component={Version3_7_0} />
                  <Route path="/releases/Version3_6_0" component={Version3_6_0} />
                  <Route path="/releases/Version3_5_1" component={Version3_5_1} />
                  <Route path="/releases/Version3_5_0" component={Version3_5_0} />
                  <Route path="/releases/Version3_4_2" component={Version3_4_2} />
                  <Route path="/releases/Version3_4_1" component={Version3_4_1} />
                  <Route path="/releases/Version3_4_0" component={Version3_4_0} />
                  <Route path="/releases/Version3_3_1" component={Version3_3_1} />
                  <Route path="/releases/Version3_3_0" component={Version3_3_0} />
                  <Route path="/releases/Version3_2_0" component={Version3_2_0} />
                  <Route path="/releases/Version3_1_0" component={Version3_1_0} />
                  <Route path="/releases/Version3_0_4" component={Version3_0_4} />
                  <Route path="/releases/Version3_0_3" component={Version3_0_3} />
                  <Route path="/releases/Version3_0_2" component={Version3_0_2} />
                  <Route path="/releases/Version3_0_1" component={Version3_0_1} />
                  <Route path="/releases/Version3_0_0" component={Version3_0_0} />
                  <Route path="/releases/Version2_5_7" component={Version2_5_7} />
                  <Route path="/releases/Version2_5_6" component={Version2_5_6} />
                  <Route path="/releases/Version2_5_5" component={Version2_5_5} />
                  <Route path="/releases/Version2_5_4" component={Version2_5_4} />
                  <Route path="/releases/Version2_5_3" component={Version2_5_3} />
                  <Route path="/releases/Version2_5_2" component={Version2_5_2} />
                  <Route path="/releases/Version2_5_1" component={Version2_5_1} />
                  <Route path="/releases/Version2_5_0" component={Version2_5_0} />
                  <Route path="/releases/Version2_4_0" component={Version2_4_0} />
                  <Route path="/releases/Version2_3_1" component={Version2_3_1} />
                  <Route path="/releases/Version2_3_0" component={Version2_3_0} />
                  <Route path="/releases/Version2_2_0" component={Version2_2_0} />
                  <Route path="/releases/Version2_1_0" component={Version2_1_0} />
                  <Route path="/releases/Version2_0_0" component={Version2_0_0} />
                  <Route path="/releases/Version1_1_0" component={Version1_1_0} />
                  <Route path="/releases/*" render={()=> <Redirect to="/not-found" />}/>
                  <Route path="/releases" render={() => <Redirect to="/releases/Version4_3_1" />}/>

                </Switch>
              </Panel>
            </div>
          </div>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(Releases));
