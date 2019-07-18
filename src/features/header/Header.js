import React from 'react';

import author from 'shared/assets/images/author-avata-1.jpg';

const Header = ({login}) => {
    return (
        <React.Fragment>
            <div className="sticky-header fixed d-lg-none d-md-block">
                <div className="text-right">
                    <div className="container mobile-menu-fixed pr-5">
                        <h1 className="logo-small navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>

                        <a className="author-avatar" href="#"><img src={author} alt="" /></a>

                        <ul className="social-network heading navbar-nav d-lg-flex align-items-center">
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                        </ul>

                        <a href="javascript:void(0)" className="menu-toggle-icon">
                            <span className="lines"></span>
                        </a>
                    </div>
                </div>

                <div className="mobi-menu">
                    <div className="mobi-menu__logo">
                        <h1 className="logo navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
                    </div>
                    <form action="#" method="get" className="menu-search-form d-lg-flex">
                        <input type="text" className="search_field" placeholder="Search..." name="s" />
                    </form>
                    <nav>
                        <ul>
                            <li className="current-menu-item"><a href="index.html">Home</a></li>
                            <li className="menu-item-has-children"><a href="categories.html">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="categories.html">Politics</a></li>
                                    <li><a href="categories.html">Health</a></li>
                                    <li><a href="categories.html">Design</a></li>
                                </ul>
                            </li>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="categories.html">Politics</a></li>
                            <li><a href="categories.html">Health</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <header id="header" className="d-lg-block d-none">
                <div className="container">
                    <div className="align-items-center w-100">
                        <h1 className="logo float-left navbar-brand"><a href="index.html" className="logo">Merinda</a></h1>
                        <div className="header-right float-right w-50">
                            <div className="d-inline-flex float-right text-right align-items-center">
                                <a className="author-avatar" href="#"><img src={author} alt="" /></a>
                            </div>
                            <form action="#" method="get" className="search-form d-lg-flex float-right">
                                <a href="javascript:void(0)" className="searh-toggle">
                                    <i className="icon-search"></i>
                                </a>
                                <input type="text" className="search_field" placeholder="Search..." name="s" />
                            </form>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <nav id="main-menu" className="stick d-lg-block d-none">
                    <div className="container">
                        <div className="menu-primary">
                            <ul>
                                <li className="current-menu-item"><a href="index.html">Home</a></li>
                                <li className="menu-item-has-children"><a href="categories.html">Categories</a>
                                    <ul className="sub-menu">
                                        <li><a href="categories.html">Politics</a></li>
                                        <li><a href="categories.html">Health</a></li>
                                        <li><a href="categories.html">Design</a></li>
                                    </ul>
                                </li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="categories.html">Politics</a></li>
                                <li><a href="categories.html">Health</a></li>
                                <li><a href="categories.html">Design</a></li>
                                <li><a href="categories.html">Startups</a></li>
                                <li><a href="categories.html">Culture</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li className="menu-item-has-children"><a href="#">More...</a>
                                    <ul className="sub-menu">
                                        <li><a href="search.html">Search</a></li>
                                        <li><a href="author.html">Author</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
};

export default Header;
