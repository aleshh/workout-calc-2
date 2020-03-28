import React from 'react'
import { func, oneOf, string } from 'prop-types'
import { createUseStyles } from 'react-jss'

const bevelSize = 16

const useStyles = createUseStyles({
  root: {
    display: 'block',
    position: 'relative',
    width: 'calc(100% - 40px)',
    backgroundColor: '#054477',
    fontSize: 20,
    color: 'white',
    border: 'none',
    padding: '20px 20px',
    margin: 20,
    cursor: 'pointer',
    transition: 'all .4s ease',
    '&:hover': {
      backgroundColor: '#1765a3'
    }
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    fill: 'white'
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fill: 'white'
  }
})

const Button = ({ onClick, label, size }) => {
  const classes = useStyles()

  return (
    <button onClick={onClick} className={classes.root}>
      <svg className={classes.topLeft} height={bevelSize} width={bevelSize}>
        <polygon points={`0,0 ${bevelSize},0 0,${bevelSize}`}></polygon>
      </svg>
      <svg className={classes.bottomRight} height={bevelSize} width={bevelSize}>
        <polygon
          points={`${bevelSize},${bevelSize} ${bevelSize},0 0,${bevelSize}`}
        ></polygon>
      </svg>
      {label}
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
  size: oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  size: 'large'
}

export default Button
