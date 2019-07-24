import promiseState from 'shared/utils/reduxReducerHelper';

import {
    getAuthorActionType
} from './authorActions';

const initialState = {
    author: {
        ...promiseState(false, false, false, null),
    },
};

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
    case getAuthorActionType.pending:
        return Object.assign({}, state, {
            author: {
                ...promiseState(true, false, false, null),
            },
        });
    case getAuthorActionType.fulfilled:
        return Object.assign({}, state, {
            author: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getAuthorActionType.rejected:
        return Object.assign({}, state, {
            author: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default authorReducer;
