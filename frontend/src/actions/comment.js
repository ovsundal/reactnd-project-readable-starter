import * as CommentApi from "../utils/CommentApi";
import {CREATE_COMMENT, DELETE_COMMENT, GET_ALL_COMMENTS, UPDATE_COMMENT, VOTE_COMMENT} from "./constants";


export const sendComment = (comments, action) => ({
    type: action,
    comments
});

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

export const updateComment = (data) => dispatch =>
    CommentApi.updateComment(data)
        .then(comment => dispatch(sendComment([comment], UPDATE_COMMENT)));
