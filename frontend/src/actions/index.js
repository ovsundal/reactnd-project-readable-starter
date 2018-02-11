import * as PostApi from '../utils/PostApi';

export const ADD_POST = 'ADD_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const SORT_BY_CATEGORY = 'SORT_BY_CATEGORY';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_SCORE = 'SORT_BY_SCORE';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';



export const sendPost = (posts, action) => ({
    type: action,
    posts
});

export const sendComment = (comments, action) => ({
    type: action,
    comments
});


//må ha posts her ellers vil reducer state være null
export const sortBy = (action) => ({
    type: action
});

export const addPost = (data) => dispatch =>
    PostApi.addPost(data)
        .then(post => dispatch(sendPost(post, ADD_POST)));

export const getPosts = () => dispatch =>
    PostApi.getPosts()
        .then(posts => dispatch(sendPost(posts, GET_ALL_POSTS)));

export const votePost = (id, voteType) => dispatch =>
    PostApi.votePost(id, voteType)
        .then(posts => dispatch(sendPost(posts, VOTE_POST)));

export const sortPostsByCategory = category => dispatch =>
    PostApi.sortPostsByCategory(category)
        .then(posts => dispatch(sendPost(posts, SORT_BY_CATEGORY)));

export const sortPostsByMode = (mode) => dispatch => {
    mode === 'date'
        ? dispatch(sortBy(SORT_BY_DATE))
        : dispatch(sortBy(SORT_BY_SCORE))
};

export const deletePost = (id) => dispatch => {
    PostApi.deletePost(id)
        .then(posts => dispatch(sendPost(posts, DELETE_POST)));
};

export const getPost = (id) => dispatch => {
    PostApi.getPost(id)
        .then(posts => dispatch(sendPost(posts, GET_POST)));
};

export const updatePost = (data) => dispatch => {
    PostApi.updatePost(data)
        .then(posts => dispatch(sendPost(posts, UPDATE_POST)));
};

//comments
export const getComments = (parentId) => dispatch =>
    PostApi.getComments(parentId)
        .then(comments => dispatch(sendComment(comments, GET_ALL_COMMENTS)));