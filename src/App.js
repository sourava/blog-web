import React from 'react';

import { HashRouter as Router, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Home from 'pages/Home';
import Post from 'pages/Post';

const App = () => {
    return (
        <Router>
            <div className="top-scroll-bar"></div>
            <div id="wrapper">
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/post" component={Post} />
                <Footer />
            </div>
            <a href="#" className="back-to-top heading"><i className="icon-left-open-big"></i><span className="d-lg-inline d-md-none">Top</span></a>
        </Router>
    );
};

export default App;
