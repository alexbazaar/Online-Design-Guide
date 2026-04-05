import { roadmapStatus } from "../utils/constants";

/**
 * Ui elements consist of: {
 * element: element in ODG,
 * research: research done and 508 accepted
 * design: design done and 508 accepted
 * prototyping: element developed and 508 tested
 * irap: IRAP approved
 * userTested: tested by users
 */
export const uiElements = [
  /*{
    "element": "Breadcrumbs",
    "research": roadmapStatus.DONE,
    "design": true,
    "prototyping": true,
    "irap": true,
    "userTested": false
  },
  {
    "element": "Links",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Accordion",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Buttons",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Checkbox",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Radio Button",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Dropdown",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Text Field",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Form Error Alert Box",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": false
  },
  {
    "element": "Text Area",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": false
  },
  {
    "element": "Date Field",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": false
  },
  {
    "element": "Help Tip",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Step Indicator",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Alerts",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": true
  },
  {
    "element": "Content Boxes",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": true,
    "userTested": false
  },
  {
    "element": "Footer",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Header",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Table",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.UP_NEXT,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Back To Top",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Tab View",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Focus Style (applies to all elements)",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Modal",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Slider",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.UP_NEXT,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Toggle",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.TODO,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "User Testing (applies to all elements)",
    "research": roadmapStatus.IN_PROGRESS,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE,
    "irap": false,
    "userTested": false
  },*/
  {
    "element": "Pagination",
    "research": true,
    "design": true,
    "prototyping": false
  },
  /*{
    "element": "Indicators",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.TODO,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Notifications",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.TODO,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },*/
  {
    "element": "ODG roadmap design",
    "research": true,
    "design": true,
    "prototyping": false
  },

  {
    "element": "Side navigation",
    "research": true,
    "design": false,
    "prototyping": false
  },

  {
    "element": "ODG feedback feature",
    "research": true,
    "design": false,
    "prototyping": false
  },
  {
    "element": "Font Awesome icons update",
    "research": true,
    "design": true,
    "prototyping": true
  },


  /*{
    "element": "Microsite Footer",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Input Stepper",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Badges & Tags",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Process List",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.TODO,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "Combo Box",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.TODO,
    "prototyping": roadmapStatus.TODO,
    "irap": false,
    "userTested": false
  },
  {
    "element": "IRAP Test Pages (applies to all elements)",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.IN_PROGRESS,
    "irap": false,
    "userTested": false
  }*/
];

/**
 * Ui Patterns consist of: {
 * element: element pattern in ODG,
 * research: research done and 508 accepted
 * design: design done and 508 accepted
 * prototyping: element developed and 508 tested
 * irap: IRAP approved
 * userTested: tested by users
 */
export const uiPatterns = [{
  "element": "Upload File",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.TODO,
  "prototyping": roadmapStatus.TODO,
  "irap": false,
  "userTested": false
},
{
  "element": "Back, Next, Cancel",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.TODO,
  "irap": false,
  "userTested": false
},
{
  "element": "Share Icons (including Email and Print)",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.TODO,
  "prototyping": roadmapStatus.TODO,
  "irap": false,
  "userTested": false
},
{
  "element": "Status Pages",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.TODO,
  "prototyping": roadmapStatus.TODO,
  "irap": false,
  "userTested": false
},
{
  "element": "Exit Modal",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.TODO,
  "irap": false,
  "userTested": false
}
];


/**
 * ODG/UI Kit enhancements consist of: {
 * enhancement: enhancements in ODG/UIKit,
 * research: research done and 508 accepted
 * design: design done and 508 accepted
 * prototyping: element developed and 508 tested
 */
export const ODGUiKitEnhancements = [{
  "enhancement": "Patriotic Color Updates",
  "research": roadmapStatus.NOT_APPLICABLE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE

}, {
  "enhancement": "Grid Updates",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE
},
{
  "enhancement": "Update Heading Label Names",
  "research": roadmapStatus.NOT_APPLICABLE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE
},
{
  "enhancement": "Update to free Font Awesome 6 Icons",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE
},
{
  "enhancement": "Update Government Banner per USWDS",
  "research": roadmapStatus.NOT_APPLICABLE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.TODO
},
{
  "enhancement": "Switch to Bounding Box Method of Spacing",
  "research": roadmapStatus.NOT_APPLICABLE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE
},
{
  "enhancement": "Audit of Design Systems",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.NOT_APPLICABLE,
  "prototyping": roadmapStatus.NOT_APPLICABLE
},
{
  "enhancement": "UI Kit/ODG User Interviews",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.NOT_APPLICABLE,
  "prototyping": roadmapStatus.NOT_APPLICABLE
}
];

/**
 * ODG enhancements consist of: {
 * enhancement: enhancements in ODG/UIKit,
 * research: research done and 508 accepted
 * design: design done and 508 accepted
 * prototyping: element developed and 508 tested
 */
export const ODGEnhancements = [
  {
    "enhancement": "Redesign Presentation Layer",
    "research": roadmapStatus.IN_PROGRESS,
    "design": roadmapStatus.IN_PROGRESS,
    "prototyping": roadmapStatus.IN_PROGRESS
  },
  {
    "enhancement": "Update Framework",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.IN_PROGRESS
  },
  {
    "enhancement": "Content Management System",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.IN_PROGRESS
  },
  {
    "enhancement": "Component Library Wiki",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.DONE
  },
  {
    "enhancement": "Add 'About' Section to ODG",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.DONE
  },
  {
    "enhancement": "Audit of Best Practices",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "Update ODG Content (based on Audit)",
    "research": roadmapStatus.IN_PROGRESS,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "Add 'Form Overview' Section to ODG",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE
  },
  {
    "enhancement": "Add 'Form Error Alert' Section to ODG",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.DONE
  },
  {
    "enhancement": "Typography Best Practices",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "Add 'Known Accessibility Issues' Section",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.DONE
  },
  {
    "enhancement": "Update Applicable Standards Sections",
    "research": roadmapStatus.IN_PROGRESS,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.IN_PROGRESS
  },
  {
    "enhancement": "Research Audit of ODG Best Practices",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "508 Audit and Regression Testing",
    "research": roadmapStatus.DONE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "Design Audit of ODG and IRS Components",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.DONE,
    "prototyping": roadmapStatus.NOT_APPLICABLE
  },
  {
    "enhancement": "Prototyping Audit of ODG Code ",
    "research": roadmapStatus.NOT_APPLICABLE,
    "design": roadmapStatus.NOT_APPLICABLE,
    "prototyping": roadmapStatus.DONE
  }

];

/**
 * UI Kit enhancements consist of: {
 * enhancement: enhancements in ODG/UIKit,
 * research: research done and 508 accepted
 * design: design done and 508 accepted
 * prototyping: element developed and 508 tested
 */
export const UIKitEnhancements = [{
  "enhancement": "Low Fidelity Kit",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.DONE
},
{
  "enhancement": "IRS.gov Landing Page Templates",
  "research": roadmapStatus.DONE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.NOT_APPLICABLE
},
{
  "enhancement": "Design Documentation",
  "research": roadmapStatus.NOT_APPLICABLE,
  "design": roadmapStatus.DONE,
  "prototyping": roadmapStatus.NOT_APPLICABLE
}
];
