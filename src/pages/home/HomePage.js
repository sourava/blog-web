import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
} from 'pages/commonStyledComponents';

import {
    FeaturedPageLeftContainer,
    FeaturedPageRightContainer,
    EditorsPickContainer,
    EditorsArticleLeftContainer,
    EditorsArticleRightContainer,
} from './homePageStyledComponents';

import { Spinner, Divider } from 'shared/components/html';
import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';

const propTypes = {
    getPosts: PropTypes.func.isRequired,
    trendingPosts: PropTypes.object.isRequired,
    featuredPosts: PropTypes.object.isRequired,
    popularPosts: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    loginData: PropTypes.object.isRequired,
};

const HomePage = ({ posts, featuredPosts, popularPosts, trendingPosts, getPosts, loginData }) => {
    const renderEditorsPosts = () => {
        if (featuredPosts.isPending) {
            return <Spinner />;
        } else if (featuredPosts.isFulfilled && featuredPosts.data && featuredPosts.data.length > 0) {
            const first = featuredPosts.data[0];
            const rest = featuredPosts.data.slice(1, featuredPosts.data.length > 4 ? 4 : featuredPosts.data.length);
            return (
                <React.Fragment>
                    <Heading text="Editors Pick" />
                    <EditorsPickContainer>
                        <EditorsArticleLeftContainer>
                            <PostCard {...first} type="featured_main" />
                            {/* <a className="btn btn-green d-inline-block mb-4 mb-md-0" href="archive.html">All Featured</a> */}
                        </EditorsArticleLeftContainer>
                        <EditorsArticleRightContainer>
                            {map(rest, (article, index) => <PostCard key={index} {...article} type="featured_sub" />)}
                        </EditorsArticleRightContainer>
                    </EditorsPickContainer>
                </React.Fragment>
            );
        } else {
            return null;
        }
    };

    const renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        if (popularPosts.isFulfilled) {
            return map(popularPosts.data, (article, index) => {
                return (
                    <ListItem key={index}>
                        <PostCount>{mapPostCount(index)}</PostCount>
                        <PostCard {...article} type="less_detailed" />
                    </ListItem>
                );
            });
        } else {
            return <Spinner />;
        }
    };

    const renderTrendingPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };
        if (trendingPosts && trendingPosts.data) {
            const posts = trendingPosts.data.slice(0, 4);
            return map(posts, (article, index) => {
                return (
                    <ListItem key={index}>
                        <PostCount>{mapPostCount(index)}</PostCount>
                        <PostCard {...article} type="less_detailed" />
                    </ListItem>
                );
            });
        } else {
            return <Spinner />;
        }
    };

    return (
        <PageContainer>
            <SectionContainer>
                <FeaturedPageLeftContainer>
                    {renderEditorsPosts()}
                </FeaturedPageLeftContainer>
                <FeaturedPageRightContainer>
                    <Heading text={`Trending`} />
                    <List>
                        {renderTrendingPosts()}
                    </List>
                    {/* <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width="19" height="19"><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd"></path></svg></a> */}
                </FeaturedPageRightContainer>
            </SectionContainer>
            <Divider />
            <SectionContainer>
                <PageLeftContainer>
                    <Heading text={`Most Recent`} />
                    <PostsByParams
                        getPosts={getPosts}
                        posts={posts}
                        loginData={loginData}
                    />
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text={`Popular`} />
                    <List>
                        {renderPopularPosts()}
                    </List>
                </PageRightContainer>
            </SectionContainer>
        </PageContainer>
    );
};

HomePage.propTypes = propTypes;

export default HomePage;
