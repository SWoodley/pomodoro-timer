import { React, useState, useEffect, useContext } from 'react';

import { Button } from '../Button/Button.styles.js';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';
import './studytimer.style.scss';


export const StudyTimer = props => {
    const { secondsProp } = props;
    const [ totalSeconds, setTotalSeconds ] = useState(secondsProp || 0);
    const [ isPaused, setIsPaused ] = useState(true);

    const leadingZero = num => ( num < 10 ? '0' + num : num );
    const getHours = () => parseInt(totalSeconds / 60 / 60 ) % 24;
    const getMinutes = () => parseInt(totalSeconds / 60 ) % 60;
    const getSeconds = () => parseInt(totalSeconds) % 60;

    const handleClick = () => {
        setIsPaused(!isPaused);
    }

    //upon mount, count down by one or remain paused
    useEffect(() => {

        if (totalSeconds <= 0 || isPaused) {
            console.log('no interval made, done with timer')
            return; //no interval made, done with timer
        }

        const interval = setInterval(() => {
            console.log('initializing interval');
            setTotalSeconds(totalSeconds-1);
        }, 1000);

        return () => {
            console.log('clearing interval')
            clearInterval(interval);
        };
    }, [totalSeconds, isPaused]); //dependency handles stale closure

    useEffect(() => {
        setTotalSeconds(secondsProp);
    }, [secondsProp]); //re-render on prop change

    return (
        <div className='timer'>
            <div className='timer__numbers'>
                {leadingZero(getHours())}:{leadingZero(getMinutes())}:{leadingZero(getSeconds())}
            </div>
            <Button onClick={handleClick}> 
              {(isPaused) ? 'Start' : 'Pause'}
            </Button>
        </div>
    )
}