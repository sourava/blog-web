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
    FeaturedPageLeftContainer,
    FeaturedPageRightContainer,
    EditorsPickContainer,
    EditorsArticleLeftContainer,
    EditorsArticleRightContainer,
} from './homePageStyledComponents';

import PostCard from 'features/postCard/PostCard';
import Heading from 'features/Heading';
import Divider from 'features/Divider';

class HomePage extends React.PureComponent {
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
        getFeaturedPosts: PropTypes.func.isRequired,
        getTrendingPosts: PropTypes.func.isRequired,
        trendingPosts: PropTypes.object.isRequired,
        featuredPosts: PropTypes.object.isRequired,
        popularPosts: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        this.loadPosts();
        this.props.getPopularPosts();
        this.props.getTrendingPosts();
        this.props.getFeaturedPosts();
    }

    loadPosts = () => {
        this.setState({ isLoading: true });
        this.props.getPosts({ "page": this.state.page }, this.successCallback, this.errorCallback);
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

    renderEditorsPosts = () => {
        if (this.props.featuredPosts && this.props.featuredPosts.data) {
            const first = this.props.featuredPosts.data[0];
            const rest = this.props.featuredPosts.data.slice(1, this.props.featuredPosts.data.length);
            return (
                <React.Fragment>
                    <Heading text="Editors Pick" />
                    <EditorsPickContainer>
                        <EditorsArticleLeftContainer>
                            <PostCard {...first} type="featured_main" />
                            {/* <a className="btn btn-green d-inline-block mb-4 mb-md-0" href="archive.html">All Featured</a> */}
                        </EditorsArticleLeftContainer>
                        <EditorsArticleRightContainer>
                            {_.map(rest, (article, index) => <PostCard key={index} {...article} type="featured_sub" />)}
                        </EditorsArticleRightContainer>
                    </EditorsPickContainer>
                </React.Fragment>
            );
        }
    };

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
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };

        if (this.props.popularPosts && this.props.popularPosts.data) {
            return _.map(this.props.popularPosts.data, (article, index) => {
                return (
                    <ListItem key={index}>
                        <PostCount>{mapPostCount(index)}</PostCount>
                        <PostCard {...article} type="less_detailed" />
                    </ListItem>
                );
            });
        }
    };

    renderTrendingPosts = () => {
        const mapPostCount = (count) => {
            return count < 9 ? `0${count + 1}` : count;
        };
        if (this.props.trendingPosts && this.props.trendingPosts.data) {
            const posts = this.props.trendingPosts.data.slice(0, 4);
            return _.map(posts, (article, index) => {
                return (
                    <ListItem key={index}>
                        <PostCount>{mapPostCount(index)}</PostCount>
                        <PostCard {...article} type="less_detailed" />
                    </ListItem>
                );
            });
        }
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
                    <FeaturedPageLeftContainer>
                        {this.renderEditorsPosts()}
                    </FeaturedPageLeftContainer>
                    <FeaturedPageRightContainer>
                        <Heading text={`Trending`} />
                        <List>
                            {this.renderTrendingPosts()}
                        </List>
                        {/* <a className="link-green" href="archive.html">See all trending<svg className="svgIcon-use" width="19" height="19"><path d="M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692" fillRule="evenodd"></path></svg></a> */}
                    </FeaturedPageRightContainer>
                </SectionContainer>
                <Divider />
                <SectionContainer>
                    <PageLeftContainer>
                        <Heading text="Most Recent" />
                        {this.renderPosts()}
                        {error && <Info style={{ color: '#900' }}>{error}</Info>}
                        {isLoading && <Info>Loading...</Info>}
                        {!hasMore && <Info>You did it! You reached the end!</Info>}
                    </PageLeftContainer>
                    <PageRightContainer>
                        <Heading text={`Popular`} />
                        <List>
                            {this.renderPopularPosts()}
                        </List>
                    </PageRightContainer>
                </SectionContainer>
            </PageContainer>
        );
    }
}

export default HomePage;
