import React from 'react'
import { ConfirmIcon, Wrapper } from './Confimation.styles';

//images
import confirmlogo from '../../images/confirm.png';

const Confirmation = (props) => {
  if(props.currentStep !== 4) 
    return null;
    
  return (
    <Wrapper>
        <ConfirmIcon src={confirmlogo} alt='confirmation' />
        <h1>Congratulations, {props.name}</h1>
        <h2 className='subheading'>You have completed onboarding, you can start using the Eden!</h2>
        <button className='submit'>Launch Eden</button>
    </Wrapper>
  )
}

export default Confirmation;