import { combineReducers } from 'redux'
import user from './User';
import post from './Post';
import editing from './Editing';

const blogReducer = combineReducers({
  user,
  post,
  editing
})

export default blogReducer;
