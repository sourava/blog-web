import React, { useState } from 'react';
import map from 'lodash/map';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { InlineShareButtons } from 'sharethis-reactjs';

import CommentBox from 'features/comments/CommentBox';
import routePaths from 'shared/routePaths';
import clapIcon from 'shared/assets/icons/clapping.png';
import userIcon from 'shared/assets/icons/user.png';
import { Icon, ImageButton, LinkButton } from 'shared/components/html';

import {
    PageContainer,
    PostHeader,
    PostTitle,
    ActionsContainer,
    AuthorContainer,
    PostMetaDataContainer,
    AuthorName,
    DatePosted,
    PostContent,
    PostClaps,
    ClapDetails,
    PostShare,
    CommentsContainer,
    PostActions,
    CommentHeading,
} from './postStyledComponents';

const propTypes = {
    postData: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    addClap: PropTypes.func.isRequired,
    loginData: PropTypes.object.isRequired,
};

const Post = ({ postData, comments, addComment, addClap, loginData }) => {
    const [claps, setClaps] = useState(postData.data.total_claps);

    const renderCommentsSection = () => {
        const renderComments = () => comments.isFulfilled ? map(comments.data, (comment, index) => <CommentBox key={index} author={comment.author} comment={comment.text} />) : null;
        return (
            <CommentsContainer>
                <CommentHeading>Comments</CommentHeading>
                <CommentBox author={loginData.data} type="new" addComment={addComment} />
                {renderComments()}
            </CommentsContainer>
        );
    };

    const updateClaps = () => {
        setClaps(claps + 1);
    };

    const renderClaps = () => {
        if (loginData && loginData.data) {
            const text = claps == 1 ? 'clap' : 'claps';
            return (
                <ClapDetails>
                    {`${claps} ${text}`}
                </ClapDetails>
            );
        } else {
            return (
                <ClapDetails>
                    <LinkButton to={routePaths.LOGIN} text="Please login to appretiate the work" type="primary" />
                </ClapDetails>
            );
        }
    };

    return (
        <PageContainer>
            <PostHeader>
                <PostTitle>{postData.data.title}</PostTitle>
                <ActionsContainer>
                    <Link to={routePaths.PROFILE(postData.data.author.id)}>
                        <AuthorContainer>
                            <Icon src={postData.data.author.avatar} round height="40px" width="auto" margin="0 15px 0 0" altImage={userIcon} />
                            <PostMetaDataContainer>
                                <AuthorName>{postData.data.author.name}</AuthorName>
                                <DatePosted>{moment(postData.data.date_created).format("MMM DD")}</DatePosted>
                            </PostMetaDataContainer>
                        </AuthorContainer>
                    </Link>
                </ActionsContainer>
            </PostHeader>
            <PostContent>
                {renderHTML(postData.data.body)}
            </PostContent>
            <PostActions>
                <PostClaps>
                    <ImageButton onClick={() => addClap(updateClaps)} imageProps={{ src: clapIcon, height: "30px" }} round padding="15px" />
                    {renderClaps()}
                </PostClaps>
                <PostShare>
                    <InlineShareButtons
                        config={{
                            alignment: 'center',
                            color: 'social',
                            enabled: true,
                            font_size: 16,
                            labels: 'cta',
                            language: 'en',
                            networks: [
                                'whatsapp',
                                'facebook',
                                'twitter'
                            ],
                            padding: 12,
                            radius: 4,
                            show_total: false,
                            size: 40,

                            image: postData.data.thumbnail,
                            description: postData.data.description,
                            title: postData.data.title,
                        }}
                    />
                </PostShare>
            </PostActions>
            {renderCommentsSection()}
        </PageContainer>
    );
};

Post.propTypes = propTypes;

export default Post;
