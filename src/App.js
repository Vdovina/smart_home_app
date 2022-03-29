import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { authenticate } from "./redux/actions";
import { Header } from "./components";
import { ManageBlock, Feed, AuthPage, ChatComponent } from "./modules";
import { getNews } from "./redux/logics";
import "./styles/styles.css";

function App({ isAuthenticated, authenticate }) {
  const navigate = useNavigate(); 

  useEffect(() => {
    // getNews();
  }, []);

  if (isAuthenticated)
    return (
      <div className="app-body">
        <Routes>
          <Route
            path='/' exact
            element={(
              <>
                <Header />
                <div className="col">
                  <Feed />
                  <ManageBlock />
                </div>
              </>
            )}
          />
            <Route
            path="/chats"
            element={(
              <div>
                <Header />
                <ChatComponent />
              </div>
            )}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          /> 
        </Routes>
      </div>
    )

  return (
    <Routes>
      <Route path="/login" element={(
        <div className="app-body">
          <AuthPage 
          onSubmit={() => {
            authenticate(true);
            navigate('/')
            }}
          />
        </div>
      )} />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      /> 
    </Routes>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispathToProps = {
  authenticate,
}

export default connect(mapStateToProps, mapDispathToProps)(App);
