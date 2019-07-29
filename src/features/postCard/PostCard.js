import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { FlexContainer, Title, Description, AuthorName, DatePosted } from './postCardStyledComponents';
import { Icon } from 'shared/components/html';

import routePaths from 'shared/routePaths';

const PostCard = ({ id, title, description, author, date_created, thumbnail, type }) => {
    if (type == "detailed") {
        return (
            <Link to={routePaths.POST(id)}>
                <FlexContainer margin="0 0 48px">
                    <FlexContainer column>
                        <Title type="big">{title}</Title>
                        <Description>{description}</Description>
                        <FlexContainer alignItems="center">
                            <Icon src={author.avatar} round />
                            <FlexContainer column margin="0 0 0 15px">
                                <AuthorName>{author.name}</AuthorName>
                                <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer backgroundImage={thumbnail} maxWidth="25%" margin="0 0 0 20px" />
                </FlexContainer>
            </Link>
        );
    } else if (type == "less_detailed") {
        return (
            <Link to={routePaths.POST(id)}>
                <FlexContainer column>
                    <Title>{title}</Title>
                    <FlexContainer column>
                        <AuthorName>{author.name}</AuthorName>
                        <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                    </FlexContainer>
                </FlexContainer>
            </Link>

        );
    } else if (type == "featured_main") {
        return (
            <Link to={routePaths.POST(id)}>
                <FlexContainer margin="0 0 20px" column>
                    <Icon src={thumbnail} maxWidth="100%" />
                    <Title type="big">{title}</Title>
                    <Description>{description}</Description>
                    <FlexContainer column>
                        <AuthorName>{author.name}</AuthorName>
                        <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                    </FlexContainer>
                </FlexContainer>
            </Link>
        );
    } else if (type == "featured_sub") {
        return (
            <Link to={routePaths.POST(id)}>
                <FlexContainer background="#fafafa" margin="0 0 20px">
                    <Icon src={thumbnail} maxWidth="33%" />
                    <FlexContainer column padding="15px 20px">
                        <Title>{title}</Title>
                        <FlexContainer column>
                            <AuthorName>{author.name}</AuthorName>
                            <DatePosted>{moment(date_created).format("MMM DD")}</DatePosted>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
            </Link>
        );
    } else {
        return null;
    }
};

export default PostCard;
