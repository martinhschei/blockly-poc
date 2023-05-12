
import './App.css';
import './BlocklyCustoms.css';
import Timeline from './Timeline.js';
import BlockEditor from './BlockEditor';
import BlocklyToolBox from './BlocklyToolBox.js';

function App() {
  return (
    <div className="App">
      <div class="App-header">
        Duo Mission Planner by Kongsberg Discovery
      </div>
      <div class="container">
        
        <div class="row row-1">
          <div class="column-1">
            <BlocklyToolBox />
          </div>
          <div class="column-2">
            <BlockEditor />
          </div>

        </div>

        <div class="row row-2">
            <Timeline />
        </div>

        <div class="row row-3">
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
