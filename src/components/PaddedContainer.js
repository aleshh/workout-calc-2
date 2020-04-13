import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles({
  root: {
    margin: 20,
  },
  inline: {
    display: 'inline-block',
  },
})

const PaddedContainer = ({ children, inline }) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, { [classes.inline]: inline })}>
      {children}
    </div>
  )
}

PaddedContainer.propTypes = {
  children: PropTypes.any,
  inline: PropTypes.bool,
}

export default PaddedContainer
