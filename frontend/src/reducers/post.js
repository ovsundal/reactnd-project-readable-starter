
import {
    ADD_POST,
    GET_ALL_POSTS,
    SORT_BY_CATEGORY,
    SORT_BY_DATE,
    SORT_BY_SCORE,
    VOTE_POST,
    DELETE_POST,
    GET_POST,
    EDIT_POST,
    GET_ALL_COMMENTS,
    DELETE_COMMENT,
    VOTE_COMMENT
} from '../actions';

export default function PostReducer(state = [], action) {
    switch(action.type) {
        case ADD_POST: {
            return state;
        }
        case GET_ALL_POSTS: {
            return action.posts;
        }

        case VOTE_POST: {
            return {...state, ...makeObj([action.posts])};
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
            console.log(state)
            console.log(action)
            const newState =
                Object.values(state).filter((post) => {
                    return post.id !== action.posts.id;
                });
            console.log(newState);
            return newState;
        }
        case GET_POST: {
            // console.log([action.posts])
            return [action.posts];
        }
        case EDIT_POST: {
            // console.log(action)
            // console.log(state)
            return [action.posts];
        }
        case GET_ALL_COMMENTS: {
            return action;
        }
        case DELETE_COMMENT: {

            //set array returned equal to state, with the deleted comment filtered out
            action.comments = state.comments.filter((comment) => {
                return comment.id !== action.comments.id
            });
            return action;
        }
        case VOTE_COMMENT: {

            const newArr = state.comments.slice();
            //find the updated comment from state, and update votescore
            newArr.forEach((comment, index) => {
                if(comment.id === action.comments.id) {
                    newArr[index].voteScore = action.comments.voteScore;
                }
            });

            action.comments = newArr;
            return action;
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