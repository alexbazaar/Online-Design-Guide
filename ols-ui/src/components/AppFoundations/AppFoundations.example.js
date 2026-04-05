import React from "react";
import Helmet from "react-helmet";
import { StaticRouter as Router } from "react-router-dom";
import FocusManager from "../FocusManager";
import { AppWrapper, Page, MainContent } from "./index";
import { FlexContainer, FlexRow, FlexCol } from "../FlexGrid";

module.exports = (
  <div>
    <Router>
      <AppWrapper>
        <Helmet
          defaultTitle="OLS UI Library"
          titleTemplate="%s | OLS UI Library"
          meta={[
            {
              name: "description",
              content:
                  "OLS UI is a library of React components and CSS styles for the IRS brand."
            }
          ]}
          htmlAttributes={{ lang: "en" }}
        />
        <Page>
          {/*
          //
          //
          // HEADER HERE
          //
          //
          */}
          <MainContent>
            <FocusManager style={{ height: "100%", display: "flex", flexDirection: "column" }}>

              <FlexContainer>
                <FlexRow>
                  <FlexCol lg="12">

                    {/*
                    //
                    //
                    // insert web content here
                    //
                    //
                    */}

                  </FlexCol>
                </FlexRow>
              </FlexContainer>
            </FocusManager>
          </MainContent>
          {/*
          //
          //
          // INSERT FOOTER
          //
          //
          */}
        </Page>
      </AppWrapper>
    </Router>
  </div>
);
