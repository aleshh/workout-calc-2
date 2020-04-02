import React from 'react'
import { connect } from 'react-redux'
import NumberPicker from '../components/NumberPicker'
import ForwardBackControl from '../components/ForwardBackControl'
import { C, positions } from '../reducers'

const Session = ({ session, dispatch }) => {
  const exercise = session.exercises[session.currentExerciseIndex]
  const position = session.position || positions.SET_WORKOUT_WEIGHT

  const [weight, setWeight] = React.useState(
    exercise.weight || exercise.previousWeight
  )

  const storeWeight = () => {
    dispatch({
      type: C.SET_WEIGHT,
      payload: {
        id: exercise.id,
        weight,
      },
    })

    setPositiontoWorkout()
  }

  const setPosition = position => {
    dispatch({
      type: C.SET_POSITION,
      payload: position,
    })
  }

  const setPositionToWeight = () => setPosition(positions.SET_WORKOUT_WEIGHT)
  const setPositiontoWorkout = () => setPosition(positions.SHOW_SETS)
  const setPositionToNextWeight = () => setPosition(positions.SET_NEXT_WEIGHT)

  const renderInitialWeightSelection = () => (
    <>
      <NumberPicker
        initialValue={exercise.weight || exercise.previousWeight}
        onChange={setWeight}
      />
      <ForwardBackControl
        onBack={() => {
          dispatch({ type: C.ABORT_SESSION })
        }}
        onForward={storeWeight}
      />
    </>
  )

  const renderWorkoutTable = () => (
    <>
      <p>renderWorkoutTable: {exercise.weight}</p>
      <ForwardBackControl
        onBack={setPositionToWeight}
        onForward={setPositionToNextWeight}
      />
    </>
  )

  const renderNextWeightSelection = () => (
    <>
      <NumberPicker
        initialValue={exercise.previousWeight}
        onChange={setWeight}
      />
      <ForwardBackControl onBack={setPositiontoWorkout} onForward={() => {}} />
    </>
  )

  let content

  switch (position) {
    case positions.SET_WORKOUT_WEIGHT:
      content = renderInitialWeightSelection()
      break
    case positions.SHOW_SETS:
      content = renderWorkoutTable()
      break
    case positions.SET_NEXT_WEIGHT:
      content = renderNextWeightSelection()
      break
    default:
      throw new Error('Invalid position')
  }

  return (
    <div>
      <h1>{exercise.name}</h1>
      {content}
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Session)
