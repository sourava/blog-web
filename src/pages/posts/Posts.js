import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Tabs from 'antd/lib/tabs';

const { TabPane } = Tabs;

import {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
    TabContainer,
} from 'pages/commonStyledComponents';
import { CATEGORIES } from 'shared/appConstants';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';

const propTypes = {
    popularPosts: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    loginData: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

const Posts = ({ getPosts, posts, popularPosts, match, loginData }) => {
    const renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return map(popularPosts.data, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    return (
        <PageContainer>
            <SectionContainer>
                <PageLeftContainer>
                    <Tabs defaultActiveKey="1" onChange={() => { }}>
                        <TabPane tab="Article" key="1">
                            <TabContainer>
                                <PostsByParams
                                    getPosts={getPosts}
                                    posts={posts}
                                    loginData={loginData}
                                    getPostsParams={{ "sub_category": "article" }}
                                />
                            </TabContainer>
                        </TabPane>
                        <TabPane tab="News" key="2">
                            <TabContainer>
                                <PostsByParams
                                    getPosts={getPosts}
                                    posts={posts}
                                    loginData={loginData}
                                    getPostsParams={{ "sub_category": "news" }}
                                />
                            </TabContainer>
                        </TabPane>
                    </Tabs>
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text={`Popular in ${CATEGORIES[match.params.category]}`} />
                    <List>
                        {renderPopularPosts()}
                    </List>
                </PageRightContainer>
            </SectionContainer>
        </PageContainer>
    );
};

Posts.propTypes = propTypes;

export default Posts;
