import promiseState from 'shared/utils/reduxReducerHelper';

import {
    updateUserActionType
} from './userActions';

const initialState = {
    updateUser: {
        ...promiseState(false, false, false, null),
    },
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case updateUserActionType.pending:
        return Object.assign({}, state, {
            updateUser: {
                ...promiseState(true, false, false, null),
            },
        });
    case updateUserActionType.fulfilled:
        return Object.assign({}, state, {
            updateUser: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case updateUserActionType.rejected:
        return Object.assign({}, state, {
            updateUser: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default userReducer;
