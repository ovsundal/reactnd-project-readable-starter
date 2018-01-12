import {ADD_POST} from '../actions';

const initialPostState = {
    author: null,
    title: null,
    content: null,
    picture: null,
    category: null,
    dateCreated: null
};

function newPost(state = initialPostState, action) {
    const {author, title, content, picture, category, dateCreated} = action;

    //how will state change from action
    switch (action.type) {
        case ADD_POST:
            return {
                //return same state we had before using object spread syntax
                ...state,
                [author]: {
                    ...state[author],
                    [title]: {
                        ...state[title]
                    }
                }
            };
        default:
            return state;
    }
}

export default newPost;