import React from 'react'
import { connect } from 'react-redux'
import ContentWrapper from '../layouts/ContentWrapper'
import Header from '../layouts/Header'
import NumberPicker from '../components/NumberPicker'
import Table from '../components/Table'
import ForwardBackControl from '../components/ForwardBackControl'
import { C, positions } from '../reducers/constants'

const Session = ({ session, exercise, dispatch }) => {
  const { id, name, weight, nextWeight, previousWeight } = session.exercises[
    session.currentExerciseIndex
  ]
  const position = session.position || positions.SET_WORKOUT_WEIGHT

  const isFirstExercise = session.currentExerciseIndex === 0
  const isLastExercise =
    session.currentExerciseIndex === session.exercises.length - 1

  const calculateWeight = (weight, multiplier) => {
    let result = weight * multiplier
    result /= 5
    result = Math.floor(result)
    result *= 5
    return result < 45 ? 45 : result
  }

  const storeWeight = (inputWeight) => {
    dispatch({
      type: C.SET_WEIGHT,
      payload: {
        id,
        weight: inputWeight,
      },
    })
  }

  const storeNextWeight = (inputWeight) => {
    dispatch({
      type: C.SET_NEXT_WEIGHT,
      payload: {
        id,
        nextWeight: inputWeight,
      },
    })
  }

  const finishExercise = () => {
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

  const backFromExercise = () => {
    if (isFirstExercise) {
      dispatch({ type: C.ABORT_SESSION })
    } else {
      dispatch({
        type: C.PREVIOUS_EXERCISE,
        payload: session.currentExerciseIndex - 1,
      })
    }
  }

  const setPosition = (position) => {
    dispatch({
      type: C.SET_POSITION,
      payload: position,
    })
  }

  const setPositionToWeight = () => setPosition(positions.SET_WORKOUT_WEIGHT)
  const setPositiontoWorkout = () => {
    if (!weight) return

    setPosition(positions.SHOW_SETS)
  }
  const setPositionToNextWeight = () => setPosition(positions.SET_NEXT_WEIGHT)

  const renderInitialWeightSelection = () => (
    <>
      <h2>Enter weight:</h2>
      <NumberPicker value={weight || previousWeight} onChange={storeWeight} />
      {previousWeight && <p>Last Weight: {previousWeight}</p>}
      <ForwardBackControl
        onBack={backFromExercise}
        onForward={setPositiontoWorkout}
      />
    </>
  )

  const renderWorkoutTable = () => (
    <>
      <Table
        header={['Sets', 'Weight', 'Reps']}
        data={exercise.sets.map((rep) => [
          [rep.sets],
          [calculateWeight(weight, rep.multiplier)],
          [rep.reps],
        ])}
      />
      <ForwardBackControl
        onBack={setPositionToWeight}
        onForward={setPositionToNextWeight}
      />
    </>
  )

  const renderNextWeightSelection = () => (
    <>
      <h2>Weight for next time:</h2>
      <NumberPicker value={nextWeight || weight} onChange={storeNextWeight} />
      <p>You just did {weight} lbs.</p>
      <ForwardBackControl
        onBack={setPositiontoWorkout}
        onForward={finishExercise}
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
      <Header title={name} />
      <ContentWrapper>{content}</ContentWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  session: state.session,
  exercise: state.exercises.find(
    (exercise) =>
      exercise.name ===
      state.session.exercises[state.session.currentExerciseIndex].name
  ),
})

export default connect(mapStateToProps)(Session)
