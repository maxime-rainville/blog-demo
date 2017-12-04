import { combineReducers } from 'redux'
import user from './User';
import post from './Post';

const blogReducer = combineReducers({
  user,
  post
})

export default blogReducer;
