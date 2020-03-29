import React from 'react'
import { connect } from 'react-redux'
import NumberPicker from '../components/NumberPicker'
// eslint-disable-next-line no-unused-vars
import { C } from '../reducers'

const Session = ({ session, dispatch }) => {
  const exercise = session.exercises[session.currentExerciseIndex]

  return (
    <div>
      <h1>{exercise.name}</h1>
      <NumberPicker initialValue={exercise.weight} />
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
})

export default connect(mapStateToProps)(Session)
