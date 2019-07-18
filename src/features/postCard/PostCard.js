import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, description, author, date_posted, thumbnail, category, type }) => {
    if (type == "detailed") {
        return (
            <Link to="/post">
                <article className="row justify-content-between mb-5 mr-0">
                    <div className="col-md-9 ">
                        <div className="align-self-center">
                            <div className="capsSubtle mb-2">{category}</div>
                            <h3 className="entry-title mb-3"><a href="single.html">{title}</a></h3>
                            <div className="entry-excerpt">
                                <p>{description}</p>
                            </div>
                            <div className="entry-meta align-items-center">
                                <a className="author-avatar" href="#"><img src={author.avatar} alt="" /></a>
                                <a href="author.html">{author.name}</a><br />
                                <span>{date_posted}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 bgcover" style={{ backgroundImage: `url(${thumbnail})` }}></div>
                </article>
            </Link>
        );
    } else if (type == "less_detailed") {
        return (
            <Link to="/post">
                <div className="post-content">
                    <h5 className="entry-title mb-3"><a href="single.html">{title}</a></h5>
                    <div className="entry-meta align-items-center">
                        <a href="author.html">{author.name}</a><br />
                        <span>{date_posted}</span>
                        <span className="middotDivider"></span>
                    </div>
                </div>
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
