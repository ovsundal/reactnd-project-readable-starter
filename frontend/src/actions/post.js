import {
    CREATE_POST, DELETE_POST, GET_ALL_POSTS, GET_POST, SORT_BY_CATEGORY, SORT_BY_MODE, UPDATE_POST,
    VOTE_POST
} from "./types";
import * as PostApi from "../utils/PostApi";


export const sortBy = (howToSort, action) => ({
    type: action,
    howToSort
});

export const createPost = (data) => dispatch =>
    PostApi.createPost(data)
        .then(post => dispatch(sendPost([post], CREATE_POST)));

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
    dispatch(sortBy(mode, SORT_BY_MODE));

};

export const deletePost = (id) => dispatch => {
    PostApi.deletePost(id)
        .then(posts => dispatch(sendPost(posts, DELETE_POST)));
};

export const getPost = id => dispatch => {
    PostApi.getPost(id)
        .then(posts => dispatch(sendPost(posts, GET_POST)))
};

export const updatePost = (data) => dispatch => {
    PostApi.updatePost(data)
        .then(posts => dispatch(sendPost(posts, UPDATE_POST)));
};

export const sendPost = (posts, action) => (
    {
        type: action,
        posts
    }
);
