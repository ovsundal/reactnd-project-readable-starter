import {
    ADD_POST,
    GET_ALL_POSTS,
    VOTE_POST} from '../actions';

//A reducer takes in the current state and an action, and returns the new state. At first it is always
//initialized with an initial state (null-values)

export default function (state = null, action) {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state
            }
        }
        case GET_ALL_POSTS: {
            console.log(action)
            console.log(state);
            // return all posts that are not marked with deleted
            // return action.posts.filter(post => !(post.deleted));
            //need to turn action.posts into an array containing all posts here
            return {...state, posts: action.posts};
        }

        case VOTE_POST: {
                // console.log(action)
            // console.log(state)
                return {...state};
        }
        default: {
            return state;
        }
    }
}