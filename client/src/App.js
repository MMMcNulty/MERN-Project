import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";



import Dashboard from './views/Dashboard';
import LifeDetail from './views/LifeDetail';
import DiDetail from './views/DiDetail';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/api/dashboard" />
        </Route>
        <Route exact path="/api/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/lifeInsurance">
          <LifeDetail />
        </Route>
        <Route exact path="/disabilityInsurance">
          <DiDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
