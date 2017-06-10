import React from 'react'


export const Comment = ({author, content, removeComment}) => {
  console.log(author, content)
  return (<div>
    <div>author : {author}</div>
    <div>content : {content}</div>
    {removeComment && <button onClick={removeComment}>Remove omment</button>}
  </div>)
}

export const AddComment = ({addComment}) => {
  let input = null
  const submitComment = () => {
    addComment(input.value)
  }
  return (<div>
    <input type="text" ref={ref => input = ref}/>
    <button onClick={submitComment}>Add Comment</button>
  </div>)
}