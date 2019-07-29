import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoute from 'features/AppRoute';
import HomePage from 'pages/home/HomePageContainer';
import LoginPage from 'pages/auth/LoginPageContainer';
import SignUpPage from 'pages/auth/SignUpPageContainer';
import PostContainer from 'pages/post/PostContainer';
import ProfilePageContainer from 'pages/profile/ProfilePageContainer';
import PostsContainer from 'pages/posts/PostsContainer';
import AddPost from 'pages/post/AddPostContainer';
import SearchPageContainer from 'pages/search/SearchPageContainer';

import { store, persistor } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <AppRoute path="/" exact component={HomePage} />
                    <AppRoute path="/home" component={HomePage} />
                    <AppRoute path="/post/:id" component={PostContainer} />
                    <AppRoute path="/posts/:category" component={PostsContainer} />
                    <AppRoute path="/profile/:id" component={ProfilePageContainer} />
                    <AppRoute path="/search" component={SearchPageContainer} noFooter noNavHeader />
                    <AppRoute path="/addPost" component={AddPost} />
                    <AppRoute path="/login" noHeader noFooter component={LoginPage} />
                    <AppRoute path="/signup" noHeader noFooter component={SignUpPage} />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
