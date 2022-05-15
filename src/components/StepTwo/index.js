import React, { useState } from 'react'
import { Wrapper } from './StepTwo.styles';

const StepTwo = (props) => {

  const [workspaceName, setWorkspaceName] = useState('');

  if(props.currentStep !== 2) 
    return null;

    const handleChange = e => {
      setWorkspaceName(e.target.value);
    }

  const handleSubmit = e => {
    e.preventDefault();
    if(workspaceName === '')
      alert('Please provide workspace name');
    else {
      var currStep = props.currentStep;
      currStep += 1;
      props.changeStep(currStep);
    }
  }  

  return (
    <Wrapper>
        <h1>Let's set up a home for all your work</h1>
        <h2 className='subheading'>You can always create another workspace later.</h2>
        <form className='steptwo'>
            <label htmlFor='workspace-name'>Workspace Name</label>
            <input type='text' name='workspace-name' placeholder='Eden' onChange={e => handleChange(e)}/>
            <label htmlFor='workspace-url'>Workspace URL<span id='grey'>(optional)</span></label>
            <span id='eden'>www.eden.com/</span>
            <input type='text' name='workspace-url' placeholder='Example' id='url-input'/>
            <button onClick={e => handleSubmit(e)} className='submit'>Create Workspace</button>
        </form>
    </Wrapper>
  )
}

export default StepTwo;
