import React from 'react';
import _ from 'lodash';

import post1 from 'shared/assets/images/thumb/thumb-800x495.jpg';
import post2 from 'shared/assets/images/thumb/thumb-512x512.jpg';
import post3 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import post4 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';

import author from 'shared/assets/images/author-avata-1.jpg';
import PostCard from 'features/postCard/PostCard';

const Posts = () => {
    const articles = [{
        "title": "Home Internet Is Becoming a Luxury for the Wealthy",
        "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
        "thumbnail": post1,
        "category": "CULTURE",
        "date_posted": "May 21",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Why Lack of Sleep is So Bad For You",
        "description": "A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
        "thumbnail": post2,
        "category": "BASED ON YOUR READING HISTORY",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Regulators Just Put a Target on Apple's Back",
        "description": "Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
        "thumbnail": post3,
        "category": "FINANCE",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Apple Is Designing for a Post-Facebook World",
        "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
        "thumbnail": post4,
        "category": "Technology",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Home Internet Is Becoming a Luxury for the Wealthy",
        "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
        "thumbnail": post1,
        "category": "CULTURE",
        "date_posted": "May 21",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Why Lack of Sleep is So Bad For You",
        "description": "A lack of sleep is linked to an incredibly wide range of ailments, from heart disease and Type 2 diabetes to obesity, depression, poor cognitive function, and even Alzheimer's disease..",
        "thumbnail": post2,
        "category": "BASED ON YOUR READING HISTORY",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Regulators Just Put a Target on Apple's Back",
        "description": "Excellence is the most important habit you can curate in life because it requires doing things you don't want to do and getting uncomfortable on a daily basis.",
        "thumbnail": post3,
        "category": "FINANCE",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }, {
        "title": "Apple Is Designing for a Post-Facebook World",
        "description": "And black on meretriciously regardless well fearless irksomely as about hideous wistful bat less oh much and occasional useful rat darn jeepers far.",
        "thumbnail": post4,
        "category": "Technology",
        "date_posted": "Jun 17",
        "author": {
            "name": "Darcy Reeder",
            "avatar": author
        }
    }];

    const renderPosts = () => {
        const first = articles[0];
        const rest = articles.slice(1, articles.length);
        return (
            <div className="col-md-8">
                <h4 className="spanborder">
                    <span>Culture</span>
                </h4>
                <PostCard {...first} type="featured_large" />
                <div className="divider"></div>
                {_.map(rest, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
            </div>
        );
    };

    return (
        <main id="content">
            <div className="content-widget">
                <div className="container">
                    <div className="row">
                        {renderPosts()}
                        <div className="col-md-4 pl-md-5 sticky-sidebar">
                            <div className="sidebar-widget latest-tpl-4">
                                <h5 className="spanborder widget-title">
                                    <span>Popular in Culture</span>
                                </h5>
                                <ol>
                                    <li className="d-flex">
                                        <div className="post-count">01</div>
                                        <div className="post-content">
                                            <h5 className="entry-title mb-3"><a href="single.html">President and the emails. Who will guard the guards?</a></h5>
                                            <div className="entry-meta align-items-center">
                                                <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
                                                <span>May 14</span>
                                                <span className="middotDivider"></span>
                                                <span className="readingTime" title="3 min read">3 min read</span>
                                                <span className="svgIcon svgIcon--star">
                                                    <svg className="svgIcon-use" width="15" height="15">
                                                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="post-count">02</div>
                                        <div className="post-content">
                                            <h5 className="entry-title mb-3"><a href="single.html">How to Silence the Persistent Ding of Modern Life</a></h5>
                                            <div className="entry-meta align-items-center">
                                                <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
                                                <span>Jun 12</span>
                                                <span className="middotDivider"></span>
                                                <span className="readingTime" title="3 min read">4 min read</span>
                                                <span className="svgIcon svgIcon--star">
                                                    <svg className="svgIcon-use" width="15" height="15">
                                                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="post-count">03</div>
                                        <div className="post-content">
                                            <h5 className="entry-title mb-3"><a href="single.html">Why We Love to Watch</a></h5>
                                            <div className="entry-meta align-items-center">
                                                <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
                                                <span>May 15</span>
                                                <span className="middotDivider"></span>
                                                <span className="readingTime" title="3 min read">5 min read</span>
                                                <span className="svgIcon svgIcon--star">
                                                    <svg className="svgIcon-use" width="15" height="15">
                                                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="post-count">04</div>
                                        <div className="post-content">
                                            <h5 className="entry-title mb-3"><a href="single.html">How Health Apps Let</a></h5>
                                            <div className="entry-meta align-items-center">
                                                <a href="author.html">Alentica</a> in <a href="archive.html">Police</a><br />
                                                <span>April 27</span>
                                                <span className="middotDivider"></span>
                                                <span className="readingTime" title="3 min read">6 min read</span>
                                                <span className="svgIcon svgIcon--star">
                                                    <svg className="svgIcon-use" width="15" height="15">
                                                        <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Posts;
