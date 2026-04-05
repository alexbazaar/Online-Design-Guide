import React from "react";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import FieldSet from "../../../ols-ui/src/components/FieldSet";
import Radio from "../../../ols-ui/src/components/Radio";

import LegendSpacing from '../assets/images/spacing-specs/Legend.png';
import Styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for FieldSet.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function LegendPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Legend"
      subtitle="Legends provide a label for a related group of fields or inputs."
    >
      <DocsSection>
        <TabView id="preview-tabs">
          <Tab label="Preview">
            <Panel padding="normal" maxheight="medium">
              <FieldSet legend="Which option do you prefer?">
                <Radio id="optionA" label="Option A" />
                <Radio id="optionB" label="Option B" />
                <Radio id="optionC" label="Option C" />
              </FieldSet>
            </Panel>
          </Tab>
          <Tab label="Spacing">
            <Panel maxheight="medium">
              <img src={LegendSpacing} alt="This is a marked up graphic of the Legend spacing" />
            </Panel>
          </Tab>
          <Tab label="HTML">
            <Panel className="panel-code" padding="none" maxheight="medium">
              <DocsCode language="xml">
                {heredoc`
                  <fieldset class="ols-ui--FieldSet-fieldset " data-component="FieldSet">
                    <legend data-component="legend" class="ols-ui--FieldSet-legend" />
                      Which option do you prefer?
                    </legend>
                    <div data-component="Radio">
                      <input
                        type="radio"
                        class="ols-ui--Radio-radio"
                        data-component="RadioInput"
                        aria-disabled="false"
                        id="optionA"
                        value="optionA"
                        name="radios"
                      />
                      <label
                        id="optionA-label"
                        class="ols-ui--InputLabel-label"
                        for="optionA"
                        data-component="InputLabel"
                      >
                        Option A
                      </label>
                    </div>
                    <div data-component="Radio">
                      <input
                        type="radio"
                        class="ols-ui--Radio-radio"
                        data-component="RadioInput"
                        aria-disabled="false"
                        id="optionB"
                        value="optionB"
                        name="radios"
                      />
                      <label
                        id="optionB-label"
                        class="ols-ui--InputLabel-label"
                        for="optionB"
                        data-component="InputLabel"
                      >
                        Option B
                      </label>
                    </div>
                    <div data-component="Radio">
                      <input
                        type="radio"
                        class="ols-ui--Radio-radio"
                        data-component="RadioInput"
                        aria-disabled="false"
                        id="optionC"
                        value="optionC"
                        name="radios"
                      />
                      <label
                        id="optionC-label"
                        class="ols-ui--InputLabel-label"
                        for="optionC"
                        data-component="InputLabel"
                      >
                        Option C
                      </label>
                    </div>
                  </fieldset>
                `}
              </DocsCode>
            </Panel>
          </Tab>
          <Tab label="CSS">
            <Panel className="panel-code" padding="none" maxheight="medium">
              <DocsCode language="scss">
                {heredoc`
                  .ols-ui--FieldSet-sr {
                    position: absolute;
                    overflow: hidden;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    border: 0;
                    margin: -1px;
                    clip: rect(1px, 1px, 1px, 1px);
                    -webkit-clip-path: inset(50%);
                            clip-path: inset(50%);
                    word-wrap: normal;
                  }

                  .ols-ui--FieldSet-fieldset {
                    padding: 0;
                    border: none;
                    margin: 0;
                  }

                  .ols-ui--FieldSet-fieldset::after {
                    display: table;
                    clear: both;
                    content: "";
                  }

                  .ols-ui--FieldSet-fieldset > * {
                    clear: both;
                  }

                  .ols-ui--FieldSet-legend {
                    max-width: 42em;
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    width: 100%;
                    padding: 0;
                    margin-top: 0;
                    margin-bottom: 16px;
                    float: left;
                    white-space: normal;
                  }

                  .ols-ui--InputLabel-label {
                    color: #353637;
                    display: block;
                    max-width: 30em;
                    margin-top: 24px;
                    font-size: 16px;
                    line-height: 24px;
                  }

                  .ols-ui--InputLabel-label .ols-ui--InputLabel-required {
                    margin-left: 0.5em;
                    color: #d11242;
                    font-size: 12px;
                  }

                  .ols-ui--InputLabel-label .ols-ui--InputLabel-disabled {
                    color: #d6d7d9;
                    cursor: not-allowed;
                  }

                  .ols-ui--InputLabel-label .ols-ui--InputLabel-disabled .ols-ui--InputLabel-required {
                    color: #d6d7d9;
                  }

                  .ols-ui--Radio-radio {
                    position: absolute;
                    margin-left: -20px;
                    opacity: 0;
                  }

                  .ols-ui--Radio-lt-ie9 .ols-ui--Radio-radio {
                    position: static;
                    width: auto;
                    border: 0;
                    margin: 0.4em 0.4em 0 0;
                    float: left;
                  }

                  .ols-ui--Radio-radio + label {
                    display: block;
                    margin: 12px 0;
                    cursor: pointer;
                    font-weight: 400;
                  }

                  .ols-ui--Radio-radio + label::before {
                    position: relative;
                    left: 2px;
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 14px;
                    background: #ffffff;
                    border-radius: 100%;
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #353637;
                    content: "\A0";
                    font-size: 16px;
                    line-height: 12px;
                    text-indent: 0.15em;
                  }

                  .ols-ui--Radio-radio:checked + label::before {
                    background-color: #00599c;
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #00599c;
                  }

                  .ols-ui--Radio-radio:focus + label::before {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #353637, 0 0 0 5px #ffffff, 0 0 0 7px #add4fe;
                  }

                  .ols-ui--Radio-radio:checked:focus + label::before {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #00599c, 0 0 0 5px #ffffff, 0 0 0 7px #add4fe;
                  }

                  .ols-ui--Radio-radio:disabled + label {
                    color: #d6d7d9;
                    cursor: not-allowed;
                  }

                  .ols-ui--Radio-radio:disabled + label::before {
                    background: #f3f3f3;
                    box-shadow: 0 0 0 2px #f3f3f3, 0 0 0 3px #d6d7d9;
                    cursor: not-allowed;
                  }
                `}
              </DocsCode>
            </Panel>
          </Tab>
        </TabView>
        <span className={Styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
      </DocsSection>

      <DocsSection title="When to use">
        <p>
          Related form elements should be grouped together and labeled with a
          legend. One common example is a question with radio button options for
          answers. The question text and radio buttons are wrapped in a
          fieldset, with the question itself being inside the legend.
        </p>
      </DocsSection>

      <DocsSection title="Specifications">
        <h3>Typography</h3>
        <Table
          caption="Legend Typography Specifications"
        >
          <thead>
            <TableRow>
              <TableHeaderCell scope="col">Context</TableHeaderCell>
              <TableHeaderCell scope="col">Reference</TableHeaderCell>
              <TableHeaderCell scope="col">Color</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Legend</TableCell>
              <TableCell>
                <Link to="/styles/typography/#display-type">
                  Body text
                </Link>
              </TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </DocsSection>

      <DocsSection title="Best practices">
        <ul>
          <li>
            Use a single legend for fieldset (this is required). More complex
            forms may have multiple fieldsets, each with their own legend.
          </li>
          <li>
            Keep legend text short. Assistive technologies will read the
            entire legend each time the user moves to a different input in the
            fieldset.
          </li>
          <li>
            Keep form blocks in a vertical pattern. This approach is ideal, from
            both a mobile design and an accessibility standpoint, because of
            limited vision that makes it hard to scan from right to left.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">
        <h3>Provide fieldsets for groups of form controls</h3>
        <p>
          Forms should utilize the fieldset and legend elements to group related
          form controls. For example, on an order form, authors should separate
          categories such as "Billing Information", "Shipping Address", and
          "Order Summary" using fieldset elements. By grouping all of the
          elements in one category users of assistive technologies can
          understand the relationship of the elements. For example, without
          proper grouping a person using a screen reader might not be able to
          differentiate the address field for shipping from the address field
          for billing. Another example is when radio buttons are used as answers
          and a question appears above or to the left of the radio buttons. When
          the question text and radio buttons are not properly constructed in a
          fieldset users of screen readers may only be aware of the answers and
          not the question.
        </p>
        <p>
          Utilize the fieldset element to group together related groups. For
          each fieldset element, ensure that a legend has been defined and
          contains an appropriate value. If desired, CSS may be used to modify
          or suppress the default rectangle appearance of fieldsets and visual
          position of the legend text. CSS could even be used to render the
          legend text via off-screen hidden text, if it is truly only needed by
          users of screen readers (IE 6 and 7 only). For Firefox and IE 8,
          developers may choose to use a spacer image with an alt attribute set
          as the contents of the legend if the legend is intended for screen
          reader users only.
        </p>
        <p>
          When field groupings are nested, nested fieldsets should be used to
          indicate a hierarchical relationship. However, assistive technologies
          currently have limited support for nested fieldsets and some screen
          readers may render the incorrect fieldset's legend with a form field.
        </p>
        <p>
          All of the radio buttons in a group should be included within a
          fieldset with the group name as its legend (unless there is truly no
          shared visual label and each radio button's label stands completely
          alone to indicate its meaning). If there is some reason why the group
          name / shared label cannot be conveyed by actual fieldset/legend
          markup (i.e., if the legend is in a different table cell), the combined
          meaning of the group name and each radio button's visual label should
          be conveyed by explicit labeling. As with other "multiple label"
          situations, the on-screen label could be supplemented with off-screen
          hidden text (barring the need to convey it to users with low vision)
          or by adding a title attribute to each radio button input. If the
          title attribute method is used, note that any existing label element
          must be disassociated from the input to ensure that the label is
          ignored in favor of the title attribute. The title attribute should
          contain both the group label and the label of the radio button, such
          as "Gender: Male".
        </p>
        <p>
          When accessible rich internet application specification (ARIA) is an
          option, ARIA radiogroups can be used with the aria-labelled by
          attribute.
        </p>
        <p>
          In some cases where the answers are unique and the question is long it
          may be more accessible to just not have the question associated
          directly with the radio button. In these cases the question would be
          best indicated using some other element such as a heading.
        </p>
        <p>
          It is also to be possible to be WCAG conformant or Section 508
          compliant without use of the fieldset. In these cases one of the above
          three techniques must be used or the label of the radio buttons should
          be sufficiently unique and the visual radio group question indicated
          in a structural manner that users of assistive technology can access.
          ARIA can also be used to group form field. The role=group or
          role=radiogroup can be used to group controls. The group needs to have
          an accessible name using aria-labelledby.
        </p>

        <h3>Applicable Standards</h3>
        <p>Section 508 and 255 (Revised 2017)</p>

        <p>Chapter 3: Functional Performance Criteria</p>

        <p>302.9 With Limited Language, Cognitive, and Learning Abilities</p>

        <p>Web Content Accessibility Guidelines (WCAG) 2.0 Level A </p>

        <ul>
          <li>
            1.3.1 Information and relationships conveyed through presentation
          </li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
          <li>3.3.3 Error Suggestion</li>
        </ul>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="https://component-library-master-pl.irslabs.org/field-set">
              FieldSet
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
