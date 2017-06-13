import {combineReducers, createStore} from 'redux'

import comments from './comment'
import user from './user'
import twitts from './twitt'

export default createStore(combineReducers({
  comments, user, twitts
}))