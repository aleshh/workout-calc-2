import { C } from './index'

const initialState = {
  currentExerciseIndex: 0,
  exercises: [
    {
      id: 0,
      name: 'Squat',
      weight: 100,
      nextWeight: undefined,
    },
    {
      id: 1,
      name: 'Standing Press',
      weight: 100,
      nextWeight: undefined,
    },
    {
      id: 2,
      name: 'Deadlift',
      weight: 100,
      nextWeight: undefined,
    },
  ],
}

// const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case C.CREATE_NEW_SESSION:
      return action.payload
    default:
      return state
  }
}
