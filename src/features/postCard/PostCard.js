import React from 'react';
import moment from 'moment';
import { withRouter, Link } from 'react-router-dom';

import { 
    FlexContainer,
    Title,
    Description,
    AuthorName,
    DatePosted,
    EditButton,
    DeleteButton
} from './postCardStyledComponents';
import { Icon } from 'shared/components/html';


import routePaths from 'shared/routePaths';

const PostCard = ({ id, title, description, author, date_created, thumbnail, type, userID, history, deletePost }) => {
    const renderPostActions = () => {
        if (userID === author.id) {
            return (
                <FlexContainer width="auto">
                    <EditButton to={routePaths.EDIT_POST(id)} />
                    <DeleteButton onClick={() => deletePost(id)} />
                </FlexContainer>
            );
        }
    };

    const linkToPost = () => {
        history.push(routePaths.POST(id));
    };

    const linkToProfile = () => {
        history.push(routePaths.PROFILE(author.id));
    };

    if (type == "detailed") {
        return (
            <FlexContainer margin="0 0 48px">
                <FlexContainer column>
                    <FlexContainer column onClick={linkToPost}>
                        <Link to={routePaths.POST(id)}>
                            <Title type="big">{title}</Title>
                        </Link>
                        <Description>{description}</Description>
                    </FlexContainer>
                    <FlexContainer alignItems="center" justifyContent="space-between">
                        <FlexContainer alignItems="center" onClick={linkToProfile}>
                            <Icon src={author.avatar} round />
                            <FlexContainer column margin="0 0 0 15px">
                                <AuthorName>{author.name}</AuthorName>
                                <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                            </FlexContainer>
                        </FlexContainer>
                        {renderPostActions()}
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer backgroundImage={thumbnail} maxWidth="25%" margin="0 0 0 20px" onClick={linkToPost} />
            </FlexContainer>
        );
    } else if (type == "less_detailed") {
        return (
            <FlexContainer column>
                <Link to={routePaths.POST(id)}>
                    <Title>{title}</Title>
                </Link>
                <FlexContainer column>
                    <Link to={routePaths.PROFILE(author.id)}>
                        <AuthorName>{author.name}</AuthorName>
                    </Link>
                    <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                </FlexContainer>
            </FlexContainer>
        );
    } else if (type == "featured_main") {
        return (
            <FlexContainer margin="0 0 20px" column>
                <FlexContainer column onClick={linkToPost}>
                    <Icon src={thumbnail} maxWidth="100%" />
                    <Link to={routePaths.POST(id)}>
                        <Title type="big">{title}</Title>
                    </Link>
                    <Description>{description}</Description>
                </FlexContainer>
                <FlexContainer alignItems="center" justifyContent="space-between">
                    <FlexContainer column>
                        <Link to={routePaths.PROFILE(author.id)}>
                            <AuthorName>{author.name}</AuthorName>
                        </Link>
                        <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                    </FlexContainer>
                    {renderPostActions()}
                </FlexContainer>
            </FlexContainer>
        );
    } else if (type == "featured_sub") {
        return (
            <FlexContainer background="#fafafa" margin="0 0 20px">
                <Icon src={thumbnail} maxWidth="33%" onClick={linkToPost} />
                <FlexContainer column padding="15px 20px">
                    <Link to={routePaths.POST(id)}>
                        <Title>{title}</Title>
                    </Link>
                    <FlexContainer column>
                        <Link to={routePaths.PROFILE(author.id)}>
                            <AuthorName>{author.name}</AuthorName>
                        </Link>
                        <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        );
    } else {
        return null;
    }
};

export default withRouter(PostCard);
