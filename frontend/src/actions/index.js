import * as PostApi from '../utils/PostApi';
import * as CommentApi from '../utils/CommentApi'
export const CREATE_POST = 'CREATE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const VOTE_POST = 'VOTE_POST';
export const SORT_BY_CATEGORY = 'SORT_BY_CATEGORY';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_SCORE = 'SORT_BY_SCORE';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST = 'GET_POST';
export const EDIT_POST = 'EDIT_POST';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';



export const sendPost = (posts, action) => (
    {
    type: action,
    posts
    }
);

export const sendComment = (comments, action) => ({
    type: action,
    comments
});


//må ha posts her ellers vil reducer state være null
export const sortBy = (action) => ({
    type: action
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
    mode === 'date'
        ? dispatch(sortBy(SORT_BY_DATE))
        : dispatch(sortBy(SORT_BY_SCORE))
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
        .then(posts => dispatch(sendPost(posts, EDIT_POST)));
};

//comments
export const getComments = (parentId) => dispatch =>
    CommentApi.getComments(parentId)
        .then(comments => dispatch(sendComment(comments, GET_ALL_COMMENTS)));

export const deleteComment = (id) => dispatch =>
    CommentApi.deleteComment(id)
        .then(comments => dispatch(sendComment(comments, DELETE_COMMENT)));

export const voteComment = (id, vote) => dispatch =>
    CommentApi.voteComment(id, vote)
        .then(comments => dispatch(sendComment(comments, VOTE_COMMENT)));

export const createComment = (data) => dispatch =>
    CommentApi.createComment(data)
        .then(comment => dispatch(sendComment([comment], CREATE_COMMENT)));
