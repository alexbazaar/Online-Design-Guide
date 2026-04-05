import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import Spinner from "../../../ols-ui/src/components/Spinner";

import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import styles from "../styles/Spinner.scss";
import appStyles from "../styles/App.scss";

import List, { ListItem } from "../../../ols-ui/src/components/List";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import SpinnerLight from "../assets/images/spacing-specs/General_Elements_Spinner_On_Light.png";

/**
 * *****************************************************************************
 * Content for Spinner.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function SpinnerPage() {
  return (
    <div>
      <Helmet title="Spinner" />
      <DocsPage
        className="docs-styles"
        title="Spinner"
        subtitle="Spinners indicate that content is loading."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel
                padding="normal"
                maxheight="medium"
                className={styles.swirlBackground}
              >
                <span className={appStyles["sr-only"]}>Preview Tab</span>

                <div>
                  <span className={appStyles["sr-only"]}>Example of the loading spinner...</span>
                  <Spinner />
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "90%", height: "auto" }}
                  src={SpinnerLight}
                  alt="This is a marked up graphic of the Spinner spacing"
                />

                <div>
                  <span
                    style={{
                      marginTop: "16px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      display: "inline-block"
                    }}
                  >
                    <br />
                    <strong>Note:</strong> Please refer to the specifications
                    section for more detail.
                  </span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <Spinner />
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $spinner-animation-time: 1000ms;

                  .sr-only {
                    @include sr-only;
                  }
                  
                  @keyframes fade {
                    from {
                      opacity: 0.9;
                    }
                  
                    to {
                      opacity: 0.1;
                    }
                  }
                  
                  .spinner {
                    position: relative;
                    display: block;
                    width: 48px;
                    height: 48px;
                    margin-right: auto;
                    margin-left: auto;
                  
                    > div {
                      position: absolute;
                      top: calc(50% - 15.6%);
                      left: calc(50% - 3.125%);
                      width: 6.25%;
                      height: 31.2%;
                      animation: fade $spinner-animation-time linear infinite;
                      background: #ffffff;
                      border-radius: 1px;
                      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                      opacity: 0;
                    }
                  
                    .bar1 {
                      animation-delay: 0;
                      transform: rotate(0deg) translate(0, -105%);
                    }
                  
                    .bar2 {
                      animation-delay: 1 - $spinner-animation-time * (11 / 12);
                      transform: rotate(30deg) translate(0, -105%);
                    }
                  
                    .bar3 {
                      animation-delay: 1 - $spinner-animation-time * (10 / 12);
                      transform: rotate(60deg) translate(0, -105%);
                    }
                  
                    .bar4 {
                      animation-delay: 1 - $spinner-animation-time * (9 / 12);
                      transform: rotate(90deg) translate(0, -105%);
                    }
                  
                    .bar5 {
                      animation-delay: 1 - $spinner-animation-time * (8 / 12);
                      transform: rotate(120deg) translate(0, -105%);
                    }
                  
                    .bar6 {
                      animation-delay: 1 - $spinner-animation-time * (7 / 12);
                      transform: rotate(150deg) translate(0, -105%);
                    }
                  
                    .bar7 {
                      animation-delay: 1 - $spinner-animation-time * (6 / 12);
                      transform: rotate(180deg) translate(0, -105%);
                    }
                  
                    .bar8 {
                      animation-delay: 1 - $spinner-animation-time * (5 / 12);
                      transform: rotate(210deg) translate(0, -105%);
                    }
                  
                    .bar9 {
                      animation-delay: 1 - $spinner-animation-time * (4 / 12);
                      transform: rotate(240deg) translate(0, -105%);
                    }
                  
                    .bar10 {
                      animation-delay: 1 - $spinner-animation-time * (3 / 12);
                      transform: rotate(270deg) translate(0, -105%);
                    }
                  
                    .bar11 {
                      animation-delay: 1 - $spinner-animation-time * (2 / 12);
                      transform: rotate(300deg) translate(0, -105%);
                    }
                  
                    .bar12 {
                      animation-delay: 1 - $spinner-animation-time * (1 / 12);
                      transform: rotate(330deg) translate(0, -105%);
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
          <p>
            Spinners express an unspecified amount of wait time. They should be
            used for short wait times.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Spinner elements</h3>
          <Table caption="Spinner Elements Specifications">
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
                <TableHeaderCell>Position</TableHeaderCell>
                <TableCell>relative</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Display</TableHeaderCell>
                <TableCell>block</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>48px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>48px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Animation (on dark)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Animation (on light)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width (individual bar)</TableHeaderCell>
                <TableCell>3px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height (individual bar)</TableHeaderCell>
                <TableCell>15px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Border radius (individual bar)
                </TableHeaderCell>
                <TableCell>1px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              Indicate that the wait time will soon be over by showing a
              spinner.
            </ListItem>
            <ListItem>
              Spinners should be used for wait times less than 4 seconds.
            </ListItem>
            <ListItem>
              Spinners should fill the invisible, circular track with color, as
              the indicator moves in a clockwise direction.
            </ListItem>
            <ListItem>
              Keep the spinner moving to show incremental change.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Avoid blinking or flashing elements</h3>

          <p>
            Content which flashes three times a second or more may trigger
            epileptic seizures in individuals with photosensitive epilepsy. For
            this reason, it is best practice to avoid such content on the
            screen.
          </p>

          <h3>Tips:</h3>

          <ul>
            <li>
              <b>If you must use animated content, limit</b>&nbsp;the number of
              animation repetitions to three (3) cycles per image if
              flashing/blinking or five (5) seconds if not flashing/blinking.
            </li>
            <li>
              <b>Screen transition animation</b>&nbsp;should appear within 5
              seconds or an option should be provided to disable the transition
              animation. Assistive technology may start rendering screen
              contents to users prior to animation settling, thus screen content
              rendered after a specified time may not be provided to users of
              assistive technology.
            </li>
          </ul>

          <h3>Describe animated content sufficiently in text</h3>

          <p>
            Users who are blind or visually impaired should be able to take away
            an equivalent experience without being able to see the visual
            content. Any animation that provides meaningful content needs to
            have an alternative presentation without animation or the animated
            content provides a method to view it in steps one at a time.
          </p>

          <p>
            All animated content and queues must be sufficiently described in
            audio or non-animated text if the motions or visual cues offer
            fundamental information that cannot be gathered by users who are
            blind or visually impaired.
          </p>

          <h3>Keep the flashing area small enough</h3>

          <p>
            The purpose of this technique is to provide an easy way to pass the
            success criterion for things that flash, but are small.
          </p>

          <p>
            If you have something that flashes more than 3 times in a one second
            period, but the area that is flashing is less than 25% of 10 degrees
            of visual field (which represents the central area of vision in the
            eye), then it would automatically pass.
          </p>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#non-text-content">
                1.1.1 Non text content
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#pause-stop-hide">
                2.2.2 Pause, Stop, Hide
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#three-flashes-or-below-threshold">
                2.3.1 Three Flashes or Below Threshold
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(SpinnerPage);
