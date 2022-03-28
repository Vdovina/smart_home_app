import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from './hooks/auth-hook';
import { AuthContext } from "./hooks/auth-context";
import { useRoutes } from './hooks/routes';

import { Header } from "./components";
import { ManageBlock, Feed, AuthPage } from "./modules";
import { getNews } from "./redux/logics";

import "./styles/styles.css";

function App({ store }) {
  const {token, login, useId} = useAuth();
  const isAuthenticated = true;
  const routes = useRoutes(store, isAuthenticated);

  useEffect(() => {
    getNews();
  }, []);

  return (
    // <AuthContext.Provider value={{token, login, logout, userId}}>
    //   <main style={{width: '100vw', height: '100vh', bakcgroundColor: '#F7F7F7'}} >
    //     {routes}
    //   </main>
    // </AuthContext.Provider>
    <div className="app-body">
      {/* <AuthPage /> */}
      <Header />
      <div className="col">
        <Feed />
        <ManageBlock />
      </div>
    </div>
  );
}

export default App;
