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
    case customLoginActionType.pending:
        return Object.assign({}, state, {
            login: {
                ...promiseState(true, false, false, null),
            },
        });
    case customLoginActionType.fulfilled:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case customLoginActionType.rejected:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, true, null),
            },
        });
    case facebookLoginActionType.pending:
        return Object.assign({}, state, {
            login: {
                ...promiseState(true, false, false, null),
            },
        });
    case facebookLoginActionType.fulfilled:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case facebookLoginActionType.rejected:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, true, null),
            },
        });
    case googleLoginActionType.pending:
        return Object.assign({}, state, {
            login: {
                ...promiseState(true, false, false, null),
            },
        });
    case googleLoginActionType.fulfilled:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case googleLoginActionType.rejected:
        return Object.assign({}, state, {
            login: {
                ...promiseState(false, false, true, null),
            },
        });
    case customSignUpActionType.pending:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(true, false, false, null),
            },
        });
    case customSignUpActionType.fulfilled:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, true, false, action.payload),
            },
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case customSignUpActionType.rejected:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, false, true, null),
            },
        });
    case facebookSignUpActionType.pending:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(true, false, false, null),
            },
        });
    case facebookSignUpActionType.fulfilled:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, true, false, action.payload),
            },
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case facebookSignUpActionType.rejected:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, false, true, null),
            },
        });
    case googleSignUpActionType.pending:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(true, false, false, null),
            },
        });
    case googleSignUpActionType.fulfilled:
        return Object.assign({}, state, {
            signup: {
                ...promiseState(false, true, false, action.payload),
            },
            login: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case googleSignUpActionType.rejected:
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
