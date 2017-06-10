import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'node-uuid'

import {registerUser, loginUser} from '../reducers/user'




import {LogIn} from './login'
import {Twitt} from './twitt'

class Twitter extends Component {
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
  render () { 
    console.log(this.props)
    const {comments, twitts, user} = this.props
    const currentTwits = twitts.map((twit, index) => {
      const twitComments = comments.filter(comment => comment.twitId === twit.id)
      console.log( twitComments)
      return <Twitt key={index} twitComments={twitComments} {...twit} users={user.users}/>
    }) 
    return <div>
      const twitter
      {user.loggedInUser ? currentTwits : <LogIn />}
    </div>
  }
}
export default connect(state => state)(Twitter)