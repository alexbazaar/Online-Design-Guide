import React from "react";
import Icon from "./IconBase";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCircle = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon aria-label="Info circle icon" aria-hidden="false" icon={ faCircleInfo } />
  </Icon>
);

export default InfoCircle;
