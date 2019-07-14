import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoute from 'features/AppRoute';
import Home from 'pages/Home';
import LoginPage from 'pages/auth/LoginPageContainer';
import SignUpPage from 'pages/auth/SignUpPageContainer';
import SetPasswordContainer from 'pages/auth/SetPasswordContainer';
import Post from 'pages/Post';

import { store, persistor } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <AppRoute path="/" exact component={Home} />
                    <AppRoute path="/home" component={Home} />
                    <AppRoute path="/post" component={Post} />
                    <AppRoute path="/login" noHeader noFooter component={LoginPage} />
                    <AppRoute path="/signup" noHeader noFooter component={SignUpPage} />
                    <AppRoute path="/setpassword" noHeader noFooter component={SetPasswordContainer} />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
