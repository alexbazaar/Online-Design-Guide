import React from "react";
import { withRouter } from "react-router";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
// import Link from "../../../ols-ui/src/components/Links";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";
// import Panel from "../../../ols-ui/src/components/Panel";
import Spacer from "../../../ols-ui/src/components/Spacer";

import MainContentTemplate from "../components/MainContentTemplate";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import digitalProducts from "../assets/images/digital-products-v2.svg";
import arrowRightOrange from "../assets/images/arrow-right-orange-v2.svg";
// import productBasicIcon from "../assets/images/product-basic-icon.svg";
// import productIntermediateIcon from "../assets/images/product-intermediate-icon.svg";
// import productFullIcon from "../assets/images/product-full-icon.svg";
import sketchKitIcon from "../assets/images/sketch-kit-icon.svg";
import custExperienceIcon from "../assets/images/cust-experience-icon.svg";
import designDevIcon from "../assets/images/design-dev-icon.svg";
import designProdIcon from "../assets/images/design-prod-icon-white.svg";


import styles from "../styles/App.scss";

/**
 * [DesignStyle description]
 * @constructor
 */
function GettingStarted() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle={false}>
      {/* Top portion: Hero image and Title */}

      <div className={styles.heroWrapper}>
        <div className={styles.heroImage}>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>
              Web Design Standards for the IRS
            </h1>
            <div className={styles.heroSubtitle}>
              Recommended specifications, uses, and accessibility standards for common design paradigms.
            </div>
            <div className={styles.heroVersionText}>
              Version 4.3.1 — Released 9.11.2023
            </div>
          </div>
        </div>

        {/* "Getting Started?" top content portion; sits below Hero */}

        <div className={styles.gettingStartedWrapper}>
          <FlexContainer className={styles.contentWrapper}>
            <FlexRow justify="center">
              <FlexCol xs="8" sm="4" smOffset="1" >
                <img
                  src={digitalProducts}
                  alt=""
                  className={styles.digitalProducts}
                />
              </FlexCol>
              <FlexCol xs="10" sm="5">
                <h2 className={styles.contentTitle}>
                  Getting started?
                </h2>
                <div className={styles.gettingStartedText}>
                  Use this guide to inform all your digital products and to help ensure your product's success! Using these standards will keep your work consistent with other IRS products, accessible, and inspired.
                </div>
              </FlexCol>
            </FlexRow>
          </FlexContainer>

          <FlexRow justify="center">
            <FlexCol xs="10">
              <hr className={styles.horizontalRule} aria-hidden="true"></hr>
            </FlexCol>
          </FlexRow>
          {/* Top Middle portion: Goals of the ODG */}

          <FlexContainer className={styles.categoriesWrapper}>
            <FlexRow>
              <FlexCol xs="12">
                <h2 className={styles.categoriesTitle}>
                  Goals of the Online Design Guide
                </h2>
              </FlexCol>
            </FlexRow>

            {/* Goal 1 */}
            <FlexRow>
              <FlexCol xs="2" sm="1" smOffset="0">
                <img
                  src={custExperienceIcon}
                  alt=""
                  className={styles.goalIcon}
                />
              </FlexCol>
              <FlexCol xs="10" smOffset="1" lg="5" lgOffset="0">
                <div className={styles.leftCol}>
                  <h3 className={styles.categoriesSubtitle}>
                    Improve the customer experience
                  </h3>
                  <div className={styles.categoriesListContainer}>
                    <List>
                      <ListItem>
                        Establish IRS Brand consistency across digital products
                      </ListItem>
                      <ListItem>
                        Improve usability and learnability with common design patterns
                      </ListItem>
                    </List>
                  </div>
                </div>
              </FlexCol>

              {/* Goal 2 */}
              <FlexCol xs="2" sm="1" smOffset="0">
                <img
                  src={designDevIcon}
                  alt=""
                  className={styles.goalIcon}
                />
              </FlexCol>
              <FlexCol xs="10" smOffset="1" lg="5" lgOffset="0">
                <div className={styles.rightCol}>
                  <h3 className={styles.categoriesSubtitle}>
                    Streamline design and development
                  </h3>

                  <div className={styles.categoriesListContainer}>
                    <List>
                      <ListItem>
                        Focus more on delivering solutions than pushing pixels
                      </ListItem>
                      <ListItem>
                        Bring team members up to speed effectively
                      </ListItem>
                      <ListItem>
                        Scale and build IRS product faster
                      </ListItem>
                    </List>
                  </div>
                </div>
              </FlexCol>
            </FlexRow>
          </FlexContainer>

          {/* Bottom portion: Stakeholders/Developers - Learn */}

          <FlexContainer fluid className={styles.flexContainerFluidAlt}>
            <FlexRow>
              <FlexCol md="12" lg="6" className={styles.flexColAlt}>
                <div className={styles.productCol}>
                  <Spacer height={7} width={120} className={styles.yellowBar}/>
                  <h2 className={styles.productTitle}>
                    For designers and product owners
                  </h2>
                  <FlexRow xs="12" justify="center">
                    <img
                      src={designProdIcon}
                      alt=""
                      className={buildClassList({
                        [styles.designProdIcon]: true,
                        [styles.colIcon]: true
                      })}
                    />
                  </FlexRow>
                  <h3 className={styles.productSubtitle}>
                    What you need to know
                  </h3>
                  <div className={styles.productText}>
                    Visit the styles section for standards related to typography, color, and grid. Find components such as side navigation, text fields, alerts, modals, and more under the components section.
                  </div>
                  <FlexRow justify="around">
                    <FilledButton
                      className={buildClassList({
                        [styles.productButton]: true,
                        [styles.colBtn]: true
                      })}
                      to="/styles">
                      Styles
                    </FilledButton>
                    <FilledButton
                      className={buildClassList({
                        [styles.productButton]: true,
                        [styles.colBtn]: true
                      })}
                      to="/components">
                      Components
                    </FilledButton>
                  </FlexRow>
                </div>
              </FlexCol>
              <FlexCol md="12" lg="6" className={styles.flexColAlt}>
                <div className={styles.developerCol}>
                  <Spacer height={7} width={120} className={styles.yellowBar}/>
                  <h2 className={styles.developerTitle}>
                    Online Design Guide UI Kit
                  </h2>
                  <FlexRow xs="12" justify="center">
                    <img
                      src={sketchKitIcon}
                      alt=""
                      className={buildClassList({
                        [styles.sketchKitIcon]: true,
                        [styles.colIcon]: true
                      })}
                    />
                  </FlexRow>
                  <h3 className={styles.developerSubtitle}>
                    How to get started
                  </h3>
                  <div className={styles.developerText}>
                    The Online Design Guide UI Kit is a .sketch file that contains the latest and most accurate components found in the ODG. This is continuously evolving, so be sure to always have the latest version.
                  </div>
                  <FilledButton
                    className={buildClassList({
                      [styles.developerButton]: true,
                      [styles.colBtn]: true
                    })}
                    to="/styles/resources"
                  >
                    ODG UI Kit
                  </FilledButton>
                </div>
              </FlexCol>
            </FlexRow>
          </FlexContainer>
        </div>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(GettingStarted));
