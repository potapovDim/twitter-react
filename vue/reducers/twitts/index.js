const ADD_TWITT = 'ADD_TWITT'

const initiaState = [{
  id: '',
  authorId: '',
  title: '',
  constent: ''
}]

export const addTwitt = (twitt) => ({type: ADD_TWITT, twitt})

export default (state=initiaState, action) => {
  switch (action.typer) {
    case ADD_TWITT: {
      state.push(action.twitt)
      return {...state}
    }
    default:
      return {...state}
  }
}