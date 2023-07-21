import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from './components/Button/Button.styles.js';
import { ToggleGroup } from './components/ToggleGroup/ToggleGroup.component.js';
import { StudyTimer } from './components/studytimer/studytimer.component.jsx';


const handleClick = () => { //change this
  alert('you clicked me!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="timer">
        <StudyTimer 
          studyTime={52}
          breakTime={17}
        />
        <div>
          <Button theme="blue" onClick={handleClick}> 
              Button!!
          </Button>
        </div>
        <ToggleGroup/>
      </div>
    </div>
  );
}

export default App;
