import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import BoundingBoxSpacing from '../assets/images/spacing-specs/BoundingBox_Spacing.png';
import BoundingBoxBaselineSpacing from '../assets/images/spacing-specs/BoundingBox_BaselineSpacing.png';
import BoundingBoxHeading from '../assets/images/spacing-specs/BoundingBox_Heading.png';
import BoundingBoxHTML from '../assets/images/spacing-specs/BoundingBox_HTML.png';
import BoundingBoxCSS from '../assets/images/spacing-specs/BoundingBox_CSS.png';

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import Spacer from 'ols-ui/spacer';

import styles from "../styles/Spacing.scss";

/**
 * *****************************************************************************
 * Content for spacing.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function SpacingPage() {
  return (
    <div>
      <Helmet title="Element spacing" />
      <DocsPage
        className="docs-styles"
        title="Element spacing"
        subtitle="Consistent application of margins and padding helps maintain alignment and vertical flow."
      >
        <DocsSection title="Vertical spacing in multiples of 4px">
          <p>
            In the <Link to="/styles/typography">typography</Link> section,  a 4px baseline grid is used. But line heights and sizing is only half the equation when it comes to maintaining a good vertical rhythm.
          </p>

          <p>
          Just like type, larger containers (such as cards) and individual elements (such as buttons and inputs) need to have a vertical margin and/or padding that's a multiple of 4px to keep those elements in lock-step with the vertical rhythm.
          </p>
        </DocsSection>

        <DocsSection title="Horizontal spacing in multiples of 4px too">
          <p>
            For consistency, horizontal margins and padding should also be a
            multiple of 4px. <Link to="/styles/grid-system">Column gutters</Link> are 24px (12px left/right padding)
            on the extra-large breakpoint and 16px (8px left/right padding)
            on the large, medium, small, and extra-small breakpoints.
          </p>
        </DocsSection>

        <DocsSection title="Bounding box spacing method">
          <p>
            The Online Design Guide (ODG) utilizes the "bounding box" spacing method. This method takes into consideration the additional space the line height creates around each text element. Including the line height within the text element box creates a consistent way to determine the vertical spacing in between elements. Also, the bounding box spacing values are easily translated via CSS.
          </p>

          <p>
            Many designers are more familiar with the "baseline" spacing method, and while it is perceived as more uniform, actual rules for spacing are inconsistent and difficult to predict and repeat. The bounding box method allows for standardized design because the designer measures using built-in mechanisms (Sketch measures the pixels between elements, inclusive of line height) rather than measuring pixels from a subjective point.
          </p>

          <Spacer height="40" />
          <FlexRow lg="12">
            <FlexCol md="6">
              <img style={{ maxWidth: '100%' }} src={BoundingBoxSpacing}
                alt="The size of a card element containing a header, content, and a button using the Bounding Box Method." />
            </FlexCol>
            <FlexCol md="6">
              <img style={{ maxWidth: '100%' }} src={BoundingBoxBaselineSpacing}
                alt="The size of a card element containing a header, content, and a button using the Baseline Method." />
            </FlexCol>
          </FlexRow>
          <Spacer height="40" />

          <p>Sketch tips to implement the use of the bounding box spacing method:</p>
          <List>
            <ListItem>Use auto-height in each text element. This setting can be found in text &gt; alignment (select the center option for auto height) in the right rail of Sketch. This ensures that all bounding boxes are snapped to their true size and will reflect accurate spacing measurements.</ListItem>
            <ListItem>Make sure spacing between text and other elements is a multiple of 4 (4px, 8px, 12px, 16px, etc.).</ListItem>
            <ListItem>For elements with an icon, button, or checkbox, the bounding box starts at the largest most part of an element (the text and the icon are grouped).</ListItem>
          </List>

          <p>Development tips to implement the use of the bounding box spacing method:</p>
          <List>
            <ListItem>Use reset.css and normalize.css to ensure consistent sizing across browsers</ListItem>
            <ListItem>Apply a natural box layout model using box-sizing: border-box globally</ListItem>
            <ListItem>
              Use padding and margin appropriately
              <List>
                <ListItem>Use padding to prevent content from touching the edges of a container</ListItem>
                <ListItem>Use margin to prevent elements from touching each other</ListItem>
              </List>
            </ListItem>
          </List>
          <Spacer height="40" />
          <FlexRow lg="12">
            <FlexCol md="6">
              <img style={{ width: "456px", maxWidth: '100%', height: 'auto', verticalAlign: 'top', marginBottom: '25px' }} src={BoundingBoxHeading} alt="Card element using the Bounding Box Method." />
              <img style={{ width: "456px", maxWidth: '100%', height: 'auto' }} src={BoundingBoxHTML} alt="HTML markup for the card element using the Bounding Box Method." />
            </FlexCol>
            <FlexCol md="6" style={{ textAlign: "center" }}>
              <img style={{ width:"408px", maxWidth: '100%', height: 'auto' }} src={BoundingBoxCSS} alt="CSS rules used for styling a card element using the Bounding Box Method." />
            </FlexCol>
          </FlexRow>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(SpacingPage);
