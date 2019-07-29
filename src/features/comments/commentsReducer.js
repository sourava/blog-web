import promiseState from 'shared/utils/reduxReducerHelper';

import {
    getCommentsActionType,
    addCommentActionType
} from './commentsActions';

const initialState = {
    comments: {
        ...promiseState(false, false, false, null),
    },
    addComment: {
        ...promiseState(false, false, false, null),
    },
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
    case getCommentsActionType.pending:
        return Object.assign({}, state, {
            comments: {
                ...promiseState(true, false, false, null),
            },
        });
    case getCommentsActionType.fulfilled:
        return Object.assign({}, state, {
            comments: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getCommentsActionType.rejected:
        return Object.assign({}, state, {
            comments: {
                ...promiseState(false, false, true, null),
            },
        });
    case addCommentActionType.pending:
        return Object.assign({}, state, {
            addComment: {
                ...promiseState(true, false, false, null),
            },
        });
    case addCommentActionType.fulfilled:
        return Object.assign({}, state, {
            addComment: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case addCommentActionType.rejected:
        return Object.assign({}, state, {
            addComment: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default commentsReducer;
