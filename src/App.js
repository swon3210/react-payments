import "./app.scss";
import { useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";

import CardListPage from "./pages/CardListPage/CardListPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardCompletePage from "./pages/AddCardCompletePage/AddCardCompletePage";

function App() {
  const [pageInputState, setInputState] = useState({
    cardTypes: [],
    cardNumber: { firstCardNumber: "", secondCardNumber: "", thirdCardNumber: "", fourthCardNumber: "" },
    cardOwner: "",
    cardExpiration: "",
    cardNickName: "",
    cardCVC: "",
    cardPassword: [],
    selectedCardType: "",
  });

  const onCardInputChange = useCallback((stateKey, stateValue) => {
    console.log("app", stateKey, stateValue);
    if (!(stateKey in pageInputState)) {
      return;
    }

    setInputState((state) => ({
      ...state,
      [stateKey]: stateValue,
    }));
  }, []);

  return (
    <div className="App">
      {/* ContextAPI 적용하기 */}
      <Switch>
        <Route
          path="/add"
          exact
          component={() => (
            <AddCardPage
              selectedCardType={pageInputState.selectedCardType}
              cardTypes={pageInputState.cardTypes}
              cardNumber={pageInputState.cardNumber}
              cardOwner={pageInputState.cardOwner}
              cardExpiration={pageInputState.cardExpiration}
              cardCVC={pageInputState.cardCVC}
              cardPassword={pageInputState.cardPassword}
              onCardInputChange={onCardInputChange}
            />
          )}
        />
        <Route
          path="/complete"
          exact
          component={() => (
            <AddCardCompletePage
              selectedCardType={pageInputState.selectedCardType}
              cardNickName={pageInputState.cardNickName}
            />
          )}
        />
        <Route component={CardListPage} />
      </Switch>
    </div>
  );
}

export default App;
