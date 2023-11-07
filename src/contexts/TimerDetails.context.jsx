import { createContext, useState } from 'react';
import chime from "../sounds/alert-chime-1.mp3";
import connected from "../sounds/connected-01.wav";
import threeNoteDoorbell from "../sounds/three-note-doorbell.mp3";

export const TimerDetailsContext = createContext({
    studySeconds: null,
    breakSeconds: null,
    setStudySeconds: () => null,
    setBreakSeconds: () => null,
    isBreak: null,
    setIsBreak: () => null,
    currSound: null,
    setCurrSound: () => null,
});

export const TimerDetailsProvider = ({children}) => {
    const [studySeconds, setStudySeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);
    const [isBreak, setIsBreak] = useState(false);
    const [currSound, setCurrSound] = useState(connected);

    const value = { 
        studySeconds, 
        setStudySeconds, 
        breakSeconds, 
        setBreakSeconds,
        isBreak, 
        setIsBreak,
        currSound,
        setCurrSound
    };

    return <TimerDetailsContext.Provider value={value}>{children}</TimerDetailsContext.Provider>;
}