const routePaths = {
    HOME: '/home',
    SEARCH: '/search',
    LOGIN: '/login',
    SIGNUP: '/signup',
    POSTS: '/posts',
    POST: (id) => `/post/${id}`,
    PROFILE: (id) => `/profile/${id}`,
    EDIT_POST: (id) => `/editPost/${id}`,
    ADD_POST: '/addPost',
};

export default routePaths;
