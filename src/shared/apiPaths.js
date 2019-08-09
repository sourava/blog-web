const baseUrl = "https://localhost"; // eslint-disable-line

const apiPaths = {
    FACEBOOK_LOGIN: `${baseUrl}/facebook/login`,
    GOOGLE_LOGIN: `${baseUrl}/google/login`,
    FACEBOOK_SIGNUP: `${baseUrl}/facebook/signup`,
    GOOGLE_SIGNUP: `${baseUrl}/google/signup`,
    POSTS_ADD_IMAGE: `${baseUrl}/posts/addImage`,
    POSTS: `${baseUrl}/posts`,
    CATEGORIES: `${baseUrl}/categories`,
    GET_POST: (id) => `${baseUrl}/posts/${id}`,
    UPDATE_POST: (id) => `${baseUrl}/posts/${id}/update`,
    DELETE_POST: (id) => `${baseUrl}/posts/${id}/delete`,
    GET_AUTHOR: (id) => `${baseUrl}/author/${id}`,
    SEARCH_POST: `${baseUrl}/posts/search`,
    GET_POSTS_BY_STATUS: `${baseUrl}/posts/byStatus`,
    GET_AUTHOR_POSTS: (id) => `${baseUrl}/author/${id}/posts`,
    GET_USER_POSTS: `${baseUrl}/authorPosts`,
    POST_BULK_UPDATE_STATUS: `${baseUrl}/posts/bulkUpdate/status`,
    POST_BULK_UPDATE_FEATURED: `${baseUrl}/posts/bulkUpdate/featured`,
    COMMENTS: `${baseUrl}/comments`,
    ADD_CLAP: `${baseUrl}/posts/clap`,
};

export default apiPaths;
