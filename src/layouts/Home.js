import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Button from '../components/Button'
import ContentWrapper from '../layouts/ContentWrapper'
import Header from '../layouts/Header'
import { C, positions } from '../reducers/constants'

const programName = (program, exercises) => {
  return program.exercises
    .map(
      (exerciseId) =>
        exercises.find((exercise) => exercise.id === exerciseId).name
    )
    .join(', ')
}

const createSession = (program, exercises, history, dispatch) => {
  const session = {
    exercises: program.exercises.map((exerciseId) => {
      const exercise = exercises.find((exercise) => exercise.id === exerciseId)
      const lastSession = history.find((session) =>
        session.exercises.find(
          (pastExercise) => pastExercise.id === exercise.id
        )
      )
      const previousDate = lastSession ? lastSession.date : undefined
      const previousExercise = lastSession
        ? lastSession.exercises.find(
            (previousExercise) => previousExercise.id === exerciseId
          )
        : undefined

      if (
        lastSession &
        (!previousDate ||
          !previousExercise.weight ||
          !previousExercise.nextWeight)
      ) {
        alert('There was a problem restoring your workout history.')
      }

      exercise.weight = previousExercise ? previousExercise.nextWeight : 45
      exercise.previousWeight = previousExercise
        ? previousExercise.weight
        : undefined
      exercise.previousDate = previousDate

      return exercise
    }),
    currentExerciseIndex: 0,
    position: positions.SET_WORKOUT_WEIGHT,
  }

  console.log(session)

  dispatch({
    type: C.CREATE_NEW_SESSION,
    payload: session,
  })
}

const handleDeleteHistory = (dispatch) => {
  const deleteConfirmed = window.confirm(
    'Are you sure you want to delete all workout history?'
  )
  if (deleteConfirmed) {
    dispatch({ type: C.CLEAR_HISTORY })
  }
}

const Home = ({ session, programs, exercises, history, dispatch }) => {
  const lastSession = history[0]
  const lastSessionTime = lastSession
    ? moment(history[0].date).fromNow()
    : undefined
  const lastSessionExercises = lastSession
    ? lastSession.exercises.map((exercise) => exercise.name).join(' · ')
    : undefined

  return (
    <>
      <Header title="WorkoutCalc" />
      <ContentWrapper>
        <div>
          <h2>Select workout:</h2>
          {programs.map((program) => (
            <Button
              key={program.id}
              label={programName(program, exercises)}
              onClick={() => {
                createSession(program, exercises, history, dispatch)
              }}
              wide
            />
          ))}
          {lastSessionTime && (
            <p>
              Last workout:
              <br />
              <b>{lastSessionExercises}</b>
              <br />
              {lastSessionTime}
            </p>
          )}
        </div>
        <Button
          label="Delete history"
          onClick={() => handleDeleteHistory(dispatch)}
          small
          secondary
          style={{ width: 100, position: 'absolute', right: 0, bottom: 0 }}
        />
      </ContentWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
  history: state.history,
})

export default connect(mapStateToProps)(Home)
