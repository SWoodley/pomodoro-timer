export default function Settings() {
    return (
        <div className="settings-menu">
            <p className="settings-menu__text"> I am some text inside the settings menu!</p>
            <div>
                <label for="study">Study time (1-120):</label>
                    
                <input type="number" id="study" name="study" min="1" max="120" />

                <label for="break">Number for Break time (10-100):</label>
                    
                <input type="number" id="break" name="break" min="1" max="120" />
            </div>
            <div>
                <label for="sounds">Choose an alert sound:</label>

                <select name="sounds" id="sounds">
                    <option value="chime">Chime</option>
                    <option value="connected">Connected</option>
                    <option value="doorbell">Doorbell</option>
                </select>
            </div>
            <div>
                <input type="range" id="volume" name="volume" min="0" max="10" />
                <label for="volume">Volume</label>
            </div>
            
            <p>Reset All</p>
            <p>Return to Home</p>
        </div>
    )
}