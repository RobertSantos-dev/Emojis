import { Switch, Route } from "react-router-dom";

import Emojis from "./Emojis";
import EmojisId from "./EmojisId";
import Header from "../components/all/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/emojis' component={ Emojis } />
        <Route exact path='/emojis/:id' component={ EmojisId } />
      </Switch>
    </>
  );
}