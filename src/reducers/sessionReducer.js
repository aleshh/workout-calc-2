import { C } from './index'

const initialState = null

// session: {
//   program: [
//     {
//       exercise: 0,
//       weight: 100,
//       nextWeight: undefined
//     },
//     {
//       exercise: 1,
//       weight: 100,
//       nextWeight: undefined
//     },
//     {
//       exercise: 2,
//       weight: 100,
//       nextWeight: undefined
//     }
//   ],
//   currentExerciseIndex: 0
// },

export default (state = initialState, action) => {
  switch (action.type) {
    case C.CREATE_NEW_SESSION:
      return action.payload
    default:
      return state
  }
}
