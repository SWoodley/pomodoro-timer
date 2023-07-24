import { createContext, useState } from 'react';

export const TimerDetailsContext = createContext({
    studySeconds: null,
    breakSeconds: null,
    setStudySeconds: () => null,
    setBreakSeconds: () => null,
});

export const TimerDetailsProvider = ({children}) => {
    const [studySeconds, setStudySeconds] = useState(1500);
    const [breakSeconds, setBreakSeconds] = useState(300);

    const value = { 
        studySeconds, 
        setStudySeconds, 
        breakSeconds, 
        setBreakSeconds,
    };

    return <TimerDetailsContext.Provider value={value}>{children}</TimerDetailsContext.Provider>;
}