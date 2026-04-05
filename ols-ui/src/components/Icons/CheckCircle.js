import React from "react";
import Icon from "./IconBase";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckCircle = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon aria-label="Check circle icon" aria-hidden="false" icon={ faCheckCircle } />
  </Icon>
);

export default CheckCircle;
