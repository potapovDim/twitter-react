import {REMOVE_COMMENT, ADD_COMMENT} from '../comment'
import {REMOVE_TWITT, ADD_TWITT} from '../twitt'

const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'


const initialState = {
  loggedInUser: null,
  users: [{
    name: 'Dima',
    id: 'dima_user1_id'
  }]
}

export const registerUser = (user) => ({type: REGISTER_USER, user})
export const loginUser = (user) => ({type: LOGIN_USER, user})
export const logoutUser = () => ({type: LOG_OUT_USER})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {...state, loggedInUser: action.user}
    }
    case LOG_OUT_USER:
      return {...state, loggedInUser: null}
    case REGISTER_USER: {
      state.users.push(action.user)
      return state
    }
    // case ADD_TWITT: {
    //   state.users.forEach(user => {
    //     user.id === action.twitt.authorId && user.twits.push(action.twitt.id)
    //   })
    //   return state
    // }
    // case REMOVE_TWITT : {
    //   state.users.forEach(user => {
    //     if(user.id === action.twitt.authorId) user.twits = user.twits.filter(twit => twit !== action.twittId)
    //   })
    //   return state
    // }
    // case ADD_COMMENT: {
    //   state.users.forEach(user => {
    //     user.id === action.comment.authorId && user.comments.push(action.comment.id)
    //   })
    //   return state
    // }
    // case REMOVE_COMMENT : {
    //   state.users.forEach(user => {
    //     if(user.id === action.comment.authorId) user.comments = user.comments.filter(twit => twit !== action.commentId)
    //   })
    //   return state
    // }
    default:
      return state
  }
}