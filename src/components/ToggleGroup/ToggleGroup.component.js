import React, { useContext } from 'react';
import { types, ButtonToggle } from './ToggleGroup.styles.js';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';

export const ToggleGroup = () => {
    const { isBreak, setIsBreak } = useContext(TimerDetailsContext);
  

    return <div>
      {types.map(type => (
        <ButtonToggle 
          key={type}
          active={isBreak ? type==='Break' : type==='Study'}
          onClick={() => {
            if(isBreak ? type==='Break' : type==='Study'){
              return;
            }
            else {
              setIsBreak(!isBreak);
            }
          }}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
}