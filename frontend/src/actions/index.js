import * as PostApi from '../utils/PostApi';

export const ADD_POST = 'ADD_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const SORT_BY_CATEGORY = 'SORT_BY_CATEGORY';

export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_SCORE = 'SORT_BY_SCORE';



export const sendPost = (posts, action) => ({
    type: action,
    posts
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

