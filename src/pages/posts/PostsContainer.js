import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from './Posts';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';
import { Spinner } from 'shared/components/html';
import { paramsSeperator } from 'shared/utils/helper';
import { ALL_CATEGORIES } from 'shared/appConstants';

const mapStateToProps = state => ({
    popularPosts: state.postsReducer.popularPosts,
    posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch => ({
    getPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPosts(params, successCallback, errorCallback));
    },
    getPopularPosts: (
        params,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getPopularPosts(params, successCallback, errorCallback));
    },
});

class PostsContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.category = paramsSeperator(this.props.location.search)["category"];
    }

    static propTypes = {
        getPopularPosts: PropTypes.func.isRequired,
        getPosts: PropTypes.func.isRequired,

        popularPosts: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getPopularPosts({ "category": this.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search != prevProps.location.search) {
            this.category = paramsSeperator(this.props.location.search)["category"];
            this.props.getPopularPosts({ "category": this.category });
        }
    }

    getPosts = (params, page, successCallback, errorCallback) => {
        this.props.getPosts({ ...params, "category": this.category, "page": page }, successCallback, errorCallback);
    }

    render() {
        const { popularPosts, posts } = this.props;
        const categoryDetails = find(ALL_CATEGORIES, cat => cat.value === this.category);
        if (categoryDetails) {
            if (popularPosts.isFulfilled) {
                return (
                    <Posts
                        getPosts={this.getPosts}
                        popularPosts={popularPosts}
                        posts={posts}
                        categoryDetails={categoryDetails}
                    />
                );
            }
            return (
                <Spinner />
            );
        } else {
            return null;
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
