import './App.css';

function App() {

  return (
    <div className="main">
      <div className="data-wrapper">
        <div className="child-element">
          <p>Mean</p>
          <p>123456</p>
        </div>
        <div className="child-element">
          <p>Median</p>
          <p>123456</p>
        </div>
        <div className="child-element">
          <p>Std Deviation</p>
          <p>123456</p>
        </div>
        <div className="child-element">
          <p>Mode</p>
          <p>123456</p>
        </div>
      </div>
      <div className="customize-data-container">
        <div className="input-container">
          <input placeholder="Enter a number" className="number-input"/>
          <button className="submit-button">Submit</button>
        </div>
        <div className="data-buttons-container">
          <button className="reload-button">Reload JSON-1234 Data</button>
          <button className="reload-button">Reload JSON-4321 Data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
