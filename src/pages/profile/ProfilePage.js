import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Tabs from 'antd/lib/tabs';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';
import { Icon } from 'shared/components/html';
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

import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorBio,
    AuthorDetails,
    AuthorName,
} from './profilePageStyledComponents';

const { TabPane } = Tabs;
const propTypes = {
    getPostsByStatusAndPage: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,

    popularPosts: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    loginData: PropTypes.object.isRequired,
};

const ProfilePage = ({ author, popularPosts, updatePost, posts, loginData, getPostsByStatusAndPage, deletePost }) => {
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
                    <AuthorContainer>
                        <AuthorImageContainer>
                            <Icon round src={author.data.avatar} />
                        </AuthorImageContainer>
                        <AuthorDetails>
                            <AuthorName>{author.data.name}</AuthorName>
                            <AuthorBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ut ligula et semper. Aenean consectetur, est id gravida venenatis.</AuthorBio>
                        </AuthorDetails>
                    </AuthorContainer>
                    <Tabs defaultActiveKey="1" onChange={() => { }}>
                        <TabPane tab="Drafts" key="1">
                            <TabContainer>
                                <PostsByParams
                                    getPosts={getPostsByStatusAndPage}
                                    deletePost={deletePost}
                                    updatePost={updatePost}
                                    posts={posts}
                                    loginData={loginData}
                                    getPostsParams={{ "status": "draft" }}
                                />
                            </TabContainer>
                        </TabPane>
                        <TabPane tab="Published" key="2">
                            <TabContainer>
                                <PostsByParams
                                    getPosts={getPostsByStatusAndPage}
                                    deletePost={deletePost}
                                    updatePost={updatePost}
                                    posts={posts}
                                    loginData={loginData}
                                    getPostsParams={{ "status": "published" }}
                                />
                            </TabContainer>
                        </TabPane>
                    </Tabs>
                </PageLeftContainer>
                <PageRightContainer>
                    <Heading text="Highlight posts" />
                    <List>
                        {renderPopularPosts()}
                    </List>
                </PageRightContainer>
            </SectionContainer>
        </PageContainer>
    );
};

ProfilePage.propTypes = propTypes;

export default ProfilePage;
