import React from "react";
import Icon from "./IconBase";
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const YoutubeSquare = (props) => (
  <Icon cropViewBox="14.933 64 546.134 384" {...props}>
    <FontAwesomeIcon icon={ faYoutubeSquare } />
  </Icon>
);

export default YoutubeSquare;
