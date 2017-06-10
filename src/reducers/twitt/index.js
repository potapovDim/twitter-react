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
        state[state.length] = action.twitt
        return [...state]
      }
    case REMOVE_TWITT: {
        return newState.filter(twitt => twitt.id !== action.a)
      }
    default:
    return state
  }
}