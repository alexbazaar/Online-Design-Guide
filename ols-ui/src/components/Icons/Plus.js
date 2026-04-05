import React from "react";
import Icon from "./IconBase";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Plus = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faPlus } />
  </Icon>
);

export default Plus;
