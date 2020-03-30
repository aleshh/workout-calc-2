import { C } from './index'

const initialState = {
  currentExerciseIndex: 0,
  exercises: [
    {
      id: 0,
      name: 'Squat',
      weight: undefined,
      previousWeight: 100,
      nextWeight: undefined,
    },
    {
      id: 1,
      name: 'Standing Press',
      weight: undefined,
      previousWeight: 100,
      nextWeight: undefined,
    },
    {
      id: 2,
      name: 'Deadlift',
      weight: undefined,
      previousWeight: 100,
      nextWeight: undefined,
    },
  ],
}

// const initialState = null

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.CREATE_NEW_SESSION:
      return payload
    case C.ABORT_SESSION:
      return null
    case C.SET_WEIGHT:
      return {
        currentExerciseIndex: state.currentExerciseIndex,
        exercises: state.exercises.map(exercise => {
          if (payload.id === exercise.id) {
            exercise.weight = payload.weight
            console.log('reducer setting weight', payload.weight)
          }
          return exercise
        }),
      }
    default:
      return state
  }
}
