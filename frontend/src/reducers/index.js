import {
    ADD_POST,
    GET_ALL_POSTS, SORT_BY_CATEGORY,
    VOTE_POST
} from '../actions';

export default function (state = null, action) {
    switch(action.type) {
        case ADD_POST: {
            return {...state};
        }
        case GET_ALL_POSTS: {
            console.log('from GETALL')
            console.log({...state, ...makeObj(action.posts)})
            return {...state, ...makeObj(action.posts)};
        }

        case VOTE_POST: {
            return {...state, ...makeObj([action.posts])};
        }
        case SORT_BY_CATEGORY: {
            //hvordan skrive reducer for sort by category?
            state = null;
            // console.log(action)
            console.log('state')
            console.log({...state});

            console.log('makeObj')
            console.log(makeObj([action.posts]))

            console.log('both')
            console.log({...state, ...makeObj(action.posts)})

            // console.log({...state, ...makeObj([action.posts])})

            return {...state, ...makeObj(action.posts)};
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