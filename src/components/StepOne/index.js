import React, {useState} from 'react'

import {Wrapper} from '../StepOne/StepOne.styles'

const StepOne = (props) => {
  const [displayName, setDisplayName] = useState(''); 

  if(props.currentStep !== 1)
    return null; 

  const handleChange = e => {
    setDisplayName(e.target.value);
  }  

  const handleSubmit = (e) => {
      e.preventDefault();
      if(displayName === '')
        alert('Please provide input');
      else {
        var currStep = props.currentStep;
        currStep += 1;
        props.setDispName(displayName);
        props.changeStep(currStep);
      }
  }

  return (
    <Wrapper> 
        <h1>Welcome! First things first...</h1>
        <h2 className='subheading'>You can always change them later.</h2>
        <form className='stepone'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' name='name' placeholder='Steve Jobs'/>
          <label htmlFor='display_name'>Display Name</label>
          <input type='text' name='display_name' placeholder='Steve' onChange={e => handleChange(e)}/>
          <button onClick={e => handleSubmit(e)} className='submit'>Create Workspace</button>
        </form>
    </Wrapper>
  )
}

export default StepOne;