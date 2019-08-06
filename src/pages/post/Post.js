import React from 'react';
import map from 'lodash/map';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { InlineShareButtons } from 'sharethis-reactjs';

import CommentBox from 'features/comments/CommentBox';
import routePaths from 'shared/routePaths';
import clapIcon from 'shared/assets/icons/clapping.png';
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
                <CommentHeading>Comments</CommentHeading>
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
        if (this.props.loginData && this.props.loginData.data) {
            this.props.addClap({ postID: this.props.match.params.id, userID: this.props.loginData.data.id }, this.props.loginData.data.token);
            this.updateClaps();
        }
    }

    updateClaps = () => {
        this.setState({
            claps: this.state.claps + 1
        });
    }

    renderClaps = () => {
        if (this.props.loginData && this.props.loginData.data) {
            const text = this.props.postData.data.total_claps + this.state.claps == 1 ? 'clap' : 'claps';
            return (
                <ClapDetails>
                    {`${this.props.postData.data.total_claps + this.state.claps} ${text}`}
                </ClapDetails>
            );
        } else {
            return (
                <ClapDetails>
                    <LinkButton to={routePaths.LOGIN} text="Please login to appretiate the work" type="primary" />
                </ClapDetails>
            );
        }
    }

    render() {
        const { postData } = this.props;
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
                    <PostActions>
                        <PostClaps>
                            <ImageButton onClick={this.addClap} imageProps={{ src: clapIcon, height: "30px" }} round padding="15px" />
                            {this.renderClaps()}
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
                    {this.renderCommentsSection()}
                </PageContainer>
            );
        }
        return null;
    }
}

export default withRouter(Post);
