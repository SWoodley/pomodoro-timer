import { React, useContext } from 'react';
import './home.styles.scss';

import { ToggleGroup } from '../../components/ToggleGroup/ToggleGroup.component.js';
import { StudyTimer } from '../../components/studytimer/studytimer.component.jsx';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';


function Home() {
  const { studySeconds, breakSeconds, isBreak } = useContext(TimerDetailsContext);

  return (
    <div className="App">
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
