import React from "react";
import Icon from "./IconBase";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExternalLink = (props) => (
  <Icon unstyled cropViewBox="0 32 448 448" {...props}>
    <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
  </Icon>
);

export default ExternalLink;
