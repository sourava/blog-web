import React from 'react';

import { HashRouter as Router } from "react-router-dom";

import AppRoute from 'features/AppRoute';

import Home from 'pages/Home';
import Auth from 'pages/Auth';
import Post from 'pages/Post';

const App = () => {
    return (
        <Router>
            <AppRoute path="/" exact component={Home} />
            <AppRoute path="/home" component={Home} />
            <AppRoute path="/post" component={Post} />
            <AppRoute path="/auth" noHeader noFooter component={Auth} />
        </Router>
    );
};

export default App;
