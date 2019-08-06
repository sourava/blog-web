const routePaths = {
    HOME: '/home',
    SEARCH: '/search',
    LOGIN: '/login',
    SIGNUP: '/signup',
    POSTS: '/posts',
    POSTS_BY_CATEGORY: (category) => `/posts/${category}`,
    POSTS_BY_SUBCATEGORY: (category, subCategory) => `/posts/${category}/${subCategory}`,
    POST: (id) => `/post/${id}`,
    PROFILE: (id) => `/profile/${id}`,
    EDIT_POST: (id) => `/editPost/${id}`,
    ADD_POST: '/addPost',
};

export default routePaths;
