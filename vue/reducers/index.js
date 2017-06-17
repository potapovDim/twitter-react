import {createStore, combineReducers} from 'redux'

import users from './users'
import twitts from './twitts'
import comments from './comments'

export const store = createStore(combineReducers({
  users, twitts, comments
}))
