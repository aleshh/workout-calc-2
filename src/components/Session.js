import React from 'react'
import { connect } from 'react-redux'
import { C } from '../reducers'

const Session = ({ session, dispatch }) => {
  if (!session) {
    dispatch({
      type: C.CREATE_NEW_SESSION,
      payload: {}
    })
  }

  return <div>Session component</div>
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Session)
