import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexCol, FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import Accordion, {
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemBody
} from "../../../ols-ui/src/components/Accordion";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import Panel from "../../../ols-ui/src/components/Panel";

/**
 * [NotFound404 description]
 * @constructor
 */
function AccordionTest() {
  return (
    <div className={styles.breadCrumbTestPage}>
      <FlexContainer>
        <MainContentTemplate id="main-content" hasFullWidthStyle>
          <div className={styles.defaultPage}>
            <FlexRow>
              <FlexCol>
                <h1 className={styles.title}>Accordion Test Page</h1>
              </FlexCol>
            </FlexRow>
            <FlexRow justify="center">
              <div style={{ width: 'calc(50% + 20px)', minWidth: '327px' }}>
                <Panel padding="normal" maxheight="medium" borderless>
                  <Accordion headingLevel="2">
                    <AccordionItem>
                      <AccordionItemTrigger>First Amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          Congress shall make no law respecting an establishment of
                          religion, or prohibiting the free exercise thereof; or
                          abridging the freedom of speech, or of the press; or the right
                          of the people peaceably to assemble, and to petition the
                          Government for a redress of grievances.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemTrigger>Second Amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          A well regulated Militia, being necessary to the security of a
                          free State, the right of the people to keep and bear Arms,
                          shall not be infringed.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem disabled border={false}>
                      <AccordionItemTrigger>Third Amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          No Soldier shall, in time of peace be quartered in any house,
                          without the consent of the Owner, nor in time of war, but in a
                          manner to be prescribed by law.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                </Panel>
              </div>
            </FlexRow>
          </div>
        </MainContentTemplate>
      </FlexContainer>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(AccordionTest));
