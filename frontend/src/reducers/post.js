
import {
    CREATE_POST,
    GET_ALL_POSTS,
    SORT_BY_CATEGORY,
    SORT_BY_DATE,
    SORT_BY_SCORE,
    VOTE_POST,
    DELETE_POST,
    GET_POST,
    UPDATE_POST,
} from '../actions';

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
            //set state to null and merge with posts returned from query
            state = null;
            return {...state, ...makeObj(action.posts)};
        }
        case SORT_BY_DATE: {

            const sortedArrByDate = Object.values(state).sort((a,b) => {
                return b.timestamp - a.timestamp;
            });
            return {...makeObj(sortedArrByDate)};
        }
        case SORT_BY_SCORE: {

            const sortedArrByScore = Object.values(state)
                .sort((a, b) => {
                    return b.voteScore - a.voteScore;
                });
            return {...makeObj(sortedArrByScore)};
        }
        case DELETE_POST: {
            const newState =
                Object.values(state).filter((post) => {
                    return post.id !== action.posts.id;
                });
            console.log(newState);
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
//helper function for formatting action.posts item equal to state.
function makeObj (posts) {
    const newObj = {};

    for (let i = 0; i < posts.length; i++) {
        const item = posts[i];
        const itemId = item.id;
        newObj[itemId] = item
    }
    return newObj
}