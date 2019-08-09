import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import debounce from "lodash.debounce";

import { Divider } from 'shared/components/html';
import PostCard from 'features/postCard/PostCard';

const Info = styled.div`
    padding: 0 15px;
`;

class PostsByParams extends React.PureComponent {
    _isMounted = false;

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
        deletePost: PropTypes.func,
        posts: PropTypes.object.isRequired,
        getPostsParams: PropTypes.object,
        showActions: PropTypes.bool,
    };

    componentWillMount() {
        this._isMounted = true;
        this.loadPosts();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    successCallback = () => {
        if (this._isMounted) {
            this.setState({
                hasMore: this.props.posts.data.length === 10,
                isLoading: false,
                posts: [
                    ...this.state.posts,
                    ...this.props.posts.data,
                ],
            });
        }
    }

    errorCallback = (response) => {
        if (this._isMounted) {
            this.setState({
                error: response,
                isLoading: false,
            });
        }
    }

    loadPosts = () => {
        if (this._isMounted) {
            this.setState({ isLoading: true });
            this.props.getPosts(this.props.getPostsParams, this.state.page, this.successCallback, this.errorCallback);
        }
    }

    updatePage = () => {
        if (this._isMounted) {
            this.setState({ page: this.state.page + 1 });
        }
    }

    resetState = () => {
        if (this._isMounted) {
            this.setState({
                page: 1,
                error: null,
                hasMore: true,
                isLoading: false,
                posts: [],
            });
            this.loadPosts();
        }
    }

    deletePost = (id) => {
        this.props.deletePost(id, () => this.resetState());
    }

    renderPosts = () => {
        if (this.state.posts.length > 0) {
            const first = this.state.posts[0];
            const rest = this.state.posts.slice(1, this.state.posts.length);
            return (
                <React.Fragment>
                    <PostCard article={first} type="featured_main" showActions={this.props.showActions} deletePost={this.deletePost} />
                    <Divider />
                    {map(rest, (article, index) => <PostCard key={index} article={article} type="detailed" showActions={this.props.showActions} deletePost={this.deletePost} />)}
                </React.Fragment>
            );
        }
    };

    render() {
        const {
            error,
            hasMore,
            isLoading,
        } = this.state;
        return (
            <React.Fragment>
                {this.renderPosts()}
                {error && <Info style={{ color: '#900' }}>{error}</Info>}
                {isLoading && <Info>Loading...</Info>}
                {!hasMore && <Info>You did it! You reached the end!</Info>}
            </React.Fragment>
        );
    }
}

export default PostsByParams;
