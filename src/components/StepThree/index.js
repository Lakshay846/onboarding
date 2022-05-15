import React, {useState} from 'react'
import { Content, Icon, Wrapper } from './StepThree.styles'


//images
import man from '../../images/man.png';
import teamIcon from '../../images/team.png';


const StepThree = (props) => {

  if(props.currentStep !== 3) {
    return null;
  }

  const handleSubmit = e => {
    e.preventDefault();
    var currStep = props.currentStep;
    currStep += 1;
    props.changeStep(currStep);
  } 

  const handleDivClick = (e) => {
    e.stopPropagation();
    console.log(e.target.classList);
  }
  
    
  return (
    <Wrapper>
        <h1>How are you planning to use Eden?</h1>
        <h2 className='subheading'>We'll streamline your setup experience accordingly.</h2>
        <Content>
            <div className='individual selected' onClick={e => handleDivClick(e)}>
                <Icon src={man} alt='individual'/>
                <span className='option'>For myself</span>
                <p className='desc'>Write better. Think more clearly. Stay organized.</p>
            </div>
            <div className='team' onClick={e => handleDivClick(e)}>
                <Icon src={teamIcon} alt='team' />
                <span className='option'>With my team</span>
                <p className='desc'>Wikis, docs, tasks &#38; projects, all in one place.</p>
            </div>
            <button onClick={e => handleSubmit(e)} className='submit'>Create Workspace</button>
        </Content>
        
    </Wrapper>
  )
}

export default StepThree;
