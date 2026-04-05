import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import Panel from "../../../ols-ui/src/components/Panel";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import Header from "../components/Header";

import IRSHeader, { IRSHeaderNavItem } from 'ols-ui/irs-header';
import SearchField from "../../../ols-ui/src/components/SearchField";
import { NavBarItem } from "../../../ols-ui/src/components/NavBar";

/**
 * [Buttons Test description]
 * @constructor
 */
function HeaderTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <div style={{ width: '100%' }}>
        <Panel
          padding="normal"
          maxheight="medium">

          <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Fragment>
              <IRSHeader
                showOfficialSiteBanner={true}
                headerSearch={
                  <SearchField id="small-search" size="small" />
                }
                headerNavLinks={
                  <Fragment>
                    <IRSHeaderNavItem to="#">Link 1</IRSHeaderNavItem>
                    <IRSHeaderNavItem to="#">Link 2</IRSHeaderNavItem>
                  </Fragment>
                }
                headerNavButtons={
                  <Fragment>
                    <button
                      className="navBarButton"
                      type="button">
                        Button 1
                    </button>
                    <button
                      className="navBarButton"
                      type="button">
                        Button 2
                    </button>
                  </Fragment>
                }
                navBar={
                  <Fragment>
                    <NavBarItem to="/installation">
                        Desktop Nav 1
                    </NavBarItem>
                    <NavBarItem to="#">
                        Desktop Nav 2
                    </NavBarItem>
                    <NavBarItem to="#">
                        Desktop Nav 3
                    </NavBarItem>
                    <NavBarItem to="#">
                        Desktop Nav 4
                    </NavBarItem>
                    <NavBarItem to="#">
                        Desktop Nav 5
                    </NavBarItem>
                  </Fragment>
                }
              />
            </Fragment>
          </div>

        </Panel>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(HeaderTest));
