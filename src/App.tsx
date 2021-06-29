import React, { useState } from 'react';

import HeaderSample from './HeaderSample'
import NavBar from './components/NavBar';
import PrimaryButton from './components/PrimaryButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [data, setData] = React.useState()

  const handlePrimaryClick = () => {
    console.log('primary button clicked')
  }

  return (
    <div className="App">

      <NavBar />

      <PrimaryButton handlePrimaryClick={handlePrimaryClick} title={"Add investment"} />
    </div>
  );
}

export default App;
