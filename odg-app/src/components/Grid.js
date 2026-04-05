import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { ExternalLink } from "../../../ols-ui/src/components/Links";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import List, {ListItem} from 'ols-ui/list';
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import styles from "../styles/Grid.scss";
import typographyStyles from "../styles/Typography.scss";


/**
 * *****************************************************************************
 * Content for Grid.
 *
 * @returns {node} node
 * *****************************************************************************
 */
function GridPage() {
  return (
    <div>
      <Helmet title="Grid system" />
      <DocsPage
        className="docs-styles"
        title="Grid system"
        subtitle="Grid systems provide a responsive structure for content."
      >
        <DocsSection title="Specifications" id="specifications">
          <Table
            caption="Grid System Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Extra large</TableHeaderCell>
                <TableHeaderCell scope="col">Large</TableHeaderCell>
                <TableHeaderCell scope="col">Medium</TableHeaderCell>
                <TableHeaderCell scope="col">Small</TableHeaderCell>
                <TableHeaderCell scope="col">Extra small</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Breakpoint</TableHeaderCell>
                <TableCell>&ge; 1200px</TableCell>
                <TableCell>&ge; 992px</TableCell>
                <TableCell>&ge; 768px</TableCell>
                <TableCell>&ge; 576px</TableCell>
                <TableCell>&lt; 576px</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Container width</TableHeaderCell>
                <TableCell>1140px</TableCell>
                <TableCell>960px</TableCell>
                <TableCell>720px</TableCell>
                <TableCell>540px</TableCell>
                <TableCell>auto</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Columns</TableHeaderCell>
                <TableCell>12</TableCell>
                <TableCell>12</TableCell>
                <TableCell>8</TableCell>
                <TableCell>4</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter widths</TableHeaderCell>
                <TableCell>24px (12px left/ 12px right)</TableCell>
                <TableCell>16px (8px left/ 8px right)</TableCell>
                <TableCell>16px (8px left/ 8px right)</TableCell>
                <TableCell>16px (8px left/ 8px right)</TableCell>
                <TableCell>16px (8px left/ 8px right) <br/>20px for outside left/right gutter </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Column width</TableHeaderCell>
                <TableCell>71px</TableCell>
                <TableCell>64px</TableCell>
                <TableCell>74px</TableCell>
                <TableCell>119px</TableCell>
                <TableCell>fluid</TableCell>
              </TableRow>
            </tbody>
          </Table>
          <div>
            <span className={typographyStyles.body}>
              <strong>Note:</strong>
              <List>
                <ListItem>The ODG grid is a modified version of U.S. Web Design System (USWDS) grid system that harmonizes with our standard spacing increments.</ListItem>
                <ListItem>The grid system is responsive.</ListItem>
                <ListItem>The container is centered within the browser.</ListItem>
                <ListItem>For extra-large: the container width and column width are fixed.</ListItem>
                <ListItem>For large – extra-small: the column width will resize to fit the container width which is dependent on the screen size.</ListItem>
                <ListItem>The column widths provided above are based on the container widths stated in the table.</ListItem>
              </List>
            </span>
          </div>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(GridPage);
