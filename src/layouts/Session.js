import React, { useState } from 'react'
import { connect } from 'react-redux'
import NumberPicker from '../components/NumberPicker'
import ForwardBackControl from '../components/ForwardBackControl'
import { C, positions } from '../reducers/constants'

const Session = ({ session, dispatch }) => {
  const { id, name, weight, nextWeight, previousWeight } = session.exercises[
    session.currentExerciseIndex
  ]
  const position = session.position || positions.SET_WORKOUT_WEIGHT

  const isLastExercise =
    session.currentExerciseIndex === session.exercises.length - 1

  const [currentWeight, setCurrentWeight] = useState(weight || previousWeight)
  const [currentNextWeight, setCurrentNextWeight] = useState(
    nextWeight || weight
  )

  const storeWeight = () => {
    dispatch({
      type: C.SET_WEIGHT,
      payload: {
        id,
        weight: currentWeight,
      },
    })

    setPositiontoWorkout()
  }

  const storeNextWeight = () => {
    dispatch({
      type: C.SET_NEXT_WEIGHT,
      payload: {
        id,
        nextWeight: currentNextWeight,
      },
    })
    if (isLastExercise) {
      dispatch({
        type: C.WORKOUT_COMPLETE,
      })
    } else {
      dispatch({
        type: C.NEXT_EXERCISE,
        payload: session.currentExerciseIndex + 1,
      })
    }
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
      <h2>Enter Weight</h2>
      <NumberPicker
        initialValue={weight || previousWeight}
        onChange={setCurrentWeight}
      />
      {previousWeight && <p>Last Weight: {previousWeight}</p>}
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
      <h2>Workout Table</h2>
      <p>Work weight, {weight}</p>
      <ForwardBackControl
        onBack={setPositionToWeight}
        onForward={setPositionToNextWeight}
      />
    </>
  )

  const renderNextWeightSelection = () => (
    <>
      <h2>Next Weight</h2>
      <NumberPicker
        initialValue={nextWeight || weight}
        onChange={setCurrentNextWeight}
      />
      <p>Just Completed: {weight}</p>
      <ForwardBackControl
        onBack={setPositiontoWorkout}
        onForward={storeNextWeight}
      />
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
    <>
      <h1>{name}</h1>
      {content}
    </>
  )
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Session)
