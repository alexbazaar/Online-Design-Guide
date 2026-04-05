import React from "react";
import Icon from "./IconBase";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaQuestion = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faQuestion } />
  </Icon>
);

export default FaQuestion;
