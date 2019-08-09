import promiseState from 'shared/utils/reduxReducerHelper';

import {
    addImageActionType,
    addPostActionType,
    updatePostActionType,
    getPostActionType,
    getPostsActionType,
    searchPostActionType,
    getPopularPostsActionType,
    getTrendingPostsActionType,
    getFeaturedPostsActionType,
    getAuthorPostsActionType,
    getAuthorTrendingPostsActionType,
    getUserPostsActionType,
    getPostsByStatusActionType,
} from './postsActions';

const initialState = {
    addImage: {
        ...promiseState(false, false, false, null),
    },
    addPost: {
        ...promiseState(false, false, false, null),
    },
    updatePost: {
        ...promiseState(false, false, false, null),
    },
    post: {
        ...promiseState(false, false, false, null),
    },
    posts: {
        ...promiseState(false, false, false, null),
    },
    popularPosts: {
        ...promiseState(false, false, false, null),
    },
    trendingPosts: {
        ...promiseState(false, false, false, null),
    },
    featuredPosts: {
        ...promiseState(false, false, false, null),
    },
    search: {
        ...promiseState(false, false, false, null),
    },
    authorPosts: {
        ...promiseState(false, false, false, null),
    },
    authorTrendingPosts: {
        ...promiseState(false, false, false, null),
    },
    userPosts: {
        ...promiseState(false, false, false, null),
    },
    postsByStatus: {
        ...promiseState(false, false, false, null),
    },
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
    case addImageActionType.pending:
        return Object.assign({}, state, {
            addImage: {
                ...promiseState(true, false, false, null),
            },
        });
    case addImageActionType.fulfilled:
        return Object.assign({}, state, {
            addImage: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case addImageActionType.rejected:
        return Object.assign({}, state, {
            addImage: {
                ...promiseState(false, false, true, null),
            },
        });
    case addPostActionType.pending:
        return Object.assign({}, state, {
            addPost: {
                ...promiseState(true, false, false, null),
            },
        });
    case addPostActionType.fulfilled:
        return Object.assign({}, state, {
            addPost: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case addPostActionType.rejected:
        return Object.assign({}, state, {
            addPost: {
                ...promiseState(false, false, true, null),
            },
        });
    case updatePostActionType.pending:
        return Object.assign({}, state, {
            updatePost: {
                ...promiseState(true, false, false, null),
            },
        });
    case updatePostActionType.fulfilled:
        return Object.assign({}, state, {
            updatePost: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case updatePostActionType.rejected:
        return Object.assign({}, state, {
            updatePost: {
                ...promiseState(false, false, true, null),
            },
        });
    case getPostActionType.pending:
        return Object.assign({}, state, {
            post: {
                ...promiseState(true, false, false, null),
            },
        });
    case getPostActionType.fulfilled:
        return Object.assign({}, state, {
            post: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getPostActionType.rejected:
        return Object.assign({}, state, {
            post: {
                ...promiseState(false, false, true, null),
            },
        });
    case getPostsActionType.pending:
        return Object.assign({}, state, {
            posts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getPostsActionType.fulfilled:
        return Object.assign({}, state, {
            posts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getPostsActionType.rejected:
        return Object.assign({}, state, {
            posts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getPopularPostsActionType.pending:
        return Object.assign({}, state, {
            popularPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getPopularPostsActionType.fulfilled:
        return Object.assign({}, state, {
            popularPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getPopularPostsActionType.rejected:
        return Object.assign({}, state, {
            popularPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getTrendingPostsActionType.pending:
        return Object.assign({}, state, {
            trendingPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getTrendingPostsActionType.fulfilled:
        return Object.assign({}, state, {
            trendingPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getTrendingPostsActionType.rejected:
        return Object.assign({}, state, {
            trendingPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getFeaturedPostsActionType.pending:
        return Object.assign({}, state, {
            featuredPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getFeaturedPostsActionType.fulfilled:
        return Object.assign({}, state, {
            featuredPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getFeaturedPostsActionType.rejected:
        return Object.assign({}, state, {
            featuredPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case searchPostActionType.pending:
        return Object.assign({}, state, {
            search: {
                ...promiseState(true, false, false, null),
            },
        });
    case searchPostActionType.fulfilled:
        return Object.assign({}, state, {
            search: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case searchPostActionType.rejected:
        return Object.assign({}, state, {
            search: {
                ...promiseState(false, false, true, null),
            },
        });
    case getAuthorPostsActionType.pending:
        return Object.assign({}, state, {
            authorPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getAuthorPostsActionType.fulfilled:
        return Object.assign({}, state, {
            authorPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getAuthorPostsActionType.rejected:
        return Object.assign({}, state, {
            authorPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getAuthorTrendingPostsActionType.pending:
        return Object.assign({}, state, {
            authorTrendingPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getAuthorTrendingPostsActionType.fulfilled:
        return Object.assign({}, state, {
            authorTrendingPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getAuthorTrendingPostsActionType.rejected:
        return Object.assign({}, state, {
            authorTrendingPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getUserPostsActionType.pending:
        return Object.assign({}, state, {
            userPosts: {
                ...promiseState(true, false, false, null),
            },
        });
    case getUserPostsActionType.fulfilled:
        return Object.assign({}, state, {
            userPosts: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getUserPostsActionType.rejected:
        return Object.assign({}, state, {
            userPosts: {
                ...promiseState(false, false, true, null),
            },
        });
    case getPostsByStatusActionType.pending:
        return Object.assign({}, state, {
            postsByStatus: {
                ...promiseState(true, false, false, null),
            },
        });
    case getPostsByStatusActionType.fulfilled:
        return Object.assign({}, state, {
            postsByStatus: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getPostsByStatusActionType.rejected:
        return Object.assign({}, state, {
            postsByStatus: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default postsReducer;
