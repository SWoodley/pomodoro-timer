import { useContext } from 'react';
import { TimerDetailsContext } from '../../contexts/TimerDetails.context.jsx';
import chime from "../../sounds/alert-chime-1.mp3";
import connected from "../../sounds/connected-01.wav";
import threeNoteDoorbell from "../../sounds/three-note-doorbell.mp3";

export default function Settings() {
    const { studySeconds, setStudySeconds, breakSeconds, setBreakSeconds, currSound, setCurrSound, volume, setVolume } = useContext(TimerDetailsContext);

    return (
        <div className="settings-menu">
            <p className="settings-menu__text">Settings Menu</p>
            <div>
                <label for="study">Study duration (1-120 minutes): </label>
                <input 
                type="number" 
                id="study" 
                name="study" 
                min="1" 
                max="120" 
                value={studySeconds/60} 
                onChange={(e) => {
                    setStudySeconds(e.target.valueAsNumber * 60);
                }}/>
            </div>
            <div>
                <label for="break">Break duration (1-120 minutes): </label>
                <input 
                type="number" 
                id="break" 
                name="break" 
                min="1" 
                max="120" 
                value={breakSeconds/60}
                onChange={(e) => {
                    setBreakSeconds(e.target.valueAsNumber * 60);
                }} />
            </div>
            <div>
                <label for="sounds">Choose an alert sound: </label>
                <select 
                name="sounds" 
                id="sounds" 
                value={currSound}
                onChange={(e) => {
                    setCurrSound(e.target.value);
                }}>
                    <option value={connected}>Connected</option>
                    <option value={chime}>Chime</option>
                    <option value={threeNoteDoorbell}>Doorbell</option>
                </select>
            </div>
            <div>
                <label for="volume">Volume: </label>
                <input 
                type="range" 
                id="volume" 
                name="volume" 
                min="0" 
                max="1" 
                step=".1"
                value={volume}
                onChange={(e) => {
                    setVolume(e.target.valueAsNumber);
                }}/>
            </div>
            
            <p>Reset All</p>
            <p>Return to Home</p>
        </div>
    )
}