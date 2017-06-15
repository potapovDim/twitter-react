const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const initialState = {
  loggedInUser: null,
  users: []
}

export const loginUser = (user) => ({type: LOGIN_USER, user})
export const logoutUser = () => ({type: LOGOUT_USER})

export default (state = initialState, action) => {
  switch (action.tyep) {
    case LOGIN_USER: {
      const userExist = state.users.filter(({name}) => name === action.user.username)
      if(userExist.length === 0) {
        state.users.push(action.user)
        state.loggedInUser = action.user
      } else {
        state.loggedInUser = action.user
      }
      return {...state}
    }
    case LOGOUT_USER:
      return {...state, loggedInUser: null} 
    default:
      return {...state}
  }
}