import React from 'react'
import PropTypes from 'prop-types'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    borderBottom: '3px solid #61217f',
    height: 68,
  },
  titleWrapper: {
    position: 'relative',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    padding: '0 20px',
    '& h1': {
      fontSize: '1.7em',
      textAlign: 'center',
      padding: 10,
      maxWidth: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const Header = ({ title }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <hgroup className={classes.titleWrapper}>
        <h1>{title}</h1>
      </hgroup>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
