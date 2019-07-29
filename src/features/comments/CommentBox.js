import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {
    CommentContainer,
    AuthorContainer,
    PostMetaDataContainer,
    AuthorName,
    DatePosted,
    CommentContent,
} from './commentStyledComponents';

import {
    Icon,
    TextArea,
    LinkButton,
    Button,
} from 'shared/components/html';

import routePaths from 'shared/routePaths';

const propTypes = {
    author: PropTypes.object,
};

const Comment = ({ author, type, comment, addComment }) => {
    const [newComment, setNewComment] = useState("");

    const textAreaOnChange = (e) => {
        setNewComment(e.target.value);
    };

    const onSubmit = () => {
        addComment(newComment);
        setNewComment("");
    };

    if (type === "new") {
        if (author) {
            return (
                <CommentContainer>
                    <AuthorContainer>
                        <Icon src={author.avatar} round height="40px" width="auto" margin="0 15px 0 0" />
                        <PostMetaDataContainer>
                            <AuthorName>{author.name}</AuthorName>
                            <DatePosted>{moment().format("MMM DD")}</DatePosted>
                        </PostMetaDataContainer>
                    </AuthorContainer>
                    <TextArea
                        borderType="none"
                        placeholder="Write a comment..."
                        margin="20px 0 0"
                        onChange={textAreaOnChange}
                        value={newComment}
                    />
                    <Button type="primary" onClick={onSubmit}>Submit</Button>
                </CommentContainer>
            );
        } else {
            return (
                <CommentContainer>
                    <LinkButton to={routePaths.LOGIN} text="Please login to add a comment" type="primary" />
                </CommentContainer>
            );
        }
    } else {
        return (
            <CommentContainer>
                <AuthorContainer>
                    <Icon src={author.avatar} round height="40px" width="auto" margin="0 15px 0 0" />
                    <PostMetaDataContainer>
                        <AuthorName>{author.name}</AuthorName>
                        <DatePosted>{moment().format("MMM DD")}</DatePosted>
                    </PostMetaDataContainer>
                </AuthorContainer>
                <CommentContent>{comment}</CommentContent>
            </CommentContainer>
        );
    }
};

Comment.propTypes = propTypes;

export default Comment;
