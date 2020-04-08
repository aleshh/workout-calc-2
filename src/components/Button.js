import React from 'react'
import { func, string, bool } from 'prop-types'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  button: {
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#61217f',
    color: '#fff',
    fontSize: '1em',
    border: '3px solid #61217f',
    borderRadius: 10,
    padding: '20px 30px',
    margin: '20px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    // prevents text selection when quick-tapping buttons on ios
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
  },
  wide: {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
  },
  secondary: {
    backgroundColor: '#fff',
    color: '#61217f',
    border: '3px solid #61217f',
  },
  small: {
    fontSize: '0.6em',
    padding: '5px 10px',
    marginLeft: 30,
    borderRadius: 5,
  },
})

const Button = ({ onClick, label, wide, secondary }) => {
  const classes = useStyles()

  return (
    <button
      onClick={onClick}
      className={clsx(classes.button, {
        [classes.wide]: wide,
        [classes.secondary]: secondary,
      })}
      data-testid="button"
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
  wide: bool,
  secondary: bool,
}

Button.defaultProps = {
  wide: false,
  secondary: false,
}

export default Button
