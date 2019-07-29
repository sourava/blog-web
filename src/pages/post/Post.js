import React from 'react';
import map from 'lodash/map';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

import CommentBox from 'features/comments/CommentBox';
import routePaths from 'shared/routePaths';
import facebookShareIcon from 'shared/assets/icons/facebook-share.png';
import twitterShareIcon from 'shared/assets/icons/twitter.png';
import clapIcon from 'shared/assets/icons/clapping.png';
import { Icon, ImageButton, LinkButton, Divider } from 'shared/components/html';

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
} from './postStyledComponents';

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            claps: 0
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        postData: PropTypes.object.isRequired,
        getPost: PropTypes.func.isRequired,
        loginData: PropTypes.object.isRequired,
        comments: PropTypes.object.isRequired,
        getComments: PropTypes.func.isRequired,
        addComment: PropTypes.func.isRequired,
        addClap: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
        this.props.getComments(this.props.match.params.id);
    }

    renderCommentsSection = () => {
        const renderComments = () => this.props.comments.isFulfilled ? map(this.props.comments.data, (comment, index) => <CommentBox key={index} author={comment.author} comment={comment.text} />) : null;
        return (
            <CommentsContainer>
                <h5>Comments</h5>
                <CommentBox author={this.props.loginData.data} type="new" addComment={this.addComment} />
                {renderComments()}
            </CommentsContainer>
        );
    }

    addComment = (text) => {
        const successCallback = () => {
            this.props.getComments(this.props.match.params.id);
        };
        this.props.addComment({ "post_id": this.props.match.params.id, text }, this.props.loginData.data.token, successCallback);
    };

    addClap = () => {
        this.props.addClap({ postID: this.props.match.params.id, userID: this.props.loginData.data.id }, this.props.loginData.data.token);
        this.updateClaps();
    }

    updateClaps = () => {
        this.setState({
            claps: this.state.claps + 1
        });
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
                        </ActionsContainer>
                    </PostHeader>
                    <PostContent>
                        {renderHTML(postData.data.body)}
                    </PostContent>
                    <Divider />
                    <PostActions>
                        <PostClaps>
                            <ImageButton onClick={this.addClap} imageProps={{ src: clapIcon, height: "30px" }} round padding="15px" />
                            <ClapDetails>
                                {`${postData.data.total_claps + this.state.claps} ${postData.data.total_claps + this.state.claps == 1 ? 'clap' : 'claps'}`}
                            </ClapDetails>
                        </PostClaps>
                        <PostShare>
                            <LinkButton border="none" padding="0 5px" linkType="href" to={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:8080/post/${match.params.id}`} imageProps={{ src: facebookShareIcon, height: "20px" }} />
                            <LinkButton border="none" padding="0 5px" linkType="href" to={`http://twitter.com/share?text=${postData.data.title}&url=http://localhost:8080/post/${match.params.id}`} imageProps={{ src: twitterShareIcon, height: "20px" }} />
                        </PostShare>
                    </PostActions>
                    <Divider />
                    {this.renderCommentsSection()}
                </PageContainer>
            );
        }
        return null;
    }
}

export default withRouter(Post);
