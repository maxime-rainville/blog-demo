import { combineReducers } from 'redux'
import user from './User';
import post from './Post';
import editing from './Editing';
import { reducer as form } from 'redux-form'

const blogReducer = combineReducers({
  user,
  post,
  editing,
  form
})

export default blogReducer;
