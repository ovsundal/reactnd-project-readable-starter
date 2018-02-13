
import {
    CREATE_POST,
    GET_ALL_POSTS,
    SORT_BY_CATEGORY,
    SORT_BY_MODE,
    VOTE_POST,
    DELETE_POST,
    GET_POST,
    UPDATE_POST,
} from '../actions/constants';

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
        case SORT_BY_MODE: {
            const newState = state.slice();

            if(action.howToSort === 'score') {
                newState.sort((a, b) => {
                    return b.voteScore - a.voteScore
                })
            } else if (action.howToSort === 'date') {
                newState.sort((b, a) => {
                    return a.timestamp - b.timestamp
                })
            } else {}
            return newState;
        }
        case DELETE_POST: {
            const newState =
                Object.values(state).filter((post) => {
                    return post.id !== action.posts.id;
                });
            return newState;
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