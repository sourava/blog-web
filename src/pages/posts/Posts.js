import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
    PageContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount
} from './postsStyledComponents';
import appConstants from 'shared/appConstants';

import post1 from 'shared/assets/images/thumb/thumb-800x495.jpg';
import post2 from 'shared/assets/images/thumb/thumb-512x512.jpg';
import post3 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import post4 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';

import author from 'shared/assets/images/author-avata-1.jpg';
import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import Divider from 'features/Divider';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        popularPosts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getPosts({ "category": this.props.match.params.category });
        this.props.getPopularPosts({ "category": this.props.match.params.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category) {
            this.props.getPosts({ "category": this.props.match.params.category });
            this.props.getPopularPosts({ "category": this.props.match.params.category });
        }
    }

    renderPosts = (articles) => {
        const first = articles[0];
        const rest = articles.slice(1, articles.length);
        return (
            <React.Fragment>
                <Heading text={appConstants.CATEGORIES[this.props.match.params.category]} />
                <PostCard {...first} type="featured_large" />
                <Divider />
                {_.map(rest, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
            </React.Fragment>
        );
    };

    renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        if (this.props.popularPosts && this.props.popularPosts.data) {
            return _.map(this.props.popularPosts.data, (article, index) => {
                return (
                    <ListItem key={index}>
                        <PostCount>{mapPostCount(index)}</PostCount>
                        <PostCard {...article} type="less_detailed" />
                    </ListItem>
                );
            });
        }
        return null;
    };

    render() {
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

        return (
            <React.Fragment>
                <PageContainer>
                    <PageLeftContainer>
                        {this.renderPosts(articles)}
                    </PageLeftContainer>
                    <PageRightContainer>
                        <Heading text={`Popular in ${appConstants.CATEGORIES[this.props.match.params.category]}`} />
                        <List>
                            {this.renderPopularPosts()}
                        </List>
                    </PageRightContainer>
                </PageContainer>
            </React.Fragment>
        );
    }
}

export default Posts;
