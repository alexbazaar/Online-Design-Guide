import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";
import Panel from "../../../ols-ui/src/components/Panel";
import List, { ListItem } from 'ols-ui/list';
import Card  from "../../../ols-ui/src/components/Card";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import CardSecondarySpacing from "../assets/images/spacing-specs/Content_Box_Secondary.png"; // secondary

import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import styles from "../styles/Docs.scss";
import appStyles from "../styles/App.scss";


/**
 * *****************************************************************************
 * Content for Primary Card.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function SecondaryCardPage() {
  return (
    <div>
      <Helmet title="Secondary card" />
      <DocsPage
        className="docs-styles"
        title="Secondary card"
        subtitle="A styled container for content with no option to add images."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel className="clearfix">
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
                  <Link to="/">Primary link</Link>
                  <h4>
                              Related
                  </h4>
                  <List style={{ marginBottom: "5px" }}>
                    <ListItem><Link to="/">Secondary link lorem ipsum</Link></ListItem>
                    <ListItem><Link to="/">Secondary link ipsum dolor sit amet consectetur</Link></ListItem>
                    <ListItem><Link to="/">Secondary link dolor sit amet consectetur adipiscing elit sed do eliusmod tempor</Link></ListItem>
                  </List>
                </Card>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <img
                  src={CardSecondarySpacing}
                  alt="This is a marked up graphic of the Card spacing"
                  aria-hidden="true"
                  className={styles.previewSpacingDesktopFluid}
                />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
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
                      <Link to="/">Primary link</Link>
                      <h4>
                        Related
                      </h4>
                      <List style={{ marginBottom: "5px" }}>
                        <ListItem><Link to="/">Secondary link lorem ipsum</Link></ListItem>
                        <ListItem><Link to="/">Secondary link ipsum dolor sit amet consectetur</Link></ListItem>
                        <ListItem><Link to="/">Secondary link dolor sit amet consectetur adipiscing elit sed do eliusmod tempor</Link></ListItem>
                      </List>
                    </Card>
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .card, .cardPhoto {
                    position: relative;
                    box-sizing: border-box;
                    border: solid 1px #d6d7d9;
                    margin-bottom: $module-spacing;
                    background: #ffffff;
                    font-family: $font-sans;
                    font-size: $font-size-base;
                    line-height: $line-height-base;
                  
                    p {
                      margin-bottom: 16px;
                    }
                  
                    button {
                      margin-bottom: 0;
                      margin-left: 0;
                      display: flex;
                    }
                  
                    .link {
                      margin: 0 0 12px 0;
                      display: inline-block;
                      width: auto;
                    }
                  
                    @include media-breakpoint-up(sm) {
                      overflow-x: auto;
                    }
                  
                    > *:last-child {
                      margin-bottom: 0;
                    }
                  
                    &.padding-normal {
                      padding: 16px $module-spacing 16px;
                    }
                  
                    &.padding-medium {
                      padding: $module-spacing;
                  
                      @include media-breakpoint-up(sm) {
                        padding: $module-spacing * 1.5;
                      }
                    }
                  
                    &.padding-large,
                    &.padding-extra {
                      padding: $module-spacing;
                  
                      @include media-breakpoint-up(sm) {
                        padding: $module-spacing * 2;
                      }
                  
                      @include media-breakpoint-up(lg) {
                        padding: $module-spacing * 2.5;
                      }
                    }
                  
                    &.border-less {
                      border: none;
                    }
                  
                    &.secondary-style {
                      border-top: 1px solid #d6d7d9;
                    }
                  
                    // The min-height classes set the minimum height of a Card
                    //
                    //
                  
                    &.min-height-medium {
                      min-height: 300px;
                    }
                  
                    &.min-height-large {
                      min-height: 480px;
                    }
                  }
                  
                  .card, .cardPhoto {
                    border-top: 3px solid #c7a97B;
                  }
                  
                  .heading, h2 {
                    @include subtitle;
                    font-weight: bold;
                    line-height: 28px;
                    margin: 0;
                  }
                  
                  .linksHeading {
                    @include subtitle;
                    margin: 15px 0 0 0;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                  }
                  
                  .heading {
                    line-height: 28px;
                  }
                  
                  .title {
                    padding-top: $module-spacing;
                    padding-right: $module-spacing;
                    padding-left: $module-spacing;
                  }
                  
                  .imgInsetWrapper {
                  
                    .imgInsetContainer {
                      max-height: 208px;
                      display: flex;
                      width: 100%;
                  
                      img {
                        object-fit: cover;
                        width: 100%;
                      }
                    }
                  }
                  
                  .subheading {
                    font-style: italic;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 25px;
                    display: block;
                  }
                  
                  @include media-breakpoint-up(sm) {
                    .card, .cardPhoto {
                        width: 100%;
                    }
                  
                    .cardContainer {
                      margin: 0;
                      padding: 0;
                      float: left;
                      width: 50%;
                      padding-right: 15px;
                    }
                  }
                  
                  @include media-breakpoint-down(sm) {
                    .card, .cardPhoto {
                        width: 100%;
                    }
                  
                    .cardContainer {
                      padding-right: 0px;
                      width: 100%;
                    }
                  }
                  
                  .card, .cardPhoto {
                    a {
                        margin-top: 0px !important; // overrides Link > a
                    }
                  
                    ul {
                      list-style: none;
                      padding-left: 0;
                  
                      li a {
                        margin: 0;
                        display: inline-block;
                        width: auto;
                      }
                    }
                  
                    ul li:not(:last-child) {
                      a {
                        margin: 0 0 12px 0 !important; // overrides Link > a
                      }
                    }
                  }
                  
                  .card p + a, .cardPhoto p + a {
                    font-size: 16px;
                    line-height: 24px;
                    margin: 5px 0;
                    width: auto;
                    display: inline-block;
                    margin-bottom: 2px;
                    font-weight: 600;
                  }
                  
                  .cardContainer {
                    [data-component="CardBody"] h3 {
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 24px;
                      font-style: italic;
                      margin-bottom: 0;
                      display: block;
                    }
                    
                    [data-component="CardBody"] h4 {
                      margin: 16px 0 12px 0;
                      font-size: 16px;
                      font-weight: bold;
                      line-height: 24px;
                    }
                  
                    [data-component="CardBody"] p:first-of-type {
                      margin-top: 12px;
                    }
                  }
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>
        <DocsSection title="When to use">
          <p>Secondary cards have gray borders that are all the same thickness. There is no option to add images. If both primary and secondary card 
          styles are needed in a design, the secondary content would use the secondary card style. Otherwise, either a primary or a secondary card 
          (or both) can be used depending on the design style and need.</p>

          <p>Cards can be used to distribute information visually so users can consume content in smaller pieces. They help users learn small pieces 
          of information quickly and enable them to learn more detailed information by selecting a call to action within the box (typically a button, 
          linked image, or text link). This design format can help users identify highlights of several different products, apps, or content pages 
          side-by-side.</p>
        </DocsSection>
        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Secondary Card Typography Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Title</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Heading 20
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Body text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Subheading</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Body text
                  </Link>, italic
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>"Related" heading</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Heading 16
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray darkest
                  </Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Primary link</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#links">
                  Link
                  </Link>, bold
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue
                  </Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Secondary link</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#links">
                  Link
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Blue
                  </Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Card elements</h3>
          <Table
            caption="Secondary Card Elements Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  White
                  </Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Top border (primary card)</TableHeaderCell>
                <TableCell>3px solid </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gold
                  </Link>
                </TableCell>
                <TableCell>#c7a97b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>1px solid </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray light
                  </Link>
                </TableCell>
                <TableCell>#d6d7d9</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>16px 16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Secondary Card Focus State Specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>3px</TableCell>
                <TableCell><Link to="/styles/colors">Blue vivid</Link></TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (buttons)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>


        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              <b>Divide page content using cards.</b> Use cards when a page's content needs to be split into different buckets. Card content should be related.
            </ListItem>
            <ListItem>
              <b>Cards need to be responsive.</b> The number and size of boxes displayed should change seamlessly as a screen or window gets wider or narrower.
            </ListItem>
            <ListItem>
              <b>Cards can include multiple different elements.</b> These elements include headlines, sub-headlines, body text, images, buttons, graphs, calls to 
              action, or video. Which elements to include depends heavily on the nature of the content itself. If images are needed, use the primary card style.
            </ListItem>
            <ListItem>
              <b>Each card should contain one singular idea or product.</b> Card content should be different between cards but should be related to each other.
            </ListItem>
            <ListItem>
              <b>Each card should have only one call to action.</b> If multiple calls to action are required, they should be split across multiple cards.
            </ListItem>
            <ListItem>
              <b>Avoid using in-line links.</b> Multiple different selectable elements tend to cause user confusion.
            </ListItem>
            <ListItem>
              <b>Keep it simple.</b> Card body text should be concise and not overwhelm the user with information.
            </ListItem>
            <ListItem>
              <b>Cards should provide a visual hierarchy to their elements.</b> For example, the headline should be larger than the sub-headline; the sub-headline 
              should not look the same as the body text.
            </ListItem>
            <ListItem>
              <b>Cards should adhere to the same look and feel rules.</b> However, cards do not all have to be the same size. For example, a page could contain three different 
            sizes of rectangular cards, but it should not contain two rectangular boxes and a circle. Boxes should also use the same font structures and color structures. 
            Boxes of different sizes and different types of content (for example, those with images and those without) should be deployed in an organized fashion.
            </ListItem>
            <ListItem>
              <b>Be consistent with the margins between boxes.</b> The grid of cards should have consistent intervals between each box.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
            List markup should be used to group cards.
            </ListItem>
            <ListItem>
            Headings should begin sections. Everything that belongs to the section should follow the heading in the source.
            </ListItem>
            <ListItem>
            The cards don't break when lines of content wrap or images don't meet specific aspect ratio requirements.
            </ListItem>
            <ListItem>
            To support region navigation with JAWS region shortcut, use <code>&#60;article&#62;</code> element for each card in conjunction with <code>aria-labelledby</code> attribute to tie the <code>&#60;article&#62;</code> elements to the text shown in the heading for a particular card.
            </ListItem>
            <ListItem>
            Any interactive content such as links, buttons or form elements need to provide keyboard access and visible focus.
            </ListItem>
            <ListItem>
            The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
            </ListItem>
            <ListItem>
            The visual presentation of user interface components and graphical objects required to understand the content have a contrast ratio of at least 3:1 against adjacent color(s).
            </ListItem>
            <ListItem>
            The content needs to be readable in a Windows High Contrast Mode active theme.
            </ListItem>
            <ListItem>
            All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.
            </ListItem>
            <ListItem>
            Cards should not contain too much functionality and tab stops. Cards shouldn't be miniature web pages.
            </ListItem>
            <ListItem>
            Cards do not have an "ARIA" standard and a prescribed structure that follow a set of interaction behaviors mandated by the WAI-ARIA specification.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#info-and-relationships">1.3.1 Info and Relationships</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#meaningful-sequence">1.3.2 Meaningful Sequence</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">1.4.3 Contrast (Minimum)</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">1.4.10 Reflow</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">1.4.11 Non-text Contrast</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">1.4.12 Text Spacing</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
            <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">2.4.6 Headings and Labels</ExternalLink></ListItem>
          </List>

        </DocsSection>

      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(SecondaryCardPage);