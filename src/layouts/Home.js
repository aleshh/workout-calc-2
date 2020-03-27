import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'

const programName = (program, exercises) => {
  return program.exercises
    .map(
      exerciseId => exercises.find(exercise => exercise.id === exerciseId).name
    )
    .join(', ')
}

const App = ({ session, programs, exercises }) => {
  return (
    <div>
      {programs.map(program => (
        <Button key={program.id} label={programName(program, exercises)} />
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
