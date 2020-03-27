import React from 'react'
import { connect } from 'react-redux'
import Session from './layouts/Session'
import Home from './layouts/Home'

const App = ({ session, programs, exercises }) =>
  session ? <Session /> : <Home />

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises
})

export default connect(mapStateToProps)(App)
