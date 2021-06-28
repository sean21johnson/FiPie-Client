import React, { useState } from 'react';

import HeaderSample from './HeaderSample'
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [data, setData] = React.useState()

  return (
    <div className="App">

      <NavBar />
    </div>
  );
}

export default App;
