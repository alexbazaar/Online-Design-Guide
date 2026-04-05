import React from "react";
import Icon from "./IconBase";
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Share = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faShare } />
  </Icon>
);

export default Share;
