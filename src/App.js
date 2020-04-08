import React from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'
import Session from './layouts/Session'
import Home from './layouts/Home'
import Done from './layouts/Done'

const useStyles = createUseStyles({
  root: {
    // padding: 20,
    // margin: '0 auto',
    // maxWidth: 500,
  },
})

const App = ({ session, programs, exercises }) => {
  const classes = useStyles()

  const getComponent = () => {
    if (session) {
      if (session.complete) {
        return <Done />
      }
      return <Session />
    }
    return <Home />
  }

  return <div className={classes.root}>{getComponent()}</div>
}

const mapStateToProps = (state) => ({
  session: state.session,
  programs: state.programs,
  exercises: state.exercises,
})

export default connect(mapStateToProps)(App)
