import "./app.css";
import Tooltip from "./Components/Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <h1>React Tooltips</h1>
      <div className="main-container">
        <div className="container">
          <Tooltip content="This button can be hovered!" position="left" status="inactive">
            <button>Hover me</button>
          </Tooltip>
        </div>
        <div className="container">
          <div className="input-wrapper">
            <label htmlFor="input">Hover me again!</label>
            <input type="text" id="input" />
          </div>
        </div>
        <div className="container">
          <h2>This is some lorem ipsum text that can be hovered</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
