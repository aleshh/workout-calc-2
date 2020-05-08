import { C } from './constants'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case C.STORE_WORKOUT:
      return [
        {
          date: payload.date,
          exercises: payload.session.exercises.map((exercise) => ({
            id: exercise.id,
            name: exercise.name,
            weight: exercise.weight,
            nextWeight: exercise.nextWeight,
          })),
        },
        ...state,
      ]
    default:
      return state
  }
}
