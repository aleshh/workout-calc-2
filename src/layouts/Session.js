import React from 'react'
import { connect } from 'react-redux'
import NumberPicker from '../components/NumberPicker'
import ForwardBackControl from '../components/ForwardBackControl'
import { C } from '../reducers'

const Session = ({ session, dispatch }) => {
  const exercise = session.exercises[session.currentExerciseIndex]
  const [weight, setWeight] = React.useState(exercise.previousWeight)
  const [isExerciseDone, setIsExerciseDone] = React.useState(false)

  const storeWeight = () => {
    dispatch({
      type: C.SET_WEIGHT,
      payload: {
        id: exercise.id,
        weight,
      },
    })
  }

  const clearWeight = () => {
    dispatch({
      type: C.SET_WEIGHT,
      payload: {
        id: exercise.id,
        weight: undefined,
      },
    })
  }

  const renderInitialWeightSelection = () => (
    <>
      <NumberPicker
        initialValue={exercise.previousWeight}
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
        onBack={clearWeight}
        onForward={() => setIsExerciseDone(true)}
      />
    </>
  )

  const renderNextWeightSelection = () => (
    <>
      <NumberPicker
        initialValue={exercise.previousWeight}
        onChange={setWeight}
      />
      <ForwardBackControl
        onBack={setIsExerciseDone(false)}
        onForward={() => {}}
      />
    </>
  )

  let content

  if (!exercise.weight) {
    content = renderInitialWeightSelection()
  } else if (!isExerciseDone) {
    content = renderWorkoutTable()
  } else {
    content = renderNextWeightSelection()
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
