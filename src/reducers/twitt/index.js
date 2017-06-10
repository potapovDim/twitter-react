import {REMOVE_COMMENT, ADD_COMMENT} from '../comment'
export const ADD_TWITT = 'ADD_TWITT'
export const REMOVE_TWITT = 'REMOVE_TWITT'


const initialState = [{
  id: 'twit_id1',
  authorId: 'dima_user1_id',
  content: 'TWITT 1',
}, {
  id: 'twit_id2',
  authorId: 'dima_user1_id',
  content: 'TWITt 2',
}]

export const addTwitt = (twitt) => ({type: ADD_TWITT, twitt})
export const removeTwitt = (twitt) => ({type: REMOVE_TWITT, twittId})

export default (state = initialState, action) => {
  const newState = {...state}
  switch (action.type) {
    case ADD_TWITT: {
        newState.push(action.twitt)
        return newState
      }
    case REMOVE_TWITT: {
        return newState.filter(twitt => twitt.id !== action.a)
      }
    case ADD_COMMENT: {
      state.forEach(twitt => {
        twitt.id === action.comment.twitId && twitt.comments.push(action.comment.id)
      })
      return state
    }
    case REMOVE_COMMENT : {
      state.forEach(twitt => {
        if(twitt.id ===  action.comment.twitId) twitt.comments = twitt.comments.filter(twit => twit !== action.commentId)
      })
      return state
    }
    default:
    return state
  }
}