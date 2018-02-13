import PostReducer from './post'
import FilterReducer from './filter'
import CommentReducer from './comment'
import {combineReducers} from "redux";

export default combineReducers({
    PostReducer,
    CommentReducer
})