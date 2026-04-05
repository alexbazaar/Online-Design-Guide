import { createContext } from 'react';


export const footerDefaults = {
  site: {
    footerLinks: [
      {
        "key": "footerLink-2",
        "label": "Privacy Policy",
        "dataTestId": "privacyLink",
        "text": "Privacy Policy",
        "href": "/privacy-disclosure/irs-privacy-policy",
        "external": "true",
        "irsSite": true
      },
      {
        "key": "footerLink-3",
        "label": "Accessibility",
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
