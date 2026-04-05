import { createContext } from 'react';
import socials from "./socials";
import sitemap from "./sitemap";


export const footerDefaults = {
  site: {
    socials: socials,
    sitemap: sitemap,
    footerLinks: [
      {
        "key": "footerLink-2",
        "label": "Footer Privacy Policy",
        "dataTestId": "privacyLink",
        "text": "Privacy Policy",
        "href": "/privacy-disclosure/irs-privacy-policy",
        "external": "true",
        "irsSite": true
      },
      {
        "key": "footerLink-3",
        "label": "Footer Accessibility",
        "dataTestId": "accessibilityLink",
        "text": "Accessibility",
        "href": "http://www.irs.gov/accessibility",
        "external": "true",
        "irsSite": false
      }
    ]
  },
  langCode: 'en'
};

const FooterContext = createContext(footerDefaults);

export default FooterContext;
