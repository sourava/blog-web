import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoute from 'features/AppRoute';
import HomePage from 'pages/home/HomePage';
import LoginPage from 'pages/auth/LoginPageContainer';
import SignUpPage from 'pages/auth/SignUpPageContainer';
import SetPasswordContainer from 'pages/auth/SetPasswordContainer';
import Post from 'pages/post/Post';
import Posts from 'pages/posts/Posts';
import AddPost from 'pages/post/AddPostContainer';
import SearchPage from 'pages/search/SearchPage';

import { store, persistor } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <AppRoute path="/" exact component={HomePage} />
                    <AppRoute path="/home" component={HomePage} />
                    <AppRoute path="/post" component={Post} />
                    <AppRoute path="/posts" component={Posts} />
                    <AppRoute path="/search" component={SearchPage} noFooter noNavHeader />
                    <AppRoute path="/addPost" component={AddPost} />
                    <AppRoute path="/login" noHeader noFooter component={LoginPage} />
                    <AppRoute path="/signup" noHeader noFooter component={SignUpPage} />
                    <AppRoute path="/setpassword" noHeader noFooter component={SetPasswordContainer} />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
