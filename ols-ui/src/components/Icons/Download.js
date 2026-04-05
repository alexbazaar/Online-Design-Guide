import React from "react";
import Icon from "./IconBase";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Download = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faDownload } />
  </Icon>
);

export default Download;
