import React from "react";
import { withRouter, Switch, Route } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

import { Sidebar, SidebarLink } from "../../../ols-ui/src/components/Sidebar";
import { FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import BlankTest from "../components/BlankTest";

/**
 * [Footer Test description]
 * @constructor
 */
function SideNavTest() {
  const blankPage = "/sidenav-test";

  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <FlexContainer style={{ marginTop: "16px" }}>
        <FlexRow>
          <div style={{ marginTop: "30px", width: "261px", marginRight: "24px" }}>
            <Sidebar>
              <SidebarLink label="Top level A" to={`${blankPage}/top-level-a`}>
                <SidebarLink
                  label="Secondary level A"
                  to={`${blankPage}/top-level-a/secondary-level-a`}
                >
                  <SidebarLink
                    label="Tertiary level A"
                    to={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-a`}
                  />
                  <SidebarLink
                    label="Tertiary level B"
                    to={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-b`}
                  />
                </SidebarLink>
                <SidebarLink
                  label="Secondary level B"
                  to={`${blankPage}/top-level-a/secondary-level-b`}
                />
                <SidebarLink
                  label="Secondary level C"
                  to={`${blankPage}/top-level-a/secondary-level-c`}
                />
              </SidebarLink>
              <SidebarLink label="Top level B" to={`${blankPage}/top-level-b`}>
                <SidebarLink
                  label="Secondary level A"
                  to={`${blankPage}/top-level-b/secondary-level-a`}
                >
                  <SidebarLink
                    label="Tertiary level A"
                    to={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-a`}
                  />
                  <SidebarLink
                    label="Tertiary level B"
                    to={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-b`}
                  />
                </SidebarLink>
                <SidebarLink
                  label="Secondary level B"
                  to={`${blankPage}/top-level-b/secondary-level-b`}
                />
                <SidebarLink
                  label="Secondary level C"
                  to={`${blankPage}/top-level-b/secondary-level-c`}
                />
              </SidebarLink>
              <SidebarLink label="Top level C" to={`${blankPage}/top-level-c`}>
                <SidebarLink
                  label="Secondary level A"
                  to={`${blankPage}/top-level-c/secondary-level-a`}
                >
                  <SidebarLink
                    label="Tertiary level A"
                    to={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-a`}
                  />
                  <SidebarLink
                    label="Tertiary level B"
                    to={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-b`}
                  />
                </SidebarLink>
                <SidebarLink
                  label="Secondary level B"
                  to={`${blankPage}/top-level-c/secondary-level-b`}
                />
                <SidebarLink
                  label="Secondary level C"
                  to={`${blankPage}/top-level-c/secondary-level-c`}
                />
              </SidebarLink>
              <SidebarLink label="Top level D" to={`${blankPage}/top-level-d`}>
                <SidebarLink
                  label="Secondary level A"
                  to={`${blankPage}/top-level-d/secondary-level-a`}
                >
                  <SidebarLink
                    label="Tertiary level A"
                    to={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-a`}
                  />
                  <SidebarLink
                    label="Tertiary level B"
                    to={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-b`}
                  />
                </SidebarLink>
                <SidebarLink
                  label="Secondary level B"
                  to={`${blankPage}/top-level-d/secondary-level-b`}
                />
                <SidebarLink
                  label="Secondary level C"
                  to={`${blankPage}/top-level-d/secondary-level-c`}
                />
              </SidebarLink>
              <SidebarLink label="Top level E" to={`${blankPage}/top-level-e`}>
                <SidebarLink
                  label="Secondary level A"
                  to={`${blankPage}/top-level-e/secondary-level-a`}
                >
                  <SidebarLink
                    label="Tertiary level A"
                    to={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-a`}
                  />
                  <SidebarLink
                    label="Tertiary level B"
                    to={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-b`}
                  />
                </SidebarLink>
                <SidebarLink
                  label="Secondary level B"
                  to={`${blankPage}/top-level-e/secondary-level-b`}
                />
                <SidebarLink
                  label="Secondary level C"
                  to={`${blankPage}/top-level-e/secondary-level-c`}
                />
              </SidebarLink>
            </Sidebar>
          </div>

          <div style={{ paddingTop: "16px" }}>
            <Switch>
              <Route
                path={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-a`}
                render={() => <BlankTest label="Tertiary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-b`}
                render={() => <BlankTest label="Tertiary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-a/secondary-level-a`}
                render={() => <BlankTest label="Secondary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-a/secondary-level-b`}
                render={() => <BlankTest label="Secondary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-a/secondary-level-c`}
                render={() => <BlankTest label="Secondary level C" />}
              />
              <Route path={`${blankPage}/top-level-a`} render={() => <BlankTest label={"Top level A"} />} />

              <Route
                path={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-a`}
                render={() => <BlankTest label="Tertiary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-b`}
                render={() => <BlankTest label="Tertiary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-b/secondary-level-a`}
                render={() => <BlankTest label="Secondary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-b/secondary-level-b`}
                render={() => <BlankTest label="Secondary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-b/secondary-level-c`}
                render={() => <BlankTest label="Secondary level C" />}
              />
              <Route path={`${blankPage}/top-level-b`} render={() => <BlankTest label={"Top level B"} />} />

              <Route
                path={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-a`}
                render={() => <BlankTest label="Tertiary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-b`}
                render={() => <BlankTest label="Tertiary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-c/secondary-level-a`}
                render={() => <BlankTest label="Secondary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-c/secondary-level-b`}
                render={() => <BlankTest label="Secondary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-c/secondary-level-c`}
                render={() => <BlankTest label="Secondary level C" />}
              />
              <Route path={`${blankPage}/top-level-c`} render={() => <BlankTest label={"Top level C"} />} />

              <Route
                path={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-a`}
                render={() => <BlankTest label="Tertiary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-b`}
                render={() => <BlankTest label="Tertiary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-d/secondary-level-a`}
                render={() => <BlankTest label="Secondary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-d/secondary-level-b`}
                render={() => <BlankTest label="Secondary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-d/secondary-level-c`}
                render={() => <BlankTest label="Secondary level C" />}
              />
              <Route path={`${blankPage}/top-level-d`} render={() => <BlankTest label={"Top level D"} />} />

              <Route
                path={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-a`}
                render={() => <BlankTest label="Tertiary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-b`}
                render={() => <BlankTest label="Tertiary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-e/secondary-level-a`}
                render={() => <BlankTest label="Secondary level A" />}
              />
              <Route
                path={`${blankPage}/top-level-e/secondary-level-b`}
                render={() => <BlankTest label="Secondary level B" />}
              />
              <Route
                path={`${blankPage}/top-level-e/secondary-level-c`}
                render={() => <BlankTest label="Secondary level C" />}
              />
              <Route path={`${blankPage}/top-level-e`} render={() => <BlankTest label={"Top level E"} />} />
            </Switch>
          </div>
        </FlexRow>
      </FlexContainer>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(SideNavTest));