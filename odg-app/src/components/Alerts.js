import React from "react";
import Helmet from "react-helmet";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";

import Link from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

/**
 * *****************************************************************************
 * Content for Alerts.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function AlertsPage() {
  return (
    <div>
      <Helmet title="Alert" />
      <DocsPage
        className="docs-styles"
        title="Alert"
        subtitle="Alerts keep users informed of important and sometimes time-sensitive changes."
      >

        <DocsSection title="When to use">
          <p><Link to="alert/section-alerts">Section alerts</Link> are to be used when the alert pertains to one page or one section of an IRS application. Section alerts are categorized into four types:</p>
          <List>
            <ListItem>
              <strong>Informative</strong> - Provides information related to a user's account status, such as "it's filing season and we have not received a tax return from you," or that "information is not available at this time." It may also explain why certain data is shown or not shown.
            </ListItem>
            <ListItem>
              <strong>Success</strong> - Indicates that an action processed successfully, such as an online payment.
            </ListItem>
            <ListItem>
              <strong>Warning</strong> - Alerts the user that something may be wrong with their account, such as identity theft.
            </ListItem>
            <ListItem>
              <strong>Error</strong> - Indicates that an action failed completely, such as an online payment.
            </ListItem>
          </List>

          <p><Link to="alert/system-alerts">System alerts</Link> are to be used when the alert pertains to system-wide messaging. System alerts should:</p>
          <List>
            <ListItem>
              Provide information that the entire taxpayer population might be interested in (such as stimulus check information or tax filing deadline changes). 
            </ListItem>
            <ListItem>
              Provide information about system-wide failures.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
