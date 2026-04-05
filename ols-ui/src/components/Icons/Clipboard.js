import React from "react";
import Icon from "./IconBase";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Clipboard = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faClipboard } />
  </Icon>
);

export default Clipboard;
