import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
} from 'pages/commonStyledComponents';

import UserProfile from './UserProfile';
import AuthorProfile from './AuthorProfile';

const propTypes = {
    getAuthorPosts: PropTypes.func.isRequired,
    getUserPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,

    author: PropTypes.object.isRequired,
    authorPosts: PropTypes.object.isRequired,
    authorTrendingPosts: PropTypes.object.isRequired,
    userPosts: PropTypes.object.isRequired,
    loginData: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

const ProfilePage = (props) => {
    const { 
        author,
        authorPosts,
        loginData,
        deletePost,
        getAuthorPosts,
        getUserPosts,
        updateUser,
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
                    {loginData.data.id === match.params.id ? <UserProfile author={author} getPosts={getUserPosts} deletePost={deletePost} updateUser={updateUser} posts={userPosts} loginData={loginData} /> : <AuthorProfile author={author} getPosts={getAuthorPosts} posts={authorPosts} loginData={loginData} />}
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
