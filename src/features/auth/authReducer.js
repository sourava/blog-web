import promiseState from 'shared/utils/reduxReducerHelper';

import {
    facebookLoginActionType,
    googleLoginActionType,
    customLoginActionType,
    facebookSignUpActionType,
    googleSignUpActionType,
    customSignUpActionType,
    logOutActionType,
} from './authActions';

const initialState = {
    login: {
        ...promiseState(false, false, false, null),
    },
    signup: {
        ...promiseState(false, false, false, null),
    },
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case logOutActionType:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, false, null),
            },
            socialToken: null,
        });
    case customLoginActionType.pending || facebookLoginActionType.pending || googleLoginActionType.pending:
        return Object.assign({}, state, {
            login: {
                ...promiseState(true, false, false, null),
            },
        });
    case customLoginActionType.fulfilled || facebookLoginActionType.fulfilled || googleLoginActionType.fulfilled:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case customLoginActionType.rejected || facebookLoginActionType.rejected || googleLoginActionType.rejected:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, true, null),
            },
        });
    case customSignUpActionType.pending || facebookSignUpActionType.pending || googleSignUpActionType.pending:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(true, false, false, null),
            },
        });
    case customSignUpActionType.fulfilled || facebookSignUpActionType.fulfilled || googleSignUpActionType.fulfilled:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, true, false, action.payload),
            },
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case customSignUpActionType.rejected || facebookSignUpActionType.rejected || customSignUpActionType.rejected:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default loginReducer;
