import React from 'react';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Wrapper } from './StepProgressBar.styles';


const StepProgressBar = (props) => {

  var stepPercentage = 0;
  
  if(props.currentStep === 1) {
      stepPercentage = 18;
  }
  else
    if(props.currentStep === 2) {
        stepPercentage = 50;
    }
  else
    if(props.currentStep === 3) {
        stepPercentage = 84;
    }
  else
    if(props.currentStep === 4)
        stepPercentage = 100;
  else  
    stepPercentage = 18;

  return (
    <Wrapper>
      <ProgressBar height={1} percent={stepPercentage} filledBackground='#745ce4'>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </Wrapper>
  )
}

export default StepProgressBar;
