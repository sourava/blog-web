import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Posts from './Posts';
import { getPosts, getPopularPosts } from 'features/posts/postsActions';

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
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
});

class PostsContainer extends React.PureComponent {
    constructor (props) {
        super(props);
    }

    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        getPopularPosts: PropTypes.func.isRequired,
        popularPosts: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
    }

    componentWillMount() {
        this.props.getPosts({ "category": this.props.match.params.category });
        this.props.getPopularPosts({ "category": this.props.match.params.category });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category != prevProps.match.params.category) {
            this.props.getPosts({ "category": this.props.match.params.category });
            this.props.getPopularPosts({ "category": this.props.match.params.category });
        }
    }

    render () {
        if (this.props.posts.isFulfilled && this.props.popularPosts.isFulfilled) {
            return (
                <Posts {...this.props} category={this.props.match.params.category} />
            );
        }
        return null;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
