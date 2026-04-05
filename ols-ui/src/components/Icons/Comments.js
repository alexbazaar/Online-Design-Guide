import React from "react";
import Icon from "./IconBase";
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faComments } />
  </Icon>
);

export default Comments;
