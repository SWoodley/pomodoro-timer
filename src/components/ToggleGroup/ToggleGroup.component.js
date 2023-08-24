import React, { useState, useContext } from 'react';
import { types, ButtonToggle } from './ToggleGroup.styles.js';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';

export const ToggleGroup = () => {
    const [active, setActive] = useState(types[0]);
    const { isBreak, setIsBreak } = useContext(TimerDetailsContext);
  

    return <div>
      {types.map(type => (
        <ButtonToggle 
          key={type}
          active={active===type} 
          onClick={() => {
            if(active===type){
              return;
            }
            else {
              setActive(type);
              setIsBreak(!isBreak);
            }
          }}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
}