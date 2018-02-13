import PostReducer from './post'
import CommentReducer from './comment'
import {combineReducers} from "redux";

export default combineReducers({
    PostReducer,
    CommentReducer
})