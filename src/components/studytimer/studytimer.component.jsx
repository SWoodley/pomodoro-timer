import { React, useState, useEffect } from 'react';


import './studytimer.style.scss';


export const StudyTimer = props => {
    const { studyTime, breakTime } = props;
    const [ mode, setMode ] = useState('study');
    const [ totalSeconds, setTotalSeconds ] = useState(studyTime || 0);

    const leadingZero = num => ( num < 10 ? '0' + num : num );
    const getHours = () => parseInt(totalSeconds / 60 / 60 ) % 24;
    const getMinutes = () => parseInt(totalSeconds / 60 ) % 60;
    const getSeconds = () => parseInt(totalSeconds) % 60;

    useEffect(() => {

        if (totalSeconds <= 0) {
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
    }, [totalSeconds]) //dependency handles stale closure

    return (
        <div className='Timer'>
            <p>I'm the timer component!</p>
            <div className='Timer-number'>{leadingZero(getHours())}:</div>
            <div className='Timer-number'>{leadingZero(getMinutes())}:</div>
            <div className='Timer-number'>{leadingZero(getSeconds())}</div>
        </div>
    )
}