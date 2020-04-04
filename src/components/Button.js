import React from 'react'
import { func, oneOf, string } from 'prop-types'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const bevelSize = 16

const useStyles = createUseStyles({
  root: {
    display: 'block',
    position: 'relative',
    width: '100%',
    backgroundColor: '#054477',
    fontSize: 20,
    color: 'white',
    border: 'none',
    padding: '25px 30px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all .4s ease',
    '&:hover': {
      backgroundColor: '#1765a3',
    },
  },
  secondary: {
    color: 'black',
    backgroundColor: '#ddd',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    fill: 'white',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fill: 'white',
  },
})

const Button = ({ onClick, label, size, color }) => {
  const classes = useStyles()

  const renderNippedCorners = () => (
    <>
      <svg className={classes.topLeft} height={bevelSize} width={bevelSize}>
        <polygon points={`0,0 ${bevelSize},0 0,${bevelSize}`}></polygon>
      </svg>
      <svg className={classes.bottomRight} height={bevelSize} width={bevelSize}>
        <polygon
          points={`${bevelSize},${bevelSize} ${bevelSize},0 0,${bevelSize}`}
        ></polygon>
      </svg>
    </>
  )

  return (
    <button
      onClick={onClick}
      className={clsx(classes.root, {
        [classes.secondary]: color === 'secondary',
      })}
      data-testid="button"
    >
      {renderNippedCorners()}
      {label}
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
  size: oneOf(['small', 'medium', 'large']),
  color: string,
}

Button.defaultProps = {
  size: 'large',
  color: undefined,
}

export default Button
