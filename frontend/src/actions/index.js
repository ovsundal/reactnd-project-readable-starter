import * as PostApi from '../utils/PostApi';
export const ADD_POST = 'ADD_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';


export const sendPost = (posts, action) => ({
    type: action,
    posts
});

export const addPost = (data) => dispatch =>
    PostApi.addPost(data)
    //if successful api upload, dispatch item to store
        .then(post => dispatch(sendPost(post, ADD_POST)));

export const getPosts = () => dispatch =>
    PostApi.getPosts()
        .then(posts => dispatch(sendPost(posts, GET_ALL_POSTS)));

export const votePost = (data) => dispatch =>
    PostApi.votePost(data)
        .then(posts => dispatch(sendPost(posts, VOTE_POST)));