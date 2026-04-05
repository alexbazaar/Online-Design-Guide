import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { Sidebar, SidebarLink } from "../../../ols-ui/src/components/Sidebar";
import Panel from "../../../ols-ui/src/components/Panel";

import MainContentTemplate from "../components/MainContentTemplate";

import Colors from "../components/Colors";
import Typography from "../components/Typography";
import Spacing from "../components/Spacing";
import Grid from "../components/Grid";
import Icons from "../components/Icons";
import FocusState from "../components/FocusState";
import Principles from "../components/Principles";
import Resources from "../components/Resources";

import styles from "../styles/DesignStyle.scss";

/**
 * [DesignStyle description]
 * @constructor
 */
function DesignStyle() {

  const DesignStyleClass = buildClassList({
    [styles.mainContentMargin]: true,
    [styles["main-design-style"]]: true
  });

  return (
    <MainContentTemplate hasFullWidthStyle={false}>
      <div className={DesignStyleClass}>
        <FlexContainer>
          <div className={styles.outerWrapper}>
            <div className={styles.sidebarWrapper}>
              <Sidebar id="main-sidebar">
                <SidebarLink label="Colors" to="/styles/colors" />
                <SidebarLink label="Typography" to="/styles/typography" />
                <SidebarLink label="Element spacing" to="/styles/element-spacing" />
                <SidebarLink label="Grid system" to="/styles/grid-system" />
                <SidebarLink label="Iconography" to="/styles/iconography" />
                <SidebarLink label="Focus state" to="/styles/focus-state" />
                <SidebarLink label="Design principles" to="/styles/design-principles" />
                <SidebarLink label="Resources" to="/styles/resources" />
              </Sidebar>
            </div>
              <div id="main-content" className={styles.contentWrapper}>
                <Panel className="body-panel" padding="none" borderless>
                  <Switch>
                    <Route path="/styles/colors" component={Colors} />
                    <Route path="/styles/typography" component={Typography} />
                    <Route path="/styles/element-spacing" component={Spacing} />
                    <Route path="/styles/grid-system" component={Grid} />
                    <Route path="/styles/iconography" component={Icons} />
                    <Route path="/styles/focus-state" component={FocusState} />
                    <Route path="/styles/design-principles" component={Principles} />
                    <Route path="/styles/resources" component={Resources} />
                    <Route path="/styles/*" render={() => <Redirect to="/not-found" />} />

                    <Route path="/styles/" render={() => <Redirect to="/styles/colors" />} />
                    <Route path="/styles" render={() => <Redirect to="/styles/colors" />} />
                    
                  </Switch>
                </Panel>
              </div>
          </div>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(DesignStyle));
