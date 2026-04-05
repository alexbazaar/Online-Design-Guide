import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import ClassificationTagTestBusinesses from "./ClassificationTagTestBusinesses";
import ClassificationTagTestIndividuals from "./ClassificationTagTestIndividuals";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import ClassificationTag from "../../../ols-ui/src/components/Tag";

/**
 * [Classification Test description]
 * @constructor
 */
function ClassificationTagTest() {
  return (

    <MainContentTemplate id="main-content" hasFullWidthStyle>
      <Switch>
        <Route path="/classificationtag-test/businesses" component={ClassificationTagTestBusinesses} />
        <Route path="/classificationtag-test/individuals" component={ClassificationTagTestIndividuals} />
        <Route render={() =>
          <div className={styles.defaultPage}>
            <FlexContainer>
              <FlexRow justify="center">
                <div style={{ width: '1140px', padding: "0 20px" }}>

                  <h1 style={{ marginTop: "0", fontFamily: "Source Sans Pro", fontWeight: "700", fontSize: "40px", lineHeight: "56px", marginBottom: "0" }}>Search Results</h1>

                  <p>This page demonstrates the classification tag component. Please select a classification tag to filter the search results.</p>

                  <h2 style={{ marginTop: "25px", fontFamily: "Source Sans Pro", fontWeight: "700", fontSize: "30px", lineHeight: "42px", marginBottom: "0" }}>First search result</h2>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <ClassificationTag classification srOnlyText="Filter by Business" to="/classificationtag-test/businesses">
                    Businesses
                  </ClassificationTag>

                  <ClassificationTag classification srOnlyText="First Search results Filter by Individuals" to="/classificationtag-test/individuals">
                    Individuals
                  </ClassificationTag>


                  <h2 style={{ marginTop: "25px", fontFamily: "Source Sans Pro", fontWeight: "700", fontSize: "30px", lineHeight: "42px", marginBottom: "0" }}>Second search result</h2>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <ClassificationTag classification srOnlyText="Second Search results Filter by Individuals" to="/classificationtag-test/individuals">
                    Individuals
                  </ClassificationTag>

                </div>

              </FlexRow>
            </FlexContainer>
          </div>
        } />
      </Switch>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(ClassificationTagTest));
