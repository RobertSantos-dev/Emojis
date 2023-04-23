import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {

  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/emojis" component={ Home } />
        <Route exact path="/emojis/:id" component={ Home } />
      </Switch>
    </section>
  );
}

export default App;
