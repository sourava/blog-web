import { combineReducers } from 'redux';

import authReducer from 'features/auth/authReducer';
import postsReducer from 'features/posts/postsReducer';
import categoryReducer from 'features/category/categoryReducer';
import authorReducer from 'features/author/authorReducer';
import commentsReducer from 'features/comments/commentsReducer';

export default combineReducers({
    authReducer,
    postsReducer,
    categoryReducer,
    authorReducer,
    commentsReducer,
});
