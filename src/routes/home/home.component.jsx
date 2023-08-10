import { React, useContext } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import { ToggleGroup } from '../../components/ToggleGroup/ToggleGroup.component.js';
import { StudyTimer } from '../../components/studytimer/studytimer.component.jsx';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';


function Home() {
  const { studySeconds, breakSeconds, isBreak } = useContext(TimerDetailsContext);

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
      <div className="timer-toggle-button">
      <ToggleGroup/>
      </div>
      <div className="settings-button">
        </div>
      <div className="timer">
        <StudyTimer 
          secondsProp={ isBreak ? breakSeconds : studySeconds }
        />
      </div>
    </div>
  );
}

export default Home;
