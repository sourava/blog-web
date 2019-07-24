import promiseState from 'shared/utils/reduxReducerHelper';

import {
    getCategoriesActionType
} from './categoryActions';

const initialState = {
    categories: {
        ...promiseState(false, false, false, null),
    },
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
    case getCategoriesActionType.pending:
        return Object.assign({}, state, {
            categories: {
                ...promiseState(true, false, false, null),
            },
        });
    case getCategoriesActionType.fulfilled:
        return Object.assign({}, state, {
            categories: {
                ...promiseState(false, true, false, action.payload),
            },
        });
    case getCategoriesActionType.rejected:
        return Object.assign({}, state, {
            categories: {
                ...promiseState(false, false, true, null),
            },
        });
    default:
        return state;
    }
};

export default categoriesReducer;
