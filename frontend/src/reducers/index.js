import {
    ADD_POST,
    GET_ALL_POSTS,
    SORT_BY_CATEGORY,
    SORT_BY_DATE,
    SORT_BY_SCORE,
    VOTE_POST,
    DELETE_POST,
    GET_POST,
    UPDATE_POST,
    GET_ALL_COMMENTS
} from '../actions';

export default function (state = null, action) {
    switch(action.type) {
        case ADD_POST: {
            return {...state};
        }
        case GET_ALL_POSTS: {
            return {...state, ...makeObj(action.posts)};
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

            const deletedObjectRemovedFromState =
                Object.values(state).filter((post) => {
                    return post.id !== action.posts.id;
                });
            return {...makeObj(deletedObjectRemovedFromState)};
        }
        case GET_POST: {
            return action;
        }
        case UPDATE_POST: {
            return {...makeObj([action.posts])};
        }
        case GET_ALL_COMMENTS: {
            // console.log(action)
            // console.log('from getallcomments reducer')
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