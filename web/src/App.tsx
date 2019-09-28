import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
};

export default App;
