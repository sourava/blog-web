import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';


const getCommentsActionType = asyncActionTypeCreator('GET_COMMENTS');
const getCommentsAction = asyncActionCreator(getCommentsActionType);

const getComments = (postID, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.COMMENTS,
        method: 'get',
        params: {
            postID
        }
    };

    return getCommentsAction.action(axiosConfig, successCallback, errorCallback);
};

const addCommentActionType = asyncActionTypeCreator('ADD_COMMENT');
const addCommentAction = asyncActionCreator(addCommentActionType);

const addComment = (data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.COMMENTS,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data,
    };

    return addCommentAction.action(axiosConfig, successCallback, errorCallback);
};


export {
    getCommentsActionType,
    getComments,
    addCommentActionType,
    addComment
};
