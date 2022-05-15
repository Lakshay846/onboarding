import React from 'react';
import MainForm from './components/Form';

//components
import Header from './components/Header';

//styles
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <MainForm />
      <GlobalStyles />
    </div>
  )
}

export default App;
