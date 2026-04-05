import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import Footer, {
  FooterTop,
  FooterTopGroup,
  FooterTopGroupItem
} from "../../../ols-ui/src/components/Footer";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for IRSFooter.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function IRSFooter() {
  return (
    <div>
      <Helmet title="Footer" />
      <DocsPage
        className="docs-styles"
        title="Footer"
        subtitle="A footer is the bottom-most element of a website."
      >
        <DocsSection title="When to use">
          <p>A footer should be used on all IRS pages.</p>
          <p>
            The <Link to="/components/footer/big-footer">big footer</Link> is
            typically used on IRS.gov and public-facing IRS.gov applications. It
            is comprised of two bars. The main bar contains columns of relevant
            links and social media icons. The bottom bar contains the IRS logo,
            privacy policy and accessibility links.
          </p>
          <p>
            The <Link to="/components/footer/slim-footer">slim footer</Link> is
            typically used on IRS.gov applications that require authentication.
            It is comprised of one bar that contains the IRS logo, privacy
            policy and accessibility links.
          </p>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
