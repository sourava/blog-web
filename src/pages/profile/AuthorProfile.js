import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'features/Heading';
import PostsByParams from 'features/postsByParams/PostsByParams';
import { Icon } from 'shared/components/html';

import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorBio,
    AuthorDetails,
    AuthorName,
    AuthorActions,
} from './profilePageStyledComponents';

const propTypes = {
    getPosts: PropTypes.func.isRequired,
    author: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
};

const AuthorProfile = ({ author, getPosts, posts }) => {
    return (
        <React.Fragment>
            <AuthorContainer>
                <AuthorImageContainer>
                    <Icon round src={author.data.avatar} />
                </AuthorImageContainer>
                <AuthorDetails>
                    <AuthorActions>
                        <AuthorName>{author.data.name}</AuthorName>
                    </AuthorActions>
                    <AuthorBio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ut ligula et semper. Aenean consectetur, est id gravida venenatis.</AuthorBio>
                </AuthorDetails>
            </AuthorContainer>
            <Heading text="Latest Posts" />
            <PostsByParams
                getPosts={getPosts}
                posts={posts}
            />
        </React.Fragment>
    );
};

AuthorProfile.propTypes = propTypes;

export default AuthorProfile;
