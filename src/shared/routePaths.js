const routePaths = {
    HOME: '/home',
    SEARCH: '/search',
    LOGIN: '/login',
    SIGNUP: '/signup',
    POSTS: '/posts',
    POSTS_BY_CATEGORY: (category) => `/posts?category=${category}`,
    POST: (id) => `/post?id=${id}`,
    PROFILE: (id) => `/profile?id=${id}`,
    EDIT_POST: (id) => `/editPost/${id}`,
    ADD_POST: '/addPost',
    APPROVAL: '/approval',
};

export default routePaths;
