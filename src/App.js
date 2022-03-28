import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Header } from "./components";
import { ManageBlock, Feed, AuthPage } from "./modules";

import "./styles/styles.css";

function App({ store }) {
  // const {token, login, useId} = useAuth();
  const isAuthenticated = true;
  // const routes = useRoutes(store, isAuthenticated);

  return (
    <div className="app-body">
      <Header />
      {/* <Feed />
      <ManageBlock /> */}
      <AuthPage />
    </div>
  );
}

export default App;
