import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexCol, FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import { Breadcrumbs, BreadcrumbItem } from "../../../ols-ui/src/components/Breadcrumbs";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * [NotFound404 description]
 * @constructor
 */
function BreadcrumbsTest() {
  return (
    <div id="main-content" className={styles.breadCrumbTestPage}>
      <FlexContainer>
        <FlexRow justify="start">
          <Breadcrumbs>
            <BreadcrumbItem href="https://www.irs.gov">
            Home
            </BreadcrumbItem>
            <BreadcrumbItem href="https://www.irs.gov/filing">
            File
            </BreadcrumbItem>
            <BreadcrumbItem>
            Individuals
            </BreadcrumbItem>
          </Breadcrumbs>
        </FlexRow>
        <MainContentTemplate hasFullWidthStyle>
          <div className={styles.defaultPage}>
            <FlexRow>
              <FlexCol>
                <h2 className={styles.title}>Breadcrumbs Test Page</h2>
              </FlexCol>
            </FlexRow>
          </div>
        </MainContentTemplate>
      </FlexContainer>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(BreadcrumbsTest));
