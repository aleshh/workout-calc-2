import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { C } from '../reducers'

const programName = (program, exercises) => {
  return program.exercises
    .map(
      exerciseId => exercises.find(exercise => exercise.id === exerciseId).name
    )
    .join(', ')
}

const createSession = (program, exercises, dispatch) => {
  const session = {
    exercises: program.exercises.map(exerciseId =>
      exercises.find(exercise => exercise.id === exerciseId)
    ),
    currentExerciseIndex: 0
  }

  dispatch({
    type: C.CREATE_NEW_SESSION,
    payload: session
  })
}

const App = ({ session, programs, exercises, dispatch }) => {
  return (
    <div>
      {programs.map(program => (
        <Button
          key={program.id}
          label={programName(program, exercises)}
          onClick={() => {
            createSession(program, exercises, dispatch)
          }}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises
})

export default connect(mapStateToProps)(App)
