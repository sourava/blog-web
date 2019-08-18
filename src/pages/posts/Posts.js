import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';
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
import { ALL_CATEGORIES } from 'shared/appConstants';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';

const { TabPane } = Tabs;
const propTypes = {
    popularPosts: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
};

const Posts = ({ getPosts, posts, category, popularPosts, match }) => {
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

    const renderPosts = (category, getPosts, posts) => {
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
        const categoryDetails = find(ALL_CATEGORIES, cat => cat.value === category);
        
        if (categoryDetails && categoryDetails["sub_categories"] && Object.keys(categoryDetails["sub_categories"]).length > 1) {
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
                    {renderPosts(category, getPosts, posts)}
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text={`Popular in ${find(ALL_CATEGORIES, cat => cat.value === match.params.category)["name"]}`} />
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
