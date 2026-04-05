/**
 * ODG Color Library: {
 * name: name of Color,
 * subtitle: subtitle, if needed
 * hex: hex code
 * textColor: text color for swatch background
 */

const darkText = "#1b1b1b";
const lightText = "#ffffff";

export const themeColors = [
  {
    name: "White",
    hex: "#ffffff",
    textColor: darkText
  },
  {
    name: "Gray darkest",
    hex: "#1b1b1b",
    textColor: lightText
  },
  {
    name: "Gray dark",
    hex: "#5b616b",
    textColor: lightText
  },
  {
    name: "Gray light",
    hex: "#d6d7d9",
    textColor: darkText
  },
  {
    name: "Gray lighter",
    hex: "#f3f3f3",
    textColor: darkText
  },
  {
    name: "Gray lightest",
    hex: "#f9f9f9",
    textColor: darkText
  },
  {
    name: "Blue darkest",
    hex: "#002346",
    textColor: lightText
  },
  {
    name: "Blue dark",
    subtitle: '"Old Glory Blue"',
    hex: "#002d62",
    textColor: lightText
  },
  {
    name: "Blue",
    subtitle: '"IRS Blue"',
    hex: "#00599c",
    textColor: lightText
  },
  {
    name: "Blue vivid",
    hex: "#2491ff",
    textColor: darkText
  },
  {
    name: "Blue lightest",
    hex: "#e4f3fb",
    textColor: darkText
  },
  {
    name: "Gold",
    hex: "#c7a97b",
    textColor: darkText
  },
  {
    name: "Purple",
    hex: "#6e41a0",
    textColor: lightText
  }
];

export const alertColors = [
  {
    name: "Teal",
    hex: "#087591",
    textColor: lightText
  },
  {
    name: "Teal lightest",
    hex: "#e7f6f8",
    textColor: darkText
  },
  {
    name: "Green",
    hex: "#2e8540",
    textColor: lightText
  },
  {
    name: "Green lightest",
    hex: "#ecf8ed",
    textColor: darkText
  },
  {
    name: "Yellow",
    hex: "#fdb81e",
    textColor: darkText
  },
  {
    name: "Yellow lightest",
    hex: "#fff4dd",
    textColor: darkText
  },
  {
    name: "Red",
    hex: "#d11242",
    textColor: lightText
  },
  {
    name: "Red lightest",
    hex: "#faf0f0",
    textColor: darkText
  }
];

export const changedColors = [
  {
    oldName: "Black",
    oldHex: "#000000",
    newName: "Gray darkest",
    newHex: "#1b1b1b",
    usage: [
      "Text",
      "Headings",
      "Footer - background",
      "Form elements - all borders",
      "Icons",
      "Spinner with light background"
    ],
    textColor: lightText
  },
  {
    oldName: "Blue darkest",
    oldHex: "#002346",
    newName: "Blue dark",
    newHex: "#002d62",
    usage: [
      "Header - nav menu background"
    ],
    textColor: lightText
  },
  {
    oldName: "Blue dark",
    oldHex: "#004673",
    newName: "Blue dark",
    newHex: "#002d62",
    usage: [
      "Button (hover)",
      "Calendar - icon (hover)",
      "Calendar - date (hover)",
      "Header - nav menu background",
      "Link (hover)",
      "Sidebar - top level active line",
      "Step indicator - circle (hover and active)",
      "Tab view - header (active)",
      "Tab view - header border (active)"
    ],
    textColor: lightText
  },
  {
    oldName: "Blue dark",
    oldHex: "#004673",
    newName: "Blue",
    newHex: "#00599c",
    usage: [
      "Header - main background",
      "Header - nav menu background (active)"
    ],
    textColor: lightText
  },
  {
    oldName: "Blue",
    oldHex: "#0073af",
    newName: "Blue",
    newHex: "#00599c",
    usage: [
      "Accordion - icon (open/close)",
      "Button (default)",
      "Calendar - icons (active)",
      "Calendar - date (active)",
      "Checkbox - selected",
      "Header - background",
      "Header - nav menu background (active)",
      "Help tip - icon (open/close)",
      "Link (default)",
      "Link - external link icon",
      "Radio button - selected",
      "Step indicator - circle (hover and active)"
    ],
    textColor: lightText
  },
  {
    oldName: "Blue vivid",
    oldHex: "#00bfff",
    newName: "Blue vivid",
    newHex: "#2491ff",
    usage: [
      "Focus state"
    ],
    textColor: darkText
  },
  {
    oldName: "Olive",
    oldHex: "#b5ba05",
    newName: "Gold",
    newHex: "#c7a97b",
    usage: [
      "Card - top border"
    ],
    textColor: darkText
  },
  {
    oldName: "Blue light",
    oldHex: "#e4f3fb",
    newName: "Teal lightest",
    newHex: "#e7f6f8",
    usage: [
      "Section alert - info - background"
    ],
    textColor: darkText
  },
  {
    oldName: "Yellow",
    oldHex: "#fa9e0d",
    newName: "Yellow",
    newHex: "#fdb81e",
    usage: [
      "Section alert - warning - left border",
      "System alert - background"
    ],
    textColor: darkText
  },
  {
    oldName: "Red",
    oldHex: "#cd2026",
    newName: "Red",
    newHex: "#d11242",
    usage: [
      "Section alert - error - left border",
      "Form error text",
      "Text area/Text field - field border - error state"
    ],
    textColor: lightText
  }
];
