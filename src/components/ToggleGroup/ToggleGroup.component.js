import React, { useState } from 'react';
import { types, ButtonToggle } from './ToggleGroup.styles.js';

export const ToggleGroup = () => {
    const [active, setActive] = useState(types[0]);
  
    const handleClick = () => {
      // if (active===type && type==="Study") {
      //   // //use Redux here
      //   // redux.secondsProp = redux.studyTime;
      // }
      // else if (active===type && type==="Break") {
      //   // //use Redux here
      //   // redux.secondsProp = redux.breakTime;        
      // }
    }
    return <div>
      {types.map(type => (
        <ButtonToggle 
          key={type}
          active={active===type} 
          onClick={() => {
            setActive(type);
            handleClick();
          }}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
}