import { combineReducers } from 'redux'
import user from './User';
import post from './Post';
import editing from './Editing';
import { routerReducer as router } from 'react-router-redux'

const blogReducer = combineReducers({
  user,
  post,
  editing,
  router
})

export default blogReducer;
