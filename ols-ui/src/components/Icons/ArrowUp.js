import React from "react";
import Icon from "./IconBase";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArrowUp = (props) => (
  <Icon cropViewBox="0.005 31.975 383.974 447.125" {...props}>
    <FontAwesomeIcon icon={faArrowUp}/>
  </Icon>
);

export default ArrowUp;


