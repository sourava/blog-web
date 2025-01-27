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

const updatePostActionType = asyncActionTypeCreator('UPDATE_POST');
const updatePostAction = asyncActionCreator(updatePostActionType);

const updatePost = (id, data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.UPDATE_POST(id),
        method: 'patch',
        headers: { 'Authorization': `Bearer ${token}` },
        data,
    };

    return updatePostAction.action(axiosConfig, successCallback, errorCallback);
};

const deletePostActionType = asyncActionTypeCreator('DELETE_POST');
const deletePostAction = asyncActionCreator(deletePostActionType);

const deletePost = (id, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.DELETE_POST(id),
        method: 'delete',
        headers: { 'Authorization': `Bearer ${token}` },
    };

    return deletePostAction.action(axiosConfig, successCallback, errorCallback);
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

const getTrendingPostsActionType = asyncActionTypeCreator('GET_TRENDING_POSTS');
const getTrendingPostsAction = asyncActionCreator(getTrendingPostsActionType);

const getTrendingPosts = (params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POSTS,
        method: 'get',
        params: {
            ...params,
            "type": "trending"
        }
    };

    return getTrendingPostsAction.action(axiosConfig, successCallback, errorCallback);
};

const getFeaturedPostsActionType = asyncActionTypeCreator('GET_FEATURED_POSTS');
const getFeaturedPostsAction = asyncActionCreator(getFeaturedPostsActionType);

const getFeaturedPosts = (params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POSTS,
        method: 'get',
        params: {
            ...params,
            "type": "featured"
        }
    };

    return getFeaturedPostsAction.action(axiosConfig, successCallback, errorCallback);
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

const addClapActionType = asyncActionTypeCreator('ADD_CLAP');
const addClapAction = asyncActionCreator(addClapActionType);

const addClap = (params, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.ADD_CLAP,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        params
    };

    return addClapAction.action(axiosConfig, successCallback, errorCallback);
};

const getPostsByStatusActionType = asyncActionTypeCreator('GET_POSTS_BY_STATUS');
const getPostsByStatusAction = asyncActionCreator(getPostsByStatusActionType);

const getPostsByStatus = (params, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_POSTS_BY_STATUS,
        method: 'get',
        headers: { 'Authorization': `Bearer ${token}` },
        params
    };

    return getPostsByStatusAction.action(axiosConfig, successCallback, errorCallback);
};

const getAuthorPostsActionType = asyncActionTypeCreator('GET_AUTHOR_POSTS');
const getAuthorPostsAction = asyncActionCreator(getAuthorPostsActionType);

const getAuthorPosts = (authorID, params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_AUTHOR_POSTS(authorID),
        method: 'get',
        params
    };

    return getAuthorPostsAction.action(axiosConfig, successCallback, errorCallback);
};

const getAuthorTrendingPostsActionType = asyncActionTypeCreator('GET_AUTHOR_TRENDING_POSTS');
const getAuthorTrendingPostsAction = asyncActionCreator(getAuthorTrendingPostsActionType);

const getAuthorTrendingPosts = (authorID, params, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_AUTHOR_POSTS(authorID),
        method: 'get',
        params
    };

    return getAuthorTrendingPostsAction.action(axiosConfig, successCallback, errorCallback);
};

const getUserPostsActionType = asyncActionTypeCreator('GET_USER_POSTS');
const getUserPostsAction = asyncActionCreator(getUserPostsActionType);

const getUserPosts = (params, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.GET_USER_POSTS,
        method: 'get',
        headers: { 'Authorization': `Bearer ${token}` },
        params
    };

    return getUserPostsAction.action(axiosConfig, successCallback, errorCallback);
}; 

const bulkUpdatePostStatusActionType = asyncActionTypeCreator('BULK_UPDATE_POST_STATUS');
const bulkUpdatePostStatusAction = asyncActionCreator(bulkUpdatePostStatusActionType);

const bulkUpdatePostStatus = (data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POST_BULK_UPDATE_STATUS,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data
    };

    return bulkUpdatePostStatusAction.action(axiosConfig, successCallback, errorCallback);
};

const bulkUpdatePostFeaturedActionType = asyncActionTypeCreator('BULK_UPDATE_POST_FEATURED');
const bulkUpdatePostFeaturedAction = asyncActionCreator(bulkUpdatePostFeaturedActionType);

const bulkUpdatePostFeatured = (data, token, successCallback, errorCallback) => {
    const axiosConfig = {
        url: apiPaths.POST_BULK_UPDATE_FEATURED,
        method: 'post',
        headers: { 'Authorization': `Bearer ${token}` },
        data
    };

    return bulkUpdatePostFeaturedAction.action(axiosConfig, successCallback, errorCallback);
};


export {
    addImageActionType,
    addImage,
    addPostActionType,
    addPost,
    updatePostActionType,
    updatePost,
    deletePostActionType,
    deletePost,
    getPostActionType,
    getPost,
    getPostsActionType,
    getPosts,
    getPopularPostsActionType,
    getPopularPosts,
    getTrendingPostsActionType,
    getTrendingPosts,
    getFeaturedPostsActionType,
    getFeaturedPosts,
    searchPostActionType,
    searchPost,
    addClapActionType,
    addClap,
    getPostsByStatusActionType,
    getPostsByStatus,
    getAuthorPostsActionType,
    getAuthorPosts,
    getAuthorTrendingPostsActionType,
    getAuthorTrendingPosts,
    getUserPostsActionType,
    getUserPosts,
    bulkUpdatePostStatus,
    bulkUpdatePostFeatured
};
