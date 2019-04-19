// Step 4
//  We get fetched data into a component by generating new state in our redux
//  store, then getting that into our component through mapStateToProps.

import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";

export default combineReducers({
    users: usersReducer,
    posts: postsReducer
});