import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link from "../../../../ols-ui/src/components/Links";

import colorStyles from '../../styles/Colors.scss';

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function Version() {
  return (
    <div>
      <Helmet title="Version 4.0.1" />
      <DocsPage
        title="Version 4.0.1"
      >
        <DocsSection title="June 09, 2022">
          <p>
            This is a patch release that contains application-wide corrections, content updates, and minor styling bug fixes:
          </p>
          <List>
            <ListItem>
              Fixed preview tab spacing inconsistencies on <Link href="/components/dropdown">Dropdown</Link>, <Link href="/components/date-field">Date Field</Link>, <Link href="/components/text-input/text-area">Text Area</Link> and <Link href="/components/text-input/text-field">Text Field</Link>.
            </ListItem>
            <ListItem>
              Fixed an application-wide bug where pages open randomly within the destination page instead of the top.
            </ListItem>
            <ListItem>
              Fixed pixelated IRS logo application-wide within the ODG header.
            </ListItem>
            <ListItem>
              Fixed broken links to Text Field and Text Area on the <Link href="/components/form-overview">Form Overview</Link> page.
            </ListItem>
            <ListItem>
              Fixed focus state cut off on the last links within mobile on the <Link href="/big-footer-demo">Big Footer</Link> demo page.
            </ListItem>
            <ListItem>
              Fixed bounding box image alignment and ordering on the <Link href="/styles/element-spacing">Spacing</Link> page.
            </ListItem>
            <ListItem>
              Fixed focus state shifting to preview tab on the <Link href="/components/side-navigation">Side Navigation</Link> page.
            </ListItem>
            <ListItem>
              Removed extra space above the low fidelity UI Kit link on the <Link href="/styles/resources"> Resources</Link> page.
            </ListItem>
            <ListItem>
              Removed the Font Awesome cheatsheet link on the <Link href="/styles/resources">Resources</Link> page.
            </ListItem>
            <ListItem>
              Removed "coming soon" text from color #C7A97B and #B5BA05 rows and changed Content Box to Card on the <Link href="/styles/colors">Colors </Link> page.
            </ListItem>
            <ListItem>
              Removed extra spacing under the content loader preview on the <Link href="/components/spinner">Spinner</Link> page.
            </ListItem>
            <ListItem>
              Corrected the <Link href="/components/radio">Radio Button</Link> default and focus state size to match the UI Kit.
            </ListItem>
            <ListItem>
              Corrected a bug where tab selection caused the text to shift on the <Link href="/components/footer/big-footer">Big Footer</Link> page.
            </ListItem>
            <ListItem>
              Replaced the IRS Eagle.svg on the <Link href="/styles/iconography">Icons</Link> page due to rendering issues on the downloaded file.
            </ListItem>
            <ListItem>
              Added user tested checkmarks for Links and Dropdown on the <Link href="/about/roadmap">Roadmap</Link> page.
            </ListItem>
          </List>
          <p>
            <b>Updates in UI Kit</b>
          </p>
          <List>
            <ListItem>
              There are no UI Kit updates with ODG patch releases. Please continue to use UI Kit v4.0.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
