import {
    GET_ALL_COMMENTS,
    DELETE_COMMENT,
    VOTE_COMMENT, CREATE_COMMENT, UPDATE_COMMENT
} from '../actions/constants';


export default function CommentReducer(state = [], action) {
    switch(action.type) {
        case GET_ALL_COMMENTS: {
            return action.comments;
        }
        case DELETE_COMMENT: {
            //set array returned equal to state, with the deleted comment filtered out
            action.comments = state.filter((comment) => {
                return comment.id !== action.comments.id
            });
            return action.comments;
        }
        case VOTE_COMMENT: {
            let newState = state.slice();
            console.log(action)
            console.log(state)
            //find post that was voted from state, and change value to new score
            newState.forEach((comment, index) => {
                // if(comment.id === action.comment.id) {
                // //     newState[index].voteScore = action.posts.voteScore;
                // }
            });
            return newState;
        }
        case CREATE_COMMENT: {
            const newState = [...state, ...action.comments];
            newState.sort((a, b) => {
                return b.timestamp - a.timestamp
            });
            return newState;
        }
        case UPDATE_COMMENT: {
            const newState = state.slice();
            newState.forEach((comment, index) => {
                if(comment.id === action.comments[0].id) {
                    newState[index] = action.comments[0];
                }
            });
            newState.sort((a, b) => {
                return b.timestamp - a.timestamp
            });

            return newState;
        }
        default: {
            return state;
        }
    }


}