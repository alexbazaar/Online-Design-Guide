import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../../ols-ui/src/components/DocsFoundations";
import List, { ListItem } from "../../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../../ols-ui/src/components/Links";

import colorStyles from '../../styles/Colors.scss';
import Table, { TableCell, TableHeaderCell, TableRow } from "../../../../ols-ui/src/components/Tables";

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
      <Helmet title="Version 3.0.0" />
      <DocsPage
        title="Version 3.0.0"
      >
        <DocsSection title="June 30, 2020">
          <p style={{marginBottom: '25px'}}>
            This is a major release that introduces the new Patriotic Color Palette to the Online Design Guide.
            There are quite a few notable changes including three new colors, "Old Glory Blue", "IRS Blue" and "Old Glory Red".
            Below you will find a table that highlights the components that have been affected by the new color palette.
            For more information on the color palette changes you can visit the <Link to="/styles/colors">Colors</Link> page.
          </p>
          <Table
            className={colorStyles.colorTable}
            caption="Patriotic Color Palette Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Old Color</TableHeaderCell>
                <TableHeaderCell scope="col">New Color</TableHeaderCell>
                <TableHeaderCell scope="col">Usage</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.black}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Black</span>
                      <span>#000000</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.grayDarkest}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Gray Darkest</span>
                      <span>#1B1B1B</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Text<br />
                Headings<br />
                Footer - Background<br />
                Form Elements: All - Borders<br />
                Icons<br />
                Spinner with Light Background<br />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueDarkest}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Darkest</span>
                      <span>#002346</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueDark}`}></div>
                    <div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Blue Dark</span>
                        <span>#002D62</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Header - Nav Menu Background
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueDarkOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Dark</span>
                      <span>#004673</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueDark}`}></div>
                    <div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Blue Dark</span>
                        <span>#002D62</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Button - Hover State<br />
                Calendar - Icon - Hover, Date - Hover<br />
                Header - Nav Menu Background<br />
                Link - Hover State<br />
                Sidebar - Top Level Active Line<br />
                Step Indicator - Circle - Hover & Active<br />
                Tab View - Header & Border - Active
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueDarkOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Dark</span>
                      <span>#004673</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blue}`}></div>
                    <div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Blue</span>
                        <span>#00599C</span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Header - Main Background <br/>
                Header - Nav Menu Background - Active State
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue</span>
                      <span>#0073AF</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blue}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue</span>
                      <span>#00599C</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Accordion - Icon (Open/Close)<br />
                Button - Default State<br />
                Calendar - Icons, Date - Active<br />
                Checkbox - Selected<br />
                Header - Background<br />
                Header - Nav Menu Background - Active State<br />
                Helptip - Icon (Open/Close)<br />
                Link - Default State<br />
                Link - External Link Icon<br />
                Radio Button - Selected<br />
                Step Indicator - Circle - Hover & Active
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueVividOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Vivid</span>
                      <span>#00BFFF</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueVivid}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Vivid</span>
                      <span>#2491FF</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Not currently used
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.olive}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Olive</span>
                      <span>#B5BA05</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.gold}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Gold</span>
                      <span>#C7A97B</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Content Box - Top Border (coming soon)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.blueLight}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Blue Light</span>
                      <span>#E4F3FB</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.tealLightest}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Teal Lightest</span>
                      <span>#E7F6F8</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Section Alert - Info - Background
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.yellowOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Yellow</span>
                      <span>#FA9E0D</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.warningYellow}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Yellow</span>
                      <span>#FDB81E</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Section Alert - Warning - Left Border <br/>
                System Alert - Background
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.redOld}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Red</span>
                      <span>#CD2026</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className={`${colorStyles.swatch} ${colorStyles.errorRed}`}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>Red</span>
                      <span>#D11242</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                Section Alert - Error - Left Border<br/>
                Form Error Text<br/>
                Text Area/Text Field - Field Border - Error State
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default withRouter(EmbedStyles(colorStyles)(Version));
