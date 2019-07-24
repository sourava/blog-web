import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Icon } from 'shared/components/html';
import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import {
    PageContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
} from 'pages/commonStyledComponents';

import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorDetails,
    AuthorName,
    AuthorBio,
} from './profilePageStyledComponents';

const propTypes = {
    posts: PropTypes.object.isRequired,
    popularPosts: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
};

const ProfilePage = ({ posts, popularPosts, author }) => {
    const renderPosts = () => {
        if (posts && posts.data) {
            return (
                <React.Fragment>
                    <Heading text="Latest Posts" />
                    {_.map(posts.data, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
                </React.Fragment>
            );
        }
    };

    const renderPopularPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        if (popularPosts && popularPosts.data) {
            return _.map(popularPosts.data, (article, index) => {
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

    return (
        <PageContainer>
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
                {renderPosts()}
            </PageLeftContainer>
            <PageRightContainer>
                <Heading text="Highlight posts" />
                <List>
                    {renderPopularPosts()}
                </List>
            </PageRightContainer>
        </PageContainer>
    );
};

ProfilePage.propTypes = propTypes;

export default ProfilePage;
