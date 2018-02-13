import {
    GET_ALL_COMMENTS,
    DELETE_COMMENT,
    VOTE_COMMENT
} from '../actions';


export default function CommentReducer(state = [], action) {
    switch(action.type) {
        case GET_ALL_COMMENTS: {
            return action.comments;
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