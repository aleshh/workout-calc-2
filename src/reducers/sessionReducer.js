import { C } from './index'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case C.CREATE_NEW_SESSION:
      return action.payload
    default:
      return state
  }
}
