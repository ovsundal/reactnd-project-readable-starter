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
            return {...state, ...makeObj(action.posts)};
        }

        case VOTE_POST: {

            console.log(action.posts);
            console.log(state);
            console.log({...state, ...makeObj([action.posts])})

                return {...state, ...makeObj([action.posts])};
        }
        default: {
            return state;
        }
    }
}

function makeObj (posts) {
    const newObj = {};

    for (let i = 0; i < posts.length; i++) {
        const item = posts[i];
        const itemId = item.id;
        newObj[itemId] = item
    }
    console.log('newobj')
    console.log(newObj)
    return newObj
}