import { asyncActionTypeCreator, asyncActionCreator } from 'shared/utils/reduxActionHelper';
import apiPaths from 'shared/apiPaths';

const addImageActionType = asyncActionTypeCreator('ADD_IMAGE');
const addImageAction = asyncActionCreator(addImageActionType);

const addImage = (file, token, successCallback, errorCallback) => {
    var formData = new FormData();
    formData.append("files", file);

    const axiosConfig = {
        url: apiPaths.POSTS_ADD_IMAGE,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data: formData,
    };

    return addImageAction.action(axiosConfig, successCallback, errorCallback);
};

const addPostActionType = asyncActionTypeCreator('ADD_POST');
const addPostAction = asyncActionCreator(addPostActionType);

const addPost = (data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POSTS,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data,
    };

    return addPostAction.action(axiosConfig, successCallback, errorCallback);
};

export {
    addImageActionType,
    addImage,
    addPostActionType,
    addPost,
};
