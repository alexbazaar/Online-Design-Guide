import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow } from 'ols-ui/flex-grid';
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";

import Card, { CardPhoto }  from "../../../ols-ui/src/components/Card";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";
import List, { ListItem } from 'ols-ui/list';

import ImgPlaceholder from "../assets/images/placeholder.png";
import ImgPlaceholder2 from "../assets/images/placeholder2.png";

import CardPrimarySpacing from "../assets/images/spacing-specs/Content_Box_Primary.png";
import CardSecondarySpacing from "../assets/images/spacing-specs/Content_Box_Secondary.png";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";

/**
 * [Card Test description]
 * @constructor
 */
function CardTest() {
  return (
    <MainContentTemplate id="main-content" hasFullWidthStyle style={{ marginTop: "35px" }}>
      <FlexContainer>
        <FlexRow justify="center">
          <Card title="Heading" headinglevel="2">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <FilledButton wide>Button text</FilledButton>
          </Card>
          <Card title="Heading" headinglevel="2">
            <h3>
                Subheading (optional)
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/">Primary Link</Link>
            <h4>
                    Related
            </h4>
            <List style={{ marginBottom: "5px" }}>
              <ListItem><Link to="/">Secondary Link Lorem Ipsum</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Ipsum Dolor Sit Amet Consectetur</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eliusmod Tempor</Link></ListItem>
            </List>
          </Card>
        </FlexRow>

        <FlexRow>
          <CardPhoto title="Heading" headinglevel="2" imgInset={ImgPlaceholder}>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <FilledButton wide style={{ marginLeft: "0" }}>Button text</FilledButton>
          </CardPhoto>
          <CardPhoto title="Heading" headinglevel="2" imgInset={ImgPlaceholder2}>
            <h3>
                  Subheading (optional)
            </h3>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/">Primary Link</Link>
            <h4>
                              Related
            </h4>
            <List style={{ marginBottom: "5px" }}>
              <ListItem><Link to="/">Secondary Link Lorem Ipsum</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Ipsum Dolor Sit Amet Consectetur</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eliusmod Tempor</Link></ListItem>
            </List>
          </CardPhoto>
        </FlexRow>

        <FlexRow>
          <Card title="Heading" headinglevel="2" secondary>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <FilledButton wide style={{ marginLeft: "0" }}>Button text</FilledButton>
          </Card>
          <Card title="Heading" headinglevel="2" secondary>
            <h3>
                  Subheading (optional)
            </h3>
            <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/">Primary Link</Link>
            <h4>
                              Related
            </h4>
            <List style={{ marginBottom: "5px" }}>
              <ListItem><Link to="/">Secondary Link Lorem Ipsum</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Ipsum Dolor Sit Amet Consectetur</Link></ListItem>
              <ListItem><Link to="/">Secondary Link Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eliusmod Tempor</Link></ListItem>
            </List>
          </Card>
        </FlexRow>


      </FlexContainer>
    </MainContentTemplate>

  );
}

export default withRouter(EmbedStyles(styles)(CardTest));
