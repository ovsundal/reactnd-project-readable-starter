import {
    ADD_POST,
    GET_ALL_POSTS,
    SORT_BY_CATEGORY,
    SORT_BY_DATE,
    SORT_BY_SCORE,
    VOTE_POST
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
            //set state to null and merge with posts returned from query
            console.log('sort by date pre sort')
            console.log(state)

            const state = Object.valueOf(state).sort((a,b) => {
                return a.timestamp - b.timestamp;
            });

            console.log('sort by date post sort')
            console.log(state)

            return {...state, ...makeObj(action.posts)};
        }
        case SORT_BY_SCORE: {

            const sortedArr = Object.values(state)
                .sort((a, b) => {
                    return b.score - a.score;
                });

            return {...makeObj(sortedArr.reverse())};
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