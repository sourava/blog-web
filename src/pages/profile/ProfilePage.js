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
    getAuthorPosts: PropTypes.func.isRequired,
    getUserPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,

    author: PropTypes.object.isRequired,
    authorPosts: PropTypes.object.isRequired,
    authorTrendingPosts: PropTypes.object.isRequired,
    userPosts: PropTypes.object.isRequired,
    loginData: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

const renderAuthorProfile = (getPosts, posts, loginData) => {
    return (
        <React.Fragment>
            <Heading text="Latest Posts" />
            <PostsByParams
                getPosts={getPosts}
                posts={posts}
                loginData={loginData}
            />
        </React.Fragment>
    );
};

const renderUserProfile = (getPosts, deletePost, posts, loginData) => {
    return (
        <Tabs defaultActiveKey="1" onChange={() => { }}>
            <TabPane tab="Drafts" key="1">
                <TabContainer>
                    <PostsByParams
                        getPosts={getPosts}
                        deletePost={deletePost}
                        posts={posts}
                        loginData={loginData}
                        getPostsParams={{ "status": "draft" }}
                    />
                </TabContainer>
            </TabPane>
            <TabPane tab="Pending Approval" key="2">
                <TabContainer>
                    <PostsByParams
                        getPosts={getPosts}
                        deletePost={deletePost}
                        posts={posts}
                        loginData={loginData}
                        getPostsParams={{ "status": "published" }}
                    />
                </TabContainer>
            </TabPane>
            <TabPane tab="Approved" key="3">
                <TabContainer>
                    <PostsByParams
                        getPosts={getPosts}
                        deletePost={deletePost}
                        posts={posts}
                        loginData={loginData}
                        getPostsParams={{ "status": "approved" }}
                    />
                </TabContainer>
            </TabPane>
            <TabPane tab="Rejected" key="4">
                <TabContainer>
                    <PostsByParams
                        getPosts={getPosts}
                        deletePost={deletePost}
                        posts={posts}
                        loginData={loginData}
                        getPostsParams={{ "status": "rejected" }}
                    />
                </TabContainer>
            </TabPane>
        </Tabs>
    );
};

const ProfilePage = (props) => {
    const { 
        author,
        authorPosts,
        loginData,
        deletePost,
        getAuthorPosts,
        getUserPosts,
        authorTrendingPosts,
        userPosts,
        match,
    } = props;
    const renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count+1;
        };

        return map(authorTrendingPosts.data, (article, index) => {
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
                    {loginData.data.id === match.params.id ? renderUserProfile(getUserPosts, deletePost, userPosts, loginData) : renderAuthorProfile(getAuthorPosts, authorPosts, loginData)}
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
