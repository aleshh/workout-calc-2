import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import PaddedContainer from './PaddedContainer'
import Button from './Button'

const useStyles = createUseStyles({
  root: {},
  input: {
    display: 'inline-block',
    fontSize: 30,
    textAlign: 'center',
    padding: '13px',
    border: '3px solid #61217f',
    borderRadius: 10,
    position: 'relative',
    top: 1,
    width: 100,
  },
})

const NumberPicker = ({ value, increment, onChange }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  const inc = (e) => {
    if (!value || value < 45) {
      onChange(45)
      return
    }

    onChange(parseInt(value) + increment)
  }

  const dec = (e) => {
    if (!value) return

    if (value <= 45) {
      onChange(45)
      return
    }

    onChange(value - increment)
  }

  return (
    <div className={classes.root}>
      <PaddedContainer inline>
        <Button label="-" onClick={dec} />
      </PaddedContainer>
      <PaddedContainer inline>
        <form>
          <input
            className={classes.input}
            value={value || ''}
            onChange={handleChange}
          />
          &nbsp;lbs.
        </form>
      </PaddedContainer>
      <PaddedContainer inline>
        <Button label="+" onClick={inc} />
      </PaddedContainer>
    </div>
  )
}

NumberPicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  increment: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

NumberPicker.defaultProps = {
  value: undefined,
  increment: 5,
}

export default NumberPicker
