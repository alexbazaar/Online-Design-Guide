import React, { Component } from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import scss from "highlight.js/lib/languages/scss";
import bash from "highlight.js/lib/languages/bash";
import { EmbedStyles } from "../../helpers/utilities";
import styles from "./Highlight.scss";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("bash", bash);

/**
 * React wrapper for highlight.js, which is installed as a dependency.
 *
 * Code snippet to highlight should be passed as children to Highlight component in string format.
 *
 * Highlight.js will try to automatically determine the language it's highlighting.
 * To manually set a language, pass the language name as a prop (i.e. `language="xml"`)
 * See https://highlightjs.org/static/demo/ for the complete list of languages supported.
 */
class Highlight extends Component {
  /**
   * Highlight once the component contents have been rendered
   */
  componentDidMount() {
    this.highlightCode();
  }

  /**
   * Highlight if the component updates
   */
  componentDidUpdate() {
    this.highlightCode();
  }

  /**
   * If a language is passed, narrow the auto-detect list to just that language.
   * Doing this because highlight.js's default way of using a class name on the <code>
   * tag doesn't work in React.
   */
  highlightCode() {
    if (this.props.language) {
      hljs.configure({
        languages: [ this.props.language ]
      });
    }
    hljs.highlightBlock(this.element);
  }

  /**
   * Render
   * @returns {node} Rendered DOM node
   */
  render() {
    return (
      <pre
        ref={(ref) => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

Highlight.propTypes = {
  className: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node.isRequired
};

Highlight.defaultProps = {
  className: null,
  language: null
};

export default EmbedStyles(styles)(Highlight);
