import React, { useState } from 'react';
import { types, ButtonToggle } from './ToggleGroup.styles.js';

export const ToggleGroup = () => {
    const [active, setActive] = useState(types[0]);
  
    return <div>
      {types.map(type => (
        <ButtonToggle active={active===type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
}