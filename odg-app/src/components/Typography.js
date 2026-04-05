import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import Link, { ExternalLink, EmailLink } from "../../../ols-ui/src/components/Links";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import appStyles from "../styles/App.scss";
import styles from "../styles/Typography.scss";
import baselineExample from "../assets/images/baseline-example.png";
import baselineExample2 from "../assets/images/baseline-example-2.png";
import SectionAlert from "../../../ols-ui/src/components/Alerts";

/**
 * *****************************************************************************
 * Content for Typography.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function TypographyPage() {
  return (
    <div>
      <Helmet title="Typography" />
      <DocsPage
        className="docs-styles"
        title="Typography"
        subtitle="Typography is the style and appearance of content headings, text blocks, and lists used to clearly communicate information."
      >
        <DocsSection title="When to use">
          <p>
            Use various typographical styles and elements to format content for
            better readability and emphasis.
          </p>
        </DocsSection>

        <DocsSection title="Source Sans Pro">
          <p>
            Source Sans Pro is used for both headings and body type. While additional font styles are available, only Regular 400, Regular Italic 400, Bold 700 and Bold Italic 700 should be used.
          </p>
        </DocsSection>

        <DocsSection title="Display type" id="display-type">
          <p>
            Headings and display type are meant to be short and ideally, not
            wrap onto multiple lines. If line wraps are unavoidable, keep the
            number of lines to two at most.
          </p>
          <p>
            There are six heading styles to choose from. Some sizes vary by {" "}
            <Link to="/styles/grid-system/">breakpoint</Link>:
          </p>
          <Table caption="Headings and Display Type Typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Element</TableHeaderCell>
                <TableHeaderCell scope="col">Size/line height</TableHeaderCell>
                <TableHeaderCell scope="col">Weight</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  <span
                    className={styles.title}
                    style={{ fontSize: "40px", lineHeight: "56px" }}
                  >
                    Heading 40
                  </span>
                </TableHeaderCell>

                <TableCell>
                  40px / 56px
                  <br />(<b>Heading 40</b> is only used on extra large - medium.{" "}
                  <b>Heading 40</b> will reduce to <b>Heading 28</b> on small -
                  extra small.)
                </TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.subtitle}>Subtitle</span>
                </TableHeaderCell>
                <TableCell>20px / 28px</TableCell>
                <TableCell>Normal</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.heading1}>Heading 28</span>
                </TableHeaderCell>
                <TableCell>28px / 40px</TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.heading2}>Heading 24</span>
                </TableHeaderCell>
                <TableCell>24px / 36px</TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.heading3}>Heading 20</span>
                </TableHeaderCell>
                <TableCell>20px / 28px</TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.heading4}>Heading 16</span>
                </TableHeaderCell>
                <TableCell>16px / 24px</TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span
                    className={styles.body}
                    style={{ whiteSpace: "normal" }}
                  >
                    Body text (includes links, bulleted lists, etc.)
                  </span>
                </TableHeaderCell>
                <TableCell>16px / 24px</TableCell>
                <TableCell>Normal</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span
                    className={styles.tiny}
                    style={{ whiteSpace: "normal" }}
                  >
                    Tiny text (caption, disclaimer, footnote, and excerpt)
                  </span>
                </TableHeaderCell>
                <TableCell>12px / 16px</TableCell>
                <TableCell>Normal</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Links" id="links">
          <Table caption="Links Typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Element</TableHeaderCell>
                <TableHeaderCell scope="col">Size/line height</TableHeaderCell>
                <TableHeaderCell scope="col">Weight</TableHeaderCell>
                <TableHeaderCell scope="col">Other</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  <Link to="/styles/typography">Link</Link>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>,
                  underlined
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <Link
                    to="/styles/typography"
                    className={styles.hoverLink}
                  >
                    Hover link
                  </Link>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>,
                  underlined
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <Link
                    to="/styles/typography"
                    className={styles.activeLink}
                  >
                    Active link
                  </Link>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue darkest</Link>,
                  underlined
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <Link
                    to="/styles/typography"
                    className={styles.visitedLink}
                  >
                    Visited link
                  </Link>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Purple</Link>,
                  underlined
                </TableCell>
                <TableCell>#6e41a0</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <ExternalLink href="#">External link</ExternalLink>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>,
                  underlined, icon to the right
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <EmailLink href="#">Email link</EmailLink>
                </TableHeaderCell>
                <TableCell>inherits</TableCell>
                <TableCell>inherits</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>,
                  underlined, icon to the right
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Lists" id="lists">
          <Table caption="Lists Typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Element</TableHeaderCell>
                <TableHeaderCell scope="col">Size/line height</TableHeaderCell>
                <TableHeaderCell scope="col">Weight</TableHeaderCell>
                <TableHeaderCell scope="col">Other</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  <List>
                    <ListItem>Unordered list item</ListItem>
                  </List>
                </TableHeaderCell>
                <TableCell>16px / 24px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  Disc bullet, <br />
                  default left margin, <br />
                  default left padding, <code>12px</code> bottom padding
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <List type="ol">
                    <ListItem>Ordered list item</ListItem>
                  </List>
                </TableHeaderCell>
                <TableCell>16px / 24px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  default left margin, <br />
                  default left padding, <code>12px</code> bottom padding
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Form inputs" id="form-inputs">
          <Table caption="Form Inputs Typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Element</TableHeaderCell>
                <TableHeaderCell scope="col">Size/line height</TableHeaderCell>
                <TableHeaderCell scope="col">Weight</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.inputLabel}>Input label</span>
                </TableHeaderCell>
                <TableCell>16px / 24px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.inputText}>Input text</span>
                </TableHeaderCell>
                <TableCell>16px / 20px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell>
                  <span className={styles.placeholderText}>
                    Placeholder text
                  </span>
                </TableHeaderCell>
                <TableCell>16px / 20px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell>
                  <span className={styles.hintText}>Hint text</span>
                </TableHeaderCell>
                <TableCell>14px / 20px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <span className={styles.inputError}>Error text</span>
                </TableHeaderCell>
                <TableCell>14px / 20px</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>#d11242</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        {/* <DocsSection title="Font sizing guidelines" id="font-sizing">
            <p>
            Type is sized using a
            <ExternalLink href="http://www.modularscale.com/?1&em&1.333">
                3:4 "perfect fourth" scale
            </ExternalLink>
            using a base of 16px. The table below shows all possible sizing
            increments, however only the sizes in the highlighted rows should be
            used except in rare, special circumstances.
            </p>

            <Table
            className={styles.sizesTable}
            caption="Scaled Sizes in Typography"
            >
            <thead>
                <TableRow>
                <TableHeaderCell>pixels</TableHeaderCell>
                <TableHeaderCell>ems</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                <TableCell>6px</TableCell>
                <TableCell>0.422em</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>9px</TableCell>
                <TableCell>0.563em</TableCell>
                </TableRow>
                <TableRow className={styles.highlightedRow}>
                <TableCell>12px</TableCell>
                <TableCell>0.75em</TableCell>
                </TableRow>
                <TableRow className={styles.highlightedRow}>
                <TableCell>16px</TableCell>
                <TableCell>1em</TableCell>
                </TableRow>
                <TableRow className={styles.highlightedRow}>
                <TableCell>20px (21px)</TableCell>
                <TableCell>1.333em</TableCell>
                </TableRow>
                <TableRow className={styles.highlightedRow}>
                <TableCell>28px</TableCell>
                <TableCell>1.777em</TableCell>
                </TableRow>
                <TableRow className={styles.highlightedRow}>
                <TableCell>40px (38px)</TableCell>
                <TableCell>2.369em</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>50px</TableCell>
                <TableCell>3.157em</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>67px</TableCell>
                <TableCell>4.209em</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>90px</TableCell>
                <TableCell>5.61em</TableCell>
                </TableRow>
            </tbody>
            </Table>
        </DocsSection> */}

        <DocsSection title="Usability guidance" id="max-width">
          <h3>General rules</h3>
          <List>
            <ListItem>
              Use ALL CAPS for any abbreviations. Avoid emphasizing words in ALL
              CAPS as it can be considered as "shouting" at the user. 
            </ListItem>
            <ListItem>
              Use italics for emphasis. Italics can be used for pull-quotes, as
              a part of a heading style or to emphasize a few words or code
              snippets in a paragraph. Italics should be used sparingly because
              in certain font types and sizes, italicized content can be hard to
              read.
            </ListItem>
            <ListItem>
              Use bold text to bring attention to the text itself to ensure the
              user will not miss the most important points. Bold text should be
              used to emphasize single words in a sentence or a single sentence,
              but never a full paragraph to ensure legibility. Additionally,
              bolded text can be used in headings.
            </ListItem>
            <ListItem>
              Do not use underlined text as it causes user confusion that it is
              hyperlinked text.
            </ListItem>
            <ListItem>
              Add parentheses to provide additional content in a sentence.
              Parentheses can be used to introduce tables or figures within a
              sentence, to represent converted units, when enumerating, to
              include references, and to introduce an acronym after it has been
              written out.
            </ListItem>
            <ListItem>
              Use unordered lists to create a list of related items, in no
              particular order. Unordered lists can appear as bullets, bullet
              squares, and check marks.
            </ListItem>
            <ListItem>
              Use ordered lists to create a list of related items, in a specific
              order. Ordered lists can appear as numbers, letters, or Latin
              numerals.
            </ListItem>
          </List>

          <h3>Font size & length</h3>
          <List>
            <ListItem>
              Visually, headings are presented as larger and more distinct than
              surrounding text. Using headings and making them visually apparent
              is especially helpful for users with cognitive disabilities.
              <List>
                <ListItem>
                  The ODG provides heading sizes and styling. The heading sizes
                  do not directly correlate to a heading tag (
                  <code>&#60;H1&#62;</code>
                  through <code>&#60;H6&#62;</code>). The heading tags should be
                  determined by project and based on the hierarchy of the page.
                </ListItem>
                <ListItem>
                  Each page should have only one <code>&#60;H1&#62;</code>{" "}
                  heading tag as it is used as a title of the page. Using more
                  than one <code>&#60;H1&#62;</code> heading tag will adversely
                  affect the page's search engine optimization (SEO) rating.
                </ListItem>
                <ListItem>
                  Every subsequent heading tag (<code>&#60;H2&#62;</code>{" "}
                  through <code>&#60;H6&#62;</code>) can have several instances
                  on the page and used in a hierarchical way{" "}
                  <code>&#60;H2&#62;</code> being the next in importance after{" "}
                  <code>&#60;H1&#62;</code> and so on.
                </ListItem>
                <ListItem>
                  Do not use bold instead of a heading. Though the text might
                  look like a heading, the underlying code is not set correctly
                  so the users with screen readers will not benefit.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Aim for body type to have a line length of about 45-90 characters.
              The line length impacts readability. If a line is too long, it
              becomes difficult for the reader to keep their place. Too short
              and the constant eye movement makes it easier to skip words and
              more difficult to understand larger sentences and thoughts.
              Headlines should be about 30 characters per line.
            </ListItem>
            <ListItem>
              Longer text should have a line height of at least 1.5 to increase
              readability.
            </ListItem>
            <ListItem>
              Apply larger fonts when text needs to be glanceable. Lowercase
              fonts should be avoided for text that needs to be glanceable.
            </ListItem>
          </List>

          <h3>Footnotes</h3>
          <List>
            <ListItem>
              Avoid text block styles like footnotes that break the user's flow
              of reading.
            </ListItem>
          </List>
          {/* <List>
                <ListItem><strong>Italics</strong> is a type of font face formatting used for emphasis. Italics should be used sparingly because in certain font types and sizes italicized content can be hard to read. Italics can be used for pull-quotes, as part of a heading style or to emphasize a few words or code snippets in a paragraph.</ListItem>    
                <ListItem><strong>ALL CAPS</strong> should be used for any abbreviations or as part of a style (i.e. heading, buttons, etc.). Avoid emphasizing words in ALL CAPS as it can be considered as "shouting" at the user.</ListItem>    
                <ListItem><strong>Bold</strong> text is a type of formatting used for emphasis, but unlike italics, bolded text is used to bring attention to the text itself to ensure the user will not miss the most important points. It should be used to emphasize single words in a sentence or a single sentence, but never a full paragraph to ensure legibility. Additionally, bolded text can be used in headings.</ListItem>    
                <ListItem><strong>Underlined</strong> text should not be used online as it causes user confusion that it is linked text.</ListItem>    
                <ListItem><strong>Parenthesis</strong> is used as an aside to the content in a sentence. They can be used to introduce tables or figures within a sentence, to represent converted units, when enumerating, to include references, and to introduce an acronym after it has been written out.</ListItem>
                <ListItem><strong>Unordered lists</strong> can appear as bullets, bullet squares, check marks, etc. and used to create a list of related items, in no particular order.</ListItem>
                <ListItem><strong>Ordered lists</strong> can appear as numbers, letters or Latin numerals and used to create a list of related items, in a specific order.</ListItem>
                <ListItem><strong>Headings</strong> are used to organize web pages helping users get a sense of the page's organization and structure. Visually, headings are presented as larger and more distinct than surrounding text. Using headings and making them visually apparent is especially helpful for users with cognitive disabilities.
                <List>
                <ListItem>Each page should have only one <code>&#60;h1&#62;</code> heading as it is used as a title of the page. Using more than one <code>&#60;h1&#62;</code> heading will adversely affect the page's SEO rating.</ListItem>
                <ListItem>Every subsequent heading type (<code>&#60;h2&#62;</code> through <code>&#60;h6&#62;</code>) can have several instances on the page and used in a hierarchical way <code>&#60;h2&#62;</code> being the next in importance after<code>&#60;h1&#62;</code> and so on.</ListItem>
                <ListItem>Do not select heading levels based on their appearance. Select the appropriate heading rank in a hierarchy.</ListItem>
                <ListItem>Do not use bold instead of a heading. Though the text might look like a heading, the underlying code is not set correctly so the users with screen readers will not benefit.</ListItem>
                </List>
                <ListItem><strong>Line length</strong> — Aim for body type to have a line length of about 45-90 characters. The line length impacts readability. If a line is too long, it becomes difficult for the reader to keep their place. Too short and the constant eye movement makes it easier to skip words and more difficult to understand larger sentences and thoughts. Headlines should be about 30 characters per line.</ListItem>
                <ListItem><strong>Font size</strong> — Apply larger fonts when text needs to be glanceable. Lowercase fonts should be avoided for text that needs to be glanceable. Use larger fonts for toasts or feedback forms to promote quick readability.</ListItem>
                <ListItem><strong>Line height</strong> — Longer text should have a line height of at least 1.5 to increase readability. </ListItem>
                </ListItem>
            </List> */}
        </DocsSection>

        {/* <DocsSection title="Additional Resources" id="max-width">
                <List>
                    <ListItem><ExternalLink href="https://usability.yale.edu/web- accessibility/articles/headings#:~:text=All%20pages%20should%20at%20least,%3E%20to%20">https://usability.yale.edu/web- accessibility/articles/headings#:~:text=All%20pages%20should%20at%20least,%3E%20to%20</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://www.wired.com/story/all-caps-because-internet-gretchen-mcculloch/">https://www.wired.com/story/all-caps-because-internet-gretchen-mcculloch/</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://www.nngroup.com/articles/glanceable-fonts/">https://www.nngroup.com/articles/glanceable-fonts/</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://www.fastcompany.com/3025187/the-fascinating-science-of-how-we-read-italics-online">https://www.fastcompany.com/3025187/the-fascinating-science-of-how-we-read-italics-online</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://www.nngroup.com/articles/how-people-read-online/?lm=legibility-readability-comprehension&pt=article">https://www.nngroup.com/articles/how-people-read-online/?lm=legibility-readability-comprehension&pt=article</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://www.smashingmagazine.com/2016/03/meaningful-web-typography/">https://www.smashingmagazine.com/2016/03/meaningful-web-typography/</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="https://designsystem.digital.gov/components/typography/">https://designsystem.digital.gov/components/typography/</ExternalLink></ListItem>
                    <ListItem><ExternalLink href="•https://shkspr.mobi/blog/2020/07/usability-of-footnotes/">https://shkspr.mobi/blog/2020/07/usability-of-footnotes/</ExternalLink></ListItem>

                </List>
            </DocsSection> */}

        <DocsSection title="Accessibility guidance" id="max-width">
          <p>
            Organize content into well-defined groups or sections, using
            headings, lists, and other mechanisms.
          </p>
          <h3>Headings</h3>
          <List>
            <ListItem>
              Headings need to be programmatically determinable.
            </ListItem>
            <ListItem>Nest headings by their rank (or level).</ListItem>
            <ListItem>
              Skipping heading ranks can be confusing and should be avoided.
            </ListItem>
            <ListItem>
              Each heading describes the topic or purpose of its content.
            </ListItem>
            <ListItem>
              In fixed sections of the page, for example in sidebars, the
              heading ranks should not change depending on the ranks in the
              content area. In those cases, consistency across pages is more
              important.
            </ListItem>
          </List>

          <h3>Lists</h3>
          <List>
            <ListItem>
              All visually apparent lists are programmatically identified
              according to their type so the list relationship is conveyed
              to users of assistive technology (AT) as they navigate and
              understand the information being presented.
            </ListItem>
            <ListItem>
              Individual list items can contain a variety of HTML elements,
              including paragraphs, headings, form elements, and other
              (nested) lists.
            </ListItem>
          </List>

          <h3>Avoid character complexity</h3>
          <List>
            <ListItem>
              Use simple, familiar, and easily parsed fonts. Simpler shapes and
              patterns of typographical text are more quickly and accurately
              analyzed by the human mind.
            </ListItem>
          </List>


            <h3>Avoid character ambiguity</h3>
            <List>
              <ListItem>
                For example, capital "I", lowercase "l", and numeral "1" appear
                almost identical in Gill Sans, but are much more easily
                distinguished from each other in Verdana. The capital letters "C"
                and "O" and lowercase letters "e" and "o" in the Arial typeface
                look very similar due to the very narrow opening in the letters.
                This is contrasted with the wider opening and more distinct
                differences between "C" and "O" and "e" and "o" in the Open Sans
                typeface.
              </ListItem>
            </List>

            <h3>
                Use a limited number of typefaces, fonts, and font variations to
                avoid cognitive load and time to process
              </h3>
            <List>
              <ListItem>
                A new typeface, font, or font variation requires cognitive effort
                and time because users must build a map or model of the characters
                and patterns to then parse words and process meaning. The overhead
                is reduced if the typeface is already familiar.
              </ListItem>
            </List>

            <h3>Text resizing, spacing and weight</h3>
          
            <List>
              <ListItem>
                WCAG requires that no loss of content or functionality occurs
                when the end user overrides page styles for paragraph spacing to
                200% of the font size, text line height/spacing to 150% of the
                font size, word spacing to 16% of the font size, and letter
                spacing to 12% of the font size. 
                <List>
                  <ListItem>
                    Adequate letter and word spacing can improve readability by
                    providing greater separation and clarity between adjacent
                    characters and words.
                  </ListItem>
                  <ListItem>
                    Ensure that your page text can be modified without it
                    disappearing or overlapping other page content.
                  </ListItem>
                  <ListItem>
                    The page should remain readable and functional when text is
                    increased 200-300% or when text spacing is adjusted.
                  </ListItem>
                  <ListItem>
                    Avoid horizontal scrolling when the text size is increased
                    and when the page is enlarged.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Use <code>strong</code>, and the emphasis tag, <code>em</code>
                to allow for added meaning to the content instead of {" "}
                <code>b</code> and <code>i</code> to emphasize a word or
                passage of text.
              </ListItem>
              <ListItem>
                There is no loss of content or functionality in content using
                markup languages (ex. HTML) by setting all of the following and
                by changing no other style property: 
                <List>
                  <ListItem>Line height (line spacing) to at least 1.5 times the font size;</ListItem>
                  <ListItem>Spacing following paragraphs to at least 2 times the font size;</ListItem>
                  <ListItem>Letter spacing (tracking) to at least 0.12 times the font size;</ListItem>
                  <ListItem>Word spacing to at least 0.16 times the font size.</ListItem>
                </List>
              </ListItem>
            </List>

            <h3>
                Ensure sufficient contrast between the text and the background
              </h3>
            <List>
              <ListItem>
                Text is much easier to read when there is a minimum 4.5:1 contrast
                or brightness difference between the text and the background.
              </ListItem>
            </List>

              <h3>Text within graphics</h3>
              <List>
                <ListItem>
                  Use true text instead of text within images when feasible.
                </ListItem>
                <ListItem>
                  Ensure images are readable and understandable when enlarged.
                </ListItem>
                <ListItem>
                  Content within images, particularly text, should be
                  understandable when the image is scaled 200-300%.
                </ListItem>
              </List>

            {/* <ListItem>
              Use <code>&lt;strong&gt;</code>, and the Emphasis tag,{" "}
              <code>&lt;em&gt;</code> to allow for added meaning to the content
              instead of <code>&lt;b&gt;</code>
              and <code>&lt;i&gt;</code> to emphasize a word or passage of text.
            </ListItem> */}

            {/* <ListItem>
              Avoid horizontal scrolling when the text size is increased and
              when the page is enlarged.
            </ListItem> */}

            {/* <ListItem>
              There is no loss of content or functionality in content using
              markup languages (ex. HTML) by setting all of the following and by
              changing no other style property:
              <List>
                <ListItem>
                  Line height (line spacing) to at least 1.5 times the font
                  size;
                </ListItem>
                <ListItem>
                  Spacing following paragraphs to at least 2 times the font
                  size;
                </ListItem>
                <ListItem>
                  Letter spacing (tracking) to at least 0.12 times the font
                  size;
                </ListItem>
                <ListItem>
                  Word spacing to at least 0.16 times the font size.
                </ListItem>
              </List>
            </ListItem>
          </List> */}

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143&currentsidebar=%23col_overview#non-text-content">
                1.1.1 Non-text Content
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143#use-of-color">
                1.4.1 Use of Color
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">
                1.4.3 Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text">
                1.4.4 Resize text
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143&currentsidebar=%23col_overview#images-of-text-no-exception">
                1.4.9 Images of Text
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#reflow">
                1.4.10 Reflow
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#non-text-contrast">
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#text-spacing">
                1.4.12 Text Spacing
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#headings-and-labels">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>

        {/*  TO DO: These links would need have updated typography/colors */}

        {/* <DocsSection title="API reference">
            <List>
            <ListItem>
                <ExternalLink href="https://component-library-master-pl.irslabs.org/styling/typography">Typography</ExternalLink>
            </ListItem>
            <ListItem>
                <ExternalLink href="https://component-library-master-pl.irslabs.org/styling/variables">Variables</ExternalLink>
            </ListItem>
            </List>
        </DocsSection> */}
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(TypographyPage);
