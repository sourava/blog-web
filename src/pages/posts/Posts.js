import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
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
import { CATEGORIES } from 'shared/appConstants';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import { Divider } from 'shared/components/html';

class Posts extends React.PureComponent {
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
        getPopularPosts: PropTypes.func.isRequired,
        popularPosts: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.loadPosts();
        this.props.getPopularPosts({ "category": this.props.match.params.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category) {
            this.setState({
                page: 1,
                error: null,
                hasMore: true,
                isLoading: false,
                posts: [],
            });
            this.loadPosts();
            this.props.getPopularPosts({ "category": this.props.match.params.category });
        }
    }

    loadPosts = () => {
        this.setState({ isLoading: true });
        this.props.getPosts({ "category": this.props.match.params.category, "page": this.state.page }, this.successCallback, this.errorCallback);
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

    renderPopularPosts = () => {
        const { popularPosts } = this.props;
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        return map(popularPosts.data, (article, index) => {
            return (
                <ListItem key={index}>
                    <PostCount>{mapPostCount(index)}</PostCount>
                    <PostCard {...article} type="less_detailed" />
                </ListItem>
            );
        });
    };

    render() {
        const {
            error,
            hasMore,
            isLoading,
        } = this.state;
        return (
            <PageContainer>
                <SectionContainer>
                    <PageLeftContainer>
                        <Heading text={CATEGORIES[this.props.match.params.category]} />
                        {this.renderPosts()}
                        {error && <Info style={{ color: '#900' }}>{error}</Info>}
                        {isLoading && <Info>Loading...</Info>}
                        {!hasMore && <Info>You did it! You reached the end!</Info>}
                    </PageLeftContainer>
                    <PageRightContainer>
                        <Heading text={`Popular in ${CATEGORIES[this.props.match.params.category]}`} />
                        <List>
                            {this.renderPopularPosts()}
                        </List>
                    </PageRightContainer>
                </SectionContainer>
            </PageContainer>
        );
    }
}

export default Posts;
