import React from "react";
import Icon from "./IconBase";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Bars = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faBars } />
  </Icon>
);

export default Bars;
