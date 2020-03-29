import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'
import Session from './layouts/Session'
import Home from './layouts/Home'

const useStyles = createUseStyles({
  root: {
    padding: 20,
  },
})

const App = ({ session, programs, exercises }) => {
  const classes = useStyles()

  return <div className={classes.root}>{session ? <Session /> : <Home />}</div>
}

const mapStateToProps = state => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
})

export default connect(mapStateToProps)(App)
