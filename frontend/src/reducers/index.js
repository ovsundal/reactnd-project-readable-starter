import {
    ADD_POST,
    GET_ALL_POSTS,
    VOTE_POST} from '../actions';

//A reducer takes in the current state and an action, and returns the new state. At first it is always
//initialized with an initial state (null-values)

const initialPostState = {
    id: null,
    timestamp: null,
    title: null,
    body: null,
    author: null,
    category: null,
    voteScore: null,
    deleted: null
};

export default function (state = initialPostState, action) {
    switch(action.type) {
        case ADD_POST: {
            return {
                //return the entire state using object spread syntax
                ...state
            }
        }
        case GET_ALL_POSTS: {
            //return all posts that are not marked with deleted
            return action.posts.filter(post => !(post.deleted));
        }

        case VOTE_POST: {
            if(action.voteType === 'upVote') {
                return action.posts.filter(post => post.id === action.id ? post.voteScore + 1 : post.voteScore)
            } else {
                return action.posts.filter(post => post.id === action.id ? post.voteScore - 1 : post.voteScore)
            }
        }
        default: {
            return state;
        }
    }
}