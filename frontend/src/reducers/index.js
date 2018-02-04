import {ADD_POST, GET_ALL_POSTS} from '../actions';

//A reducer takes in the current state and an action, and returns the new state. At first it is always
//initialized with an initial state (null-values)

const initialPostState = {
    id: null,
    timestamp: null,
    title: null,
    body: null,
    author: null,
    category: null,
    voteScore: null,
    deleted: null
};

export default function (state = initialPostState, action) {
    switch(action) {
        case ADD_POST: {
            return {
                ...state
            }
        }
        case GET_ALL_POSTS: {
            //return all posts that are not marked with deleted
            return action.posts.filter(post => !(post.deleted))
        }
        default: {
            return state;
        }
    }
}

//
// const newPost(state = initialPostState, action) {
//     const {id, timestamp, title, body, author, category} = action;
//
//     //how will state change from action
//     switch (action.type) {
//         case ADD_POST:
//             return {
//                 //return same state we had before using object spread syntax (is that necessary here?)
//                 ...state,
//                 [id]: action.id,
//                 [timestamp]: action.timestamp,
//                 [title]: action.title,
//                 [body]: action.body,
//                 [author]: action.author,
//                 [category]: action.category
//             };
//         default:
//             return state;
//     }
// }
//
// export default newPost;