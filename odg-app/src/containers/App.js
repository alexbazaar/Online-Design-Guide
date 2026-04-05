import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Switch, Route, withRouter, Redirect } from "react-router";
import Helmet from "react-helmet";

/* OLS UI Imports */
import "../../../ols-ui/src/components/AddressForm";
import "../../../ols-ui/src/components/Checklist";
import "../../../ols-ui/src/components/CountryPicker";
import "../../../ols-ui/src/components/CreatePasswordField";
import "../../../ols-ui/src/components/FieldSet";
import "../../../ols-ui/src/components/Form";
import "../../../ols-ui/src/components/Image";
import "../../../ols-ui/src/components/IRSLogo";
import "../../../ols-ui/src/components/NameForm";
import "../../../ols-ui/src/components/PasswordField";
import "../../../ols-ui/src/components/PasswordResetForm";
import "../../../ols-ui/src/components/PhoneNumberField";
import "../../../ols-ui/src/components/Radio";
import "../../../ols-ui/src/components/SignInForm";
import "../../../ols-ui/src/components/SplitView";
import "../../../ols-ui/src/components/SSNField";
import "../../../ols-ui/src/components/StatePicker";
import "../../../ols-ui/src/components/Timeline";
import "../../../ols-ui/src/components/TimelinePanel";
import "../../../ols-ui/src/components/Tooltip";
import "../../../ols-ui/src/components/ZipCodeField";
import "../../../ols-ui/src/styles/irs.scss";
import { AppWrapper, Page } from "../../../ols-ui/src/components/AppFoundations";
import { NavBarItem } from "../../../ols-ui/src/components/NavBar";
import { WarningAlert } from "../../../ols-ui/src/components/Alerts";
import Badges from "../../../ols-ui/src/components/Badges";
import favicon from "../../../ols-ui/src/assets/favicons/favicon.ico";
import favicon144 from "../../../ols-ui/src/assets/favicons/irs_144x144.png";
import favicon16 from "../../../ols-ui/src/assets/favicons/irs_16x16.png";
import favicon180 from "../../../ols-ui/src/assets/favicons/irs_180x180.png";
import favicon32 from "../../../ols-ui/src/assets/favicons/irs_32x32.png";
import favicon72 from "../../../ols-ui/src/assets/favicons/irs_72x72.png";
import favicon76 from "../../../ols-ui/src/assets/favicons/irs_76x76.png";
import IRSHeader from "../../../ols-ui/src/components/IRSHeader";
import SlimFooter from "../../../ols-ui/src/components/SlimFooter";

/* ODG Imports */
import About from './About';
import AccordionTest from "./AccordionTest";
import AlertTestPageTemplate from "./AlertTestPageTemplate";
import BadgesTest from "./BadgesTest";
import BigFooterTest from "./BigFooterTest";
import BreadcrumbsTest from "./BreadcrumbsTest";
import ButtonsTest from "./ButtonsTest";
import CardTest from "./CardTest";
import ClassificationTagTest from "./ClassificationTagTest";
import ClassificationTagTestBusinesses from "./ClassificationTagTestBusinesses";
import ClassificationTagTestIndividuals from "./ClassificationTagTestIndividuals";
import DateFieldTest from "./DateFieldTest";
import DesignStyle from "./DesignStyle";
import DropdownTest from "./DropdownTest";
import EmphasisTagTest from "./EmphasisTagTest";
import FormOverviewTest from "./FormOverviewTest";
import GettingStarted from "./GettingStarted";
import HeaderTest from "./HeaderTest";
import HelpTipTest from "./HelpTipTest";
import InputStepperTest from "./InputStepperTest";
import LinksTest from "./LinksTest";
import NotFound404 from "./NotFound404";
import PaginationDemo from "./PaginationDemo";
import Releases from "./Releases";
import ScrollToTop from "../components/ScrollToTop";
import SearchTest from "./SearchTest";
import SideNavTest from "./SideNavTest";
import SlimFooterTest from "./SlimFooterTest";
import SpinnerTest from "./SpinnerTest";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepIndicatorTestInteractive from "./StepIndicatorTestInteractive";
import StepIndicatorTestStatic from "./StepIndicatorTestStatic";
import StepStatic2 from "./StepStatic2";
import styles from "../styles/App.scss";
import TabViewTest from "./TabViewTest";
import TextFieldTest from "./TextFieldTest";
import UIElements from "./UIElements";

/**
 * The main app component for the Design guide.
 * This component will render the main page layout items as well as any header
 * metadata supplied to the `<Helmet .../>` component.
 */
class App extends React.Component {

  /**
	 * React lifecycle method that gets called whenever the component receives
	 * new props.
	 *
	 * This method will auto-scroll to the named anchor indicated by the value
	 * in the URL's hash mark, if present.
	 */
  componentDidUpdate() {
    const { hash } = window.location;
    window.scrollTo(0, 0);
    if (hash !== "") {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }


  /**
  * React lifecycle method that is executed after the initial render on the client side
   */
  componentDidMount() {
    const bodyTag = document.body;
    const appRoot = document.getElementById("root");
    const gtmScript = document.getElementById("gtmBody");


    // Inserts the Google Tag Manager script right after the body tag,
    // before the inner app `div` tag.
    bodyTag.insertBefore(gtmScript, appRoot);
    window.scrollTo(0, 0);
  }

  /**
	 * Renders the component.
	 * @returns {Node|null} The rendered DOM node.
	 */
  render() {

    return (
      <AppWrapper>
        <ScrollToTop />
        {/*
          * Must insert the Google Tag Manager NoScript iframe here.
          * Then it is rewritten at `ComponentDidMount()` and reinserted
          * right after the `Body` tag.
        */}
        <noscript id="gtmBody"><iframe title="GTM" src="https://www.googletagmanager.com/ns.html?id=GTM-MWLBW2T" height="0" width="0" style={{ display:"none", visibility:"hidden" }}></iframe></noscript>
        <Helmet
          defaultTitle="IRS Online Design Guide"
          titleTemplate="%s | IRS Online Design Guide"
          meta={[
            {
              name: "description",
              content:
								"Visual design standards for IRS web applications"
            }
          ]}
          htmlAttributes={{ lang: "en" }}
          link={[
            { rel: "shortcut icon", href: favicon },
            { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
            { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
            { rel: "apple-touch-icon", sizes: "72x72", href: favicon72 },
            { rel: "apple-touch-icon", sizes: "76x76", href: favicon76 },
            { rel: "apple-touch-icon", sizes: "144x144", href: favicon144 },
            { rel: "apple-touch-icon", sizes: "180x180", href: favicon180 }
          ]}
          script={[
            {
              type: "text/javascript",
              innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWLBW2T');`
            }
          ]}
        />
        <Page>
          <IRSHeader
            title="Online Design Guide"
            showOfficialSiteBanner={false}
            systemAlert={this.props.location.pathname.startsWith('/alerts-test') || this.props.location.pathname.startsWith('/system-alerts-test') ? <WarningAlert className={styles.testWarning} group="system" id="test-warning" role="alert">
              {`This is a sample warning message within a system alert. Typically, there would be a link to `}<a href="/" style={{color: 'black'}}>more information about the alert.</a>
            </WarningAlert> : null}
            className={styles.testHeader}
            navBar={
              <Fragment>
                <NavBarItem to="/getting-started" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Getting started</NavBarItem>
                <NavBarItem to="/about" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>About</NavBarItem>
                <NavBarItem to="/styles" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Styles</NavBarItem>
                <NavBarItem to="/components" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Components</NavBarItem>
                <NavBarItem to="/releases" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Releases</NavBarItem>
                {this.props.location.pathname.startsWith('/badges-demo') && 
                <NavBarItem to="/badges-demo/inbox" className={styles.navBarBadgeDemo} activeClassName={styles.navBarActiveClass}>Inbox <Badges value={inboxMessages.length} hiddenLabel="Unread Messages" /></NavBarItem>}
              </Fragment>
            }
          />
          <Switch>
            <Route path="/getting-started" component={GettingStarted} pageTitle="Test" />
            <Route path="/styles" component={DesignStyle} />
            <Route path="/design-style/spacing" render={() => <Redirect to="/styles/element-spacing"/>} />
            <Route path="/design-style/icons" render={() => <Redirect to="/styles/iconography"/>} />
            <Route path="/design-style/grid" render={() => <Redirect to="/styles/grid-system"/>} />
            <Route path="/design-style/principles" render={() => <Redirect to="/styles/design-principles"/>} />
            <Route path="/design-style" render={() => <Redirect to={`/styles/${this.props.location.pathname.split('/').slice(2).join('/')}`}/>} />
            <Route path="/components" component={UIElements} />
            <Route path="/ui-elements/breadcrumbs" render={() => <Redirect to="/components/breadcrumb"/>} />
            <Route path="/ui-elements/links" render={() => <Redirect to="/components/link"/>} />
            <Route path="/ui-elements/buttons" render={() => <Redirect to="/components/button"/>} />
            <Route path="/ui-elements" render={() => <Redirect to={`/components/${this.props.location.pathname.split('/').slice(2).join('/')}`}/>} />
            <Route path="/releases" component={Releases} />
            <Route path="/about" component={About} />
            <Route path="/faq" render={() => <Redirect to="/about/faq"/>} />
            <Route path="/" exact render={() => <Redirect to="/getting-started" />} />
            <Route path="/buttons-test" component={ButtonsTest} />
            <Route path="/breadcrumbs-test" component={BreadcrumbsTest} />
            <Route path="/emphasistag-test" component={EmphasisTagTest} />
            <Route path="/classificationtag-test" component={ClassificationTagTest} />
            <Route path="/classificationtag-test-businesses" component={ClassificationTagTestBusinesses} />
            <Route path="/classificationtag-test-individuals" component={ClassificationTagTestIndividuals} />
            <Route path="/form-overview-test" component={FormOverviewTest} />
            <Route path="/links-test" component={LinksTest} />
            <Route path="/header-test" component={HeaderTest} />
            <Route path="/helptip-test" component={HelpTipTest} />
            <Route path="/datefield-test" component={DateFieldTest} />
            <Route path="/dropdown-test" component={DropdownTest} />
            <Route path="/spinner-test" component={SpinnerTest} />
            <Route path="/stepindicator-test-static" component={StepIndicatorTestStatic} />
            <Route path="/stepindicator-test-interactive" component={StepIndicatorTestInteractive} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
            <Route path="/stepstatic2" component={StepStatic2} />
            <Route path="/textfield-test" component={TextFieldTest} />
            <Route path="/accordion-test" component={AccordionTest} />
            <Route path="/alerts-test" component={AlertTestPageTemplate} />
            <Route path="/big-footer-demo" component={BigFooterTest} />
            <Route path="/slim-footer-demo" component={SlimFooterTest} />
            <Route path="/card-test" component={CardTest} />
            <Route path="/tab-view-test" component={TabViewTest} /> 
            <Route path="/search-test" component={SearchTest} />
            <Route path="/sidenav-test" component={SideNavTest} />
            <Route path="/input-stepper-test" component={InputStepperTest} />
            <Route path="/pagination-demo" component={PaginationDemo} />
            <Route path="/badges-demo" component={BadgesTest} />
            <Route component={NotFound404} />
          </Switch>
          <SlimFooter /> 
        </Page>

      </AppWrapper>
    );
  }
}

/**
 * [mapStateToProps description]
 * @param  {object} state [description]
 * @returns {object} [description]
 */
function mapStateToProps() {
  return {};
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

App.defaultProps = {
  location: {
    pathname: ''
  }
};

const ConnectedApp = connect(mapStateToProps)(App);
export default withRouter(ConnectedApp, ScrollToTop);
