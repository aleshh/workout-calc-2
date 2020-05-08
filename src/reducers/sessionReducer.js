import { C, positions } from './constants'

const dev = true

let initialState

if (dev) {
  initialState = {
    currentExerciseIndex: 2,
    position: positions.SHOW_SETS,
    complete: true,
    exercises: [
      {
        id: 234,
        name: 'Squat',
        weight: 100,
        previousWeight: 100,
        nextWeight: 200,
      },
      {
        id: 54324,
        name: 'Standing Press',
        weight: 100,
        previousWeight: 100,
        nextWeight: 200,
      },
      {
        id: 23423,
        name: 'Deadlift',
        weight: 100,
        previousWeight: 100,
        nextWeight: 200,
      },
    ],
  }
} else {
  initialState = null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.CREATE_NEW_SESSION:
      return payload
    case C.ABORT_SESSION:
      return null
    case C.SET_WEIGHT:
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (payload.id === exercise.id) {
            exercise.weight = payload.weight
          }
          return exercise
        }),
      }
    case C.SET_NEXT_WEIGHT:
      return {
        ...state,
        exercises: state.exercises.map((exercise) => {
          if (payload.id === exercise.id) {
            exercise.nextWeight = payload.nextWeight
          }
          return exercise
        }),
      }
    case C.SET_POSITION:
      return {
        ...state,
        position: payload,
      }
    case C.NEXT_EXERCISE:
      return {
        ...state,
        position: positions.SET_WORKOUT_WEIGHT,
        currentExerciseIndex: payload,
      }
    case C.PREVIOUS_EXERCISE:
      return {
        ...state,
        position: positions.SET_NEXT_WEIGHT,
        currentExerciseIndex: payload,
      }
    case C.WORKOUT_COMPLETE:
      return {
        ...state,
        complete: true,
      }
    case C.UNDO_WORKOUT_COMPLETE:
      return {
        ...state,
        complete: false,
      }
    case C.STORE_WORKOUT:
      return null
    default:
      return state
  }
}
