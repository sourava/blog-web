import promiseState from 'shared/utils/reduxReducerHelper';

import {
    addImageActionType,
    addPostActionType,
    getPostActionType,
    getPostsActionType,
    searchPostActionType,
    getPopularPostsActionType
} from './postsActions';

const initialState = {
    addImage: {
        ...promiseState(false, false, false, null),
    },
    addPost: {
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
    search: {
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
    default:
        return state;
    }
};

export default postsReducer;
