const ADD_COMMENT = 'ADD_COMMENT'

const initialState = [{
  id: '',
  twittId: '',
  authorId: '',
  content: ''
}]

export const addComment = (comment) => ({ type: ADD_COMMENT, comment })

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      state.push(action.comment)
      return { ...state }
    }
    default:
      return state
  } 
}