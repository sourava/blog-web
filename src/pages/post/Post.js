import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

import routePaths from 'shared/routePaths';
import { Icon } from 'shared/components/html';

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
    PostShare,
} from './postStyledComponents';

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        postData: PropTypes.object.isRequired,
        getPost: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const { postData, match } = this.props;
        if (postData && postData.data) {
            return (
                <PageContainer>
                    <PostHeader>
                        <PostTitle>{postData.data.title}</PostTitle>
                        <ActionsContainer>
                            <Link to={routePaths.PROFILE(postData.data.author.id)}>
                                <AuthorContainer>
                                    <Icon src={postData.data.author.avatar} round height="40px" width="auto" margin="0 15px 0 0" />
                                    <PostMetaDataContainer>
                                        <AuthorName>{postData.data.author.name}</AuthorName>
                                        <DatePosted>{moment(postData.data.date_created).format("MMM DD")}</DatePosted>
                                    </PostMetaDataContainer>
                                </AuthorContainer>
                            </Link>
                            <PostShare>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080/post/${match.params.id}`}><i className="icon-facebook"></i></a>
                                <a href={`http://twitter.com/share?text=${postData.data.title}&url=http://localhost:8080/post/${match.params.id}`}><i className="icon-twitter"></i></a>
                            </PostShare>
                        </ActionsContainer>
                    </PostHeader>
                    <PostContent>
                        {renderHTML(postData.data.body)}
                    </PostContent>
                </PageContainer>
            );
        }
        return null;
    }
}

export default withRouter(Post);
