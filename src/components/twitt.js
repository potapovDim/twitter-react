import React from 'react'
import {Comment, AddComment} from './comment'

export const Twitt = ({content, twitComments, authorId, removeComment, addComment, removeTwitt, users}) => {
  let twittAuthor = null
  users.forEach(user => {
        if(user.id === authorId) twittAuthor = user.name
  })
  const commentsComponent = twitComments.map((comment, index) => {
    let commentAuthor = null
    users.forEach(user => {
        if(user.id === comment.authorId) commentAuthor = user.name
    })
    return <Comment key={index} {...comment} author={commentAuthor}/>
  })
  return (<div>
    <div>author : {twittAuthor}</div>
    <div>content : {content}</div>
    {removeTwitt && <button onClick={removeTwitt}>Remove twitt</button>}
    <div>Comments to twitt</div>
    {commentsComponent}
    <AddComment addComment={addComment}/>
  </div>)
}


export const AddTwitt = ({addTwitt}) => {
  let input = null
  const submitComment = () => {
    addTwitt(input.value)
  }
  return (<div>
    <input type="text" ref={ref => input = ref}/>
    <button onClick={submitComment}>Add Twitt</button>
  </div>)
}