import React from "react";
import StepIndicator, { StepIndicatorItem } from './index';

module.exports = (
  <StepIndicator>
    <StepIndicatorItem status="completed" stepNum="1">
      Label 1
    </StepIndicatorItem>
    <StepIndicatorItem status="completed" stepNum="2">
      Label 2
    </StepIndicatorItem>
    <StepIndicatorItem status="active" title="Your Citizenship" stepNum="3">
      Label 3
    </StepIndicatorItem>
    <StepIndicatorItem stepNum="4" />
    <StepIndicatorItem stepNum="5" />
    <StepIndicatorItem stepNum="6" />
  </StepIndicator>
);
