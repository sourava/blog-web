import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';
import { getAuthor } from 'features/author/authorActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    author: state.authorReducer.author,
    popularPosts: state.postsReducer.popularPosts,
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
    getAuthor: (
        id,
        successCallback,
        errorCallback,
    ) => {
        dispatch(getAuthor(id, successCallback, errorCallback));
    },
});

class ProfilePageContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        match: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        popularPosts: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getPosts({ "author": this.props.match.params.id });
        this.props.getPopularPosts({ "author": this.props.match.params.id });
        this.props.getAuthor(this.props.match.params.id);
    }

    render() {
        if (this.props.posts.isFulfilled && this.props.author.isFulfilled && this.props.popularPosts.isFulfilled) {
            return (
                <ProfilePage {...this.props} />
            );
        } else {
            return null;
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer));
