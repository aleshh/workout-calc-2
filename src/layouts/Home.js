import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import PaddedContainer from '../components/PaddedContainer'
import { C, positions } from '../reducers/constants'

const programName = (program, exercises) => {
  return program.exercises
    .map(
      exerciseId => exercises.find(exercise => exercise.id === exerciseId).name
    )
    .join(', ')
}

const createSession = (program, exercises, dispatch) => {
  const session = {
    exercises: program.exercises.map(exerciseId => {
      const exercise = exercises.find(exercise => exercise.id === exerciseId)
      // exercise.previousWeight = 45
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

const Home = ({ session, programs, exercises, dispatch }) => {
  return (
    <div>
      {programs.map(program => (
        <PaddedContainer key={program.id}>
          <Button
            label={programName(program, exercises)}
            onClick={() => {
              createSession(program, exercises, dispatch)
            }}
          />
        </PaddedContainer>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
})

export default connect(mapStateToProps)(Home)
