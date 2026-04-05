import React from "react";
import Helmet from "react-helmet";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { withRouter } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import Panel from "../../../ols-ui/src/components/Panel";
import MainContentTemplate from "../components/MainContentTemplate";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableColumn,
  RowFormatter,
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from 'ols-ui/list';
import { FilledButton } from "../../../ols-ui/src/components/Buttons";

import Card, { CardPhoto }  from "../../../ols-ui/src/components/Card";
import ImgRoadmapBadgesAndTags from "../assets/images/Roadmap-Badges-and-Tags.png";
import ImgRoadmapExternalLinkIcon from "../assets/images/Roadmap-External-Link-Icon.png";
import ImgRoadmapModal from "../assets/images/Roadmap-Modal.png";
import ImgRoadmapRangeSlider from "../assets/images/Roadmap-Range-Slider.png";

import ImgRoadmapInputStepper from "../assets/images/Roadmap-Input-Stepper.png";
import ImgRoadmapBadge from "../assets/images/Roadmap-Badge.png";
import ImgRoadmapClassificationTag from "../assets/images/Roadmap-Classification-Tag.png";
import ImgRoadmapEmphasisTag from "../assets/images/Roadmap-Emphasis-Tag.png";

import { ODGEnhancements, ODGUiKitEnhancements, uiElements, UIKitEnhancements, uiPatterns } from "../data/roadmap";
import { CheckIcon } from 'ols-ui/icons';

import { roadmapStatus } from "../utils/constants";

import styles from '../styles/About.scss';
import roadmapStyles from '../styles/Roadmap.scss';

/**
 * *****************************************************************************
 * Roadmap section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Roadmap() {

  /**
   * Formats the "badge" based on the status of roadmap item
   * @param {string} status - status of road map item (constants/roadmapStatus)
   * @returns {JSX.Element}
   */
  function formatStatus(status) {
    let statusClass = '';

    switch (status) {
      case roadmapStatus.DONE:
        statusClass = roadmapStyles['badge--done'];
        break;
      case roadmapStatus.IN_PROGRESS:
        statusClass = roadmapStyles['badge--in_progress'];
        break;
      case roadmapStatus.UP_NEXT:
        statusClass = roadmapStyles['badge--up_next'];
        break;
      case roadmapStatus.NOT_APPLICABLE:
        statusClass = roadmapStyles['badge--not_applicable'];
        break;
      case roadmapStatus.TODO:
        statusClass = roadmapStyles['badge--todo'];
        break;
      case roadmapStatus.PAUSED:
        statusClass = roadmapStyles['badge--paused'];
        break;
      default:
        statusClass = 'badge--not_applicable';
    }

    const classes = buildClassList(roadmapStyles.badge, roadmapStyles.bottomRule, statusClass);

    return <div className={classes} >{status}</div>;
  }

  /**
   * Returns check mark if value is set to true
   * @param {boolean} value
   * @returns {JSX.Element}
   */
  function getCheckStatus(value) {
    if (value) {
      return <div className={roadmapStyles.checkIconMobile}><CheckIcon crop /></div>;
    }
  }
  return (
    <div>
      <Helmet title="Roadmap" />
      <div className={styles.mainContentMargin}>

        <div className={styles.outerWrapper}>
          <div id="main-content" className={styles.contentWrapper}>
            <Panel className="body-panel" padding="none" borderless>
              <DocsPage
                className="docs-styles"
                title="Roadmap"
                subtitle="Discover what the Online Design Guide product team is working on, what is coming up next, and future plans."
              >
                <DocsSection title="Recently shipped">
                  <p>
                  You may have noticed, we've updated and added some things around here. Visit the <Link to="/releases/Version4_3_0">releases</Link> page to view more information about all the latest releases.
                  </p>

                  <Panel padding="none" borderless>
                    <div style={{ display: "none" }}>
                      <Card title=""></Card>
                    </div>
                    {/*<CardPhoto title="Range slider" headinglevel="2" imgInset={ImgRoadmapRangeSlider}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt. elit, sed do eiusmod
                      tempor incididunt.</p>
                      <Link to="/">Read More</Link>
                    </CardPhoto>
                    <CardPhoto title="Modal" headinglevel="2" imgInset={ImgRoadmapModal}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt. elit, sed do eiusmod
                      tempor incididunt.</p>
                      <Link to="/">Read More</Link>
                    </CardPhoto>
                    <CardPhoto title="Badge & tag" headinglevel="2" imgInset={ImgRoadmapBadgesAndTags}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt. elit, sed do eiusmod
                      tempor incididunt.</p>
                      <Link to="/">Read More</Link>
                    </CardPhoto>
                    <CardPhoto title="External link icon" headinglevel="2" imgInset={ImgRoadmapExternalLinkIcon}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt. elit, sed do eiusmod
                      tempor incididunt.</p>
                      <Link to="/">Read More</Link>
  </CardPhoto>*/}

                    <CardPhoto title="Input stepper" headinglevel="2" imgInset={ImgRoadmapInputStepper}>
                      <p>Input steppers allow users to easily input data.</p>
                      <Link to="/components/input-stepper">View input stepper</Link>
                    </CardPhoto>
                    <CardPhoto title="Badge" headinglevel="2" imgInset={ImgRoadmapBadge}>
                      <p>Badges highlight a numerical characteristic of an item.</p>
                      <Link to="/components/badge-and-tag/badge">View badge</Link>
                    </CardPhoto>
                    <CardPhoto title="Classification tag" headinglevel="2" imgInset={ImgRoadmapClassificationTag}>
                      <p>Classification tags are selectable visual indicators using text.</p>
                      <Link to="/components/badge-and-tag/classification-tag">View classification tag</Link>
                    </CardPhoto>
                    <CardPhoto title="Emphasis tag" headinglevel="2" imgInset={ImgRoadmapEmphasisTag}>
                      <p>Emphasis tags are non-selectable visual indicators using text.</p>
                      <Link to="/components/badge-and-tag/emphasis-tag">View emphasis tag</Link>
                    </CardPhoto>
                  </Panel>
                </DocsSection>

                <DocsSection title="Working on">
                  <p>
                  We're working hard to get these released!
                  </p>
                </DocsSection>


                <DocsSection id="ui-element-roadmap">
                  {/* <Table
                    caption="UI Element Roadmap Status"
                    data={uiElements}
                    enableSearch={false}
                    className={buildClassList(roadmapStyles.naturalTable, roadmapStyles['main-table'])}
                  >
                    <TableColumn
                      field="element"
                    ></TableColumn>
                    <TableColumn
                      field="research"
                      formatter={(value) => getCheckStatus(value)}
                    >Research & 508</TableColumn>
                    <TableColumn
                      field="design"
                      formatter={(value) => getCheckStatus(value)}
                    >Design & 508</TableColumn>
                    <TableColumn
                      field="prototyping"
                      formatter={(value) => getCheckStatus(value)}
                    >Prototype & 508</TableColumn>
  </Table>*/}

                  <Table caption="UI Element Roadmap Status" className={roadmapStyles.roadmapTable}>
                    <thead>
                      <TableRow>
                        <TableHeaderCell scope="col">Components</TableHeaderCell>
                        <TableHeaderCell scope="col">Research &amp; 508</TableHeaderCell>
                        <TableHeaderCell scope="col">Design &amp; 508</TableHeaderCell>
                        <TableHeaderCell scope="col"><span className={roadmapStyles.showHide}>Prototype &amp; 508</span><span className={roadmapStyles.showHide}>Proto. &amp; 508</span></TableHeaderCell>
                      </TableRow>
                    </thead>
                    <tbody>
                      <TableRow>
                        <TableHeaderCell scope="row">Slider</TableHeaderCell>
                        <TableCell className={roadmapStyles.hasIcon}><FontAwesomeIcon icon={ faCheck } className={roadmapStyles.colorCheckRoadmap} aria-hidden="false" aria-label="Completed" /></TableCell>
                        <TableCell className={roadmapStyles.hasIcon}><FontAwesomeIcon icon={ faCheck } className={roadmapStyles.colorCheckRoadmap} aria-hidden="false" aria-label="Completed" /></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell scope="row">Status tracker</TableHeaderCell>
                        <TableCell className={roadmapStyles.hasIcon}><FontAwesomeIcon icon={ faCheck } className={roadmapStyles.colorCheckRoadmap} aria-hidden="false" aria-label="Completed" /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell scope="row">Featured content</TableHeaderCell>
                        <TableCell className={roadmapStyles.hasIcon}><FontAwesomeIcon icon={ faCheck } className={roadmapStyles.colorCheckRoadmap} aria-hidden="false" aria-label="Completed" /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </tbody>
                  </Table>
                </DocsSection>

                <DocsSection title="Up next">
                  <p>
                  We're digging into these so we can start creating the best experience possible for IRS users.
                  </p>

                  <h3 className={roadmapStyles.roadmapHeading}>IRAP approvals</h3>
                  <p>Partner with the IRAP office to test and approve remaining ODG components. Approved ODG components are marked with an "IRAP APPROVED" emphasis tag.</p>

                  <h3 className={roadmapStyles.roadmapHeading}>IRS component library</h3>
                  <p>Discuss, coordinate, and collaborate on a centralized component library plan and process.</p>

                  <h3 className={roadmapStyles.roadmapHeading}>ODG component roadmap</h3>
                  <p>Audit and prioritize outstanding components, patterns, and templates.</p>
                </DocsSection>

                <DocsSection title="Future">
                  <p>
                  We got these things in the hopper! We'll get them to you as soon as we can.
                  </p>

                  <h3 className={roadmapStyles.roadmapHeading}>ODG redesign</h3>
                  <p>Features include a new feedback form, site search, content management system, updated homepage design, templates section, and designer/developer resource sections. All updates are based on user interview findings, design system comparative analysis, and best practice research.</p>

                  <h3 className={roadmapStyles.roadmapHeading}>ODG user feedback</h3>
                  <p>Gather feedback from users to inform updates and prioritize future enhancements.</p>

                  <h3 className={roadmapStyles.roadmapHeading}>Grid system</h3>
                  <p>Re-evaluate the ODG grid system and determine modifications based on best practice research.</p>
                </DocsSection>
              </DocsPage>
            </Panel>
          </div>
        </div>

      </div>
    </div>
  );
}

export default withRouter(EmbedStyles(styles, roadmapStyles)(Roadmap));
