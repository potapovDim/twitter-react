export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'ADD_COMMENT'

const initialState = [{
  id: 'comment_id1',
  authorId: 'dima_user1_id',
  twitId: 'twit_id1',
  content: 'COMMENT 1',
}, {
  id: 'comment_id2',
  authorId: 'dima_user1_id',
  twitId: 'twit_id1',
  content: 'COMMENT 2',
}]

export const addNewComment = (comment) => ({type: ADD_COMMENT, comment})
export const removeComment = (commentId) => ({type: REMOVE_COMMENT, commentId})

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      state[state.length] = action.comment
      return [...state]
    }
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state
  }
}