import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Main from "./views/Main"
import Create from "./views/Create"
import View from "./views/View"

function App() {
  return (
      <div className="App">
      <h1>Pirate Crew!</h1>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/pirates/create">
          <Create />
        </Route>

        <Route exact path="/pirates/:_id">
          <View />
        </Route>



      </Switch>

    </div>
  );
}

export default App;
