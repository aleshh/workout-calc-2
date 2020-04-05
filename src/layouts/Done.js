import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import PaddedContainer from '../components/PaddedContainer'

const Done = ({ session, programs, exercises, dispatch }) => {
  return (
    <div>
      <h1>Done!</h1>
      <PaddedContainer>
        <Button label="Store workout" onClick={() => {}} />
      </PaddedContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
})

export default connect(mapStateToProps)(Done)
