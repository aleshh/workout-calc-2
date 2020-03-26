import React from 'react'
import { connect } from 'react-redux'

const App = ({ session }) => {
  console.log('App')
  console.log(session)

  return <div>{session ? <div>Session</div> : <div>No session</div>}</div>
}

const mapStateToProps = state => ({
  session: state
})

export default connect(mapStateToProps)(App)
