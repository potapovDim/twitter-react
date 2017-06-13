import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'node-uuid'

import {registerUser, loginUser, logoutUser} from '../reducers/user'
import {addTwitt, removeTwitt} from '../reducers/twitt'
import {addNewComment, removeComment} from '../reducers/comment'

import {LogIn} from './login'
import {Twitt, AddTwitt} from './twitt'

class Twitter extends Component {
  logOut = () => {
    const {dispatch} = this.props
    dispatch(logoutUser())
  }
  signInUser = (name) => {
    const {user: {users}, dispatch} = this.props
    const existUser = users.filter(user => user.name == name)
    if(existUser.length == 0) {
      const user = {name, id: uuid()}
      dispatch(registerUser(user))
      dispatch(loginUser(user))
    } else {
       dispatch(loginUser(existUser[0]))
    }
  }
  submitNewTwit = (content) => {
    const {user: {loggedInUser}, dispatch} = this.props
    const twit = {
      content,
      id: uuid(),
      authorId: loggedInUser.id
    }
    dispatch(addTwitt(twit))
  }
  submitNewComment = (twitId, content) => {
    const {user: {loggedInUser}, dispatch} = this.props
    const comment = {
      id: uuid(),
      authorId: loggedInUser.id,
      twitId,
      content
    }
    dispatch(addNewComment(comment))
  }
  render () { 
    const {comments, twitts, user} = this.props
    const currentTwits = twitts.map((twit, index) => {
      const twitComments = comments.filter(comment => comment.twitId === twit.id)
      return <Twitt key={index}
                    {...twit}
                    twitComments={twitComments}
                    submitNewComment={this.submitNewComment}
                    users={user.users}/>
    }) 
    return <div>
      const twitter
      {user.loggedInUser ? <div>
                    <button onClick={this.logOut}>Log out</button>
                    <AddTwitt addTwitt={this.submitNewTwit}/>
                    {currentTwits}
                  </div> : <LogIn loginUser={this.signInUser}/>}
    </div>
  }
}
export default connect(state => state)(Twitter)