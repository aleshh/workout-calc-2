import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import PaddedContainer from './PaddedContainer'
import Button from './Button'

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
  },
  input: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    border: '2px solid black',
  },
})

const NumberPicker = ({ value, increment, onChange }) => {
  const classes = useStyles()

  const handleChange = e => {
    onChange(e.target.value)
  }

  const inc = e => {
    onChange(parseInt(value) + increment)
  }

  const dec = e => {
    onChange(value - increment)
  }

  return (
    <div className={classes.root}>
      <PaddedContainer>
        <Button label="-" onClick={dec} />
      </PaddedContainer>
      <PaddedContainer>
        <form>
          <input
            className={classes.input}
            value={value}
            onChange={handleChange}
          />
        </form>
      </PaddedContainer>
      <PaddedContainer>
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
  value: 45,
  increment: 5,
}

export default NumberPicker
