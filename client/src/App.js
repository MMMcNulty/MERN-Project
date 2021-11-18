import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";




import Dashboard from './views/Dashboard';
import LifeDetail from './views/LifeDetail';
import DiDetail from './views/DiDetail';
import ProcessBoard from './views/ProcessBoard';


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
        <Route exact path="/disabilityInsuranceDetail">
          <DndProvider backend={HTML5Backend}>
            <ProcessBoard />
          </DndProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
