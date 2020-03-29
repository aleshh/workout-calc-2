import React from 'react'
import { connect } from 'react-redux'
import { C } from '../reducers'

const Session = ({ session, dispatch }) => {
  const [value, setValue] = React.useState(100)
  const exercise = session.exercises[session.currentExerciseIndex]

  const updateValue = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>{exercise.name}</h1>
      <form>
        <input type="number" onChange={updateValue} />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Session)
