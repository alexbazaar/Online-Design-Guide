import { EmbedStyles } from "../../helpers/utilities";
import DocsPage from "./DocsPage";
import DocsComponent from "./DocsComponent";
import DocsSection from "./DocsSection";
import DocsExample from "./DocsExample";
import DocsPreview from "./DocsPreview";
import DocsCode from "./DocsCode";
import DocsCodeUsage from "./DocsCodeUsage";
import DocsBadge from "./DocsBadge";
import styles from "./Docs.scss";
import TestPage from "./TestPage";

const _DocsPage = EmbedStyles(styles)(DocsPage);
const _DocsComponent = EmbedStyles(styles)(DocsComponent);
const _DocsSection = EmbedStyles(styles)(DocsSection);
const _DocsExample = EmbedStyles(styles)(DocsExample);
const _DocsPreview = EmbedStyles(styles)(DocsPreview);
const _DocsCode = EmbedStyles(styles)(DocsCode);
const _DocsCodeUsage = EmbedStyles(styles)(DocsCodeUsage);
const _DocsBadge = EmbedStyles(styles)(DocsBadge);
const _TestPage = EmbedStyles(styles)(TestPage);

export {
  _DocsPage as DocsPage,
  _DocsComponent as DocsComponent,
  _DocsSection as DocsSection,
  _DocsExample as DocsExample,
  _DocsPreview as DocsPreview,
  _DocsCode as DocsCode,
  _DocsCodeUsage as DocsCodeUsage,
  _DocsBadge as DocsBadge,
  _TestPage as TestPage
};
