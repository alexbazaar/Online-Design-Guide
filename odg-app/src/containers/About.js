import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { buildClassList } from "../../../ols-ui/src/helpers/utilities.js";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { Sidebar, SidebarLink, SidebarGroup } from "../../../ols-ui/src/components/Sidebar";

import MainContentTemplate from "../components/MainContentTemplate";
import Panel from "../../../ols-ui/src/components/Panel";

import Roadmap from './Roadmap';

import styles from "../styles/About.scss";
import FAQ from "./FAQ";

import NotFound404 from "./NotFound404";

/**
 * *****************************************************************************
 * About section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function About() {

  const AboutClass = buildClassList({
    [styles.mainContentMargin]: true,
    [styles["main-about-style"]]: true
  });

  return (
    <MainContentTemplate hasFullWidthStyle={false}>
      <div className={AboutClass}>
        <FlexContainer>
          <div className={styles.outerWrapper}>
            <div className={styles.sidebarWrapper}>
              <Sidebar>
                <SidebarLink label="Roadmap" to="/about/roadmap" />
                <SidebarLink label="FAQ" to="/about/faq" />
              </Sidebar>
            </div>
            <div id="main-content" className={styles.contentWrapper}>
              <Panel padding="none" borderless>
                <Switch>
                  <Route path="/about/roadmap" component={Roadmap} />
                  <Route path="/about/faq" component={FAQ} />}/>
                  
                  <Route path="/about/*" render={() => <Redirect to="/not-found" />}/>
                  <Route path="/about" render={() => <Redirect to="/about/roadmap" />}/>
                  <Route path="/about/" render={() => <Redirect to="/about/roadmap" />}/>
                </Switch>
              </Panel>
            </div>
          </div>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(About));
