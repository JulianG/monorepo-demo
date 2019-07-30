import React from 'react';
import logo from './logo.svg';
import './App.css';

import { sum } from 'math-functions'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>2 + 2 = {sum(2,2)}</p>
      </header>
    </div>
  );
}

export default App;
