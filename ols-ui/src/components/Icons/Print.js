import React from "react";
import Icon from "./IconBase";
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Print = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faPrint } />
  </Icon>
);

export default Print;
