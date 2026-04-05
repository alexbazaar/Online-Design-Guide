import React from "react";
import PropTypes from "prop-types";
import styles from "./Docs.scss";
import { EmphasisTag } from "../Tag";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  emphasisTag: PropTypes.array
};

/**
 * *****************************************************************************
 * Documentation page with page title and page subtitle
 *
 * @param {object} props The props
 * @returns {node} DOM node
 * *****************************************************************************
 */
export default function DocsPage(props) {
  return (
    <div className={props.className}>
      <div className={styles.docsPageHeader}>
        <section className={styles.docsPageTitleContainer}>
          <h1 className={styles.docsPageTitle} data-component="pageTitle">
            {props.title}
          </h1>
          {props.emphasisTag
            ? <div className={styles.emphasisTagContainer}>
                {props.emphasisTag.map((tag, i) => (
                  <EmphasisTag srOnlyText={tag} emphasis key={i} style={{ marginTop: "0", marginBottom: "12px", marginRight: "0", whiteSpace: "nowrap" }}>
                    {tag}
                  </EmphasisTag>
                ))}
              </div>
            : null}
        </section>
        {props.subtitle ? (
          <p className={styles.docsPageSubtitle} data-component="pageSubtitle">
            {props.subtitle}
          </p>
        ) : null}
      </div>

      {props.children}
    </div>
  );
}

DocsPage.propTypes = propTypes;
