import React, {useState} from 'react';

import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import Confirmation from '../Confirmation';
import StepProgressBar from '../StepProgressBar';

const MainForm = () => {
  
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [dispName, setDispName] = useState('');
    
  return (
    <>
    <StepProgressBar currentStep={currentStep}/>
    <StepOne
      currentStep={currentStep}
      changeStep={setCurrentStep}
      setDispName = {setDispName} />
    <StepTwo
      currentStep={currentStep}
      changeStep={setCurrentStep} />  
    <StepThree
      currentStep={currentStep}
      changeStep={setCurrentStep} />
    <Confirmation currentStep={currentStep} name={dispName}/>  
    </>
  )
}

export default MainForm;
