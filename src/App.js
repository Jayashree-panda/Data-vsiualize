import { useState } from 'react';
import './App.css';
import { data1234, data4321 } from './constants';

function App() {
  const [currentData, setCurrentData] = useState(data1234);

  return (
    <div className="main">      
      <div className="data-wrapper">
        <div className="child-element">
          <p>Mean</p>
          <p>{currentData.mean}</p>
        </div>
        <div className="child-element">
          <p>Median</p>
          <p>{currentData.median}</p>
        </div>
        <div className="child-element">
          <p>Std Deviation</p>
          <p>{currentData.stdDev}</p>
        </div>
        <div className="child-element">
          <p>Mode</p>
          <p>{currentData.mode}</p>
        </div>
      </div>
      <div className="customize-data-container">
        <div className="input-container">
          <input placeholder="Enter a number" className="number-input"/>
          <button className="submit-button">Submit</button>
        </div>
        <div className="data-buttons-container">
          <button className="reload-button" onClick={() => { setCurrentData(data1234)}}>Reload JSON-1234 Data</button>
          <button className="reload-button" onClick={() => { setCurrentData(data4321)}}>Reload JSON-4321 Data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
