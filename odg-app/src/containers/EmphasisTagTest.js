import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage } from "../../../ols-ui/src/components/DocsFoundations";
import { FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import EmphasisTag from "../../../ols-ui/src/components/Tag";

/**
 * [Emphasis Test description]
 * @constructor
 */
function EmphasisTagTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="left">
            <DocsPage
              className="docs-styles"
              title="Emphasis Tag"
              subtitle=""></DocsPage>
              
            <EmphasisTag emphasis srOnlyText="New Feature">
                New
            </EmphasisTag>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in rutrum nunc. Nunc in suscipit augue. Aliquam eu erat odio. Phasellus non nisi orci. Curabitur ac felis a mi imperdiet consectetur non aliquam magna. Suspendisse finibus malesuada nibh sed tempor. Fusce augue massa, rutrum vitae dapibus eget, porta lacinia velit. Nulla luctus cursus risus, auctor auctor risus. Sed nec condimentum magna.
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(EmphasisTagTest));
