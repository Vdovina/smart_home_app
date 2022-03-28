import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useRoutes } from './hooks/routes';

import { Header } from "./components";
import { ManageBlock, Feed, AuthPage, Chat } from "./modules";
import { getNews } from "./redux/logics";

import "./styles/styles.css";

function App({ store }) {
  const isAuthenticated = true;

  useEffect(() => {
    // getNews();
  }, []);

  return (
    <div className="app-body">
      {/* <AuthPage /> */}
      <Header />
      <div className="col">
        <Feed />
        <ManageBlock />
      </div>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
