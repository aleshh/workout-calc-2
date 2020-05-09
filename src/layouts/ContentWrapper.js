import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100vh - 68px)',
    position: 'relative',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '50px 20px',
  },
})

export default ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}
