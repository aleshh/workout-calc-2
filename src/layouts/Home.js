import React from 'react'
import { connect } from 'react-redux'
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
      // console.log(exercise)
      const lastSession = history.find((session) =>
        session.exercises.find(
          (pastExercise) => pastExercise.id === exercise.id
        )
      )
      if (lastSession) {
        const lastDate = lastSession.date
        const { weight, nextWeight } = lastSession.exercises.find(
          (lastExercise) => lastExercise.id === exerciseId
        )
        if (lastDate) {
          console.log('last!')
          console.log(lastDate)
          console.log(weight)
          console.log(nextWeight)
        }
      }
      exercise.weight = 45
      return exercise
    }),
    currentExerciseIndex: 0,
    position: positions.SET_WORKOUT_WEIGHT,
  }

  dispatch({
    type: C.CREATE_NEW_SESSION,
    payload: session,
  })
}

const Home = ({ session, programs, exercises, history, dispatch }) => {
  return (
    <>
      <Header title="WorkoutCalc" />
      <ContentWrapper>
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
