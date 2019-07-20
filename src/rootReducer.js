import { combineReducers } from 'redux';

import authReducer from 'features/auth/authReducer';
import postsReducer from 'features/posts/postsReducer';

export default combineReducers({
    authReducer,
    postsReducer,
});
