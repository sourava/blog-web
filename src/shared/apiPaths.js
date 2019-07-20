const baseUrl = "https://localhost"; // eslint-disable-line

const apiPaths = {
    FACEBOOK_LOGIN: `${baseUrl}/facebook/login`,
    GOOGLE_LOGIN: `${baseUrl}/google/login`,
    FACEBOOK_SIGNUP: `${baseUrl}/facebook/signup`,
    GOOGLE_SIGNUP: `${baseUrl}/google/signup`,
    POSTS_ADD_IMAGE: `${baseUrl}/posts/addImage`,
    POSTS: `${baseUrl}/posts`,
};

export default apiPaths;
