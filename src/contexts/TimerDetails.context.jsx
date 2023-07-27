import { createContext, useState } from 'react';

export const TimerDetailsContext = createContext({
    studySeconds: null,
    breakSeconds: null,
    setStudySeconds: () => null,
    setBreakSeconds: () => null,
    isBreak: null,
    setIsBreak: () => null,
});

export const TimerDetailsProvider = ({children}) => {
    const [studySeconds, setStudySeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);
    const [ isBreak, setIsBreak ] = useState(false);

    const value = { 
        studySeconds, 
        setStudySeconds, 
        breakSeconds, 
        setBreakSeconds,
        isBreak, 
        setIsBreak,
    };

    return <TimerDetailsContext.Provider value={value}>{children}</TimerDetailsContext.Provider>;
}