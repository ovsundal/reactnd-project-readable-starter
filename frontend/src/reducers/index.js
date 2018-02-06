import {
    ADD_POST,
    GET_ALL_POSTS,
    VOTE_POST} from '../actions';

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