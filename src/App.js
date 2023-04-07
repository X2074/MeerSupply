import './App.css';
import CurrentSubsidy from "./components/CurrentSubsidy";

import PieChartComponent from "./components/PieChart";


function App() {

    return (
    <div className="App">
      <header className="App-header">
          <h1><b>Qitmeer Supply Chart</b></h1>

          <div className='supply'>
              {/*<div className='chart'>*/}
              {/*    <PieChartComponent title="Qitmeer total supply: 210240000 Meer" />*/}
              {/*</div>*/}
              <PieChartComponent title="Qitmeer total supply: 210240000 Meer" />
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <div className='subsidy'>
                  <CurrentSubsidy />
              </div>
          </div>

      </header>

    </div>
    );
}

export default App;
