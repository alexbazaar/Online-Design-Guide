import React from "react";
import Icon from "./IconBase";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FacebookSquare = (props) => (
  <Icon cropViewBox="0 32 448 448" {...props}>
    <FontAwesomeIcon icon={ faFacebookSquare } />
  </Icon>
);

export default FacebookSquare;
