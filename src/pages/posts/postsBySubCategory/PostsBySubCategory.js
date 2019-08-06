import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import debounce from "lodash.debounce";

import {
    Info,
} from 'pages/commonStyledComponents';

import PostCard from 'features/postCard/PostCard';
import { Divider } from 'shared/components/html';

class PostsBySubCategory extends React.PureComponent {
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
        posts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.loadPosts();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category || this.props.match.params.subCategory != prevProps.match.params.subCategory) {
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

    loadPosts = () => {
        const { getPosts, match } = this.props;
        this.setState({ isLoading: true });
        getPosts({ "category": match.params.category, "sub_category": match.params.subCategory || "article", "page": this.state.page }, this.successCallback, this.errorCallback);
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
                    {map(rest, (article, index) => <PostCard key={index} {...article} type="detailed" />)}
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

export default PostsBySubCategory;
