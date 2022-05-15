import React from 'react';

//images
import logo from '../../images/logo.png';
import { LogoImg, Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
        <LogoImg className='logo' src={logo} alt='Eden Logo' />
        <span className='company'>Eden</span>
    </Wrapper> 
  )
}

export default Header;
