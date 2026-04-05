import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { Sidebar, SidebarLink, SidebarGroup } from "../../../ols-ui/src/components/Sidebar";
import Panel from "../../../ols-ui/src/components/Panel";

import MainContentTemplate from "../components/MainContentTemplate";

import Accordion from "../components/Accordion";
import Alerts from "../components/Alerts";
import SectionAlerts from "../components/SectionAlerts";
import SystemAlerts from "../components/SystemAlerts";
import BadgesAndTags from "../components/BadgesAndTags";
import BadgesPage from "../components/Badges";
import Breadcrumbs from "../components/Breadcrumbs";
import Buttons from "../components/Buttons";
import Tag from "../components/Tag";
import EmphasisTag from "../components/EmphasisTag";
import ClassificationTag from "../components/ClassificationTag";
import HelpTip from "../components/HelpTip";
import InputStepper from "../components/InputStepper";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Links from "../components/Links";
import Card from "../components/Card";
import PrimaryCard from "../components/PrimaryCard";
import SecondaryCard from "../components/SecondaryCard";
import StepIndicator from "../components/StepIndicator";
import InteractiveStepIndicator from "../components/InteractiveStepIndicator";
import NoninteractiveStepIndicator from "../components/NoninteractiveStepIndicator";
import Spinner from "../components/Spinner";
import TabView from "../components/TabView";
import Table from "../components/Table";

import Checkbox from "../components/Checkbox";
import DateField from "../components/DateField";
import Dropdown from "../components/Dropdown";
import FormErrorAlert from "../components/FormErrorAlert";
import Radio from "../components/Radio";
import SearchField from "../components/SearchField";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";

import IRSFooter from "../components/IRSFooter";
import BigFooter from "../components/BigFooter";
import SlimFooter from "../components/SlimFooter";
import Header from "../components/Header";
import SidebarPage from "../components/Sidebar";

import styles from "../styles/UIElements.scss";
import FormOverview from "../components/FormOverview";
import BackToTop from "../components/BackToTop";
import BlankTest from "../components/BlankTest";

/**
 * UI Elements section
 * @returns {node} DOM node
 */
function UIElements() {

  const UIElementsClass = buildClassList({
    [styles.mainContentMargin]: true,
    [styles["main-ui-elements-style"]]: true
  });

  return (
    <MainContentTemplate hasFullWidthStyle={false}>
      <div className={UIElementsClass}>
        <FlexContainer>
          <div className={styles.outerWrapper}>
            <div className={styles.sidebarWrapper}>
              <Sidebar id="main-sidebar">
                <SidebarGroup label="General Components">
                  <SidebarLink label="Accordion" to="/components/accordion" />
                  <SidebarLink label="Alert" to="/components/alert">
                    <SidebarLink label="Section alert" to="/components/alert/section-alerts" />
                    <SidebarLink label="System alert" to="/components/alert/system-alerts" />
                  </SidebarLink>
                  <SidebarLink label="Back to top" to="/components/back-to-top" />
                  <SidebarLink label="Badge and tag" to="/components/badge-and-tag">
                    <SidebarLink label="Badge" to="/components/badge-and-tag/badge" />
                    <SidebarLink label="Classification tag" to="/components/badge-and-tag/classification-tag" />
                    <SidebarLink label="Emphasis tag" to="/components/badge-and-tag/emphasis-tag" />
                  </SidebarLink>
                  <SidebarLink label="Breadcrumb" to="/components/breadcrumb" />
                  <SidebarLink label="Button" to="/components/button" />
                  <SidebarLink label="Card" to="/components/card" >
                    <SidebarLink label="Primary card" to="/components/card/primary-card" />
                    <SidebarLink label="Secondary card" to="/components/card/secondary-card" />
                  </SidebarLink>                  
                  <SidebarLink label="Help tip" to="/components/help-tip" />
                  <SidebarLink label="Link" to="/components/link" />
                  <SidebarLink label="Modal" to="/components/modal" />
                  <SidebarLink label="Pagination" to="/components/pagination" />
                  {/* <SidebarLink label="Panel" to="/components/panel" /> */}
                  <SidebarLink label="Search" to="/components/search-field" />
                  <SidebarLink label="Spinner" to="/components/spinner" />
                  <SidebarLink label="Step indicator" to="/components/step-indicator">
                    <SidebarLink label="Interactive step indicator" to="/components/step-indicator/interactive-step-indicator" />
                    <SidebarLink label="Non-interactive step indicator" to="/components/step-indicator/noninteractive-step-indicator" />
                  </SidebarLink>
                  <SidebarLink label="Tab view" to="/components/tab-view" />
                  <SidebarLink label="Table" to="/components/table" />
                </SidebarGroup>
                <SidebarGroup label="Form Components">
                  <SidebarLink label="Form overview" to="/components/form-overview" />
                  <SidebarLink label="Checkbox" to="/components/checkbox" />
                  <SidebarLink label="Date field" to="/components/date-field" />
                  <SidebarLink label="Dropdown" to="/components/dropdown" />
                  <SidebarLink label="Form error alert" to="/components/form-error-alert" />
                  <SidebarLink label="Input stepper" to="/components/input-stepper" />
                  <SidebarLink label="Radio button" to="/components/radio-button" />
                  <SidebarLink label="Text input" to="/components/text-input">
                    <SidebarLink label="Text area" to="/components/text-input/text-area" />
                    <SidebarLink label="Text field" to="/components/text-input/text-field" />
                  </SidebarLink>
                </SidebarGroup>
                <SidebarGroup label="Global Components">
                  <SidebarLink label="Footer" to="/components/footer">
                    <SidebarLink label="Big footer" to="/components/footer/big-footer" />
                    <SidebarLink label="Slim footer" to="/components/footer/slim-footer" />
                  </SidebarLink>
                  <SidebarLink label="Header" to="/components/header" />
                  <SidebarLink label="Side navigation" to="/components/side-navigation" />
                </SidebarGroup>

              </Sidebar>
            </div>
            <div id="main-content" className={styles.contentWrapper}>
              <Panel className="body-panel" padding="none" borderless>
                <Switch>
                  {/* UI Elements */}
                  <Route path="/components/accordion" component={Accordion} />
                  <Route path="/components/alert/section-alerts" component={SectionAlerts} />
                  <Route path="/components/alert/system-alerts" component={SystemAlerts} />
                  <Route path="/components/alert" component={Alerts} />
                  <Route path="/components/breadcrumb" component={Breadcrumbs} />

                  <Route path="/components/back-to-top" component={BackToTop} />
                  <Route path="/components/badge-and-tag/badge" component={BadgesPage} />
                  <Route path="/components/badge-and-tag/classification-tag" component={ClassificationTag} />
                  <Route path="/components/badge-and-tag/emphasis-tag" component={EmphasisTag} />
                  <Route path="/components/badge-and-tag" component={BadgesAndTags} />
                  <Route path="/components/button" component={Buttons} />
                  <Route path="/components/tag" component={Tag} />
                  <Route path="/components/card/primary-card" component={PrimaryCard} />
                  <Route path="/components/card/secondary-card" component={SecondaryCard} />
                  <Route path="/components/card" component={Card} />
                  <Route path="/components/content-box" render={() => <Redirect to="/components/card" />}/>
                  <Route path="/components/help-tip" component={HelpTip} />
                  <Route path="/components/link" component={Links} />
                  <Route path="/components/modal" component={Modal} />
                  <Route path="/components/pagination" component={Pagination} />
                  <Route path="/components/step-indicator/interactive-step-indicator" component={InteractiveStepIndicator} />
                  <Route path="/components/step-indicator/noninteractive-step-indicator" component={NoninteractiveStepIndicator} />

                  <Route path="/components/step-indicator" component={StepIndicator} />
                  <Route path="/components/spinner" component={Spinner} />
                  <Route path="/components/tab-view" component={TabView} />
                  <Route path="/components/table" component={Table} />

                  {/* Fields and Forms */}
                  <Route path="/components/form-overview" component={FormOverview} />
                  <Route path="/components/checkbox" component={Checkbox} />
                  <Route path="/components/date-field" component={DateField} />
                  <Route path="/components/dropdown" component={Dropdown} />
                  <Route path="/components/form-error-alert" component={FormErrorAlert} />
                  <Route path="/components/input-stepper" component={InputStepper} />
                  <Route path="/components/radio" render={() => <Redirect to="/components/radio-button" />} />
                  <Route path="/components/radio-button" component={Radio} />
                  <Route path="/components/search-field" component={SearchField} />
                  <Route path="/components/text-area" render={() => <Redirect to="/components/text-input/text-area" />} />
                  <Route path="/components/text-field" render={() => <Redirect to="/components/text-input/text-field" />} />
                  <Route path="/components/text-input/text-area" component={TextArea} />
                  <Route path="/components/text-input/text-field" component={TextField} />
                  <Route path="/components/text-input" component={TextInput} />


                  {/* Global Components */}

                  <Route path="/components/footer/big-footer/blank-test" component={BlankTest} />
                  <Route path="/components/footer/big-footer" component={BigFooter} />
                  <Route path="/components/footer/slim-footer" component={SlimFooter} />
                  <Route path="/components/footer" component={IRSFooter} />
                  <Route path="/components/header" component={Header} />
                  <Route path="/components/side-navigation" component={SidebarPage} />
                  <Route path="/components/sidebar" render={() => <Redirect to="/components/side-navigation" />}/>
                  <Route path="/components/*" render={() => <Redirect to="/not-found" />}/>

                  <Route path="/components" render={() => <Redirect to="/components/accordion" />}/>
                  <Route path="/components/" render={() => <Redirect to="/components/accordion" />}/>
                </Switch>
              </Panel>
            </div>
          </div>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(UIElements));
