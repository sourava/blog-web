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


const getPostActionType = asyncActionTypeCreator('GET_POST');
const getPostAction = asyncActionCreator(getPostActionType);

const getPost = (id, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_POST(id),
        method: 'get',
    };

    return getPostAction.action(axiosConfig, successCallback, errorCallback);
};

const getPostsActionType = asyncActionTypeCreator('GET_POSTS');
const getPostsAction = asyncActionCreator(getPostsActionType);

const getPosts = (params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POSTS,
        method: 'get',
        params
    };

    return getPostsAction.action(axiosConfig, successCallback, errorCallback);
};

const getPopularPostsActionType = asyncActionTypeCreator('GET_POPULAR_POSTS');
const getPopularPostsAction = asyncActionCreator(getPopularPostsActionType);

const getPopularPosts = (params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POSTS,
        method: 'get',
        params: {
            ...params,
            "type": "popular"
        }
    };

    return getPopularPostsAction.action(axiosConfig, successCallback, errorCallback);
};

const searchPostActionType = asyncActionTypeCreator('SEARCH_POST');
const searchPostAction = asyncActionCreator(searchPostActionType);

const searchPost = (query, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.SEARCH_POST,
        method: 'get',
        params: {
            "query": query
        }
    };

    return searchPostAction.action(axiosConfig, successCallback, errorCallback);
};


export {
    addImageActionType,
    addImage,
    addPostActionType,
    addPost,
    getPostActionType,
    getPost,
    getPostsActionType,
    getPosts,
    getPopularPostsActionType,
    getPopularPosts,
    searchPostActionType,
    searchPost,
};
