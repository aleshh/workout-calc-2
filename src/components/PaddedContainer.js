import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    margin: 20,
  },
})

const PaddedContainer = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

PaddedContainer.propTypes = {
  children: PropTypes.any,
}

export default PaddedContainer
