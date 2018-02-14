import * as CommentApi from "../utils/CommentApi";
import {CREATE_COMMENT, DELETE_COMMENT, GET_ALL_COMMENTS, UPDATE_COMMENT, VOTE_COMMENT} from "./types";


export const sendComment = (comments, action) => (console.log('send comment called') ,console.log(comments), console.log(action),{
    type: action,
    comments
});

export const getComments = (parentId) => dispatch =>
    CommentApi.getComments(parentId)
        .then(comments => dispatch(sendComment(comments, GET_ALL_COMMENTS)));

export const deleteComment = (id) => dispatch =>
    CommentApi.deleteComment(id)
        .then(comments => dispatch(sendComment(comments, DELETE_COMMENT)));

export const voteComment = (id, voteType, parentId) => dispatch => {
    console.log('from voteComment action')
    console.log(id)
    console.log(voteType)
    console.log(parentId)
    CommentApi.voteComment(id, voteType)
        // .then(CommentApi.getComments(parentId))
        .then(comment => dispatch(sendComment(comment, VOTE_COMMENT)));

    // CommentApi.voteComment(id, vote)
    //     .then(() => dispatch(sendComment(VOTE_COMMENT)));
        // .then(() => dispatch(sendComment(VOTE_COMMENT)));
};


export const createComment = (data) => dispatch =>
    CommentApi.createComment(data)
        .then(comment => dispatch(sendComment([comment], CREATE_COMMENT)));

export const updateComment = (data) => dispatch =>
    CommentApi.updateComment(data)
        .then(comment => dispatch(sendComment([comment], UPDATE_COMMENT)));
