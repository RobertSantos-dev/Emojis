import { Switch, Route } from "react-router-dom";
import Emojis from "./Emojis";

export default function Home() {
  return (
    <>
      <header>Emojis Rede</header>
      <Switch>
        <Route exact path='/emojis' component={ Emojis } />
      </Switch>
    </>
  );
}