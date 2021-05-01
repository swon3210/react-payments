import "./app.scss";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";
import { STATE_KEY } from "./constants";

function App() {
  const [appState, setAppState] = useState({
    [STATE_KEY.CARD_COMPANY]: "",
    [STATE_KEY.CARD_NUMBER]: {
      [STATE_KEY.FIRST_CARD_NUMBER]: "",
      [STATE_KEY.SECOND_CARD_NUMBER]: "",
      [STATE_KEY.THIRD_CARD_NUMBER]: "",
      [STATE_KEY.FOURTH_CARD_NUMBER]: "",
    },
    [STATE_KEY.CARD_EXPIRATION]: {
      [STATE_KEY.EXPIRATION_MONTH]: "",
      [STATE_KEY.EXPIRATION_YEAR]: "",
    },
    [STATE_KEY.CARD_OWNER]: "",
    [STATE_KEY.CARD_NICK_NAME]: "",
    [STATE_KEY.CARD_CVC]: "",
    [STATE_KEY.CARD_PASSWORD]: [null, null],
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/add" exact>
          <AddCardPage appState={appState} setAppState={setAppState} />
        </Route>
        <Route path="/complete" exact>
          <AddCardCompletePage appState={appState} />
        </Route>
        <Route>
          <CardListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
