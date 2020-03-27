import React from 'react'
import { func, oneOf, string } from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'

const Button = ({ onClick, label, size }) => (
  <MuiButton variant="contained" color="primary">
    {label}
  </MuiButton>
)

Button.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired,
  size: oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  size: 'large'
}

export default Button
