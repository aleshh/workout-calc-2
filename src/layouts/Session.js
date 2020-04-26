import React from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'
import ContentWrapper from '../layouts/ContentWrapper'
import Header from '../layouts/Header'
import NumberPicker from '../components/NumberPicker'
import ForwardBackControl from '../components/ForwardBackControl'
import { C, positions } from '../reducers/constants'

const useStyles = createUseStyles({
  table: {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderCollapse: 'collapse',
    '& td': {
      padding: '0 20px',
      verticalAlign: 'middle',
    },
    '& td:nth-child(2)': {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.6em',
      backgroundColor: '#ff0',
    },
    '& tr': {
      backgroundColor: '#ddd',
    },
    '& tr:nth-child(odd)': {
      backgroundColor: '#fff',
      padding: '0',
    },
    '& tr:nth-child(even) > td:nth-child(2)': {
      backgroundColor: '#dd0',
    },
    '& thead > tr > td': {
      backgroundColor: '#444',
      color: '#fff',
      textTransform: 'uppercase',
    },
    '& thead > tr > td:nth-child(2)': {
      backgroundColor: '#330',
      color: '#ff0',
    },
  },
})

const Session = ({ session, exercise, dispatch }) => {
  const classes = useStyles()
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
      <h2>Enter Weight</h2>
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
      <table className={classes.table}>
        <thead>
          <tr>
            <td>sets</td>
            <td>weight</td>
            <td>reps</td>
          </tr>
        </thead>
        <tbody>
          {exercise.sets.map((row, i) => (
            <tr key={i}>
              <td>{row.sets}</td>
              <td>{calculateWeight(weight, row.multiplier)}</td>
              <td>{row.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ForwardBackControl
        onBack={setPositionToWeight}
        onForward={setPositionToNextWeight}
      />
    </>
  )

  const renderNextWeightSelection = () => (
    <>
      <h2>Next Weight</h2>
      <NumberPicker value={nextWeight || weight} onChange={storeNextWeight} />
      <p>Just Completed: {weight}</p>
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
