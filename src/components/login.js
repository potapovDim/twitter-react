import React from 'react'

export const LogIn = ({loginUser}) => {
  let input = null
  const submitLogin = () => {
    loginUser(input.value)
  }
  return (<div>
    <input type="text" ref={ref => input = ref}/>
    <button onClick={submitLogin}>Sign In</button>
  </div>)
}