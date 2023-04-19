import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/App.css";

function App() {

  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </section>
  );
}

export default App;
