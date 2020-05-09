import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100vh - 118px)',
    position: 'relative',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '0 20px',
    marginTop: 50,
  },
})

export default ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}
