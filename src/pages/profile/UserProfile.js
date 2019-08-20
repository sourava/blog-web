import React from 'react';
import Tabs from 'antd/lib/tabs';
import PropTypes from 'prop-types';

import PostsByParams from 'features/postsByParams/PostsByParams';
import { Icon } from 'shared/components/html';
import {
    TabContainer,
} from 'pages/commonStyledComponents';
import userIcon from 'shared/assets/icons/user.png';

import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorBio,
    AuthorDetails,
    AuthorName,
    AuthorActions,
} from './profilePageStyledComponents';
import EditProfile from './EditProfile';

const { TabPane } = Tabs;

const propTypes = {
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,

    author: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
};

const UserProfile = ({ author, getPosts, deletePost, posts, updateUser }) => {
    return (
        <React.Fragment>
            <AuthorContainer>
                <AuthorImageContainer>
                    <Icon round src={author.data.avatar} altImage={userIcon} />
                </AuthorImageContainer>
                <AuthorDetails>
                    <AuthorActions>
                        <AuthorName>{author.data.name}</AuthorName>
                        <EditProfile author={author.data} updateUser={updateUser} />
                    </AuthorActions>
                    <AuthorBio>{author.data.bio}</AuthorBio>
                </AuthorDetails>
            </AuthorContainer>
            <Tabs defaultActiveKey="1" onChange={() => { }}>
                <TabPane tab="Drafts" key="1">
                    <TabContainer>
                        <PostsByParams
                            getPosts={getPosts}
                            deletePost={deletePost}
                            posts={posts}
                            showActions={true}
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
                            showActions={true}
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
                            showActions={true}
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
                            showActions={true}
                            getPostsParams={{ "status": "rejected" }}
                        />
                    </TabContainer>
                </TabPane>
            </Tabs>
        </React.Fragment>
    );
};

UserProfile.propTypes = propTypes;

export default UserProfile;
