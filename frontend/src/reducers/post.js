import {
    CREATE_POST, DELETE_POST, GET_ALL_POSTS, GET_POST, SORT_BY_CATEGORY, UPDATE_POST,
    VOTE_POST,
} from '../actions/types';

export default function PostReducer(state = [], action) {
    switch(action.type) {
        case CREATE_POST: {
            return state;
        }
        case GET_ALL_POSTS: {
            return action.posts;
        }
        case VOTE_POST: {
            let newState = state.slice();

            //find post that was voted from state, and change value to new score
            newState.forEach((post, index) => {
               if(post.id === action.posts.id) {
                   newState[index].voteScore = action.posts.voteScore;
               }
            });
            return newState;
        }
        case SORT_BY_CATEGORY: {
            return action.posts;
        }
        case DELETE_POST: {
                return Object.values(state).filter((post) => {
                    return post.id !== action.posts.id;
                });
        }
        case GET_POST: {
            return [action.posts];
        }
        case UPDATE_POST: {
            return [action.posts];
        }
        default: {
            return state;
        }
    }
}