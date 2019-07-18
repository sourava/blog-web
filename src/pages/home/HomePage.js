import React from 'react';
import _ from 'lodash';

import post1 from 'shared/assets/images/thumb/thumb-800x495.jpg';
import post2 from 'shared/assets/images/thumb/thumb-512x512.jpg';
import post3 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import post4 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';

import author from 'shared/assets/images/author-avata-1.jpg';
import PostCard from 'features/postCard/PostCard';

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
}]

const editorPicks = [{
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
}]

const Home = () => {
    const renderEditorsPick = () => {
        const featured_main = editorPicks[0];
        const featured_sub = editorPicks.slice(1, editorPicks.length);

        return (
            <div className="col-sm-12 col-md-9 col-xl-9">
                <h2 className="spanborder h4">
                    <span>Editor's Picks</span>
                </h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <PostCard {...featured_main} type="featured_main" />
                        <a className="btn btn-green d-inline-block mb-4 mb-md-0" href="archive.html">All Featured</a>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {_.map(featured_sub, (article) => <PostCard {...article} type="featured_sub" />)}
                    </div>
                </div>
            </div>

        );
    }

    const renderTrending = () => {
        return (
            <div className="col-sm-12 col-md-3 col-xl-3">
                <div className="sidebar-widget latest-tpl-4">
                    <h4 className="spanborder">
                        <span>Trending</span>
                    </h4>
                    <ol>
                        {
                            _.map(editorPicks, (article, index) => {
                                return (
                                    <li className="d-flex" key={index}>
                                        <PostCard {...article} type="less_detailed" />
                                    </li>
                                );
                            })
                        }
                    </ol>
                </div>
                <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width="19" height="19"><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd"></path></svg></a>
            </div>
        );
    }

    return (
        <main id="content">
            <div className="section-featured featured-style-1">
                <div className="container">
                    <div className="row">
                        {renderEditorsPick()}
                        {renderTrending()}
                    </div>
                    <div className="divider"></div>
                </div>
            </div>

            <div className="content-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="spanborder h4">
                                <span>Most Recent</span>
                            </h2>
                            {articles.map((article, index) => <PostCard key={index} {...article} type="detailed" />)}
                            <ul className="page-numbers heading">
                                <li><span aria-current="page" className="page-numbers current">1</span></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#">5</a></li>
                                <li><a className="page-numbers" href="#">...</a></li>
                                <li><a className="page-numbers" href="#">98</a></li>
                                <li><a className="next page-numbers" href="#"><i className="icon-right-open-big"></i></a></li>
                            </ul>

                        </div>
                        <div className="col-md-4 pl-md-5 sticky-sidebar">
                            <div className="sidebar-widget latest-tpl-4">
                                <h4 className="spanborder">
                                    <span>Popular</span>
                                </h4>
                                <ol>
                                    {
                                        articles.map((article, index) => {
                                            return (
                                                <li className="d-flex" key={index}>
                                                    <PostCard {...article} type="less_detailed" />
                                                </li>
                                            );
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
