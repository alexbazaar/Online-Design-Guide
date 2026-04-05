import React from "react";
import Icon from "./IconBase";
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TwitterSquare = (props) => (
  <Icon cropViewBox="0 32 448 448" {...props}>
    <FontAwesomeIcon icon={ faTwitterSquare } />
  </Icon>
);

export default TwitterSquare;
