import React from 'react'
import { connect } from 'react-redux'
import ContentWrapper from '../layouts/ContentWrapper'
import Header from '../layouts/Header'
import Table from '../components/Table'
import ForwardBackControl from '../components/ForwardBackControl'
import { C } from '../reducers/constants'

const Done = ({ session, programs, exercises, dispatch }) => {
  return (
    <>
      <Header title="Done" />

      <ContentWrapper>
        <Table
          header={['', "Today's weight", 'Next weight']}
          data={session.exercises.map((exercise) => [
            exercise.name,
            exercise.weight,
            exercise.nextWeight,
          ])}
        />

        <ForwardBackControl
          forwardLabel="Store Session"
          onBack={() => {
            dispatch({
              type: C.UNDO_WORKOUT_COMPLETE,
            })
          }}
          onForward={() => {
            dispatch({
              type: C.STORE_WORKOUT,
              payload: {
                session,
                date: new Date(),
              },
            })
          }}
        />
      </ContentWrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
})

export default connect(mapStateToProps)(Done)
