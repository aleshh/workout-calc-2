import React from 'react'
import { connect } from 'react-redux'

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
      {session ? (
        <div>Session</div>
      ) : (
        <div>
          {programs.map(program => (
            <div key={program.id}>{programName(program, exercises)}</div>
          ))}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises
})

export default connect(mapStateToProps)(App)
