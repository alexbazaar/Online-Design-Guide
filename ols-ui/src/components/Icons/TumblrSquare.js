import React from "react";
import Icon from "./IconBase";
import { faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TumblrSquare = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faTumblrSquare } />
  </Icon>
);

export default TumblrSquare;
