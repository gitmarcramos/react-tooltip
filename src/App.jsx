import "./app.css";
import Tooltip from "./Components/Tooltip/Tooltip";
import SVG from "./../src/infos.svg";

function App() {
  return (
    <div className="App">
      <h1>React Tooltips</h1>
      <div className="main-container">
        <div className="container">
          <Tooltip content="A toolip contains usefull information about an element" position="top" type="">
            <button>Hover me</button>
          </Tooltip>
        </div>
        <div className="container">
          <Tooltip
            content="This one is really long! Its purpose is only to show an extra big tooltip, so the content doesn't really matter... Well, actually, it does a bit, as long as its large. So, if you read all this, how you doin? "
            position="top"
            type="input"
          >
            <div className="input-wrapper">
              <label htmlFor="input">Click on the input</label>
              <input type="text" id="input" />
            </div>
          </Tooltip>
        </div>
        <div className="container">
          <Tooltip content="Tooltip" position="top" type="button">
            <img src={SVG} className="info-tooltip" alt="info tooltip icon" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
