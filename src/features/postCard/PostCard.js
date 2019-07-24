import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import routePaths from 'shared/routePaths';

const PostCard = ({ id, title, description, author, date_posted, date_created, thumbnail, category, type }) => {
    if (type == "detailed") {
        return (
            <article className="row justify-content-between mb-5 mr-0">
                <div className="col-md-9 ">
                    <div className="align-self-center">
                        <div className="capsSubtle mb-2">{category}</div>
                        <h3 className="entry-title mb-3"><Link to={routePaths.POST(id)}>{title}</Link></h3>
                        <div className="entry-excerpt">
                            <Link to={routePaths.POST(id)}><p>{description}</p></Link>
                        </div>
                        <div className="entry-meta align-items-center">
                            <span className="author-avatar" href="#"><Link to={routePaths.PROFILE(author.id)}><img src={author.avatar} alt="" /></Link></span>
                            <Link to={routePaths.PROFILE(author.id)}>{author.name}</Link><br />
                            <span>{moment(date_created).format("MMM DD")}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 bgcover" style={{ backgroundImage: `url(${thumbnail})` }}></div>
            </article>
        );
    } else if (type == "less_detailed") {
        return (
            <React.Fragment>
                <div className="post-content">
                    <h5 className="entry-title mb-3"><Link to={routePaths.POST(id)}>{title}</Link></h5>
                    <div className="entry-meta align-items-center">
                        <Link to={routePaths.PROFILE(author.id)}>{author.name}</Link><br />
                        <span>{moment(date_created).format("MMM DD")}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    } else if (type === "featured_large") {
        return (
            <Link to="/post">
                <article className="first mb-3">
                    <figure><a href="single.html"><img src={thumbnail} alt="post-title" /></a></figure>
                    <h1 className="entry-title mb-3"><a href="single.html">{title}</a></h1>
                    <div className="entry-excerpt">
                        <p>{description}</p>
                    </div>
                    <div className="entry-meta align-items-center">
                        <a className="author-avatar" href="#"><img src={author.avatar} alt="" /></a>
                        <a href="author.html">{author.name}</a><br />
                        <span>Jun 14</span>
                    </div>
                </article>
            </Link>
        );
    } else if (type == "featured_main") {
        return (
            <Link to="/post">
                <article className="first mb-3">
                    <figure><a href="single.html"><img src={thumbnail} alt="post-title" /></a></figure>
                    <h3 className="entry-title mb-3"><a href="single.html">{title}</a></h3>
                    <div className="entry-excerpt">
                        <p>{description}</p>
                    </div>
                    <div className="entry-meta align-items-center">
                        <a href="author.html">{author.name}</a><br />
                        <span>{date_posted}</span>
                    </div>
                </article>
            </Link>
        );
    } else if (type == "featured_sub") {
        return (
            <Link to="/post">
                <article className="post-has-bg" >
                    <div className="mb-3 d-flex row">
                        <figure className="col-4 col-md-4"><a href="single.html"><img src={thumbnail} alt="post-title" /></a></figure>
                        <div className="entry-content col-8 col-md-8 pl-md-0">
                            <h5 className="entry-title mb-3"><a href="single.html">{title}</a></h5>
                            <div className="entry-meta align-items-center">
                                <a href="author.html">{author.name}</a><br />
                                <span>{date_posted}</span>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        );
    } else {
        return null;
    }
};

export default PostCard;
