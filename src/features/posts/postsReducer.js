import promiseState from 'shared/utils/reduxReducerHelper';

import {
    addImageActionType,
    addPostActionType
} from './postsActions';

const initialState = {
    addImage: {
        ...promiseState(false, false, false, null),
    },
    addPost: {
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
    default:
        return state;
    }
};

export default postsReducer;
