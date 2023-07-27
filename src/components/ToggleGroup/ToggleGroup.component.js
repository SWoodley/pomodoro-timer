import React, { useState, useContext } from 'react';
import { types, ButtonToggle } from './ToggleGroup.styles.js';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';

export const ToggleGroup = () => {
    const [active, setActive] = useState(types[0]);
    const { setIsBreak } = useContext(TimerDetailsContext);
  
    const handleClick = ( type ) => {
      if (active===type && type==="Study") {
        setIsBreak(false);
      }
      else {
        setIsBreak(true);       
      }
    }
    
    return <div>
      {types.map(type => (
        <ButtonToggle 
          key={type}
          active={active===type} 
          onClick={() => {
            setActive(type);
            handleClick(type);
          }}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
}