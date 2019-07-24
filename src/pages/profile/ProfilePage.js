import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import debounce from "lodash.debounce";

import {
    PageContainer,
    SectionContainer,
    PageLeftContainer,
    PageRightContainer,
    List,
    ListItem,
    PostCount,
    Info,
} from 'pages/commonStyledComponents';

import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorBio,
    AuthorDetails,
    AuthorName,
} from './profilePageStyledComponents';

import { Icon } from 'shared/components/html';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import Divider from 'features/Divider';

class ProfilePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            error: null,
            hasMore: true,
            isLoading: false,
            posts: [],
        };
        window.onscroll = debounce(() => {
            const {
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;

            if (error || isLoading || !hasMore) return;
            if (window.innerHeight + document.documentElement.scrollTop === document.getElementById("page").offsetHeight) {
                this.updatePage();
                this.loadPosts();
            }
        }, 100);
    }

    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getAuthor: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        popularPosts: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.loadPosts();
        this.props.getPopularPosts({ "author": this.props.match.params.id });
        this.props.getAuthor(this.props.match.params.id);
    }

    loadPosts = () => {
        this.setState({ isLoading: true });
        this.props.getPosts({ "author": this.props.match.params.id, "page": this.state.page }, this.successCallback, this.errorCallback);
    }

    updatePage = () => {
        this.setState({ page: this.state.page + 1 });
    }

    successCallback = () => {
        this.setState({
            hasMore: this.props.posts.data.length === 10,
            isLoading: false,
            posts: [
                ...this.state.posts,
                ...this.props.posts.data,
            ],
        });
    }

    errorCallback = (response) => {
        this.setState({
            error: response,
            isLoading: false,
        });
    }

    renderPosts = () => {
        if (this.state.posts.length > 0) {
            const first = this.state.posts[0];
            const rest = this.state.posts.slice(1, this.state.posts.length);
            return (
                <React.Fragment>
                    <PostCard {...first} type="featured_main" />
                    <Divider />
                    {_.map(rest, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
                </React.Fragment>
            );
        }
    };

    renderPopularPosts = () => {
        const { popularPosts } = this.props;
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return _.map(popularPosts.data, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    render() {
        const { author, popularPosts } = this.props;
        const {
            error,
            hasMore,
            isLoading,
        } = this.state;
        if (popularPosts.isFulfilled && author.isFulfilled) {
            return (
                <PageContainer>
                    <SectionContainer>
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
                            <Heading text="Latest Posts" />
                            {this.renderPosts()}
                            {error && <Info style={{ color: '#900' }}>{error}</Info>}
                            {isLoading && <Info>Loading...</Info>}
                            {!hasMore && <Info>You did it! You reached the end!</Info>}
                        </PageLeftContainer>
                        <PageRightContainer>
                            <Heading text="Highlight posts" />
                            <List>
                                {this.renderPopularPosts()}
                            </List>
                        </PageRightContainer>
                    </SectionContainer>
                </PageContainer>
            );
        }
        return null;
    }
}

export default ProfilePage;
