import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import styles from "../styles/App.scss";
import { OutlinedButton } from "../../../ols-ui/src/components/Buttons";

/**
 *
 * @constructor
 */
function BadgesInboxTest() {

  return (
    <FlexContainer>
      <div style={{ marginTop: "40px" }}>
        <Helmet title="Badges Inbox Demo" />
        <DocsPage className="docs-styles" title="Inbox">
          <DocsSection>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom: "40px" }}>
                <h2 style={{ marginBottom: "8px", fontSize: "24px", fontWeight: 700 }}>{m.label}</h2>
                <p style={{ fontSize: "16px" }}>{m.message}</p>
              </div>
            ))}
            <OutlinedButton aria-label="Back" to="/badges-demo">Back</OutlinedButton>
          </DocsSection>
        </DocsPage>
      </div>
    </FlexContainer>
  );
}

export const messages = [
  {
    label: "First New Message",
    message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    label: "Second New Message",
    message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    label: "Third New Message",
    message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    label: "Fourth New Message",
    message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];


export default withRouter(EmbedStyles(styles)(BadgesInboxTest));
