import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import './styles/App.css';

function App() {

  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </section>
  );
}

export default App;
