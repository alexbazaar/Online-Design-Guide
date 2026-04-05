import React from "react";
import Icon from "./IconBase";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlusCircle = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faPlusCircle } />
  </Icon>
);

export default PlusCircle;
