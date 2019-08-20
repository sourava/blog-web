import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Tabs from 'antd/lib/tabs';

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

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';

const { TabPane } = Tabs;
const propTypes = {
    popularPosts: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    categoryDetails: PropTypes.object.isRequired,
};

const Posts = ({ getPosts, posts, popularPosts, categoryDetails }) => {
    const renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count + 1;
        };

        return map(popularPosts.data, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard article={article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    const renderPosts = (getPosts, posts) => {
        const renderTab = (value, name, index) => {
            return (
                <TabPane tab={name} key={index + 1}>
                    <TabContainer>
                        <PostsByParams
                            getPosts={getPosts}
                            posts={posts}
                            getPostsParams={{ "sub_category": value }}
                        />
                    </TabContainer>
                </TabPane>
            );
        };
        if (categoryDetails["sub_categories"] && Object.keys(categoryDetails["sub_categories"]).length > 1) {
            return (
                <Tabs defaultActiveKey="1" onChange={() => { }}>
                    {map(Object.keys(categoryDetails["sub_categories"]), (key, index) => renderTab(key, categoryDetails["sub_categories"][key], index))}
                </Tabs>
            );
        } else {
            return (
                <PostsByParams
                    getPosts={getPosts}
                    posts={posts}
                />
            );
        }
    };

    return (
        <PageContainer>
            <SectionContainer>
                <PageLeftContainer>
                    {renderPosts(getPosts, posts)}
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text={`Popular in ${categoryDetails["name"]}`} />
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
